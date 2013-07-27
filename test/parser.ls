I = require \../src/inquire.ls
{assert} = require \chai
# Save mocha's it so we don't end up using livescript's it.
test = it

describe \parser ->
  describe 'given a simple key, value pair query string' ->
    test 'it should create an inquire with a generated query string "?key=value"' ->
      parsed-query = I.parse \key=value .generate!
      inquire-query = I \key, \value .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key!=value"' ->
      parsed-query = I.parse \key!=value .generate!
      inquire-query = I.neq \key, \value .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key<value"' ->
      parsed-query = I.parse \key<value .generate!
      inquire-query = I.lt \key, \value .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key<=value"' ->
      parsed-query = I.parse \key<=value .generate!
      inquire-query = I.lte \key, \value .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key>value"' ->
      parsed-query = I.parse \key>value .generate!
      inquire-query = I.gt \key, \value .generate!
      assert.strictEqual parsed-query, inquire-query
    test 'it should create an inquire with a generated query string "?key>=value"' ->
      parsed-query = I.parse \key>=value .generate!
      inquire-query = I.gte \key, \value .generate!
      assert.strictEqual parsed-query, inquire-query

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
