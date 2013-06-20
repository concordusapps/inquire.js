(function(){
  'use strict';
  var Inquire, toString$ = {}.toString;
  Inquire = (function(){
    Inquire.displayName = 'Inquire';
    var prototype = Inquire.prototype, constructor = Inquire;
    prototype.inquiry = '';
    /*  Bound constructor allows us to call:
        LiveScript
        `Inquire!` rather than `new Inquire!`
    
        Javascript
        `Inquire()` rather than `new Inquire()`
    */;
    function Inquire(key, val){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$._analyze(key, val);
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    /*  Helper function to choose the correct string to create.
        `key` Determines the route to take depending on one of these types:
            `Inquire` -> Wrap it in parens and concat it to the previous inquire.
            `Array`   -> Join everything with the bool and concat to previous.
            `String`  -> Relate the key and val then concat to previous.
            `Object`  -> Relate each key/val, join with the bool and concat.
            Rest      -> For anything else, just throw it away.
        `val` Currently only used as the value for strings.
        `options` Additional information for constructing the inquire.
            `bool`  -> Boolean predicate to join with.
            `cat`   -> Boolean predicate to concat to the previous inquire with.
            `op`    -> Relational operator to relate keys with values.
    
        Returns this Allows for chaining of inquire's.
    */
    prototype._analyze = function(key, val, arg$){
      var ref$, bool, ref1$, cat, op, k, v, this$ = this;
      ref$ = arg$ != null
        ? arg$
        : {}, bool = (ref1$ = ref$.bool) != null ? ref1$ : '&', cat = (ref1$ = ref$.cat) != null ? ref1$ : '', op = (ref1$ = ref$.op) != null ? ref1$ : '=';
      cat = function(){
        var ref$;
        switch (ref$ = [this$.inquiry, cat], false) {
        case !('' === ref$[0] && (function(it){
          return it !== '&!';
        })(ref$[1])):
          return '';
        case !('' === ref$[0] && true):
          return '!';
        default:
          return cat;
        }
      }();
      this.inquiry += (function(){
        var ref$;
        switch (ref$ = [key], false) {
        case !(function(it){
          return it instanceof Inquire;
        })(ref$[0]):
          return cat + "(" + key + ")";
        case !compose$([
            (function(it){
              return it === 'Array';
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return cat + "(" + key.join(bool) + ")";
        case !compose$([
            (function(it){
              return it === 'String';
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return cat + "" + key + op + val;
        case !compose$([
            (function(it){
              return it === 'Object';
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return cat + "(" + (function(){
            var ref$, results$ = [];
            for (k in ref$ = key) {
              v = ref$[k];
              results$.push(k + op + v);
            }
            return results$;
          }()).join(bool) + ")";
        default:
          return '';
        }
      }());
      return this;
    };
    /*  Relational operators.
    */
    prototype.eq = function(key, val){
      return this._analyze(key, val, {
        op: '='
      });
    };
    prototype.neq = function(key, val){
      return this._analyze(key, val, {
        op: '!='
      });
    };
    prototype.gt = function(key, val){
      return this._analyze(key, val, {
        op: '>'
      });
    };
    prototype.gte = function(key, val){
      return this._analyze(key, val, {
        op: '>='
      });
    };
    prototype.lt = function(key, val){
      return this._analyze(key, val, {
        op: '<'
      });
    };
    prototype.lte = function(key, val){
      return this._analyze(key, val, {
        op: '<='
      });
    };
    /*  Boolean predicates.
    */
    prototype.and = function(key, val){
      return this._analyze(key, val, {
        cat: '&',
        bool: '&'
      });
    };
    prototype.or = function(key, val){
      return this._analyze(key, val, {
        cat: ';',
        bool: ';'
      });
    };
    prototype.not = function(key){
      return this._analyze(key, null, {
        cat: '&!'
      });
    };
    /*  Make our Inquire actually look like a query string.
    */
    prototype.generate = function(){
      return "?" + this.inquiry;
    };
    prototype.toString = function(){
      return this.inquiry;
    };
    return Inquire;
  }());
  /*  Static methods.
      We can do stuff like:
      LiveScript
  
      `Inquire.gt \a, 10` along with `Inquire!.gt \a, 10`.
  
      Javascript
  
      `Inquire.gt('a', 10)` along with `Inquire().gt('a', 10)`.
  */
  Inquire.eq = function(key, val){
    return Inquire().eq(key, val);
  };
  Inquire.neq = function(key, val){
    return Inquire().neq(key, val);
  };
  Inquire.gt = function(key, val){
    return Inquire().gt(key, val);
  };
  Inquire.gte = function(key, val){
    return Inquire().gte(key, val);
  };
  Inquire.lt = function(key, val){
    return Inquire().lt(key, val);
  };
  Inquire.lte = function(key, val){
    return Inquire().lte(key, val);
  };
  Inquire.and = function(key, val){
    return Inquire().and(key, val);
  };
  Inquire.or = function(key, val){
    return Inquire().or(key, val);
  };
  Inquire.not = function(key){
    return Inquire().not(key);
  };
  /*  Exporting inquire.  */
  if ((typeof module != 'undefined' && module !== null) && module.exports) {
    module.exports = Inquire;
  } else {
    this.Inquire = Inquire;
  }
  if (typeof define === 'function') {
    define('Inquire', [], function(){
      return Inquire;
    });
  }
  function compose$(fs){
    return function(){
      var i, args = arguments;
      for (i = fs.length; i > 0; --i) { args = [fs[i-1].apply(this, args)]; }
      return args[0];
    };
  }
}).call(this);
