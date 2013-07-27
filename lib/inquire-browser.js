;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
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
      if (!(I instanceof Inquire)) {
        throw new Error("TypeError: Not an inquire\n" + I);
      }
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
      if (toString$.call(f).slice(8, -1) !== 'Function') {
        throw new Error("TypeError: Not a function\n" + f);
      }
      return constructor(f(this.toString()));
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

},{"../lib/parser.js":2}],2:[function(require,module,exports){
(function(process){/* parser generated by jison 0.4.6 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"q":4,"group":5,"predicate":6,"binaryBool":7,"unaryBool":8,"(":9,")":10,"VAR":11,"rel":12,"NEQ":13,"GTE":14,"LTE":15,"EQ":16,"GT":17,"LT":18,"AND":19,"OR":20,"NOT":21,"ANDNOT":22,"$accept":0,"$end":1},
terminals_: {2:"error",9:"(",10:")",11:"VAR",13:"NEQ",14:"GTE",15:"LTE",16:"EQ",17:"GT",18:"LT",19:"AND",20:"OR",21:"NOT",22:"ANDNOT"},
productions_: [0,[3,1],[4,1],[4,1],[4,3],[4,3],[4,2],[5,3],[6,3],[6,4],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[7,1],[7,1],[8,1],[8,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:return { "_parsedQueryString": $$[$0] };
break;
case 2:this.$ = $$[$0];
break;
case 3:this.$ = $$[$0];
break;
case 4:this.$ = { arity: "2", bool: $$[$0-1], left: $$[$0-2], right: $$[$0] };
break;
case 5:this.$ = { arity: "2", bool: $$[$0-1], left: $$[$0-2], right: $$[$0] };
break;
case 6:this.$ = { arity: "1", bool: $$[$0-1], value: $$[$0] };
break;
case 7:this.$ = { arity: "1", bool: "", value: $$[$0-1] };
break;
case 8:this.$ = { arity: "2", rel: $$[$0-1], left: $$[$0-2], right: $$[$0] };
break;
case 9:this.$ = { arity: "2", rel: $$[$0-2] + $$[$0-1], left: $$[$0-3], right: $$[$0] };
break;
case 10:this.$ = yytext;
break;
case 11:this.$ = yytext;
break;
case 12:this.$ = yytext;
break;
case 13:this.$ = yytext;
break;
case 14:this.$ = yytext;
break;
case 15:this.$ = yytext;
break;
case 16:this.$ = yytext;
break;
case 17:this.$ = yytext;
break;
case 18:this.$ = yytext;
break;
case 19:this.$ = yytext;
break;
}
},
table: [{3:1,4:2,5:3,6:4,8:5,9:[1,6],11:[1,7],21:[1,8],22:[1,9]},{1:[3]},{1:[2,1]},{1:[2,2],7:10,10:[2,2],19:[1,11],20:[1,12]},{1:[2,3],7:13,10:[2,3],19:[1,11],20:[1,12]},{4:14,5:3,6:4,8:5,9:[1,6],11:[1,7],21:[1,8],22:[1,9]},{4:15,5:3,6:4,8:5,9:[1,6],11:[1,7],21:[1,8],22:[1,9]},{12:16,13:[1,17],14:[1,18],15:[1,19],16:[1,20],17:[1,21],18:[1,22]},{9:[2,18],11:[2,18],21:[2,18],22:[2,18]},{9:[2,19],11:[2,19],21:[2,19],22:[2,19]},{4:23,5:3,6:4,8:5,9:[1,6],11:[1,7],21:[1,8],22:[1,9]},{9:[2,16],11:[2,16],21:[2,16],22:[2,16]},{9:[2,17],11:[2,17],21:[2,17],22:[2,17]},{4:24,5:3,6:4,8:5,9:[1,6],11:[1,7],21:[1,8],22:[1,9]},{1:[2,6],10:[2,6]},{10:[1,25]},{11:[1,26],12:27,13:[1,17],14:[1,18],15:[1,19],16:[1,20],17:[1,21],18:[1,22]},{11:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[2,10],17:[2,10],18:[2,10]},{11:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],18:[2,11]},{11:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],18:[2,12]},{11:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],18:[2,13]},{11:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],18:[2,14]},{11:[2,15],13:[2,15],14:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[2,15]},{1:[2,4],10:[2,4]},{1:[2,5],10:[2,5]},{1:[2,7],10:[2,7],19:[2,7],20:[2,7]},{1:[2,8],10:[2,8],19:[2,8],20:[2,8]},{11:[1,28]},{1:[2,9],10:[2,9],19:[2,9],20:[2,9]}],
defaultActions: {2:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
undefined/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "(";
break;
case 1:return ")";
break;
case 2:return "VAR";
break;
case 3:return "EQ";
break;
case 4:return "NEQ";
break;
case 5:return "GT";
break;
case 6:return "GTE";
break;
case 7:return "LT";
break;
case 8:return "LTE";
break;
case 9:return "AND";
break;
case 10:return "OR";
break;
case 11:return "NOT";
break;
case 12:return "ANDNOT";
break;
}
},
rules: [/^(?:\()/,/^(?:\))/,/^(?:[A-Za-z0-9]+)/,/^(?:=)/,/^(?:!=)/,/^(?:>)/,/^(?:>=)/,/^(?:<)/,/^(?:<=)/,/^(?:&)/,/^(?:;)/,/^(?:!)/,/^(?:&!)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
})(require("__browserify_process"))
},{"__browserify_process":5,"fs":3,"path":4}],3:[function(require,module,exports){
// nothing to see here... no file methods for the browser

},{}],4:[function(require,module,exports){
(function(process){function filter (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (fn(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length; i >= 0; i--) {
    var last = parts[i];
    if (last == '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Regex to split a filename into [*, dir, basename, ext]
// posix version
var splitPathRe = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
var resolvedPath = '',
    resolvedAbsolute = false;

for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
  var path = (i >= 0)
      ? arguments[i]
      : process.cwd();

  // Skip empty and invalid entries
  if (typeof path !== 'string' || !path) {
    continue;
  }

  resolvedPath = path + '/' + resolvedPath;
  resolvedAbsolute = path.charAt(0) === '/';
}

// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)

// Normalize the path
resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
var isAbsolute = path.charAt(0) === '/',
    trailingSlash = path.slice(-1) === '/';

// Normalize the path
path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }
  
  return (isAbsolute ? '/' : '') + path;
};


// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    return p && typeof p === 'string';
  }).join('/'));
};


exports.dirname = function(path) {
  var dir = splitPathRe.exec(path)[1] || '';
  var isWindows = false;
  if (!dir) {
    // No dirname
    return '.';
  } else if (dir.length === 1 ||
      (isWindows && dir.length <= 3 && dir.charAt(1) === ':')) {
    // It is just a slash or a drive letter with a slash
    return dir;
  } else {
    // It is a full dirname, strip trailing slash
    return dir.substring(0, dir.length - 1);
  }
};


exports.basename = function(path, ext) {
  var f = splitPathRe.exec(path)[2] || '';
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPathRe.exec(path)[3] || '';
};

exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

})(require("__browserify_process"))
},{"__browserify_process":5}],5:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1])
;