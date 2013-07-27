(function(){
  var inquire, I, assert, test;
  inquire = require('../lib/inquire.js').inquire;
  I = inquire;
  assert = require('assert');
  test = it;
  describe('inquire', function(){
    describe('given an empty inquire', function(){
      return test('it should generate "?"', function(done){
        var query;
        query = I();
        assert.strictEqual(query.generate(), '?');
        done();
      });
    });
    describe('given "key", "value" arguments', function(){
      return test('it should generate a "?key=value" query string', function(done){
        var query;
        query = I('key', 'value');
        assert.strictEqual(query.generate(), '?key=value');
        done();
      });
    });
    describe('given "key", "value" arguments and "bool=;", "rel=!=" options', function(){
      return test('it should generate a "?key!=value" query string', function(done){
        var query;
        query = I('key', 'value', {
          bool: ';',
          rel: '!='
        });
        assert.strictEqual(query.generate(), '?key!=value');
        done();
      });
    });
    describe('given "key", "value" arguments and "bool=!", "rel=!=" options', function(){
      return test('it should generate a "?key!=value" query string', function(done){
        var query;
        query = I('key', 'value', {
          bool: '!',
          rel: '!='
        });
        assert.strictEqual(query.generate(), '?!(key!=value)');
        done();
      });
    });
    describe('given an inquire: "key1=val1" or-ed with another inquire with "key2", "value2" arguments and "bool=;", "rel=<" options', function(){
      return test('it should generate a "?key1=value1;(key2<value2)" query string', function(done){
        var query;
        query = I('key1', 'value1').or(I('key2', 'value2', {
          bool: ';',
          rel: '<'
        }));
        assert.strictEqual(query.generate(), '?key1=value1;(key2<value2)');
        done();
      });
    });
    describe('given an inquire object with a "?key=value" query string', function(){
      return test('it should generate a "?(key=value)" query string', function(done){
        var query;
        query = I(I('key', 'value'));
        assert.strictEqual(query.generate(), '?key=value');
        done();
      });
    });
    describe('given an array of inquire objects with "?key1=val1" and "?key2=val2"', function(){
      return test('it should generate a "??((key1=val1)&(key2=val2))" query string', function(done){
        var query;
        query = I([I('key1', 'val1'), I('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1=val1)&(key2=val2)');
        done();
      });
    });
    describe('given an object of key, value pairs', function(){
      test('it should conjoin them with "=" for eq', function(done){
        var query;
        query = I.eq({
          key1: 'val1',
          key2: 'val2',
          key3: 'val3',
          key4: 'val4'
        });
        assert.strictEqual(query.generate(), '?key1=val1&key2=val2&key3=val3&key4=val4');
        done();
      });
      test('it should conjoin them with "!=" for neq', function(done){
        var query;
        query = I.neq({
          key1: 'val1',
          key2: 'val2',
          key3: 'val3',
          key4: 'val4'
        });
        assert.strictEqual(query.generate(), '?key1!=val1&key2!=val2&key3!=val3&key4!=val4');
        done();
      });
      test('it should conjoin them with ">" for gt', function(done){
        var query;
        query = I.gt({
          key1: 'val1',
          key2: 'val2',
          key3: 'val3',
          key4: 'val4'
        });
        assert.strictEqual(query.generate(), '?key1>val1&key2>val2&key3>val3&key4>val4');
        done();
      });
      test('it should conjoin them with ">=" for gte', function(done){
        var query;
        query = I.gte({
          key1: 'val1',
          key2: 'val2',
          key3: 'val3',
          key4: 'val4'
        });
        assert.strictEqual(query.generate(), '?key1>=val1&key2>=val2&key3>=val3&key4>=val4');
        done();
      });
      test('it should conjoin them with "<" for lt', function(done){
        var query;
        query = I.lt({
          key1: 'val1',
          key2: 'val2',
          key3: 'val3',
          key4: 'val4'
        });
        assert.strictEqual(query.generate(), '?key1<val1&key2<val2&key3<val3&key4<val4');
        done();
      });
      return test('it should conjoin them with "<=" for lte', function(done){
        var query;
        query = I.lte({
          key1: 'val1',
          key2: 'val2',
          key3: 'val3',
          key4: 'val4'
        });
        assert.strictEqual(query.generate(), '?key1<=val1&key2<=val2&key3<=val3&key4<=val4');
        done();
      });
    });
    describe('given an object of boolean values', function(){
      test('it should conjoin them with "=" for eq', function(done){
        var query;
        query = I.eq({
          key1: true,
          key2: false,
          key3: true,
          key4: false
        });
        assert.strictEqual(query.generate(), '?key1=true&key2=false&key3=true&key4=false');
        done();
      });
      test('it should conjoin them with "!=" for neq', function(done){
        var query;
        query = I.neq({
          key1: true,
          key2: false,
          key3: true,
          key4: false
        });
        assert.strictEqual(query.generate(), '?key1!=true&key2!=false&key3!=true&key4!=false');
        done();
      });
      test('it should conjoin them with ">" for gt', function(done){
        var query;
        query = I.gt({
          key1: true,
          key2: false,
          key3: true,
          key4: false
        });
        assert.strictEqual(query.generate(), '?key1>true&key2>false&key3>true&key4>false');
        done();
      });
      test('it should conjoin them with ">=" for gte', function(done){
        var query;
        query = I.gte({
          key1: true,
          key2: false,
          key3: true,
          key4: false
        });
        assert.strictEqual(query.generate(), '?key1>=true&key2>=false&key3>=true&key4>=false');
        done();
      });
      test('it should conjoin them with "<" for lt', function(done){
        var query;
        query = I.lt({
          key1: true,
          key2: false,
          key3: true,
          key4: false
        });
        assert.strictEqual(query.generate(), '?key1<true&key2<false&key3<true&key4<false');
        done();
      });
      return test('it should conjoin them with "<=" for lte', function(done){
        var query;
        query = I.lte({
          key1: true,
          key2: false,
          key3: true,
          key4: false
        });
        assert.strictEqual(query.generate(), '?key1<=true&key2<=false&key3<=true&key4<=false');
        done();
      });
    });
    describe('given a different relational operator with "key", "val"', function(){
      test('it should generate "=" for eq', function(done){
        var query;
        query = I.eq('key', 'val');
        assert.strictEqual(query.generate(), '?key=val');
        done();
      });
      test('it should generate "!=" for neq', function(done){
        var query;
        query = I.neq('key', 'val');
        assert.strictEqual(query.generate(), '?key!=val');
        done();
      });
      test('it should generate ">" for gt', function(done){
        var query;
        query = I.gt('key', 'val');
        assert.strictEqual(query.generate(), '?key>val');
        done();
      });
      test('it should generate ">=" for gte', function(done){
        var query;
        query = I.gte('key', 'val');
        assert.strictEqual(query.generate(), '?key>=val');
        done();
      });
      test('it should generate "<" for lt', function(done){
        var query;
        query = I.lt('key', 'val');
        assert.strictEqual(query.generate(), '?key<val');
        done();
      });
      return test('it should generate "<=" for lte', function(done){
        var query;
        query = I.lte('key', 'val');
        assert.strictEqual(query.generate(), '?key<=val');
        done();
      });
    });
    describe('given a different relational operator with an inquire', function(){
      test('it should generate "=" for eq, wrapped in parens', function(done){
        var query;
        query = I(I.eq('key', 'val'));
        assert.strictEqual(query.generate(), '?key=val');
        done();
      });
      test('it should generate "!=" for neq, wrapped in parens', function(done){
        var query;
        query = I(I.neq('key', 'val'));
        assert.strictEqual(query.generate(), '?key!=val');
        done();
      });
      test('it should generate ">" for gt, wrapped in parens', function(done){
        var query;
        query = I(I.gt('key', 'val'));
        assert.strictEqual(query.generate(), '?key>val');
        done();
      });
      test('it should generate ">=" for gte, wrapped in parens', function(done){
        var query;
        query = I(I.gte('key', 'val'));
        assert.strictEqual(query.generate(), '?key>=val');
        done();
      });
      test('it should generate "<" for lt, wrapped in parens', function(done){
        var query;
        query = I(I.lt('key', 'val'));
        assert.strictEqual(query.generate(), '?key<val');
        done();
      });
      return test('it should generate "<=" for lte, wrapped in parens', function(done){
        var query;
        query = I(I.lte('key', 'val'));
        assert.strictEqual(query.generate(), '?key<=val');
        done();
      });
    });
    describe('given a different relational operator with an array of inquire', function(){
      test('it should conjoin them with "=" for eq', function(done){
        var query;
        query = I([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1=val1)&(key2=val2)');
        done();
      });
      test('it should conjoin them with "!=" for neq', function(done){
        var query;
        query = I([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1!=val1)&(key2!=val2)');
        done();
      });
      test('it should conjoin them with ">" for gt', function(done){
        var query;
        query = I([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1>val1)&(key2>val2)');
        done();
      });
      test('it should conjoin them with ">=" for gte', function(done){
        var query;
        query = I([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1>=val1)&(key2>=val2)');
        done();
      });
      test('it should conjoin them with "<" for lt', function(done){
        var query;
        query = I([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1<val1)&(key2<val2)');
        done();
      });
      return test('it should conjoin them with "<=" for lte', function(done){
        var query;
        query = I([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1<=val1)&(key2<=val2)');
        done();
      });
    });
    describe('given different boolean and relational operators with keys and vals', function(){
      test('it should conjoin them with "=" for and/eq', function(done){
        var query;
        query = I.and([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1=val1)&(key2=val2)');
        done();
      });
      test('it should conjoin them with "!=" for and/neq', function(done){
        var query;
        query = I.and([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1!=val1)&(key2!=val2)');
        done();
      });
      test('it should conjoin them with ">" for and/gt', function(done){
        var query;
        query = I.and([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1>val1)&(key2>val2)');
        done();
      });
      test('it should conjoin them with ">=" for and/gte', function(done){
        var query;
        query = I.and([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1>=val1)&(key2>=val2)');
        done();
      });
      test('it should conjoin them with "<" for and/lt', function(done){
        var query;
        query = I.and([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1<val1)&(key2<val2)');
        done();
      });
      test('it should conjoin them with "<=" for and/lte', function(done){
        var query;
        query = I.and([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1<=val1)&(key2<=val2)');
        done();
      });
      test('it should disjoin them with "=" for or/eq', function(done){
        var query;
        query = I.or([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1=val1);(key2=val2)');
        done();
      });
      test('it should disjoin them with "!=" for or/neq', function(done){
        var query;
        query = I.or([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1!=val1);(key2!=val2)');
        done();
      });
      test('it should disjoin them with ">" for or/gt', function(done){
        var query;
        query = I.or([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1>val1);(key2>val2)');
        done();
      });
      test('it should disjoin them with ">=" for or/gte', function(done){
        var query;
        query = I.or([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1>=val1);(key2>=val2)');
        done();
      });
      test('it should disjoin them with "<" for or/lt', function(done){
        var query;
        query = I.or([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1<val1);(key2<val2)');
        done();
      });
      test('it should disjoin them with "<=" for or/lte', function(done){
        var query;
        query = I.or([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?(key1<=val1);(key2<=val2)');
        done();
      });
      test('it should negate the conjunct of them with "=" for not/eq', function(done){
        var query;
        query = I.not([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?!((key1=val1)&(key2=val2))');
        done();
      });
      test('it should negate the conjunct of them with "!=" for not/neq', function(done){
        var query;
        query = I.not([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?!((key1!=val1)&(key2!=val2))');
        done();
      });
      test('it should negate the conjunct of them with ">" for not/gt', function(done){
        var query;
        query = I.not([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?!((key1>val1)&(key2>val2))');
        done();
      });
      test('it should negate the conjunct of them with ">=" for not/gte', function(done){
        var query;
        query = I.not([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?!((key1>=val1)&(key2>=val2))');
        done();
      });
      test('it should negate the conjunct of them with "<" for not/lt', function(done){
        var query;
        query = I.not([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?!((key1<val1)&(key2<val2))');
        done();
      });
      return test('it should negate the conjunct of them with "<=" for not/lte', function(done){
        var query;
        query = I.not([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
        assert.strictEqual(query.generate(), '?!((key1<=val1)&(key2<=val2))');
        done();
      });
    });
    describe('given some long chain of function calls', function(){
      test('it should generate this long query string: "?(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))"', function(done){
        var query, x$;
        query = (x$ = I(I('color', 'red').and(I.gt('width', 30))), x$.or(I.lte('sides', 12)), x$.or(I('shape', 'square').and(I.neq('color', 'black').or('user', 'bob'))), x$);
        assert.strictEqual(query.generate(), '?(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))');
        done();
      });
      return test('it should generate this horrendous string "?key1=val1&!(key2=val2);(key3=key3&key4=key4&key5=key5)&!((size<40)&(width>20)&(height>=10))"', function(done){
        var query;
        query = I('key1', 'val1').not(I('key2', 'val2')).or(I({
          'key3': 'key3',
          'key4': 'key4',
          'key5': 'key5'
        })).and([I.not([I.lt('size', 40), I.gt('width', 20), I.gte('height', 10)])]);
        assert.strictEqual(query.generate(), '?key1=val1&!(key2=val2);(key3=key3&key4=key4&key5=key5)&!((size<40)&(width>20)&(height>=10))');
        done();
      });
    });
    return describe('given a whole mess of nested stuffs', function(){
      return test('it should be smart about parens', function(done){
        var query;
        query = I(I(I(I(I('key', 'value')))));
        assert.strictEqual(query.generate(), '?key=value');
        done();
      });
    });
  });
  describe('function tests', function(){
    describe('toString', function(){
      describe('given an empty inquire', function(){
        return test('it should generate ""', function(done){
          var query;
          query = I();
          assert.strictEqual(query.toString(), '');
          done();
        });
      });
      describe('given "key", "value" arguments', function(){
        return test('it should generate a "key=value" query string', function(done){
          var query;
          query = I('key', 'value');
          assert.strictEqual(query.toString(), 'key=value');
          done();
        });
      });
      describe('given "key", "value" arguments and "bool=;", "rel=!=" options', function(){
        return test('it should generate a "key!=value" query string', function(done){
          var query;
          query = I('key', 'value', {
            bool: ';',
            rel: '!='
          });
          assert.strictEqual(query.toString(), 'key!=value');
          done();
        });
      });
      describe('given "key", "value" arguments and "bool=!", "rel=!=" options', function(){
        return test('it should generate a "key!=value" query string', function(done){
          var query;
          query = I('key', 'value', {
            bool: '!',
            rel: '!='
          });
          assert.strictEqual(query.toString(), '!(key!=value)');
          done();
        });
      });
      describe('given an inquire: "key1=val1" or-ed with another inquire with "key2", "value2" arguments and "bool=;", "rel=<" options', function(){
        return test('it should generate a "key1=value1;(key2<value2)" query string', function(done){
          var query;
          query = I('key1', 'value1').or(I('key2', 'value2', {
            bool: ';',
            rel: '<'
          }));
          assert.strictEqual(query.toString(), 'key1=value1;(key2<value2)');
          done();
        });
      });
      describe('given an inquire object with a "key=value" query string', function(){
        return test('it should generate a "(key=value)" query string', function(done){
          var query;
          query = I(I('key', 'value'));
          assert.strictEqual(query.toString(), '(key=value)');
          done();
        });
      });
      describe('given an array of inquire objects with "key1=val1" and "key2=val2"', function(){
        return test('it should generate a "((key1=val1)&(key2=val2))" query string', function(done){
          var query;
          query = I([I('key1', 'val1'), I('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1=val1)&(key2=val2))');
          done();
        });
      });
      describe('given an object of key, value pairs', function(){
        test('it should conjoin them with "=" for eq', function(done){
          var query;
          query = I.eq({
            key1: 'val1',
            key2: 'val2',
            key3: 'val3',
            key4: 'val4'
          });
          assert.strictEqual(query.toString(), '(key1=val1&key2=val2&key3=val3&key4=val4)');
          done();
        });
        test('it should conjoin them with "!=" for neq', function(done){
          var query;
          query = I.neq({
            key1: 'val1',
            key2: 'val2',
            key3: 'val3',
            key4: 'val4'
          });
          assert.strictEqual(query.toString(), '(key1!=val1&key2!=val2&key3!=val3&key4!=val4)');
          done();
        });
        test('it should conjoin them with ">" for gt', function(done){
          var query;
          query = I.gt({
            key1: 'val1',
            key2: 'val2',
            key3: 'val3',
            key4: 'val4'
          });
          assert.strictEqual(query.toString(), '(key1>val1&key2>val2&key3>val3&key4>val4)');
          done();
        });
        test('it should conjoin them with ">=" for gte', function(done){
          var query;
          query = I.gte({
            key1: 'val1',
            key2: 'val2',
            key3: 'val3',
            key4: 'val4'
          });
          assert.strictEqual(query.toString(), '(key1>=val1&key2>=val2&key3>=val3&key4>=val4)');
          done();
        });
        test('it should conjoin them with "<" for lt', function(done){
          var query;
          query = I.lt({
            key1: 'val1',
            key2: 'val2',
            key3: 'val3',
            key4: 'val4'
          });
          assert.strictEqual(query.toString(), '(key1<val1&key2<val2&key3<val3&key4<val4)');
          done();
        });
        return test('it should conjoin them with "<=" for lte', function(done){
          var query;
          query = I.lte({
            key1: 'val1',
            key2: 'val2',
            key3: 'val3',
            key4: 'val4'
          });
          assert.strictEqual(query.toString(), '(key1<=val1&key2<=val2&key3<=val3&key4<=val4)');
          done();
        });
      });
      describe('given an object of boolean values', function(){
        test('it should conjoin them with "=" for eq', function(done){
          var query;
          query = I.eq({
            key1: true,
            key2: false,
            key3: true,
            key4: false
          });
          assert.strictEqual(query.toString(), '(key1=true&key2=false&key3=true&key4=false)');
          done();
        });
        test('it should conjoin them with "!=" for neq', function(done){
          var query;
          query = I.neq({
            key1: true,
            key2: false,
            key3: true,
            key4: false
          });
          assert.strictEqual(query.toString(), '(key1!=true&key2!=false&key3!=true&key4!=false)');
          done();
        });
        test('it should conjoin them with ">" for gt', function(done){
          var query;
          query = I.gt({
            key1: true,
            key2: false,
            key3: true,
            key4: false
          });
          assert.strictEqual(query.toString(), '(key1>true&key2>false&key3>true&key4>false)');
          done();
        });
        test('it should conjoin them with ">=" for gte', function(done){
          var query;
          query = I.gte({
            key1: true,
            key2: false,
            key3: true,
            key4: false
          });
          assert.strictEqual(query.toString(), '(key1>=true&key2>=false&key3>=true&key4>=false)');
          done();
        });
        test('it should conjoin them with "<" for lt', function(done){
          var query;
          query = I.lt({
            key1: true,
            key2: false,
            key3: true,
            key4: false
          });
          assert.strictEqual(query.toString(), '(key1<true&key2<false&key3<true&key4<false)');
          done();
        });
        return test('it should conjoin them with "<=" for lte', function(done){
          var query;
          query = I.lte({
            key1: true,
            key2: false,
            key3: true,
            key4: false
          });
          assert.strictEqual(query.toString(), '(key1<=true&key2<=false&key3<=true&key4<=false)');
          done();
        });
      });
      describe('given a different relational operator with "key", "val"', function(){
        test('it should generate "=" for eq', function(done){
          var query;
          query = I.eq('key', 'val');
          assert.strictEqual(query.toString(), 'key=val');
          done();
        });
        test('it should generate "!=" for neq', function(done){
          var query;
          query = I.neq('key', 'val');
          assert.strictEqual(query.toString(), 'key!=val');
          done();
        });
        test('it should generate ">" for gt', function(done){
          var query;
          query = I.gt('key', 'val');
          assert.strictEqual(query.toString(), 'key>val');
          done();
        });
        test('it should generate ">=" for gte', function(done){
          var query;
          query = I.gte('key', 'val');
          assert.strictEqual(query.toString(), 'key>=val');
          done();
        });
        test('it should generate "<" for lt', function(done){
          var query;
          query = I.lt('key', 'val');
          assert.strictEqual(query.toString(), 'key<val');
          done();
        });
        return test('it should generate "<=" for lte', function(done){
          var query;
          query = I.lte('key', 'val');
          assert.strictEqual(query.toString(), 'key<=val');
          done();
        });
      });
      describe('given a different relational operator with an inquire', function(){
        test('it should generate "=" for eq, wrapped in parens', function(done){
          var query;
          query = I(I.eq('key', 'val'));
          assert.strictEqual(query.toString(), '(key=val)');
          done();
        });
        test('it should generate "!=" for neq, wrapped in parens', function(done){
          var query;
          query = I(I.neq('key', 'val'));
          assert.strictEqual(query.toString(), '(key!=val)');
          done();
        });
        test('it should generate ">" for gt, wrapped in parens', function(done){
          var query;
          query = I(I.gt('key', 'val'));
          assert.strictEqual(query.toString(), '(key>val)');
          done();
        });
        test('it should generate ">=" for gte, wrapped in parens', function(done){
          var query;
          query = I(I.gte('key', 'val'));
          assert.strictEqual(query.toString(), '(key>=val)');
          done();
        });
        test('it should generate "<" for lt, wrapped in parens', function(done){
          var query;
          query = I(I.lt('key', 'val'));
          assert.strictEqual(query.toString(), '(key<val)');
          done();
        });
        return test('it should generate "<=" for lte, wrapped in parens', function(done){
          var query;
          query = I(I.lte('key', 'val'));
          assert.strictEqual(query.toString(), '(key<=val)');
          done();
        });
      });
      describe('given a different relational operator with an array of inquire', function(){
        test('it should conjoin them with "=" for eq', function(done){
          var query;
          query = I([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1=val1)&(key2=val2))');
          done();
        });
        test('it should conjoin them with "!=" for neq', function(done){
          var query;
          query = I([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1!=val1)&(key2!=val2))');
          done();
        });
        test('it should conjoin them with ">" for gt', function(done){
          var query;
          query = I([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1>val1)&(key2>val2))');
          done();
        });
        test('it should conjoin them with ">=" for gte', function(done){
          var query;
          query = I([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1>=val1)&(key2>=val2))');
          done();
        });
        test('it should conjoin them with "<" for lt', function(done){
          var query;
          query = I([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1<val1)&(key2<val2))');
          done();
        });
        return test('it should conjoin them with "<=" for lte', function(done){
          var query;
          query = I([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1<=val1)&(key2<=val2))');
          done();
        });
      });
      describe('given different boolean and relational operators with keys and vals', function(){
        test('it should conjoin them with "=" for and/eq', function(done){
          var query;
          query = I.and([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1=val1)&(key2=val2))');
          done();
        });
        test('it should conjoin them with "!=" for and/neq', function(done){
          var query;
          query = I.and([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1!=val1)&(key2!=val2))');
          done();
        });
        test('it should conjoin them with ">" for and/gt', function(done){
          var query;
          query = I.and([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1>val1)&(key2>val2))');
          done();
        });
        test('it should conjoin them with ">=" for and/gte', function(done){
          var query;
          query = I.and([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1>=val1)&(key2>=val2))');
          done();
        });
        test('it should conjoin them with "<" for and/lt', function(done){
          var query;
          query = I.and([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1<val1)&(key2<val2))');
          done();
        });
        test('it should conjoin them with "<=" for and/lte', function(done){
          var query;
          query = I.and([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1<=val1)&(key2<=val2))');
          done();
        });
        test('it should disjoin them with "=" for or/eq', function(done){
          var query;
          query = I.or([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1=val1);(key2=val2))');
          done();
        });
        test('it should disjoin them with "!=" for or/neq', function(done){
          var query;
          query = I.or([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1!=val1);(key2!=val2))');
          done();
        });
        test('it should disjoin them with ">" for or/gt', function(done){
          var query;
          query = I.or([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1>val1);(key2>val2))');
          done();
        });
        test('it should disjoin them with ">=" for or/gte', function(done){
          var query;
          query = I.or([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1>=val1);(key2>=val2))');
          done();
        });
        test('it should disjoin them with "<" for or/lt', function(done){
          var query;
          query = I.or([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1<val1);(key2<val2))');
          done();
        });
        test('it should disjoin them with "<=" for or/lte', function(done){
          var query;
          query = I.or([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '((key1<=val1);(key2<=val2))');
          done();
        });
        test('it should negate the conjunct of them with "=" for not/eq', function(done){
          var query;
          query = I.not([I.eq('key1', 'val1'), I.eq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '!((key1=val1)&(key2=val2))');
          done();
        });
        test('it should negate the conjunct of them with "!=" for not/neq', function(done){
          var query;
          query = I.not([I.neq('key1', 'val1'), I.neq('key2', 'val2')]);
          assert.strictEqual(query.toString(), '!((key1!=val1)&(key2!=val2))');
          done();
        });
        test('it should negate the conjunct of them with ">" for not/gt', function(done){
          var query;
          query = I.not([I.gt('key1', 'val1'), I.gt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '!((key1>val1)&(key2>val2))');
          done();
        });
        test('it should negate the conjunct of them with ">=" for not/gte', function(done){
          var query;
          query = I.not([I.gte('key1', 'val1'), I.gte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '!((key1>=val1)&(key2>=val2))');
          done();
        });
        test('it should negate the conjunct of them with "<" for not/lt', function(done){
          var query;
          query = I.not([I.lt('key1', 'val1'), I.lt('key2', 'val2')]);
          assert.strictEqual(query.toString(), '!((key1<val1)&(key2<val2))');
          done();
        });
        return test('it should negate the conjunct of them with "<=" for not/lte', function(done){
          var query;
          query = I.not([I.lte('key1', 'val1'), I.lte('key2', 'val2')]);
          assert.strictEqual(query.toString(), '!((key1<=val1)&(key2<=val2))');
          done();
        });
      });
      return describe('given some long chain of function calls', function(){
        test('it should generate this long query string: "(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))"', function(done){
          var query, x$;
          query = (x$ = I(I('color', 'red').and(I.gt('width', 30))), x$.or(I.lte('sides', 12)), x$.or(I('shape', 'square').and(I.neq('color', 'black').or('user', 'bob'))), x$);
          assert.strictEqual(query.toString(), '(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))');
          done();
        });
        return test('it should generate this horrendous string "key1=val1&!(key2=val2);(key3=key3&key4=key4&key5=key5)&!((size<40)&(width>20)&(height>=10))"', function(done){
          var query;
          query = I('key1', 'val1').not(I('key2', 'val2')).or(I({
            'key3': 'key3',
            'key4': 'key4',
            'key5': 'key5'
          })).and([I.not([I.lt('size', 40), I.gt('width', 20), I.gte('height', 10)])]);
          assert.strictEqual(query.toString(), 'key1=val1&!(key2=val2);(key3=key3&key4=key4&key5=key5)&!((size<40)&(width>20)&(height>=10))');
          done();
        });
      });
    });
    return describe('given a whole mess of nested stuffs', function(){
      return test('it should be smart about parens', function(done){
        var query;
        query = I(I(I(I(I('key', 'value')))));
        assert.strictEqual(query.toString(), '(key=value)');
        done();
      });
    });
  });
}).call(this);
