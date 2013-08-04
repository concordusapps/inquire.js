I = require \../lib/inquire.js
{choice, data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
o = it
{assert} = require \chai
# Save mocha's it so we don't end up using livescript's it.
test = it
require! assert.throws

# Make a generator of the relations,
Rel = choice ...<[ = != > >= < <= ]>
# and a way to get back.
rel-map = (rel) -> match rel
| \=  => I.eq
| \!= => I.neq
| \>  => I.gt
| \>= => I.gte
| \<  => I.lt
| \<= => I.lte

# Make a generator for the bools,
Bool = choice ...<[ & ; ]>
# and a way to get back.
bool-map = -> I[raw-bool it]
raw-bool = (bool) -> match bool
| \&  => \and
| \;  => \or

describe \parser ->
  describe 'given an empty string' ->
    o 'it should throw a Parse Error' ->
      throws (!-> I.parse ''), /^Error: Parse error/

  describe 'given a simple key, val pair query string' ->
    describe 'given one of the available relations' ->
      o 'it should create a simple <key><rel><val> query' (forAll(d.AlphaNumStr, Rel, d.AlphaNumStr)
        .given (key, rel, val) -> key isnt '' and val isnt ''
        .satisfy (key, rel, val) ->
          parsed-query = I.parse "#key#rel#val" .generate!
          inquire-query = (rel-map rel) key, val .generate!
          parsed-query is inquire-query
        .asTest!)

  describe 'given a query string with two simple predicates' ->
    describe 'given one of the available booleans' ->
      o 'it should create a <k1><r1><v1><bool>(<k2><r2><v2>) query' (forAll(d.AlphaNumStr, d.AlphaNumStr, d.AlphaNumStr, d.AlphaNumStr, Rel, Rel, Bool)
        .given -> '' not in &
        .satisfy (k1, k2, v1, v2, r1, r2, bool) ->
          parsed-query = I.parse "#k1#r1#v1#bool(#k2#r2#v2)" .generate!
          preds = (rel-map r1)(k1, v1).(raw-bool bool) (rel-map r2)(k2, v2)
          inquire-query = preds.generate!
          parsed-query is inquire-query
        .asTest!)

  describe 'given a simple key, val pair query string' ->
    describe 'given one of the available relations' ->
      o 'it should create a simple <!>(<key><rel><val>) query' (forAll(d.AlphaNumStr, Rel, d.AlphaNumStr)
        .given (key, rel, val) -> key isnt '' and val isnt ''
        .satisfy (key, rel, val) ->
          parsed-query = I.parse "!(#key#rel#val)" .generate!
          inquire-query = I.not (rel-map rel) key, val .generate!
          parsed-query is inquire-query
        .asTest!)

  describe 'given a deeply nested query string' ->
    test 'it should be smart about the parens, and optimize away everything' ->
      parsed-query = I.parse '(((((((key=val)))))))' .generate!
      inquire-query = I I I I I I I \key, \val .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should be smart about the parens, and optimize away most of it' ->
      parsed-query = I.parse '(((((((key1=val1)&(key2=val2))))))))' .generate!
      inquire-query = I I I I I (I I \key1, \val1).and(I I \key2, \val2) .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should be smart about the parens, and optimize away almost all of it' ->
      parsed-query = I.parse '(((((key1>val1)))&!(((key2<=val2)))))' .generate!
      inquire-query = I I(I I I I.gt \key1, \val1).not(I I I I.lte \key2, \val2) .generate!
      assert.strictEqual parsed-query, inquire-query
