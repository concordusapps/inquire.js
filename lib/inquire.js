(function(){
  'use strict';
  var Inquire, toString$ = {}.toString;
  Inquire = (function(){
    Inquire.displayName = 'Inquire';
    var prototype = Inquire.prototype, constructor = Inquire;
    prototype.inquiry = {};
    /*  Bound constructor allows us to call:
        LiveScript
        `Inquire!` rather than `new Inquire!`
    
        Javascript
        `Inquire()` rather than `new Inquire()`
    */;
    function Inquire(key, val){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.eq(key, val);
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
            `rel`    -> Relational operator to relate keys with values.
    
        Returns this Allows for chaining of inquire's.
    */
    prototype._analyze = function(key, val, arg$){
      var arity, ref$, bool, rel, options;
      arity = (ref$ = arg$.arity) != null ? ref$ : '2', bool = (ref$ = arg$.bool) != null ? ref$ : '&', rel = (ref$ = arg$.rel) != null ? ref$ : '=';
      options = {
        arity: arity,
        bool: bool,
        rel: rel
      };
      switch (ref$ = [key], false) {
      case !(function(it){
        return it instanceof Inquire;
      })(ref$[0]):
        this._handleInquire(key, options);
        break;
      case !compose$([
          (function(it){
            return it === 'Array';
          }), (function(it){
            return toString$.call(it).slice(8, -1);
          })
        ])(ref$[0]):
        this._handleArray(key, options);
        break;
      case !compose$([
          (function(it){
            return it === 'String';
          }), (function(it){
            return toString$.call(it).slice(8, -1);
          })
        ])(ref$[0]):
        this._binary(key, val, options);
        break;
      case !compose$([
          (function(it){
            return it === 'Object';
          }), (function(it){
            return toString$.call(it).slice(8, -1);
          })
        ])(ref$[0]):
        this._handleObject(key, options);
      }
      return this;
    };
    prototype._binary = function(key, val, options){
      var ref$, bool, rightBool;
      if (this._empty(this.inquiry)) {
        return this.inquiry = {
          arity: options.arity,
          rel: options.rel,
          left: key,
          right: val
        };
      } else {
        ref$ = (function(){
          var ref$;
          switch (ref$ = [options.bool, options.rel], false) {
          case !('!' === ref$[0] && '!' === ref$[1]):
            return ['&!', '\'\''];
          case !(true && true):
            return [options.bool, options.rel];
          }
        }()), bool = ref$[0], rightBool = ref$[1];
        return this.inquiry = {
          arity: options.arity,
          rel: bool,
          left: this.inquiry,
          right: Inquire()._analyze(key, val, {
            arity: options.arity,
            bool: rightBool,
            rel: options.rel
          }).inquiry
        };
      }
    };
    prototype._handleArray = function(array, options){
      var inquire, boolean, i$, len$, item;
      inquire = Inquire();
      boolean = (function(){
        var ref$;
        switch (ref$ = [options.bool], false) {
        case ';' !== ref$[0]:
          return 'or';
        default:
          return 'and';
        }
      }());
      for (i$ = 0, len$ = array.length; i$ < len$; ++i$) {
        item = array[i$];
        inquire[boolean](item, null, options);
      }
      return this._handleInquire(inquire, {
        arity: '1',
        rel: options.rel,
        bool: options.bool
      });
    };
    prototype._handleInquire = function(inquire, options){
      var bool;
      if (this._empty(this.inquiry)) {
        bool = options.bool === '!' ? options.bool : '';
        return this._unary(inquire, {
          arity: '1',
          bool: bool
        });
      } else {
        return this._binary(inquire, null, {
          arity: '2',
          bool: options.bool,
          rel: options.bool
        });
      }
    };
    prototype._handleObject = function(object, options){
      var inquire, relation, key, val;
      inquire = Inquire();
      relation = (function(){
        var ref$;
        switch (ref$ = [options.rel], false) {
        case '=' !== ref$[0]:
          return 'eq';
        case '!=' !== ref$[0]:
          return 'neq';
        case '>' !== ref$[0]:
          return 'gt';
        case '>=' !== ref$[0]:
          return 'gte';
        case '<' !== ref$[0]:
          return 'lt';
        case '<=' !== ref$[0]:
          return 'lte';
        }
      }());
      for (key in object) {
        val = object[key];
        inquire._analyze(key, val, {
          arity: '2',
          rel: options.rel
        });
      }
      return this._handleInquire(inquire, {
        arity: '1',
        rel: options.rel,
        bool: options.bool
      });
    };
    prototype._empty = function(object){
      var key;
      for (key in object) {
        return false;
      }
      return true;
    };
    prototype._unary = function(val, options){
      return this.inquiry = {
        arity: options.arity,
        bool: options.bool,
        value: val.inquiry
      };
    };
    /*  Relational operators.
    */
    prototype.eq = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        rel: '='
      });
    };
    prototype.neq = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        rel: '!='
      });
    };
    prototype.gt = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        rel: '>'
      });
    };
    prototype.gte = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        rel: '>='
      });
    };
    prototype.lt = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        rel: '<'
      });
    };
    prototype.lte = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        rel: '<='
      });
    };
    /*  Boolean predicates.
    */
    prototype.and = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        bool: '&'
      });
    };
    prototype.or = function(key, val){
      return this._analyze(key, val, {
        arity: '2',
        bool: ';'
      });
    };
    prototype.not = function(key){
      return this._analyze(key, null, {
        arity: '1',
        bool: '!'
      });
    };
    /*  Make our Inquire actually look like a query string.
    */
    prototype.generate = function(){
      return "?" + this._genHelper(this.inquiry);
    };
    prototype._genHelper = function(I){
      var ref$;
      if ((ref$ = toString$.call(I).slice(8, -1)) == 'Array' || ref$ == 'Number' || ref$ == 'String') {
        return I;
      } else if (this._empty(I)) {
        return '';
      } else {
        switch (ref$ = [I.arity], false) {
        case '1' !== ref$[0]:
          return I.bool + "(" + this._genHelper(I.value) + ")";
        case '2' !== ref$[0]:
          return this._genHelper(I.left) + "" + I.rel + this._genHelper(I.right);
        }
      }
    };
    prototype.toString = function(){
      return this._genHelper(this.inquiry);
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
