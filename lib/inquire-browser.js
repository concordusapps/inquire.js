!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.Inquire=e():"undefined"!=typeof global?global.Inquire=e():"undefined"!=typeof self&&(self.Inquire=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var ref$, liftA2, liftA3, biliftA2, biliftA3, id, con, flipCon, Inquire, Atom, Pred, Group, Wrap, Relation, GroupBool, WrapBool, Eq, Ne, Gt, Ge, Lt, Le, And, Or, NoBool, Not;
ref$ = require('./utils/applicative.js'), liftA2 = ref$.liftA2, liftA3 = ref$.liftA3, biliftA2 = ref$.biliftA2, biliftA3 = ref$.biliftA3;
ref$ = require('./utils.js'), id = ref$.id, con = ref$.con, flipCon = ref$.flipCon;
/*

  So it turns out that Inquires are 2 parameter things.
  The Key and the value are important for many things.

  TODO: This should probably be a zipper.

*/
Inquire = (function(){
  Inquire.displayName = 'Inquire';
  var prototype = Inquire.prototype, constructor = Inquire;
  function Inquire(op, key, val){
    var this$ = this instanceof ctor$ ? this : new ctor$;
    this$.op = op;
    this$.key = key;
    this$.val = val;
    this$.ofObj = bind$(this$, 'ofObj', prototype);
    return this$;
  } function ctor$(){} ctor$.prototype = prototype;
  prototype.and = function(i){
    return new Group(new And, this, i);
  };
  prototype.or = function(i){
    return new Group(new Or, this, i);
  };
  prototype.not = function(){
    return new Wrap(new Not, this);
  };
  /*
    There are a couple of conventions
      1.  All functions prefixed with `bi` operate on both parts of the inquire.
      2.  Type signatures have implicit first arguments
          which are the object being operated upon.
          E.g.  map :: Inquire a b -> (b -> c) -> Inquire a c
                means that you pass a function `f :: b -> c` to your Inquire
                I = new Pred new Ne, 'cat' 'dog'
                "#{I.map (.toLocaleUpperCase!)}"
                #=> 'cat!=DOG'
      3.  Ambiguous type variables don't actually mean anything.
          You can thank javascript for this.
          We have no way to enforce this easily either.
          E.g.  concat :: Inquire a b -> Inquire a b -> Inquire a b
                But we can concat any thing to an Inquire, unfortunately.
  */
  /*
    Fantasy land stuff.
  */
  /* Conjoin two Inquires together. */
  /* Inquire a b -> Inquire a b -> Inquire a b */
  prototype.concat = function(it){
    return this.and(it);
  };
  /* Create an empty Inquire. */
  /* Inquire a b -> Inquire a b */
  prototype.empty = function(){
    return new Atom;
  };
  /* Apply a function to all the vals in an Inquire. */
  /* Inquire a b -> (b -> c) -> Inquire a c */
  prototype.map = function(it){
    return this.bimap(id, it);
  };
  /* Shove a value into an Inquire. */
  /* Inquire a b -> c -> Inquire a c */
  prototype.of = function(it){
    return this.biof('*', it);
  };
  /* Apply a val in an Inquire to a function in an Inquire. */
  /* Inquire a (b -> c) -> Inquire a b -> Inquire a c */
  prototype.ap = function(it){
    return this.biap(it);
  };
  /*
    Chain might not actually be right due to predicates.
    TODO: Prove some laws and do more maths.
  */
  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (b -> Inquire a c) -> Inquire a c*/
  prototype.chain = function(f){
    return this.bichain(function(u, v){
      return f(v);
    });
  };
  /*
    Should be in Fantasy Land
  */
  /* Foldable */
  /* Catamorph all the values into one. */
  /* Inquire a b -> (b -> c -> c) -> c -> c */
  prototype.foldr = function(f, z){
    return this.bifoldr(function(_, c){
      return c;
    }, f, z);
  };
  /* Biapplicative */
  /* Show a key and a value into an Inquire. */
  /* Inquire a b -> c -> d -> Inquire c d */
  prototype.biof = function(k, v){
    return new Pred(new Eq, k, v);
  };
  /*
    Extra algebra stuff.
  */
  /* Functor */
  /* Map over the keys. */
  /* Inquire a b -> (a -> c) -> Inquire c b */
  prototype.mapFirst = function(it){
    return this.bimap(it, id);
  };
  /* Map over the vals. */
  /* Inquire a b -> (b -> c) -> Inquire a c */
  prototype.mapSecond = function(it){
    return this.map(it);
  };
  /* Replace all vals with the passed in value. */
  /* Inquire a b -> c -> Inquire a c */
  prototype.supplant = function(){
    return this.map(con.apply(this, arguments));
  };
  /* Replace all keys and vals with the passed in value. */
  /* Inquire a b -> c -> d -> Inquire c d */
  prototype.bisupplant = function(u, v){
    return this.bimap(con(u), con(v));
  };
  /* Applicative */
  /* Pure of an object. */
  /* Inquire a b -> {c: d} -> Inquire c d */
  prototype.ofObj = function(o){
    var k, v;
    return (function(){
      var ref$, results$ = [];
      for (k in ref$ = o) {
        v = ref$[k];
        results$.push(this.biof(k, v));
      }
      return results$;
    }.call(this)).reduceRight(function(acc, x, i, a){
      return x.and(acc);
    });
  };
  /* Sequence actions and drop the second. */
  /* Inquire a b -> Inquire c d -> Inquire a b */
  prototype.apFirst = function(i){
    return liftA2(con, this, i);
  };
  /* Sequence actions and drop the first. */
  /* Inquire a b -> Inquire c d -> Inquire c d */
  prototype.apSecond = function(i){
    return liftA2(flipCon, this, i);
  };
  /* Sequence actions and drop the second. */
  /* Inquire a b -> Inquire c d -> Inquire a b */
  prototype.biapFirst = function(i){
    return biliftA2(con, con, this, i);
  };
  /* Sequence actions and drop the first. */
  /* Inquire a b -> Inquire c d -> Inquire c d */
  prototype.biapSecond = function(i){
    return biliftA2(flipCon, flipCon, this, i);
  };
  /* Alternative */
  /* For everything except Atom's just use ourself. */
  /* Inquire a b -> Inquire a b -> Inquire a b */
  prototype.alt = function(i){
    return this['this'];
  };
  /* Traversable */
  /* Traverse the keys. */
  /* Applicative f => Inquire a (f b) -> (b -> f c) -> f (Inquire a c) */
  prototype.traverse = function(f){
    return this.bitraverse(id, f);
  };
  /* Turn an Inquire of an applicative into an applicative of Inquire. */
  /* Applicative f => Inquire a (f b) -> f (Inquire a b) */
  prototype.sequenceA = function(){
    return this.traverse(id);
  };
  /* Turn an Inquire of an applicative into an applicative of Inquire. */
  /* Applicative f => Inquire (f a) (f b) -> f (Inquire a b) */
  prototype.bisequenceA = function(){
    return this.bitraverse(id, id);
  };
  /* Monad */
  /* Run the first Inquire, throw it away, then run the second. */
  /* Inquire a b -> Inquire a c -> Inquire a c */
  prototype.next = function(i){
    return this.chain(function(f){
      return i;
    });
  };
  /* Run the first Inquire, throw it away, then run the second. */
  /* Inquire a b -> Inquire c d -> Inquire c d */
  prototype.binext = function(i){
    return this.bichain(function(f, g){
      return i;
    });
  };
  return Inquire;
}());
Atom = (function(superclass){
  var prototype = extend$((import$(Atom, superclass).displayName = 'Atom', Atom), superclass).prototype, constructor = Atom;
  prototype.toString = function(){
    return '';
  };
  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  prototype.bimap = function(f, g){
    return thisraverse;
  };
  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  prototype.bifoldr = function(f, g, z){
    return z;
  };
  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  prototype.biap = function(i){
    return this;
  };
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  prototype.biapPred = function(i){
    return this;
  };
  /* The only alternative to an Atom is to use the other thing. */
  prototype.alt = function(i){
    return i;
  };
  /*
    We don't have any type information,
    so we pray that whatever these functions are,
    they return something for an Atom.
  
    Then we call the `of` method on whatever was returned,
    this injects our Atom into their context.
  */
  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
  prototype.bitraverse = function(f, g){
    var gVal, that;
    gVal = g(this);
    if (that = gVal.of || gVal.constructor.of || gVal.prototype.of) {
      return that(this);
    } else {
      throw Error('unimplemented');
    }
  };
  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  prototype.bichain = function(f){
    return this;
  };
  function Atom(){
    Atom.superclass.apply(this, arguments);
  }
  return Atom;
}(Inquire));
Pred = (function(superclass){
  var prototype = extend$((import$(Pred, superclass).displayName = 'Pred', Pred), superclass).prototype, constructor = Pred;
  prototype.toString = function(){
    return this.key + "" + this.op + this.val;
  };
  /* Predicates have to shove an identity through the first func for biap. */
  prototype.ap = function(i){
    return new Pred(this.op, id, this.val).biap(i);
  };
  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  prototype.bimap = function(f, g){
    return new Pred(this.op, f(this.key), g(this.val));
  };
  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  prototype.bifoldr = function(f, g, z){
    return f(this.key, g(this.val, z));
  };
  /* We can use double dispatch to avoid worrying about what we're ap-ing to. */
  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  prototype.biap = function(i){
    return i.biapPred(this);
  };
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  prototype.biapPred = function(i){
    return new Pred(this.op, i.key(this.key), i.val(this.val));
  };
  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
  prototype.bitraverse = function(f, g){
    var fKey, gVal, that;
    fKey = f(this.key);
    gVal = g(this.val);
    /*
      We need the context of the applicative we're traversing.
      Assume g-val because we might be doing a `traverse`.
    */
    if (that = gVal.of || gVal.constructor.of || gVal.prototype.of) {
      return liftA3(function(op, key, val){
        return new Pred(op, key, val);
      }, that(this.op), fKey, gVal);
    } else {
      throw Error('unimplemented');
    }
  };
  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  prototype.bichain = function(f){
    return f(this.key, this.val);
  };
  function Pred(){
    Pred.superclass.apply(this, arguments);
  }
  return Pred;
}(Inquire));
Group = (function(superclass){
  var prototype = extend$((import$(Group, superclass).displayName = 'Group', Group), superclass).prototype, constructor = Group;
  prototype.toString = function(){
    return "(" + this.key + ")" + this.op + "(" + this.val + ")";
  };
  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  prototype.bimap = function(f, g){
    return new Group(this.op, this.key.bimap(f, g), this.val.bimap(f, g));
  };
  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  prototype.bifoldr = function(f, g, z){
    return this.key.bifoldr(f, g, this.val.bifoldr(f, g, z));
  };
  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  prototype.biap = function(i){
    return new Group(this.op, this.key.biap(i), this.val.biap(i));
  };
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  prototype.biapPred = function(i){
    return new Group(this.op, i.biap(this.key), i.biap(this.val));
  };
  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
  prototype.bitraverse = function(f, g){
    var fKey, gVal, that;
    fKey = this.key.bitraverse(f, g);
    gVal = this.val.bitraverse(f, g);
    /*
      We need the context of the applicative we're traversing.
      Assume g-val because we might be doing a `traverse`.
    */
    if (that = gVal.of || gVal.constructor.of || gVal.prototype.of) {
      return liftA3(function(op, key, val){
        return new Group(op, key, val);
      }, that(this.op), fKey, gVal);
    } else {
      throw Error('unimplemented');
    }
  };
  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  prototype.bichain = function(f){
    return new Group(this.op, this.key.bichain(f), this.val.bichain(f));
  };
  function Group(){
    Group.superclass.apply(this, arguments);
  }
  return Group;
}(Inquire));
Wrap = (function(superclass){
  var prototype = extend$((import$(Wrap, superclass).displayName = 'Wrap', Wrap), superclass).prototype, constructor = Wrap;
  prototype.toString = function(){
    return this.op + "(" + this.key + ")";
  };
  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  prototype.bimap = function(f, g){
    return new Wrap(this.op, this.key.bimap(f, g));
  };
  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  prototype.bifoldr = function(f, g, z){
    return this.key.bifoldr(f, g, z);
  };
  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  prototype.biap = function(i){
    return new Wrap(this.op, this.key.biap(i));
  };
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  prototype.biapPred = function(i){
    return new Wrap(this.op, i.biap(this.key));
  };
  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
  prototype.bitraverse = function(f, g){
    var fKey, that;
    fKey = this.key.bitraverse(f, g);
    /* We need the context of the applicative we're traversing. */
    if (that = fKey.of || fKey.constructor.of || fKey.prototype.of) {
      return liftA2(function(op, key){
        return new Wrap(op, key);
      }, that(this.op), fKey);
    } else {
      throw Error('unimplemented');
    }
  };
  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  prototype.bichain = function(f){
    return new Wrap(this.op, this.key.bichain(f));
  };
  function Wrap(){
    Wrap.superclass.apply(this, arguments);
  }
  return Wrap;
}(Inquire));
Relation = (function(){
  Relation.displayName = 'Relation';
  var prototype = Relation.prototype, constructor = Relation;
  function Relation(){}
  return Relation;
}());
GroupBool = (function(){
  GroupBool.displayName = 'GroupBool';
  var prototype = GroupBool.prototype, constructor = GroupBool;
  function GroupBool(){}
  return GroupBool;
}());
WrapBool = (function(){
  WrapBool.displayName = 'WrapBool';
  var prototype = WrapBool.prototype, constructor = WrapBool;
  function WrapBool(){}
  return WrapBool;
}());
Eq = (function(superclass){
  var prototype = extend$((import$(Eq, superclass).displayName = 'Eq', Eq), superclass).prototype, constructor = Eq;
  prototype.toString = function(){
    return '=';
  };
  function Eq(){
    Eq.superclass.apply(this, arguments);
  }
  return Eq;
}(Relation));
Ne = (function(superclass){
  var prototype = extend$((import$(Ne, superclass).displayName = 'Ne', Ne), superclass).prototype, constructor = Ne;
  prototype.toString = function(){
    return '!=';
  };
  function Ne(){
    Ne.superclass.apply(this, arguments);
  }
  return Ne;
}(Relation));
Gt = (function(superclass){
  var prototype = extend$((import$(Gt, superclass).displayName = 'Gt', Gt), superclass).prototype, constructor = Gt;
  prototype.toString = function(){
    return '>';
  };
  function Gt(){
    Gt.superclass.apply(this, arguments);
  }
  return Gt;
}(Relation));
Ge = (function(superclass){
  var prototype = extend$((import$(Ge, superclass).displayName = 'Ge', Ge), superclass).prototype, constructor = Ge;
  prototype.toString = function(){
    return '>=';
  };
  function Ge(){
    Ge.superclass.apply(this, arguments);
  }
  return Ge;
}(Relation));
Lt = (function(superclass){
  var prototype = extend$((import$(Lt, superclass).displayName = 'Lt', Lt), superclass).prototype, constructor = Lt;
  prototype.toString = function(){
    return '<';
  };
  function Lt(){
    Lt.superclass.apply(this, arguments);
  }
  return Lt;
}(Relation));
Le = (function(superclass){
  var prototype = extend$((import$(Le, superclass).displayName = 'Le', Le), superclass).prototype, constructor = Le;
  prototype.toString = function(){
    return '<=';
  };
  function Le(){
    Le.superclass.apply(this, arguments);
  }
  return Le;
}(Relation));
And = (function(superclass){
  var prototype = extend$((import$(And, superclass).displayName = 'And', And), superclass).prototype, constructor = And;
  prototype.toString = function(){
    return '&';
  };
  function And(){
    And.superclass.apply(this, arguments);
  }
  return And;
}(GroupBool));
Or = (function(superclass){
  var prototype = extend$((import$(Or, superclass).displayName = 'Or', Or), superclass).prototype, constructor = Or;
  prototype.toString = function(){
    return ';';
  };
  function Or(){
    Or.superclass.apply(this, arguments);
  }
  return Or;
}(GroupBool));
NoBool = (function(superclass){
  var prototype = extend$((import$(NoBool, superclass).displayName = 'NoBool', NoBool), superclass).prototype, constructor = NoBool;
  prototype.toString = function(){
    return '';
  };
  function NoBool(){
    NoBool.superclass.apply(this, arguments);
  }
  return NoBool;
}(WrapBool));
Not = (function(superclass){
  var prototype = extend$((import$(Not, superclass).displayName = 'Not', Not), superclass).prototype, constructor = Not;
  prototype.toString = function(){
    return '!';
  };
  function Not(){
    Not.superclass.apply(this, arguments);
  }
  return Not;
}(WrapBool));
module.exports = {
  ofObj: Inquire().ofObj,
  eq: function(k, v){
    return new Pred(new Eq, k, v);
  },
  ne: function(k, v){
    return new Pred(new Ne, k, v);
  },
  gt: function(k, v){
    return new Pred(new Gt, k, v);
  },
  ge: function(k, v){
    return new Pred(new Ge, k, v);
  },
  lt: function(k, v){
    return new Pred(new Lt, k, v);
  },
  le: function(k, v){
    return new Pred(new Le, k, v);
  },
  and: function(l, r){
    return new Group(new And, l, r);
  },
  or: function(l, r){
    return new Group(new Or, l, r);
  },
  not: function(i){
    return new Wrap(new Not, i);
  }
};
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
},{"./utils.js":2,"./utils/applicative.js":3}],2:[function(require,module,exports){
// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var flatten;
  module.exports.id = function(it){
    return it;
  };
  module.exports.con = function(a, b){
    return a;
  };
  module.exports.flipCon = function(b, a){
    return a;
  };
  if (!Array.of) {
    Array.prototype.of = function(){
      return Array.prototype.slice.call(arguments);
    };
  }
  if (!Array.ap) {
    flatten = function(it){
      return it.reduce(curry$(function(x$, y$){
        return x$.concat(y$);
      }));
    };
    Array.prototype.ap = function(a2){
      return flatten(this.map(function(f){
        return a2.map(function(a){
          return f(a);
        });
      }));
    };
  }
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
}).call(this);

},{}],3:[function(require,module,exports){
// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var ref$, con, flipCon, id;
  ref$ = require('../utils.js'), con = ref$.con, flipCon = ref$.flipCon, id = ref$.id;
  /* Applicative */
  /* t a -> t (a -> b) -> t b */
  module.exports.ap = function(u, t){
    return t.ap(u);
  };
  /* t a -> t b -> t a */
  module.exports.apFirst = function(t, u){
    return liftA2(con, t, u);
  };
  /* t a -> t b -> t b */
  module.exports.apSecond = function(t, u){
    return liftA2(flipCon, t, u);
  };
  /* (a -> b) -> t a -> t b */
  module.exports.liftA1 = function(t, u){
    return u.map(t);
  };
  /* (a -> b -> c) -> t a -> t b -> t c */
  module.exports.liftA2 = function(t, u, v){
    return u.map(function(a){
      return function(b){
        return t(a, b);
      };
    }).ap(v);
  };
  /* (a -> b -> c -> d) -> t a -> t b -> t c -> t d */
  module.exports.liftA3 = function(t, u, v, w){
    return u.map(function(a){
      return function(b){
        return function(c){
          return t(a, b, c);
        };
      };
    }).ap(v).ap(w);
  };
  /* f a -> f a -> f a */
  module.exports.alt = function(t, u){
    return t.alt(u);
  };
  /* Biapplicative */
  /* t a c -> t (a -> b) (c -> d) -> t b d */
  module.exports.biap = function(u, t){
    return t.biap(u);
  };
  /* t a b -> t c d -> t a b */
  module.exports.biapFirst = function(t, u){
    return biliftA2(con, con, t, u);
  };
  /* t a b -> t c d -> t c d */
  module.exports.biapSecond = function(t, u){
    return biliftA2(flipCon, flipCon, t, u);
  };
  /* (a -> b) -> (c -> d) -> t a c -> t b d */
  module.exports.biliftA1 = function(s, t, u){
    return u.bimap(s, t);
  };
  /* (a -> b -> c) -> (d -> e -> f) -> t a d -> t b e -> t c f */
  module.exports.biliftA2 = function(s, t, u, v){
    return u.bimap(function(a){
      return function(b){
        return s(a, b);
      };
    }, function(d){
      return function(e){
        return t(d, e);
      };
    }).biap(v);
  };
  /*
    (a -> b -> c -> d) -> (e -> f -> g -> h) -> t a e -> t b f -> t c g -> t d h
  */
  module.exports.biliftA3 = function(s, t, u, v, w){
    return u.map(function(a){
      return function(b){
        return function(c){
          return s(a, b, c);
        };
      };
    }, function(e){
      return function(f){
        return function(g){
          return t(e, f, g);
        };
      };
    }).biap(v).biap(w);
  };
}).call(this);

},{"../utils.js":2}]},{},[1])
(1)
});