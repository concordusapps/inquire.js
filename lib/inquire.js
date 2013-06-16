(function(){
  var Inquire;
  Inquire = (function(){
    Inquire.displayName = 'Inquire';
    var prototype = Inquire.prototype, constructor = Inquire;
    function Inquire(key, val){
      var Q, this$ = this instanceof ctor$ ? this : new ctor$;
      this$.query = key instanceof Inquire
        ? (Q = key, "(" + Q.query + ")")
        : key && val ? key + "=" + val : '';
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype._relHelper = function(key, val, op){
      this.query = key + "" + op + val;
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
    prototype._boolHelper = function(key, val, op){
      var Q;
      if (key instanceof Inquire) {
        Q = key;
        this.query = this.query + "" + op + "(" + Q.query + ")";
      } else {
        this.query = this.query + "" + op + key + "=" + val;
      }
      return this;
    };
    prototype.and = function(key, val){
      return this._boolHelper(key, val, '&');
    };
    prototype.or = function(key, val){
      return this._boolHelper(key, val, ';');
    };
    prototype.not = function(Q){
      if (Q instanceof Inquire) {
        this.query = "!(" + Q.query + ")";
      }
      return this;
    };
    prototype.toString = function(){
      return "?" + this.query;
    };
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
    return Inquire;
  }());
  module.exports = Inquire;
}).call(this);
