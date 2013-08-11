(function(){
  'use strict';
  var I, equivalent, normalize;
  I = require('../lib/inquire.js');
  equivalent = function(first, second){
    var obj, str;
    obj = JSON.stringify(normalize(first)) === JSON.stringify(normalize(second));
    str = normalize(first) + "" === normalize(second) + "";
    return obj || str;
  };
  normalize = function(it){
    var newI;
    if (it instanceof I) {
      return I()._unwrap(normalize(import$({}, it.inquiry)));
    } else if (it.bool === 'concat' && it.left.bool === 'concat') {
      newI = {
        arity: '2',
        bool: 'concat',
        left: it.left.left,
        right: {
          arity: '2',
          bool: 'concat',
          left: it.left.right,
          right: it.right
        }
      };
      newI.left = normalize(newI.left);
      newI.right = normalize(newI.right);
      return normalize(newI);
    } else if (it.arity === '2' && it.left.bool === 'empty') {
      return it.right;
    } else if (it.arity === '2' && it.right.bool === 'empty') {
      return it.left;
    } else {
      return it;
    }
  };
  module.exports = {
    equivalent: equivalent,
    normalize: normalize
  };
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
