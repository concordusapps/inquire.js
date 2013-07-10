{inquire} = require \../lib/inquire.js
I = inquire
{assert} = require \chai
# Livescript uses it for stuff, so save the mocha version outside any functions.
test = it

describe \inquire ->
  describe 'given an empty inquire' ->
    test 'it should generate "?"' ->
      query = I!
      assert.strictEqual query.generate!, '?'

  describe 'given "key", "value" arguments' ->
    test 'it should generate a "?key=value" query string' ->
      query = I \key, \value
      assert.strictEqual query.generate!, '?key=value'

  describe 'given "key", "value" arguments and "bool=;", "rel=!=" options' ->
    test 'it should generate a "?key!=value" query string' ->
      query = I \key, \value, {bool: \;, rel: \!=}
      assert.strictEqual query.generate!, '?key!=value'

  describe 'given "key", "value" arguments and "bool=!", "rel=!=" options' ->
    test 'it should generate a "?key!=value" query string' ->
      query = I \key, \value, {bool: \!, rel: \!=}
      assert.strictEqual query.generate!, '?!(key!=value)'

  describe 'given an inquire: "key1=val1" or-ed with another inquire with "key2", "value2" arguments and "bool=;", "rel=<" options' ->
    test 'it should generate a "?key1=value1;(key2<value2)" query string' ->
      query = I \key1, \value1 .or I \key2, \value2, {bool: \;, rel: \<}
      assert.strictEqual query.generate!, '?key1=value1;(key2<value2)'

  describe 'given an inquire object with a "?key=value" query string' ->
    test 'it should generate a "?(key=value)" query string' ->
      query = I I \key, \value
      assert.strictEqual query.generate!, '?(key=value)'

  describe 'given an array of inquire objects with "?key1=val1" and "?key2=val2"' ->
    test 'it should generate a "??((key1=val1)&(key2=val2))" query string' ->
      query = I [I(\key1, \val1), I(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1=val1)&(key2=val2))'

  describe 'given an object of key, value pairs' ->
    test 'it should conjoin them with "=" for eq' ->
      query = I.eq {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}
      assert.strictEqual query.generate!, '?(key1=val1&key2=val2&key3=val3&key4=val4)'

    test 'it should conjoin them with "!=" for neq' ->
      query = I.neq {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}
      assert.strictEqual query.generate!, '?(key1!=val1&key2!=val2&key3!=val3&key4!=val4)'

    test 'it should conjoin them with ">" for gt' ->
      query = I.gt {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}
      assert.strictEqual query.generate!, '?(key1>val1&key2>val2&key3>val3&key4>val4)'

    test 'it should conjoin them with ">=" for gte' ->
      query = I.gte {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}
      assert.strictEqual query.generate!, '?(key1>=val1&key2>=val2&key3>=val3&key4>=val4)'

    test 'it should conjoin them with "<" for lt' ->
      query = I.lt {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}
      assert.strictEqual query.generate!, '?(key1<val1&key2<val2&key3<val3&key4<val4)'

    test 'it should conjoin them with "<=" for lte' ->
      query = I.lte {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}
      assert.strictEqual query.generate!, '?(key1<=val1&key2<=val2&key3<=val3&key4<=val4)'

  describe 'given an object of boolean values' ->
    test 'it should conjoin them with "=" for eq' ->
      query = I.eq {+key1, -key2, +key3, -key4}
      assert.strictEqual query.generate!, '?(key1=true&key2=false&key3=true&key4=false)'

    test 'it should conjoin them with "!=" for neq' ->
      query = I.neq {+key1, -key2, +key3, -key4}
      assert.strictEqual query.generate!, '?(key1!=true&key2!=false&key3!=true&key4!=false)'

    test 'it should conjoin them with ">" for gt' ->
      query = I.gt {+key1, -key2, +key3, -key4}
      assert.strictEqual query.generate!, '?(key1>true&key2>false&key3>true&key4>false)'

    test 'it should conjoin them with ">=" for gte' ->
      query = I.gte {+key1, -key2, +key3, -key4}
      assert.strictEqual query.generate!, '?(key1>=true&key2>=false&key3>=true&key4>=false)'

    test 'it should conjoin them with "<" for lt' ->
      query = I.lt {+key1, -key2, +key3, -key4}
      assert.strictEqual query.generate!, '?(key1<true&key2<false&key3<true&key4<false)'

    test 'it should conjoin them with "<=" for lte' ->
      query = I.lte {+key1, -key2, +key3, -key4}
      assert.strictEqual query.generate!, '?(key1<=true&key2<=false&key3<=true&key4<=false)'

  describe 'given a different relational operator with "key", "val"' ->
    test 'it should generate "=" for eq' ->
      query = I.eq \key, \val
      assert.strictEqual query.generate!, '?key=val'

    test 'it should generate "!=" for neq' ->
      query = I.neq \key, \val
      assert.strictEqual query.generate!, '?key!=val'

    test 'it should generate ">" for gt' ->
      query = I.gt \key, \val
      assert.strictEqual query.generate!, '?key>val'

    test 'it should generate ">=" for gte' ->
      query = I.gte \key, \val
      assert.strictEqual query.generate!, '?key>=val'

    test 'it should generate "<" for lt' ->
      query = I.lt \key, \val
      assert.strictEqual query.generate!, '?key<val'

    test 'it should generate "<=" for lte' ->
      query = I.lte \key, \val
      assert.strictEqual query.generate!, '?key<=val'

  describe 'given a different relational operator with an inquire' ->
    test 'it should generate "=" for eq, wrapped in parens' ->
      query = I I.eq \key, \val
      assert.strictEqual query.generate!, '?(key=val)'

    test 'it should generate "!=" for neq, wrapped in parens' ->
      query = I I.neq \key, \val
      assert.strictEqual query.generate!, '?(key!=val)'

    test 'it should generate ">" for gt, wrapped in parens' ->
      query = I I.gt \key, \val
      assert.strictEqual query.generate!, '?(key>val)'

    test 'it should generate ">=" for gte, wrapped in parens' ->
      query = I I.gte \key, \val
      assert.strictEqual query.generate!, '?(key>=val)'

    test 'it should generate "<" for lt, wrapped in parens' ->
      query = I I.lt \key, \val
      assert.strictEqual query.generate!, '?(key<val)'

    test 'it should generate "<=" for lte, wrapped in parens' ->
      query = I I.lte \key, \val
      assert.strictEqual query.generate!, '?(key<=val)'

  describe 'given a different relational operator with an array of inquire' ->
    test 'it should conjoin them with "=" for eq' ->
      query = I [I.eq(\key1, \val1), I.eq(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1=val1)&(key2=val2))'

    test 'it should conjoin them with "!=" for neq' ->
      query = I [I.neq(\key1, \val1), I.neq(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1!=val1)&(key2!=val2))'

    test 'it should conjoin them with ">" for gt' ->
      query = I [I.gt(\key1, \val1), I.gt(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1>val1)&(key2>val2))'

    test 'it should conjoin them with ">=" for gte' ->
      query = I [I.gte(\key1, \val1), I.gte(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1>=val1)&(key2>=val2))'

    test 'it should conjoin them with "<" for lt' ->
      query = I [I.lt(\key1, \val1), I.lt(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1<val1)&(key2<val2))'

    test 'it should conjoin them with "<=" for lte' ->
      query = I [I.lte(\key1, \val1), I.lte(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1<=val1)&(key2<=val2))'

  describe 'given different boolean and relational operators with keys and vals' ->
    test 'it should conjoin them with "=" for and/eq' ->
      query = I.and [I.eq(\key1, \val1), I.eq(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1=val1)&(key2=val2))'

    test 'it should conjoin them with "!=" for and/neq' ->
      query = I.and [I.neq(\key1, \val1), I.neq(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1!=val1)&(key2!=val2))'

    test 'it should conjoin them with ">" for and/gt' ->
      query = I.and [I.gt(\key1, \val1), I.gt(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1>val1)&(key2>val2))'

    test 'it should conjoin them with ">=" for and/gte' ->
      query = I.and [I.gte(\key1, \val1), I.gte(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1>=val1)&(key2>=val2))'

    test 'it should conjoin them with "<" for and/lt' ->
      query = I.and [I.lt(\key1, \val1), I.lt(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1<val1)&(key2<val2))'

    test 'it should conjoin them with "<=" for and/lte' ->
      query = I.and [I.lte(\key1, \val1), I.lte(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1<=val1)&(key2<=val2))'

    test 'it should disjoin them with "=" for or/eq' ->
      query = I.or [I.eq(\key1, \val1), I.eq(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1=val1);(key2=val2))'

    test 'it should disjoin them with "!=" for or/neq' ->
      query = I.or [I.neq(\key1, \val1), I.neq(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1!=val1);(key2!=val2))'

    test 'it should disjoin them with ">" for or/gt' ->
      query = I.or [I.gt(\key1, \val1), I.gt(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1>val1);(key2>val2))'

    test 'it should disjoin them with ">=" for or/gte' ->
      query = I.or [I.gte(\key1, \val1), I.gte(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1>=val1);(key2>=val2))'

    test 'it should disjoin them with "<" for or/lt' ->
      query = I.or [I.lt(\key1, \val1), I.lt(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1<val1);(key2<val2))'

    test 'it should disjoin them with "<=" for or/lte' ->
      query = I.or [I.lte(\key1, \val1), I.lte(\key2, \val2)]
      assert.strictEqual query.generate!, '?((key1<=val1);(key2<=val2))'

    test 'it should negate the conjunct of them with "=" for not/eq' ->
      query = I.not [I.eq(\key1, \val1), I.eq(\key2, \val2)]
      assert.strictEqual query.generate!, '?!((key1=val1)&(key2=val2))'

    test 'it should negate the conjunct of them with "!=" for not/neq' ->
      query = I.not [I.neq(\key1, \val1), I.neq(\key2, \val2)]
      assert.strictEqual query.generate!, '?!((key1!=val1)&(key2!=val2))'

    test 'it should negate the conjunct of them with ">" for not/gt' ->
      query = I.not [I.gt(\key1, \val1), I.gt(\key2, \val2)]
      assert.strictEqual query.generate!, '?!((key1>val1)&(key2>val2))'

    test 'it should negate the conjunct of them with ">=" for not/gte' ->
      query = I.not [I.gte(\key1, \val1), I.gte(\key2, \val2)]
      assert.strictEqual query.generate!, '?!((key1>=val1)&(key2>=val2))'

    test 'it should negate the conjunct of them with "<" for not/lt' ->
      query = I.not [I.lt(\key1, \val1), I.lt(\key2, \val2)]
      assert.strictEqual query.generate!, '?!((key1<val1)&(key2<val2))'

    test 'it should negate the conjunct of them with "<=" for not/lte' ->
      query = I.not [I.lte(\key1, \val1), I.lte(\key2, \val2)]
      assert.strictEqual query.generate!, '?!((key1<=val1)&(key2<=val2))'

  describe 'given some long chain of function calls' ->
    test 'it should generate this long query string: "?(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))"' ->
      query = I(I \color, \red .and I.gt \width, 30) ..or I.lte \sides, 12 ..or (I \shape, \square .and (I.neq \color, \black .or \user, \bob))
      assert.strictEqual query.generate!, '?(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))'
    test 'it should generate this horrendous string "?key1=val1&!(key2=val2);((key3=key3&key4=key4&key5=key5))&((!((size<40)&(width>20)&(height>=10))))"' ->
      query = I \key1 \val1 .not I \key2 \val2 .or I {\key3 \key4 \key5} .and [I.not [I.lt \size 40; I.gt \width 20; I.gte \height 10]]
      assert.strictEqual query.generate!, '?key1=val1&!(key2=val2);((key3=key3&key4=key4&key5=key5))&((!((size<40)&(width>20)&(height>=10))))'

describe 'function tests' ->
  describe 'calling toString on an inquire with the query string "?key=val"' ->
    test 'it should return the string "key=val"' ->
      query = I \key \val
      assert.strictEqual query.toString(), \key=val
