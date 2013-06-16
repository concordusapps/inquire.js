(function(){
  var Inquire;
  Inquire = (function(){
    Inquire.displayName = 'Inquire';
    var prototype = Inquire.prototype, constructor = Inquire;
    function Inquire(key, val){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.query = key && val ? key + "=" + val : '';
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype._eqHelper = function(key, val, op){
      this.query = key + "" + op + val;
      return this;
    };
    prototype.eq = function(key, val){
      return this._eqHelper(key, val, '=');
    };
    prototype.neq = function(key, val){
      return this._eqHelper(key, val, '!=');
    };
    prototype.gt = function(key, val){
      return this._eqHelper(key, val, '>');
    };
    prototype.gte = function(key, val){
      return this._eqHelper(key, val, '>=');
    };
    prototype.lt = function(key, val){
      return this._eqHelper(key, val, '<');
    };
    prototype.lte = function(key, val){
      return this._eqHelper(key, val, '<=');
    };
    prototype.and = function(key, val){
      this.query = this.query + "&" + key + "=" + val;
      return this;
    };
    prototype.or = function(key, val){
      this.query = this.query + ";" + key + "=" + val;
      return this;
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
    return Inquire;
  }());
  module.exports = Inquire;
}).call(this);
