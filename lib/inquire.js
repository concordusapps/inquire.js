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
    prototype.eq = function(key, val){
      this.query = key + "=" + val;
      return this;
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
