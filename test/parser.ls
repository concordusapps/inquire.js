I = require \../lib/inquire.js
{choice, data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
o = it
{assert} = require \chai
# Save mocha's it so we don't end up using livescript's it.
test = it

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

describe \parser ->
  describe 'given a simple key, val pair query string' ->
    describe 'given one of the available relations' ->
      o 'it should create a simple <key><rel><val> query' (forAll(d.AlphaNumStr, Rel, d.AlphaNumStr)
        .given (key, rel, val) -> key isnt '' and val isnt ''
        .satisfy (key, rel, val) ->
          parsed-query = I.parse "#key#rel#val" .generate!
          inquire-query = (rel-map rel) key, val .generate!
          parsed-query is inquire-query
        .asTest!)

  describe 'given a query string with two conjoined predicates' ->
    test 'it should create an inquire with a generated query string "?key1=val1&key2=val2"' ->
      parsed-query = I.parse \key1=val1&key2=val2 .generate!
      inquire-query = I {key1: \val1, key2: \val2} .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1!=val1&key2!=val2"' ->
      parsed-query = I.parse \key1!=val1&key2!=val2 .generate!
      inquire-query = I.neq {key1: \val1, key2: \val2} .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1>val1&key2>val2"' ->
      parsed-query = I.parse \key1>val1&key2>val2 .generate!
      inquire-query = I.gt {key1: \val1, key2: \val2} .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1>=val1&key2>=val2"' ->
      parsed-query = I.parse \key1>=val1&key2>=val2 .generate!
      inquire-query = I.gte {key1: \val1, key2: \val2} .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1<val1&key2<val2"' ->
      parsed-query = I.parse \key1<val1&key2<val2 .generate!
      inquire-query = I.lt {key1: \val1, key2: \val2} .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1<=val1&key2<=val2"' ->
      parsed-query = I.parse \key1<=val1&key2<=val2 .generate!
      inquire-query = I.lte {key1: \val1, key2: \val2} .generate!
      assert.strictEqual parsed-query, inquire-query

  describe 'given a query string with two disjoined predicates' ->
    test 'it should create an inquire with a generated query string "?key1=val1;(key2=val2)"' ->
      parsed-query = I.parse 'key1=val1;(key2=val2)' .generate!
      inquire-query = I.eq \key1, \val1 .or I.eq \key2, \val2 .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1!=val1;(key2!=val2)"' ->
      parsed-query = I.parse 'key1!=val1;(key2!=val2)' .generate!
      inquire-query = I.neq \key1, \val1 .or I.neq \key2, \val2 .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1>val1;(key2>val2)"' ->
      parsed-query = I.parse 'key1>val1;(key2>val2)' .generate!
      inquire-query = I.gt \key1, \val1 .or I.gt \key2, \val2 .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1>=val1;(key2>=val2)"' ->
      parsed-query = I.parse 'key1>=val1;(key2>=val2)' .generate!
      inquire-query = I.gte \key1, \val1 .or I.gte \key2, \val2 .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1<val1;(key2<val2)"' ->
      parsed-query = I.parse 'key1<val1;(key2<val2)' .generate!
      inquire-query = I.lt \key1, \val1 .or I.lt \key2, \val2 .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key1<=val1;(key2<=val2)"' ->
      parsed-query = I.parse 'key1<=val1;(key2<=val2)' .generate!
      inquire-query = I.lte \key1, \val1 .or I.lte \key2, \val2 .generate!
      assert.strictEqual parsed-query, inquire-query

  describe 'given a negated query string' ->
    test 'it should create an inquire with a generated query string "?!(key=val)"' ->
      parsed-query = I.parse \!key=val .generate!
      inquire-query = I.not I \key, \val .generate!
      assert.strictEqual parsed-query, inquire-query

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
