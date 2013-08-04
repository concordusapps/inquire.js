I = require \../lib/inquire.js
{choice, data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
o = it
# Something throws up in here.
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

# Make a set amount of parens.
SetParens = (query, num) --> "#{\( * num}#query#{\) * num}"

# Wrap an inquire a set number of times.
SetInquire = (inquire, num) --> match num
| (> 0) => I SetInquire inquire, num - 1
| _     => inquire

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
          preds = (rel-map r1)(k1, v1)[raw-bool bool] (rel-map r2)(k2, v2)
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

  describe \nesting ->
    describe 'given a simple key, val query string' ->
      o 'it should optimize away everything' (forAll(d.AlphaNumStr, Rel, d.AlphaNumStr, d.Positive)
        .given (key, rel, val, rand) -> key isnt '' and val isnt ''
        .satisfy (key, rel, val, rand) ->
          parsed-query = I.parse SetParens "#key#rel#val", rand .generate!
          inquire-query = SetInquire "#key#rel#val", rand .generate!
          parsed-query is inquire-query
        .asTest!)
    describe 'given two simple predicates' ->
      o 'it should optimize away most of it' (forAll(d.AlphaNumStr, d.AlphaNumStr, d.AlphaNumStr, d.AlphaNumStr, Rel, Rel, Bool, d.Positive, d.Positive)
        .given -> '' not in &
        .satisfy (k1, k2, v1, v2, r1, r2, bool, rand1, rand2) ->
          parsed1 = SetParens "#k1#r1#v1", rand1
          parsed2 = SetParens "#k2#r2#v2", rand2
          parsed-query = I.parse "#parsed1#bool#parsed2" .generate!
          inquire1 = SetInquire "#k1#r1#v1", rand1
          inquire2 = SetInquire "#k2#r2#v2", rand2
          inquire-query = inquire1[raw-bool bool] inquire2 .generate!
          parsed-query is inquire-query
        .asTest!)
