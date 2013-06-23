(function(){
  'use strict';
  var empty, arity, Inquire, toString$ = {}.toString;
  empty = function(object){
    var _;
    for (_ in object) {
      return false;
    }
    return true;
  };
  arity = function(op){
    var ref$;
    switch (ref$ = [op], false) {
    case !(function(it){
      return in$(it, ['!'].concat(''));
    })(ref$[0]):
      return '1';
    case !(function(it){
        return it == '=' || it == '!=' || it == '>' || it == '>=' || it == '<' || it == '<=' || it == '&' || it == '&!' || it == ';';
      })(ref$[0]):
      return '2';
    }
  };
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
    function Inquire(key, val, arg$){
      var ref$, bool, ref1$, rel, options, this$ = this instanceof ctor$ ? this : new ctor$;
      ref$ = arg$ != null
        ? arg$
        : {}, bool = (ref1$ = ref$.bool) != null ? ref1$ : '&', rel = (ref1$ = ref$.rel) != null ? ref1$ : '=';
      options = {
        bool: bool,
        rel: rel
      };
      this$._analyze(key, val, options);
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
            `bool`    -> Boolean predicate to join with.
            `rel`     -> Relational operator to relate keys with values.
    
        Returns this Allows for chaining of inquire's.
    */
    prototype._analyze = function(key, val, arg$){
      var bool, ref$, rel, options;
      bool = (ref$ = arg$.bool) != null ? ref$ : '&', rel = (ref$ = arg$.rel) != null ? ref$ : '=';
      options = {
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
        this._handleString(key, val, options);
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
      var ref$, rel, bool;
      if (empty(this.inquiry)) {
        this.inquiry = {
          arity: arity(options.rel),
          rel: options.rel,
          left: key,
          right: val
        };
        if ('1' === arity(options.bool)) {
          this._unary(this, options);
        }
      } else {
        ref$ = (function(){
          var ref$;
          switch (ref$ = [options.bool, options.rel], false) {
          case !('!' === ref$[0] && '!' === ref$[1]):
            return ['&!', '\'\''];
          case !(true && true):
            return [options.bool, options.rel];
          }
        }()), rel = ref$[0], bool = ref$[1];
        this.inquiry = {
          arity: arity(rel),
          rel: rel,
          left: this.inquiry,
          right: Inquire()._analyze(key, val, {
            arity: arity(bool),
            bool: bool,
            rel: options.rel
          }).inquiry
        };
      }
    };
    prototype._unary = function(val, options){
      this.inquiry = {
        arity: arity(options.bool),
        bool: options.bool,
        value: val.inquiry
      };
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
      this._handleInquire(inquire, {
        bool: options.bool,
        rel: options.rel
      });
    };
    prototype._handleInquire = function(inquire, options){
      var bool;
      if (empty(this.inquiry)) {
        bool = options.bool === '!' ? options.bool : '';
        this._unary(inquire, {
          bool: bool
        });
      } else {
        this._binary(inquire, null, {
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
        inquire[relation](key, val, options);
      }
      this._handleInquire(inquire, {
        bool: options.bool,
        rel: options.rel
      });
    };
    prototype._handleString = function(key, val, options){
      this._binary(key, val, options);
    };
    /*  Relational operators.
    */
    prototype.eq = function(key, val){
      return this._analyze(key, val, {
        rel: '='
      });
    };
    prototype.neq = function(key, val){
      return this._analyze(key, val, {
        rel: '!='
      });
    };
    prototype.gt = function(key, val){
      return this._analyze(key, val, {
        rel: '>'
      });
    };
    prototype.gte = function(key, val){
      return this._analyze(key, val, {
        rel: '>='
      });
    };
    prototype.lt = function(key, val){
      return this._analyze(key, val, {
        rel: '<'
      });
    };
    prototype.lte = function(key, val){
      return this._analyze(key, val, {
        rel: '<='
      });
    };
    /*  Boolean predicates.
    */
    prototype.and = function(key, val){
      return this._analyze(key, val, {
        bool: '&'
      });
    };
    prototype.or = function(key, val){
      return this._analyze(key, val, {
        bool: ';'
      });
    };
    prototype.not = function(key){
      return this._analyze(key, null, {
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
      } else if (empty(I)) {
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
  function in$(x, arr){
    var i = -1, l = arr.length >>> 0;
    while (++i < l) if (x === arr[i] && i in arr) return true;
    return false;
  }
  function compose$(fs){
    return function(){
      var i, args = arguments;
      for (i = fs.length; i > 0; --i) { args = [fs[i-1].apply(this, args)]; }
      return args[0];
    };
  }
}).call(this);
