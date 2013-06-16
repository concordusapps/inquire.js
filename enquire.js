(function(){
  var Enquire;
  Enquire = (function(){
    Enquire.displayName = 'Enquire';
    var prototype = Enquire.prototype, constructor = Enquire;
    function Enquire(key, val){
      this.query = key && val ? key + "=" + val : '';
    }
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
    prototype.not = function(){
      this.query = "!(" + this.query + ")";
      return this;
    };
    prototype.toString = function(){
      return "?" + this.query;
    };
    return Enquire;
  }());
  module.exports = Enquire;
}).call(this);
