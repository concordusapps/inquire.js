(function(){
  'use strict';
  var Inquire, toString$ = {}.toString;
  Inquire = (function(){
    Inquire.displayName = 'Inquire';
    var prototype = Inquire.prototype, constructor = Inquire;
    prototype.inquiry = null;
    function Inquire(key, val){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$._relHelper(key, val, '=');
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype._relHelper = function(key, val, op){
      var k, v;
      this.inquiry = (function(){
        var ref$;
        switch (ref$ = [key], false) {
        case !(function(it){
          return it instanceof Inquire;
        })(ref$[0]):
          return "(" + key + ")";
        case !compose$([
            (function(it){
              return 'Array' === it;
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return "(" + key.join('&') + ")";
        case !compose$([
            (function(it){
              return 'String' === it;
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return key + "" + op + val;
        case !compose$([
            (function(it){
              return 'Object' === it;
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return "(" + (function(){
            var ref$, results$ = [];
            for (k in ref$ = key) {
              v = ref$[k];
              results$.push(k + op + v);
            }
            return results$;
          }()).join('&') + ")";
        default:
          return '';
        }
      }());
      return this;
    };
    prototype.eq = function(key, val){
      return this._relHelper(key, val, '=');
    };
    prototype.neq = function(key, val){
      return this._relHelper(key, val, '!=');
    };
    prototype.gt = function(key, val){
      return this._relHelper(key, val, '>');
    };
    prototype.gte = function(key, val){
      return this._relHelper(key, val, '>=');
    };
    prototype.lt = function(key, val){
      return this._relHelper(key, val, '<');
    };
    prototype.lte = function(key, val){
      return this._relHelper(key, val, '<=');
    };
    prototype._boolHelper = function(key, val, pred){
      var k, v;
      this.inquiry += (function(){
        var ref$;
        switch (ref$ = [key], false) {
        case !(function(it){
          return it instanceof Inquire;
        })(ref$[0]):
          return pred + "(" + key + ")";
        case !compose$([
            (function(it){
              return 'Array' === it;
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return pred + "(" + key.join(pred) + ")";
        case !compose$([
            (function(it){
              return 'String' === it;
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return pred + "" + key + "=" + val;
        case !compose$([
            (function(it){
              return 'Object' === it;
            }), (function(it){
              return toString$.call(it).slice(8, -1);
            })
          ])(ref$[0]):
          return pred + "(" + (function(){
            var ref$, results$ = [];
            for (k in ref$ = key) {
              v = ref$[k];
              results$.push(k + '=' + v);
            }
            return results$;
          }()).join(pred) + ")";
        default:
          return '';
        }
      }());
      return this;
    };
    prototype.and = function(key, val){
      return this._boolHelper(key, val, '&');
    };
    prototype.or = function(key, val){
      return this._boolHelper(key, val, ';');
    };
    prototype.not = function(I){
      if (I instanceof Inquire) {
        this.inquiry = "!(" + I.inquiry + ")";
      }
      return this;
    };
    prototype.generate = function(){
      return "?" + this.inquiry;
    };
    prototype.toString = function(){
      return this.inquiry;
    };
    return Inquire;
  }());
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
  module.exports = Inquire;
  function compose$(fs){
    return function(){
      var i, args = arguments;
      for (i = fs.length; i > 0; --i) { args = [fs[i-1].apply(this, args)]; }
      return args[0];
    };
  }
}).call(this);
