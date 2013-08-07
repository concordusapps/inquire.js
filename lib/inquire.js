(function(){
  'use strict';
  var parser, empty, arity, relation, Inquire, toString$ = {}.toString;
  parser = require('../lib/parser.js');
  empty = function(it){
    var _;
    for (_ in it) {
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
        return it == '=' || it == '!=' || it == '>' || it == '>=' || it == '<' || it == '<=' || it == '&' || it == '&!' || it == ';' || it == 'concat';
      })(ref$[0]):
      return '2';
    }
  };
  relation = function(op){
    var ref$;
    switch (ref$ = [op], false) {
    case !(function(it){
      return it === '=';
    })(ref$[0]):
      return 'eq';
    case !(function(it){
        return it === '!=';
      })(ref$[0]):
      return 'neq';
    case !(function(it){
        return it === '>';
      })(ref$[0]):
      return 'gt';
    case !(function(it){
        return it === '>=';
      })(ref$[0]):
      return 'gte';
    case !(function(it){
        return it === '<';
      })(ref$[0]):
      return 'lt';
    case !(function(it){
        return it === '<=';
      })(ref$[0]):
      return 'lte';
    }
  };
  Inquire = (function(){
    Inquire.displayName = 'Inquire';
    var prototype = Inquire.prototype, constructor = Inquire;
    /*  Warning, this thing is chocked full of side effects.
        It's mad hard to reason about.
        Be careful...
    */
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
      var ref$, bool, ref1$, rel, options;
      ref$ = arg$ != null
        ? arg$
        : {}, bool = (ref1$ = ref$.bool) != null ? ref1$ : '&', rel = (ref1$ = ref$.rel) != null ? ref1$ : '=';
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
      this._prune(this.inquiry);
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
        if (rel === options.bool) {
          this.inquiry = {
            arity: arity(options.bool),
            bool: options.bool,
            left: this.inquiry,
            right: Inquire()._analyze(key, val, {
              arity: arity(options.bool),
              bool: options.bool,
              rel: options.rel
            }).inquiry
          };
        } else {
          this.inquiry = {
            arity: arity(rel),
            bool: rel,
            left: this.inquiry,
            right: Inquire()._analyze(key, val, {
              arity: arity(bool),
              bool: bool,
              rel: options.rel
            }).inquiry
          };
        }
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
      var inquire, rel, key, val;
      inquire = Inquire();
      if (object._parsedQueryString != null) {
        this._unary({
          inquiry: object._parsedQueryString
        }, options);
        return;
      }
      rel = relation(options.rel);
      for (key in object) {
        val = object[key];
        inquire[rel](key, val, options);
      }
      this._handleInquire(inquire, {
        bool: options.bool,
        rel: options.rel
      });
    };
    prototype._handleString = function(key, val, options){
      var ref$;
      switch (ref$ = [toString$.call(val).slice(8, -1)], false) {
      case !(function(it){
        return it == 'Boolean' || it == 'Number' || it == 'String';
      })(ref$[0]):
        this._binary(key, val, options);
        break;
      default:
        this.parse(key);
      }
    };
    prototype._prune = function(it){
      if (it.arity === '1' && it.value.arity === '1' && it.bool !== '!') {
        this.inquiry = it.value;
        if (it.bool) {
          this.inquiry.bool = it.bool;
        }
        this._prune(this.inquiry);
      }
      if (it.arity === '2' && it.right.arity === '1' && it.bool === '&!') {
        it.right = it.right.value;
        this.inquiry = it;
        this._prune(this.inquiry);
      }
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
    prototype.not = function(it){
      return this._analyze(it, null, {
        bool: '!'
      });
    };
    /*  Make our Inquire actually look like a query string.
    */
    prototype.generate = function(){
      return "?" + this._gen(this._unwrap(this.inquiry));
    };
    prototype._unwrap = function(I){
      if (I.bool === '') {
        return this._unwrap(I.value);
      } else {
        return I;
      }
    };
    prototype._gen = function(I){
      var ref$;
      if ((ref$ = toString$.call(I).slice(8, -1)) == 'Array' || ref$ == 'Boolean' || ref$ == 'Number' || ref$ == 'String') {
        return encodeURIComponent(I);
      } else if (empty(I)) {
        return '';
      } else if (I.arity === '1') {
        switch (ref$ = [I.bool], false) {
        case !(function(it){
          return it === 'empty';
        })(ref$[0]):
          return '';
        default:
          return I.bool + "(" + this._gen(this._unwrap(I.value)) + ")";
        }
      } else if (I.arity === '2') {
        switch (ref$ = [I.rel, I.bool], false) {
        case !(function(it){
          return it != null;
        }(ref$[0]) && true):
          return this._gen(I.left) + "" + I.rel + this._gen(I.right);
        case !(true && (function(it){
            return it === '&!';
          })(ref$[1])):
          return this._gen(I.left) + "" + I.bool + "(" + this._gen(I.right) + ")";
        case !(true && (function(it){
            return it === 'concat';
          })(ref$[1])):
          return "(" + this._gen(I.left) + ")&(" + this._gen(I.right) + ")";
        case !(true && function(it){
            return it != null;
          }(ref$[1])):
          return this._gen(I.left) + "" + I.bool + this._gen(I.right);
        }
      }
    };
    prototype.toString = function(){
      return this._gen(this.inquiry);
    };
    /*  Read in a query string, and return an inquire.
    */
    prototype.parse = function(it){
      var parsed;
      parsed = parser.parse(it);
      return this._analyze(parsed, null, {
        bool: ''
      });
    };
    /*  Fantasy-land
    
        Everything in here should be pure, and not mutate other things.
        This is the only place where you can guarantee anything.
    */
    /*  Semigroup
    
        1.  `a.concat(b).concat(c)` is equivalent to `a.concat(b.concat(c))`
            (associativity)
    
        `concat` method
    
        A value which has a Semigroup must provide a `concat` method.
        The `concat` method takes one argument:
    
          s.concat(b)
    
        1.  `b` must be a value of the same Semigroup
    
            1.  If `b` is not the same semigroup, behaviour of `concat` is
                unspecified.
    
        2.  `concat` must return a value of the same Semigroup.
    */
    prototype.concat = function(I){
      var oldI, newI;
      oldI = import$({}, this.inquiry);
      newI = constructor();
      newI.inquiry = {
        arity: '2',
        bool: 'concat',
        left: oldI,
        right: I.inquiry
      };
      return newI;
    };
    /*  Monoid
    
        A value that implements the Monoid specification must also implement
        the Semigroup specficiation.
    
        1. `m.concat(m.empty())` is equivalent to `m` (right identity)
        2. `m.empty().concat(m)` is equivalent to `m` (left identity)
    
        `empty` method
    
        A value which has a Monoid must provide an `empty` method on itself or
        its `constructor` object. The `empty` method takes no arguments:
    
          m.empty()
          m.constructor.empty()
    
        1. `empty` must return a value of the same Monoid
    */
    prototype.empty = function(){
      var newI;
      newI = constructor();
      newI.inquiry = {
        arity: '1',
        bool: 'empty',
        value: ''
      };
      return newI;
    };
    /*  Functor
    
        1. `u.map(function(a) { return a; }))` is equivalent to `u` (identity)
        2. `u.map(function(x) { return f(g(x)); })` is equivalent to
           `u.map(g).map(f)` (composition)
    
        `map` method
    
        A value which has a Functor must provide a `map` method.
        The `map` method takes one argument:
    
          u.map(f)
    
        1. `f` must be a function,
    
          1. If `f` is not a function, the behaviour of `map` is unspecified.
          2. `f` can return any value.
    
        2. `map` must return a value of the same Functor
    */
    prototype.map = function(f){
      return constructor(f(this.toString()));
    };
    /*  Chain
    
        1. `m.chain(f).chain(g)` is equivalent to
           `m.chain(function(x) { return f(x).chain(g); })` (associativity)
    
        `chain` method
    
        A value which has a Chain must provide a `chain` method. The `chain`
        method takes one argument:
    
          m.chain(f)
    
        1. `f` must be a function which returns a value
    
            1. If `f` is not a function, the behaviour of `chain` is unspecified.
            2. `f` must return a value of the same Chain
    
        2. `chain` must return a value of the same Chain
    */
    prototype.chain = function(f){
      return f(this.toString());
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
  Inquire.not = function(it){
    return Inquire().not(it);
  };
  Inquire.parse = function(it){
    return Inquire().parse(it);
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
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
