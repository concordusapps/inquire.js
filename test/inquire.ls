I = require \../src/inquire.ls
{assert} = require \chai
# Livescript uses it for stuff, so save the mocha version outside any functions.
test = it

describe \inquire, ->
  describe 'given "key", "value" arguments', ->
    test 'it should generate a "?key=value" query string', ->
      query = I \key, \value
      assert.strictEqual query.generate!, '?key=value'

  describe 'given an inquire object with a "?key=value" query string', ->
    test 'it should generate a "?(key=value)" query string', ->
      query = I I \key, \value
      assert.strictEqual query.generate!, '?(key=value)'

  describe 'given an array of inquire objects with "?key1=val1" and "?key2=val2"', ->
    test 'it should generate a "?(key1=val1&key2=val2)" query string', ->
      query = I [I(\key1, \val1), I(\key2, \val2)]
      assert.strictEqual query.generate!, '?(key1=val1&key2=val2)'

  describe 'given an object of key, value pairs', ->
    test 'it should conjoin them with equality', ->
      query = I {
        key1: 'val1'
        key2: 'val2'
        key3: 'val3'
        key4: 'val4'
      }
      assert.strictEqual query.generate!, '?(key1=val1&key2=val2&key3=val3&key4=val4)'

  describe 'given a different relational operator with "key", "val"', ->
    test 'it should generate "=" for eq', ->
      query = I.eq \key, \val
      assert.strictEqual query.generate!, '?key=val'

    test 'it should generate "!=" for neq', ->
      query = I.neq \key, \val
      assert.strictEqual query.generate!, '?key!=val'

    test 'it should generate ">" for gt', ->
      query = I.gt \key, \val
      assert.strictEqual query.generate!, '?key>val'

    test 'it should generate ">=" for gte', ->
      query = I.gte \key, \val
      assert.strictEqual query.generate!, '?key>=val'

    test 'it should generate "<" for lt', ->
      query = I.lt \key, \val
      assert.strictEqual query.generate!, '?key<val'

    test 'it should generate "<=" for lte', ->
      query = I.lte \key, \val
      assert.strictEqual query.generate!, '?key<=val'

  describe 'given a different relational operator with an inquire', ->
    test 'it should generate "=" for eq, wrapped in parens', ->
      query = I I.eq \key, \val
      assert.strictEqual query.generate!, '?(key=val)'

    test 'it should generate "!=" for neq, wrapped in parens', ->
      query = I I.neq \key, \val
      assert.strictEqual query.generate!, '?(key!=val)'

    test 'it should generate ">" for gt, wrapped in parens', ->
      query = I I.gt \key, \val
      assert.strictEqual query.generate!, '?(key>val)'

    test 'it should generate ">=" for gte, wrapped in parens', ->
      query = I I.gte \key, \val
      assert.strictEqual query.generate!, '?(key>=val)'

    test 'it should generate "<" for lt, wrapped in parens', ->
      query = I I.lt \key, \val
      assert.strictEqual query.generate!, '?(key<val)'

    test 'it should generate "<=" for lte, wrapped in parens', ->
      query = I I.lte \key, \val
      assert.strictEqual query.generate!, '?(key<=val)'

  describe 'given a different relational operator with an array of inquire', ->
    test 'it should conjoin them with "=" for eq', ->
      query = I [I.eq(\key1, \val1), I.eq(\key2, \val2)]
      assert.strictEqual query.generate!, '?(key1=val1&key2=val2)'

    test 'it should conjoin them with "!=" for neq', ->
      query = I [I.neq(\key1, \val1), I.neq(\key2, \val2)]
      assert.strictEqual query.generate!, '?(key1!=val1&key2!=val2)'

    test 'it should conjoin them with ">" for gt', ->
      query = I [I.gt(\key1, \val1), I.gt(\key2, \val2)]
      assert.strictEqual query.generate!, '?(key1>val1&key2>val2)'

    test 'it should conjoin them with ">=" for gte', ->
      query = I [I.gte(\key1, \val1), I.gte(\key2, \val2)]
      assert.strictEqual query.generate!, '?(key1>=val1&key2>=val2)'

    test 'it should conjoin them with "<" for lt', ->
      query = I [I.lt(\key1, \val1), I.lt(\key2, \val2)]
      assert.strictEqual query.generate!, '?(key1<val1&key2<val2)'

    test 'it should conjoin them with "<=" for lte', ->
      query = I [I.lte(\key1, \val1), I.lte(\key2, \val2)]
      assert.strictEqual query.generate!, '?(key1<=val1&key2<=val2)'
