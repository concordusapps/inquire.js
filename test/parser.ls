{inquire} = require \../lib/inquire.js
I = inquire
{assert} = require \chai
# Save mocha's it so we don't end up using livescript's it.
test = it

describe \parser ->
  describe 'given a simple key=value query string' ->
    test 'it should create an inquire with a generated query string "?(key=value)"' ->
    parsed-query = I!.parse \key=value .generate!
    inquire-query = I I \key, \value .generate!
    assert.strictEqual parsed-query, inquire-query

  describe 'given a query string with two conjoined predicates' ->
    test 'it should create an inquire with a generated query string "?(key1=val1&key2=val2)"' ->
    parsed-query = I!.parse \key1=val1&key2=val2 .generate!
    inquire-query = I {key1: \val1, key2: \val2} .generate!
    assert.strictEqual parsed-query, inquire-query

  describe 'given a negated query string' ->
    test 'it should create an inquire with a generated query string "?(!(key=val))"' ->
    parsed-query = I!.parse \!key=val .generate!
    inquire-query = I I.not I \key, \val .generate!
    assert.strictEqual parsed-query, inquire-query
