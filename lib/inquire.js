(function (_ps) {
    "use strict";
    _ps.Prelude = (function (module) {
        function id(dict) {
            return dict.id;
        };
        module.id = id;
        function $less$less$less(dict) {
            return dict.$less$less$less;
        };
        module["<<<"] = $less$less$less;
        function $greater$greater$greater(dict) {
            return dict.$greater$greater$greater;
        };
        module[">>>"] = $greater$greater$greater;
        function show(dict) {
            return dict.show;
        };
        module.show = show;
        function showNumberImpl(n) {  return n.toString();};
        module.showNumberImpl = showNumberImpl;
        function read(dict) {
            return dict.read;
        };
        module.read = read;
        function readNumberImpl(n) {  return parseFloat(n);};
        module.readNumberImpl = readNumberImpl;
        function $less$dollar$greater(dict) {
            return dict.$less$dollar$greater;
        };
        module["<$>"] = $less$dollar$greater;
        function pure(dict) {
            return dict.pure;
        };
        module.pure = pure;
        function $less$times$greater(dict) {
            return dict.$less$times$greater;
        };
        module["<*>"] = $less$times$greater;
        function empty(dict) {
            return dict.empty;
        };
        module.empty = empty;
        function $less$bar$greater(dict) {
            return dict.$less$bar$greater;
        };
        module["<|>"] = $less$bar$greater;
        function $$return(dict) {
            return dict.$$return;
        };
        module["return"] = $$return;
        function $greater$greater$eq(dict) {
            return dict.$greater$greater$eq;
        };
        module[">>="] = $greater$greater$eq;
        function $plus(dict) {
            return dict.$plus;
        };
        module["+"] = $plus;
        function $minus(dict) {
            return dict.$minus;
        };
        module["-"] = $minus;
        function $times(dict) {
            return dict.$times;
        };
        module["*"] = $times;
        function $div(dict) {
            return dict.$div;
        };
        module["/"] = $div;
        function $percent(dict) {
            return dict.$percent;
        };
        module["%"] = $percent;
        function negate(dict) {
            return dict.negate;
        };
        module.negate = negate;
        function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
        module.numAdd = numAdd;
        function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
        module.numSub = numSub;
        function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
        module.numMul = numMul;
        function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
        module.numDiv = numDiv;
        function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
        module.numMod = numMod;
        function numNegate(n) {  return -n;};
        module.numNegate = numNegate;
        function $eq$eq(dict) {
            return dict.$eq$eq;
        };
        module["=="] = $eq$eq;
        function $div$eq(dict) {
            return dict.$div$eq;
        };
        module["/="] = $div$eq;
        function unsafeRefEq(r1) {  return function(r2) {    return r1 === r2;  };};
        module.unsafeRefEq = unsafeRefEq;
        function unsafeRefIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
        module.unsafeRefIneq = unsafeRefIneq;
        function $less(dict) {
            return dict.$less;
        };
        module["<"] = $less;
        function $greater(dict) {
            return dict.$greater;
        };
        module[">"] = $greater;
        function $less$eq(dict) {
            return dict.$less$eq;
        };
        module["<="] = $less$eq;
        function $greater$eq(dict) {
            return dict.$greater$eq;
        };
        module[">="] = $greater$eq;
        function numLess(n1) {  return function(n2) {    return n1 < n2;  };};
        module.numLess = numLess;
        function numLessEq(n1) {  return function(n2) {    return n1 <= n2;  };};
        module.numLessEq = numLessEq;
        function numGreater(n1) {  return function(n2) {    return n1 > n2;  };};
        module.numGreater = numGreater;
        function numGreaterEq(n1) {  return function(n2) {    return n1 >= n2;  };};
        module.numGreaterEq = numGreaterEq;
        function $amp(dict) {
            return dict.$amp;
        };
        module["&"] = $amp;
        function $bar(dict) {
            return dict.$bar;
        };
        module["|"] = $bar;
        function $up(dict) {
            return dict.$up;
        };
        module["^"] = $up;
        function shl(dict) {
            return dict.shl;
        };
        module.shl = shl;
        function shr(dict) {
            return dict.shr;
        };
        module.shr = shr;
        function zshr(dict) {
            return dict.zshr;
        };
        module.zshr = zshr;
        function complement(dict) {
            return dict.complement;
        };
        module.complement = complement;
        function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
        module.numShl = numShl;
        function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
        module.numShr = numShr;
        function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
        module.numZshr = numZshr;
        function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
        module.numAnd = numAnd;
        function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
        module.numOr = numOr;
        function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
        module.numXor = numXor;
        function numComplement(n) {  return ~n;};
        module.numComplement = numComplement;
        function $bang$bang(xs) {  return function(n) {    return xs[n];  };};
        module["!!"] = $bang$bang;
        function $amp$amp(dict) {
            return dict.$amp$amp;
        };
        module["&&"] = $amp$amp;
        function $bar$bar(dict) {
            return dict.$bar$bar;
        };
        module["||"] = $bar$bar;
        function not(dict) {
            return dict.not;
        };
        module.not = not;
        function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
        module.boolAnd = boolAnd;
        function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
        module.boolOr = boolOr;
        function boolNot(b) {  return !b;};
        module.boolNot = boolNot;
        function $plus$plus(s1) {  return function(s2) {    return s1 + s2;  };};
        module["++"] = $plus$plus;
        var showString_show = function (s) {
            if (typeof s !== "string") {
                throw "string expected";
            };
            return s;
        };
        module.showString_show = showString_show;
        var showString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showString_show
            };
        };
        module.showString = showString;
        var showNumber_show = showNumberImpl;
        module.showNumber_show = showNumber_show;
        var showNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showNumber_show
            };
        };
        module.showNumber = showNumber;
        var showBoolean_show = function (_1) {
            if (typeof _1 !== "boolean") {
                throw "boolean expected";
            };
            return (function (_2) {
                if (_2) {
                    return "true";
                };
                if (!_2) {
                    return "false";
                };
                throw "Failed pattern match";
            })(_1);
        };
        module.showBoolean_show = showBoolean_show;
        var showBoolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showBoolean_show
            };
        };
        module.showBoolean = showBoolean;
        var readString_read = function (s) {
            if (typeof s !== "string") {
                throw "string expected";
            };
            return s;
        };
        module.readString_read = readString_read;
        var readString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: readString_read
            };
        };
        module.readString = readString;
        var readNumber_read = readNumberImpl;
        module.readNumber_read = readNumber_read;
        var readNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: readNumber_read
            };
        };
        module.readNumber = readNumber;
        var readBoolean_read = function (_1) {
            if (typeof _1 !== "string") {
                throw "string expected";
            };
            return (function (_2) {
                if (_2 === "true") {
                    return true;
                };
                return false;
                throw "Failed pattern match";
            })(_1);
        };
        module.readBoolean_read = readBoolean_read;
        var readBoolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: readBoolean_read
            };
        };
        module.readBoolean = readBoolean;
        var ordNumber_$less$eq = numLessEq;
        module.ordNumber_$less$eq = ordNumber_$less$eq;
        var ordNumber_$less = numLess;
        module.ordNumber_$less = ordNumber_$less;
        var ordNumber_$greater$eq = numGreaterEq;
        module.ordNumber_$greater$eq = ordNumber_$greater$eq;
        var ordNumber_$greater = numGreater;
        module.ordNumber_$greater = ordNumber_$greater;
        var ordNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less: ordNumber_$less, 
                $greater: ordNumber_$greater, 
                $less$eq: ordNumber_$less$eq, 
                $greater$eq: ordNumber_$greater$eq
            };
        };
        module.ordNumber = ordNumber;
        var numNumber_negate = numNegate;
        module.numNumber_negate = numNumber_negate;
        var numNumber_$times = numMul;
        module.numNumber_$times = numNumber_$times;
        var numNumber_$plus = numAdd;
        module.numNumber_$plus = numNumber_$plus;
        var numNumber_$percent = numMod;
        module.numNumber_$percent = numNumber_$percent;
        var numNumber_$minus = numSub;
        module.numNumber_$minus = numNumber_$minus;
        var numNumber_$div = numDiv;
        module.numNumber_$div = numNumber_$div;
        var numNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $plus: numNumber_$plus, 
                $minus: numNumber_$minus, 
                $times: numNumber_$times, 
                $div: numNumber_$div, 
                $percent: numNumber_$percent, 
                negate: numNumber_negate
            };
        };
        module.numNumber = numNumber;
        var functorFromApplicative_$less$dollar$greater = function (__dict_Applicative_0) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return function (a) {
                    return $less$times$greater(__dict_Applicative_0)(pure(__dict_Applicative_0)(f))(a);
                };
            };
        };
        module.functorFromApplicative_$less$dollar$greater = functorFromApplicative_$less$dollar$greater;
        var functorFromApplicative = function (_1) {
            return {
                $less$dollar$greater: functorFromApplicative_$less$dollar$greater(_1)
            };
        };
        module.functorFromApplicative = functorFromApplicative;
        var flip = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (b) {
                return function (a) {
                    return f(a)(b);
                };
            };
        };
        module.flip = flip;
        var eqString_$eq$eq = unsafeRefEq;
        module.eqString_$eq$eq = eqString_$eq$eq;
        var eqString_$div$eq = unsafeRefIneq;
        module.eqString_$div$eq = eqString_$div$eq;
        var eqString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqString_$eq$eq, 
                $div$eq: eqString_$div$eq
            };
        };
        module.eqString = eqString;
        var eqNumber_$eq$eq = unsafeRefEq;
        module.eqNumber_$eq$eq = eqNumber_$eq$eq;
        var eqNumber_$div$eq = unsafeRefIneq;
        module.eqNumber_$div$eq = eqNumber_$div$eq;
        var eqNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqNumber_$eq$eq, 
                $div$eq: eqNumber_$div$eq
            };
        };
        module.eqNumber = eqNumber;
        var eqBoolean_$eq$eq = unsafeRefEq;
        module.eqBoolean_$eq$eq = eqBoolean_$eq$eq;
        var eqBoolean_$div$eq = unsafeRefIneq;
        module.eqBoolean_$div$eq = eqBoolean_$div$eq;
        var eqBoolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqBoolean_$eq$eq, 
                $div$eq: eqBoolean_$div$eq
            };
        };
        module.eqBoolean = eqBoolean;
        var $$const = function (_1) {
            return function (_2) {
                return _1;
                throw "Failed pattern match";
            };
        };
        module["const"] = $$const;
        var categoryArr_id = function (x) {
            return x;
        };
        module.categoryArr_id = categoryArr_id;
        var categoryArr_$less$less$less = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (g) {
                if (typeof g !== "function") {
                    throw "function expected";
                };
                return function (x) {
                    return f(g(x));
                };
            };
        };
        module.categoryArr_$less$less$less = categoryArr_$less$less$less;
        var categoryArr_$greater$greater$greater = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (g) {
                if (typeof g !== "function") {
                    throw "function expected";
                };
                return function (x) {
                    return g(f(x));
                };
            };
        };
        module.categoryArr_$greater$greater$greater = categoryArr_$greater$greater$greater;
        var categoryArr = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                id: categoryArr_id, 
                $less$less$less: categoryArr_$less$less$less, 
                $greater$greater$greater: categoryArr_$greater$greater$greater
            };
        };
        module.categoryArr = categoryArr;
        var boolLikeBoolean_not = boolNot;
        module.boolLikeBoolean_not = boolLikeBoolean_not;
        var boolLikeBoolean_$bar$bar = boolOr;
        module.boolLikeBoolean_$bar$bar = boolLikeBoolean_$bar$bar;
        var boolLikeBoolean_$amp$amp = boolAnd;
        module.boolLikeBoolean_$amp$amp = boolLikeBoolean_$amp$amp;
        var boolLikeBoolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $amp$amp: boolLikeBoolean_$amp$amp, 
                $bar$bar: boolLikeBoolean_$bar$bar, 
                not: boolLikeBoolean_not
            };
        };
        module.boolLikeBoolean = boolLikeBoolean;
        var eqArray_$eq$eq = function (__dict_Eq_1) {
            return function (_1) {
                if (!Array.isArray(_1)) {
                    throw "Array expected";
                };
                return function (_2) {
                    if (!Array.isArray(_2)) {
                        throw "Array expected";
                    };
                    return (function (_3, _4) {
                        if (_3.length === 0) {
                            if (_4.length === 0) {
                                return true;
                            };
                        };
                        if (_3.length > 0) {
                            var _8 = _3.slice(1);
                            if (_4.length > 0) {
                                var _6 = _4.slice(1);
                                return $amp$amp(boolLikeBoolean({}))($eq$eq(__dict_Eq_1)(_3[0])(_4[0]))($eq$eq(eqArray(__dict_Eq_1))(_8)(_6));
                            };
                        };
                        return false;
                        throw "Failed pattern match";
                    })(_1, _2);
                };
            };
        };
        module.eqArray_$eq$eq = eqArray_$eq$eq;
        var eqArray = function (_1) {
            return {
                $eq$eq: eqArray_$eq$eq(_1), 
                $div$eq: eqArray_$div$eq(_1)
            };
        };
        module.eqArray = eqArray;
        var eqArray_$div$eq = function (__dict_Eq_2) {
            return function (xs) {
                if (!Array.isArray(xs)) {
                    throw "Array expected";
                };
                return function (ys) {
                    if (!Array.isArray(ys)) {
                        throw "Array expected";
                    };
                    return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_2))(xs)(ys));
                };
            };
        };
        module.eqArray_$div$eq = eqArray_$div$eq;
        var bitsNumber_zshr = numZshr;
        module.bitsNumber_zshr = bitsNumber_zshr;
        var bitsNumber_shr = numShr;
        module.bitsNumber_shr = bitsNumber_shr;
        var bitsNumber_shl = numShl;
        module.bitsNumber_shl = bitsNumber_shl;
        var bitsNumber_complement = numComplement;
        module.bitsNumber_complement = bitsNumber_complement;
        var bitsNumber_$up = numXor;
        module.bitsNumber_$up = bitsNumber_$up;
        var bitsNumber_$bar = numOr;
        module.bitsNumber_$bar = bitsNumber_$bar;
        var bitsNumber_$amp = numAnd;
        module.bitsNumber_$amp = bitsNumber_$amp;
        var bitsNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $amp: bitsNumber_$amp, 
                $bar: bitsNumber_$bar, 
                $up: bitsNumber_$up, 
                shl: bitsNumber_shl, 
                shr: bitsNumber_shr, 
                zshr: bitsNumber_zshr, 
                complement: bitsNumber_complement
            };
        };
        module.bitsNumber = bitsNumber;
        var applicativeFromMonad_pure = function (__dict_Monad_3) {
            return $$return(__dict_Monad_3);
        };
        module.applicativeFromMonad_pure = applicativeFromMonad_pure;
        var applicativeFromMonad_$less$times$greater = function (__dict_Monad_4) {
            return function (f) {
                return function (a) {
                    return $greater$greater$eq(__dict_Monad_4)(f)(function (f$prime) {
                        if (typeof f$prime !== "function") {
                            throw "function expected";
                        };
                        return $greater$greater$eq(__dict_Monad_4)(a)(function (a$prime) {
                            return $$return(__dict_Monad_4)(f$prime(a$prime));
                        });
                    });
                };
            };
        };
        module.applicativeFromMonad_$less$times$greater = applicativeFromMonad_$less$times$greater;
        var applicativeFromMonad = function (_1) {
            return {
                pure: applicativeFromMonad_pure(_1), 
                $less$times$greater: applicativeFromMonad_$less$times$greater(_1)
            };
        };
        module.applicativeFromMonad = applicativeFromMonad;
        var $dollar = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (x) {
                return f(x);
            };
        };
        module["$"] = $dollar;
        var $hash = function (x) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return f(x);
            };
        };
        module["#"] = $hash;
        return module;
    })(_ps.Prelude || {});
    _ps.Math = (function (module) {
        function abs(n){  return Math.abs(n);};
        module.abs = abs;
        function acos(n){  return Math.acos(n);};
        module.acos = acos;
        function asin(n){  return Math.asin(n);};
        module.asin = asin;
        function atan(n){  return Math.atan(n);};
        module.atan = atan;
        function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
        module.atan2 = atan2;
        function aceil(n){  return Math.aceil(n);};
        module.aceil = aceil;
        function cos(n){  return Math.cos(n);};
        module.cos = cos;
        function exp(n){  return Math.exp(n);};
        module.exp = exp;
        function floor(n){  return Math.floor(n);};
        module.floor = floor;
        function log(n){  return Math.log(n);};
        module.log = log;
        function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
        module.max = max;
        function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
        module.min = min;
        function pow(n){  return function(p) {    return Math.pow(n, p);  }};
        module.pow = pow;
        function round(n){  return Math.round(n);};
        module.round = round;
        function sin(n){  return Math.sin(n);};
        module.sin = sin;
        function sqrt(n){  return Math.sqrt(n);};
        module.sqrt = sqrt;
        function tan(n){  return Math.tan(n);};
        module.tan = tan;
        var e       = Math.E;;
        module.e = e;
        var ln2     = Math.LN2;;
        module.ln2 = ln2;
        var ln10    = Math.LN10;;
        module.ln10 = ln10;
        var log2e   = Math.LOG2E;;
        module.log2e = log2e;
        var log10e  = Math.LOG10E;;
        module.log10e = log10e;
        var pi      = Math.PI;;
        module.pi = pi;
        var sqrt1_2 = Math.SQRT1_2;;
        module.sqrt1_2 = sqrt1_2;
        var sqrt2   = Math.SQRT2;;
        module.sqrt2 = sqrt2;
        return module;
    })(_ps.Math || {});
    _ps.Global = (function (module) {
        var nan = NaN;;
        module.nan = nan;
        var infinity = Infinity;;
        module.infinity = infinity;
        function toExponential(n) {  return n.toExponential();};
        module.toExponential = toExponential;
        function toFixed(d) {  return function(n) {    return n.toFixed(d);  };};
        module.toFixed = toFixed;
        function toPrecision(d) {  return function(n) {    return n.toPrecision(d);  };};
        module.toPrecision = toPrecision;
        return module;
    })(_ps.Global || {});
    _ps.Data_String_Regex = (function (module) {
        function regex(s1) {  return function(s2) {    return new Regex(s1, s2);  };};
        module.regex = regex;
        function test(r) {  return function (s) {    return r.test(s);  };};
        module.test = test;
        function match(r) {  return function (s) {    return s.match(r);   };};
        module.match = match;
        function replaceR(r) {  return function(s1) {    return function(s2) {      return s2.replace(r, s1);    };  };};
        module.replaceR = replaceR;
        function search(r) {  return function (s) {    return s.search(r);  };};
        module.search = search;
        return module;
    })(_ps.Data_String_Regex || {});
    _ps.Data_String = (function (module) {
        function lengthS(s) {  return s.length;};
        module.lengthS = lengthS;
        function charAt(i) {  return function(s) {    return s.charAt(i);   };};
        module.charAt = charAt;
        function indexOfS(s1) {  return function(s2) {    return s1.indexOf(s2);  }; };
        module.indexOfS = indexOfS;
        function lastIndexOfS(s1) {  return function(s2) {    return s1.lastIndexOf(s2);  };};
        module.lastIndexOfS = lastIndexOfS;
        function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
        module.localeCompare = localeCompare;
        function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
        module.replace = replace;
        function sliceS(st) {  return function(e) {    return function(s) {      return s.slice(st, e);    };  };};
        module.sliceS = sliceS;
        function split(sep) {  return function(s) {    return s.split(s);  };};
        module.split = split;
        function substr(n1) {  return function(n2) {    return function(s) {      return s.substr(n1, n2);    };  };};
        module.substr = substr;
        function substring(n1) {  return function(n2) {    return function(s) {      return s.substring(n1, n2);    };  };};
        module.substring = substring;
        function toLower(s) {  return s.toLowerCase();};
        module.toLower = toLower;
        function toUpper(s) {  return s.toUpperCase();};
        module.toUpper = toUpper;
        function trim(s) {  return s.trim();};
        module.trim = trim;
        return module;
    })(_ps.Data_String || {});
    _ps.Data_Maybe = (function (module) {
        var Nothing = {
            ctor: "Data.Maybe.Nothing", 
            values: [  ]
        };
        module.Nothing = Nothing;
        var Just = function (value0) {
            return {
                ctor: "Data.Maybe.Just", 
                values: [ value0 ]
            };
        };
        module.Just = Just;
        var showMaybe_show = function (__dict_Show_5) {
            return function (_1) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return "Just " + _ps.Prelude.show(__dict_Show_5)(_1.values[0]);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return "Nothing";
                };
                throw "Failed pattern match";
            };
        };
        module.showMaybe_show = showMaybe_show;
        var showMaybe = function (_1) {
            return {
                show: showMaybe_show(_1)
            };
        };
        module.showMaybe = showMaybe;
        var monadMaybe_$$return = Just;
        module.monadMaybe_$$return = monadMaybe_$$return;
        var maybe = function (_1) {
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return function (_3) {
                    if (_3.ctor === "Data.Maybe.Nothing") {
                        return _1;
                    };
                    if (_3.ctor === "Data.Maybe.Just") {
                        return _2(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.maybe = maybe;
        var monadMaybe_$greater$greater$eq = function (m) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return maybe(Nothing)(f)(m);
            };
        };
        module.monadMaybe_$greater$greater$eq = monadMaybe_$greater$greater$eq;
        var monadMaybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadMaybe_$$return, 
                $greater$greater$eq: monadMaybe_$greater$greater$eq
            };
        };
        module.monadMaybe = monadMaybe;
        var functorMaybe_$less$dollar$greater = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (_2.ctor === "Data.Maybe.Just") {
                    return Just(_1(_2.values[0]));
                };
                return Nothing;
                throw "Failed pattern match";
            };
        };
        module.functorMaybe_$less$dollar$greater = functorMaybe_$less$dollar$greater;
        var functorMaybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorMaybe_$less$dollar$greater
            };
        };
        module.functorMaybe = functorMaybe;
        var fromMaybe = function (a) {
            return maybe(a)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
        };
        module.fromMaybe = fromMaybe;
        var applicativeMaybe_pure = Just;
        module.applicativeMaybe_pure = applicativeMaybe_pure;
        var applicativeMaybe_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return _ps.Prelude["<$>"](functorMaybe({}))(_1.values[0])(_2);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        };
        module.applicativeMaybe_$less$times$greater = applicativeMaybe_$less$times$greater;
        var applicativeMaybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                pure: applicativeMaybe_pure, 
                $less$times$greater: applicativeMaybe_$less$times$greater
            };
        };
        module.applicativeMaybe = applicativeMaybe;
        return module;
    })(_ps.Data_Maybe || {});
    _ps.Data_Functor = (function (module) {
        function $less$dollar$dollar$greater(dict) {
            return dict.$less$dollar$dollar$greater;
        };
        module["<$$>"] = $less$dollar$dollar$greater;
        var second = function (__dict_BiFunctor_6) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return $less$dollar$dollar$greater(__dict_BiFunctor_6)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(f);
            };
        };
        module.second = second;
        var map = function (__dict_Functor_7) {
            return _ps.Prelude["<$>"](__dict_Functor_7);
        };
        module.map = map;
        var first = function (__dict_BiFunctor_8) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return $less$dollar$dollar$greater(__dict_BiFunctor_8)(f)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        module.first = first;
        var bimap = function (__dict_BiFunctor_9) {
            return $less$dollar$dollar$greater(__dict_BiFunctor_9);
        };
        module.bimap = bimap;
        return module;
    })(_ps.Data_Functor || {});
    _ps.Data_Eq = (function (module) {
        var Ref = function (value0) {
            return {
                ctor: "Data.Eq.Ref", 
                values: [ value0 ]
            };
        };
        module.Ref = Ref;
        var liftRef = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return function (_3) {
                    return _1(_2.values[0])(_3.values[0]);
                    throw "Failed pattern match";
                };
            };
        };
        module.liftRef = liftRef;
        var refEq = liftRef(_ps.Prelude.unsafeRefEq);
        module.refEq = refEq;
        var refIneq = liftRef(_ps.Prelude.unsafeRefIneq);
        module.refIneq = refIneq;
        var eqRef_$eq$eq = refEq;
        module.eqRef_$eq$eq = eqRef_$eq$eq;
        var eqRef_$div$eq = refIneq;
        module.eqRef_$div$eq = eqRef_$div$eq;
        var eqRef = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqRef_$eq$eq, 
                $div$eq: eqRef_$div$eq
            };
        };
        module.eqRef = eqRef;
        return module;
    })(_ps.Data_Eq || {});
    _ps.Data_Enum = (function (module) {
        function toEnum(dict) {
            return dict.toEnum;
        };
        module.toEnum = toEnum;
        function fromEnum(dict) {
            return dict.fromEnum;
        };
        module.fromEnum = fromEnum;
        return module;
    })(_ps.Data_Enum || {});
    _ps.Data_Either = (function (module) {
        var Left = function (value0) {
            return {
                ctor: "Data.Either.Left", 
                values: [ value0 ]
            };
        };
        module.Left = Left;
        var Right = function (value0) {
            return {
                ctor: "Data.Either.Right", 
                values: [ value0 ]
            };
        };
        module.Right = Right;
        var showEither_show = function (__dict_Show_10) {
            return function (__dict_Show_11) {
                return function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return "Left " + _ps.Prelude.show(__dict_Show_10)(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return "Right " + _ps.Prelude.show(__dict_Show_11)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.showEither_show = showEither_show;
        var showEither = function (_1) {
            return function (_2) {
                return {
                    show: showEither_show(_1)(_2)
                };
            };
        };
        module.showEither = showEither;
        var monadEither_$$return = Right;
        module.monadEither_$$return = monadEither_$$return;
        var functorEither_$less$dollar$greater = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (_2.ctor === "Data.Either.Left") {
                    return Left(_2.values[0]);
                };
                if (_2.ctor === "Data.Either.Right") {
                    return Right(_1(_2.values[0]));
                };
                throw "Failed pattern match";
            };
        };
        module.functorEither_$less$dollar$greater = functorEither_$less$dollar$greater;
        var functorEither = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorEither_$less$dollar$greater
            };
        };
        module.functorEither = functorEither;
        var either = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _1(_3.values[0]);
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _2(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.either = either;
        var monadEither_$greater$greater$eq = either(function (e) {
            return function (_) {
                if (typeof _ !== "function") {
                    throw "function expected";
                };
                return Left(e);
            };
        })(function (a) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return f(a);
            };
        });
        module.monadEither_$greater$greater$eq = monadEither_$greater$greater$eq;
        var monadEither = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadEither_$$return, 
                $greater$greater$eq: monadEither_$greater$greater$eq
            };
        };
        module.monadEither = monadEither;
        var applicativeEither_pure = Right;
        module.applicativeEither_pure = applicativeEither_pure;
        var applicativeEither_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Either.Left") {
                    return Left(_1.values[0]);
                };
                if (_1.ctor === "Data.Either.Right") {
                    return _ps.Prelude["<$>"](functorEither({}))(_1.values[0])(_2);
                };
                throw "Failed pattern match";
            };
        };
        module.applicativeEither_$less$times$greater = applicativeEither_$less$times$greater;
        var applicativeEither = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                pure: applicativeEither_pure, 
                $less$times$greater: applicativeEither_$less$times$greater
            };
        };
        module.applicativeEither = applicativeEither;
        return module;
    })(_ps.Data_Either || {});
    _ps.Data_Array_Unsafe = (function (module) {
        var tail = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    return _4;
                };
                throw "Failed pattern match";
            })(_1);
        };
        module.tail = tail;
        var head = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length > 0) {
                    return _2[0];
                };
                throw "Failed pattern match";
            })(_1);
        };
        module.head = head;
        return module;
    })(_ps.Data_Array_Unsafe || {});
    _ps.Data_Array = (function (module) {
        function length(xs) {  return xs.length;};
        module.length = length;
        function indexOf(l) {  return function (e) {    return l.indexOf(e);  };};
        module.indexOf = indexOf;
        function lastIndexOf(l) {  return function (e) {    return l.lastIndexOf(e);  };};
        module.lastIndexOf = lastIndexOf;
        function concat(l1) {  return function (l2) {    return l1.concat(l2);  };};
        module.concat = concat;
        function joinS(l) {  return l.join();};
        module.joinS = joinS;
        function joinWith(l) {  return function (s) {    return l.join(s);  };};
        module.joinWith = joinWith;
        function push(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
        module.push = push;
        function reverse(l) {  var l1 = l.slice();  l1.reverse();   return l1;};
        module.reverse = reverse;
        function shift(l) {  var l1 = l.slice();  l1.shift();  return l1;};
        module.shift = shift;
        function slice(s) {  return function(e) {    return function (l) {      return l.slice(s, e);    };  };};
        module.slice = slice;
        function sort(l) {  var l1 = l.slice();  l1.sort();  return l1;};
        module.sort = sort;
        function insertAt(index) {  return function(a) {    return function(l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
        module.insertAt = insertAt;
        function deleteAt(index) {  return function(n) {    return function(l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
        module.deleteAt = deleteAt;
        function updateAt(index) {  return function(a) {    return function(l) {      var l1 = l.slice();      l1[index] = a;      return l1;    };   };};
        module.updateAt = updateAt;
        var tail = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    return _ps.Data_Maybe.Just(_4);
                };
                return _ps.Data_Maybe.Nothing;
                throw "Failed pattern match";
            })(_1);
        };
        module.tail = tail;
        var singleton = function (a) {
            return [ a ];
        };
        module.singleton = singleton;
        var monadArray_$$return = singleton;
        module.monadArray_$$return = monadArray_$$return;
        var isEmpty = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length === 0) {
                    return true;
                };
                return false;
                throw "Failed pattern match";
            })(_1);
        };
        module.isEmpty = isEmpty;
        var head = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length > 0) {
                    return _ps.Data_Maybe.Just(_2[0]);
                };
                return _ps.Data_Maybe.Nothing;
                throw "Failed pattern match";
            })(_1);
        };
        module.head = head;
        var foldr = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return function (_3) {
                    if (!Array.isArray(_3)) {
                        throw "Array expected";
                    };
                    return (function (_4, _5, _6) {
                        if (_6.length > 0) {
                            var _8 = _6.slice(1);
                            return _4(foldr(_4)(_5)(_8))(_6[0]);
                        };
                        if (_6.length === 0) {
                            return _5;
                        };
                        throw "Failed pattern match";
                    })(_1, _2, _3);
                };
            };
        };
        module.foldr = foldr;
        var foldl = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return function (_3) {
                    if (!Array.isArray(_3)) {
                        throw "Array expected";
                    };
                    return (function (_4, _5, _6) {
                        if (_6.length === 0) {
                            return _5;
                        };
                        if (_6.length > 0) {
                            var _8 = _6.slice(1);
                            return foldl(_4)(_4(_5)(_6[0]))(_8);
                        };
                        throw "Failed pattern match";
                    })(_1, _2, _3);
                };
            };
        };
        module.foldl = foldl;
        var find = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return (function (_3, _4) {
                    if (_4.length === 0) {
                        return _ps.Data_Maybe.Nothing;
                    };
                    if (_4.length > 0) {
                        if (_3(_4[0])) {
                            return _ps.Data_Maybe.Just(_4[0]);
                        };
                    };
                    if (_4.length > 0) {
                        var _8 = _4.slice(1);
                        return find(_3)(_8);
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.find = find;
        var drop = function (_1) {
            if (typeof _1 !== "number") {
                throw "number expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return (function (_3, _4) {
                    if (_3 === 0) {
                        return _4;
                    };
                    if (_4.length === 0) {
                        return [  ];
                    };
                    if (_4.length > 0) {
                        var _6 = _4.slice(1);
                        return drop(_3 - 1)(_6);
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.drop = drop;
        var concatMap = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return (function (_3, _4) {
                    if (_3.length === 0) {
                        return [  ];
                    };
                    if (_3.length > 0) {
                        var _6 = _3.slice(1);
                        return concat(_4(_3[0]))(concatMap(_6)(_4));
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.concatMap = concatMap;
        var monadArray_$greater$greater$eq = concatMap;
        module.monadArray_$greater$greater$eq = monadArray_$greater$greater$eq;
        var monadArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadArray_$$return, 
                $greater$greater$eq: monadArray_$greater$greater$eq
            };
        };
        module.monadArray = monadArray;
        var any = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return (function (_3, _4) {
                    if (_4.length === 0) {
                        return false;
                    };
                    if (_4.length > 0) {
                        var _6 = _4.slice(1);
                        return _3(_4[0]) || any(_3)(_6);
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.any = any;
        var alternativeArray_empty = [  ];
        module.alternativeArray_empty = alternativeArray_empty;
        var alternativeArray_$less$bar$greater = concat;
        module.alternativeArray_$less$bar$greater = alternativeArray_$less$bar$greater;
        var alternativeArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                empty: alternativeArray_empty, 
                $less$bar$greater: alternativeArray_$less$bar$greater
            };
        };
        module.alternativeArray = alternativeArray;
        var all = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return (function (_3, _4) {
                    if (_4.length === 0) {
                        return true;
                    };
                    if (_4.length > 0) {
                        var _6 = _4.slice(1);
                        return _3(_4[0]) && all(_3)(_6);
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.all = all;
        var $colon = function (a) {
            return concat([ a ]);
        };
        module[":"] = $colon;
        var filter = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return (function (_3, _4) {
                    if (_4.length === 0) {
                        return [  ];
                    };
                    if (_4.length > 0) {
                        var _6 = _4.slice(1);
                        if (_3(_4[0])) {
                            return $colon(_4[0])(filter(_3)(_6));
                        };
                    };
                    if (_4.length > 0) {
                        var _8 = _4.slice(1);
                        return filter(_3)(_8);
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.filter = filter;
        var map = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return (function (_3, _4) {
                    if (_4.length === 0) {
                        return [  ];
                    };
                    if (_4.length > 0) {
                        var _6 = _4.slice(1);
                        return $colon(_3(_4[0]))(map(_3)(_6));
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.map = map;
        var functorArray_$less$dollar$greater = map;
        module.functorArray_$less$dollar$greater = functorArray_$less$dollar$greater;
        var functorArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorArray_$less$dollar$greater
            };
        };
        module.functorArray = functorArray;
        var showArray_show = function (__dict_Show_12) {
            return function (xs) {
                if (!Array.isArray(xs)) {
                    throw "Array expected";
                };
                return "[" + joinWith(map(_ps.Prelude.show(__dict_Show_12))(xs))(",") + "]";
            };
        };
        module.showArray_show = showArray_show;
        var showArray = function (_1) {
            return {
                show: showArray_show(_1)
            };
        };
        module.showArray = showArray;
        var range = function (_1) {
            if (typeof _1 !== "number") {
                throw "number expected";
            };
            return function (_2) {
                if (typeof _2 !== "number") {
                    throw "number expected";
                };
                return (function (_3, _4) {
                    if (_3 > _4) {
                        return [  ];
                    };
                    return $colon(_3)(range(_3 + 1)(_4));
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.range = range;
        var take = function (_1) {
            if (typeof _1 !== "number") {
                throw "number expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return (function (_3, _4) {
                    if (_3 === 0) {
                        return [  ];
                    };
                    if (_4.length === 0) {
                        return [  ];
                    };
                    if (_4.length > 0) {
                        var _6 = _4.slice(1);
                        return $colon(_4[0])(take(_3 - 1)(_6));
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.take = take;
        var zipWith = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (!Array.isArray(_2)) {
                    throw "Array expected";
                };
                return function (_3) {
                    if (!Array.isArray(_3)) {
                        throw "Array expected";
                    };
                    return (function (_4, _5, _6) {
                        if (_5.length > 0) {
                            var _10 = _5.slice(1);
                            if (_6.length > 0) {
                                var _8 = _6.slice(1);
                                return $colon(_4(_5[0])(_6[0]))(zipWith(_4)(_10)(_8));
                            };
                        };
                        return [  ];
                        throw "Failed pattern match";
                    })(_1, _2, _3);
                };
            };
        };
        module.zipWith = zipWith;
        return module;
    })(_ps.Data_Array || {});
    _ps.Data_Monoid = (function (module) {
        function mempty(dict) {
            return dict.mempty;
        };
        module.mempty = mempty;
        function $less$greater(dict) {
            return dict.$less$greater;
        };
        module["<>"] = $less$greater;
        var monoidString_mempty = "";
        module.monoidString_mempty = monoidString_mempty;
        var monoidString_$less$greater = _ps.Prelude["++"];
        module.monoidString_$less$greater = monoidString_$less$greater;
        var monoidString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: monoidString_mempty, 
                $less$greater: monoidString_$less$greater
            };
        };
        module.monoidString = monoidString;
        var monoidArray_mempty = [  ];
        module.monoidArray_mempty = monoidArray_mempty;
        var monoidArray_$less$greater = _ps.Data_Array.concat;
        module.monoidArray_$less$greater = monoidArray_$less$greater;
        var monoidArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: monoidArray_mempty, 
                $less$greater: monoidArray_$less$greater
            };
        };
        module.monoidArray = monoidArray;
        var mconcat = function (__dict_Monoid_13) {
            return _ps.Data_Array.foldl($less$greater(__dict_Monoid_13))(mempty(__dict_Monoid_13));
        };
        module.mconcat = mconcat;
        return module;
    })(_ps.Data_Monoid || {});
    _ps.Data_Foldable = (function (module) {
        function foldr(dict) {
            return dict.foldr;
        };
        module.foldr = foldr;
        function foldl(dict) {
            return dict.foldl;
        };
        module.foldl = foldl;
        function bifoldr(dict) {
            return dict.bifoldr;
        };
        module.bifoldr = bifoldr;
        function bifoldl(dict) {
            return dict.bifoldl;
        };
        module.bifoldl = bifoldl;
        var foldMap = function (__dict_Foldable_14) {
            return function (__dict_Monoid_15) {
                return function (f) {
                    if (typeof f !== "function") {
                        throw "function expected";
                    };
                    return function (t) {
                        return foldr(__dict_Foldable_14)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Monoid["<>"](__dict_Monoid_15))(f))(_ps.Data_Monoid.mempty(__dict_Monoid_15))(t);
                    };
                };
            };
        };
        module.foldMap = foldMap;
        return module;
    })(_ps.Data_Foldable || {});
    _ps.Data_Traversable = (function (module) {
        function traverse(dict) {
            return dict.traverse;
        };
        module.traverse = traverse;
        function bitraverse(dict) {
            return dict.bitraverse;
        };
        module.bitraverse = bitraverse;
        var sequence = function (__dict_Applicative_16) {
            return function (__dict_Traversable_17) {
                return function (t) {
                    return traverse(__dict_Traversable_17)(__dict_Applicative_16)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(t);
                };
            };
        };
        module.sequence = sequence;
        var bisequence = function (__dict_Applicative_18) {
            return function (__dict_BiTraversable_19) {
                return function (t) {
                    return bitraverse(__dict_BiTraversable_19)(__dict_Applicative_18)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(t);
                };
            };
        };
        module.bisequence = bisequence;
        return module;
    })(_ps.Data_Traversable || {});
    _ps.Inquire = (function (module) {
        var NOBOOL = {
            ctor: "Inquire.NOBOOL", 
            values: [  ]
        };
        module.NOBOOL = NOBOOL;
        var NOT = {
            ctor: "Inquire.NOT", 
            values: [  ]
        };
        module.NOT = NOT;
        var EQ = {
            ctor: "Inquire.EQ", 
            values: [  ]
        };
        module.EQ = EQ;
        var NE = {
            ctor: "Inquire.NE", 
            values: [  ]
        };
        module.NE = NE;
        var GT = {
            ctor: "Inquire.GT", 
            values: [  ]
        };
        module.GT = GT;
        var GE = {
            ctor: "Inquire.GE", 
            values: [  ]
        };
        module.GE = GE;
        var LT = {
            ctor: "Inquire.LT", 
            values: [  ]
        };
        module.LT = LT;
        var LE = {
            ctor: "Inquire.LE", 
            values: [  ]
        };
        module.LE = LE;
        var AND = {
            ctor: "Inquire.AND", 
            values: [  ]
        };
        module.AND = AND;
        var OR = {
            ctor: "Inquire.OR", 
            values: [  ]
        };
        module.OR = OR;
        var EmptyAnd = {
            ctor: "Inquire.EmptyAnd", 
            values: [  ]
        };
        module.EmptyAnd = EmptyAnd;
        var EmptyOr = {
            ctor: "Inquire.EmptyOr", 
            values: [  ]
        };
        module.EmptyOr = EmptyOr;
        var Pred = function (value0) {
            return function (value1) {
                return function (value2) {
                    return {
                        ctor: "Inquire.Pred", 
                        values: [ value0, value1, value2 ]
                    };
                };
            };
        };
        module.Pred = Pred;
        var Junc = function (value0) {
            return function (value1) {
                return function (value2) {
                    return {
                        ctor: "Inquire.Junc", 
                        values: [ value0, value1, value2 ]
                    };
                };
            };
        };
        module.Junc = Junc;
        var Wrap = function (value0) {
            return function (value1) {
                return {
                    ctor: "Inquire.Wrap", 
                    values: [ value0, value1 ]
                };
            };
        };
        module.Wrap = Wrap;
        function generate(i) {  var showDict = {    show: function(k) {      return k.toString();    }  };  return gen(showDict)(showDict)(i);};
        module.generate = generate;
        var traversableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                traverse: function (__dict_Applicative_21) {
                    return traversableInquire_traverse(__dict_Applicative_21);
                }
            };
        };
        module.traversableInquire = traversableInquire;
        var traversableInquire_traverse = function (__dict_Applicative_20) {
            return function (_1) {
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    if (_2.ctor === "Inquire.EmptyAnd") {
                        return _ps.Prelude.pure(__dict_Applicative_20)(EmptyAnd);
                    };
                    if (_2.ctor === "Inquire.EmptyOr") {
                        return _ps.Prelude.pure(__dict_Applicative_20)(EmptyOr);
                    };
                    if (_2.ctor === "Inquire.Pred") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_20))(Pred(_2.values[0])(_2.values[1]))(_1(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Junc") {
                        return _ps.Prelude["<*>"](__dict_Applicative_20)(_ps.Prelude["<*>"](__dict_Applicative_20)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_20))(Junc)(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_20)(_1)(_2.values[0])))(_ps.Prelude.pure(__dict_Applicative_20)(_2.values[1])))(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_20)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Wrap") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_20))(Wrap(_2.values[0]))(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_20)(_1)(_2.values[1]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.traversableInquire_traverse = traversableInquire_traverse;
        var showWrapOp_show = function (_1) {
            if (_1.ctor === "Inquire.NOBOOL") {
                return "";
            };
            if (_1.ctor === "Inquire.NOT") {
                return "!";
            };
            throw "Failed pattern match";
        };
        module.showWrapOp_show = showWrapOp_show;
        var showWrapOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showWrapOp_show
            };
        };
        module.showWrapOp = showWrapOp;
        var showRel_show = function (_1) {
            if (_1.ctor === "Inquire.EQ") {
                return "=";
            };
            if (_1.ctor === "Inquire.NE") {
                return "!=";
            };
            if (_1.ctor === "Inquire.GT") {
                return ">";
            };
            if (_1.ctor === "Inquire.GE") {
                return ">=";
            };
            if (_1.ctor === "Inquire.LT") {
                return "<";
            };
            if (_1.ctor === "Inquire.LE") {
                return "<=";
            };
            throw "Failed pattern match";
        };
        module.showRel_show = showRel_show;
        var showRel = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showRel_show
            };
        };
        module.showRel = showRel;
        var showJuncOp_show = function (_1) {
            if (_1.ctor === "Inquire.AND") {
                return "&";
            };
            if (_1.ctor === "Inquire.OR") {
                return ";";
            };
            throw "Failed pattern match";
        };
        module.showJuncOp_show = showJuncOp_show;
        var showJuncOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showJuncOp_show
            };
        };
        module.showJuncOp = showJuncOp;
        var pred = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return Pred(o.key)(o.rel)(o.val);
        };
        module.pred = pred;
        var neObj = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return pred({
                key: o.key, 
                rel: NE, 
                val: o.val
            });
        };
        module.neObj = neObj;
        var ne = function (k) {
            return function (v) {
                return neObj({
                    key: k, 
                    val: v
                });
            };
        };
        module.ne = ne;
        var monoidInquire_mempty = EmptyAnd;
        module.monoidInquire_mempty = monoidInquire_mempty;
        var monoidInquire_$less$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Inquire.EmptyAnd") {
                    return _1;
                };
                if (_1.ctor === "Inquire.EmptyAnd") {
                    return _2;
                };
                return Junc(_1)(AND)(_2);
                throw "Failed pattern match";
            };
        };
        module.monoidInquire_$less$greater = monoidInquire_$less$greater;
        var monoidInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: monoidInquire_mempty, 
                $less$greater: monoidInquire_$less$greater
            };
        };
        module.monoidInquire = monoidInquire;
        var ltObj = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return pred({
                key: o.key, 
                rel: LT, 
                val: o.val
            });
        };
        module.ltObj = ltObj;
        var lt = function (k) {
            return function (v) {
                return ltObj({
                    key: k, 
                    val: v
                });
            };
        };
        module.lt = lt;
        var leObj = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return pred({
                key: o.key, 
                rel: LE, 
                val: o.val
            });
        };
        module.leObj = leObj;
        var le = function (k) {
            return function (v) {
                return leObj({
                    key: k, 
                    val: v
                });
            };
        };
        module.le = le;
        var gtObj = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return pred({
                key: o.key, 
                rel: GT, 
                val: o.val
            });
        };
        module.gtObj = gtObj;
        var gt = function (k) {
            return function (v) {
                return gtObj({
                    key: k, 
                    val: v
                });
            };
        };
        module.gt = gt;
        var geObj = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return pred({
                key: o.key, 
                rel: GE, 
                val: o.val
            });
        };
        module.geObj = geObj;
        var ge = function (k) {
            return function (v) {
                return geObj({
                    key: k, 
                    val: v
                });
            };
        };
        module.ge = ge;
        var functorInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorInquire_$less$dollar$greater
            };
        };
        module.functorInquire = functorInquire;
        var functorInquire_$less$dollar$greater = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (_2.ctor === "Inquire.EmptyAnd") {
                    return EmptyAnd;
                };
                if (_2.ctor === "Inquire.EmptyOr") {
                    return EmptyOr;
                };
                if (_2.ctor === "Inquire.Pred") {
                    return Pred(_2.values[0])(_2.values[1])(_1(_2.values[2]));
                };
                if (_2.ctor === "Inquire.Junc") {
                    return Junc(_ps.Prelude["<$>"](functorInquire({}))(_1)(_2.values[0]))(_2.values[1])(_ps.Prelude["<$>"](functorInquire({}))(_1)(_2.values[2]));
                };
                if (_2.ctor === "Inquire.Wrap") {
                    return Wrap(_2.values[0])(_ps.Prelude["<$>"](functorInquire({}))(_1)(_2.values[1]));
                };
                throw "Failed pattern match";
            };
        };
        module.functorInquire_$less$dollar$greater = functorInquire_$less$dollar$greater;
        var foldableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                foldr: foldableInquire_foldr, 
                foldl: foldableInquire_foldl
            };
        };
        module.foldableInquire = foldableInquire;
        var foldableInquire_foldr = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Inquire.EmptyAnd") {
                        return _2;
                    };
                    if (_3.ctor === "Inquire.EmptyOr") {
                        return _2;
                    };
                    if (_3.ctor === "Inquire.Pred") {
                        return _1(_3.values[2])(_2);
                    };
                    if (_3.ctor === "Inquire.Junc") {
                        return _ps.Data_Foldable.foldr(foldableInquire({}))(_1)(_ps.Data_Foldable.foldr(foldableInquire({}))(_1)(_2)(_3.values[2]))(_3.values[0]);
                    };
                    if (_3.ctor === "Inquire.Wrap") {
                        return _ps.Data_Foldable.foldr(foldableInquire({}))(_1)(_2)(_3.values[1]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.foldableInquire_foldr = foldableInquire_foldr;
        var foldableInquire_foldl = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (z) {
                return function (i) {
                    return _ps.Data_Foldable.foldr(foldableInquire({}))(_ps.Prelude.flip(f))(z)(i);
                };
            };
        };
        module.foldableInquire_foldl = foldableInquire_foldl;
        var eqWrapOp_$eq$eq = function (_1) {
            return function (_2) {
                if (_1.ctor === "Inquire.NOBOOL") {
                    if (_2.ctor === "Inquire.NOBOOL") {
                        return true;
                    };
                };
                if (_1.ctor === "Inquire.NOT") {
                    if (_2.ctor === "Inquire.NOT") {
                        return true;
                    };
                };
                return false;
                throw "Failed pattern match";
            };
        };
        module.eqWrapOp_$eq$eq = eqWrapOp_$eq$eq;
        var eqWrapOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqWrapOp_$eq$eq, 
                $div$eq: eqWrapOp_$div$eq
            };
        };
        module.eqWrapOp = eqWrapOp;
        var eqWrapOp_$div$eq = function (r) {
            return function (r$prime) {
                return !_ps.Prelude["=="](eqWrapOp({}))(r)(r$prime);
            };
        };
        module.eqWrapOp_$div$eq = eqWrapOp_$div$eq;
        var eqRel_$eq$eq = function (_1) {
            return function (_2) {
                if (_1.ctor === "Inquire.EQ") {
                    if (_2.ctor === "Inquire.EQ") {
                        return true;
                    };
                };
                if (_1.ctor === "Inquire.NE") {
                    if (_2.ctor === "Inquire.NE") {
                        return true;
                    };
                };
                if (_1.ctor === "Inquire.GT") {
                    if (_2.ctor === "Inquire.GT") {
                        return true;
                    };
                };
                if (_1.ctor === "Inquire.GE") {
                    if (_2.ctor === "Inquire.GE") {
                        return true;
                    };
                };
                if (_1.ctor === "Inquire.LT") {
                    if (_2.ctor === "Inquire.LT") {
                        return true;
                    };
                };
                if (_1.ctor === "Inquire.LE") {
                    if (_2.ctor === "Inquire.LE") {
                        return true;
                    };
                };
                return false;
                throw "Failed pattern match";
            };
        };
        module.eqRel_$eq$eq = eqRel_$eq$eq;
        var eqRel = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqRel_$eq$eq, 
                $div$eq: eqRel_$div$eq
            };
        };
        module.eqRel = eqRel;
        var eqRel_$div$eq = function (r) {
            return function (r$prime) {
                return !_ps.Prelude["=="](eqRel({}))(r)(r$prime);
            };
        };
        module.eqRel_$div$eq = eqRel_$div$eq;
        var eqObj = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return pred({
                key: o.key, 
                rel: EQ, 
                val: o.val
            });
        };
        module.eqObj = eqObj;
        var eqJuncOp_$eq$eq = function (_1) {
            return function (_2) {
                if (_1.ctor === "Inquire.AND") {
                    if (_2.ctor === "Inquire.AND") {
                        return true;
                    };
                };
                if (_1.ctor === "Inquire.OR") {
                    if (_2.ctor === "Inquire.OR") {
                        return true;
                    };
                };
                return false;
                throw "Failed pattern match";
            };
        };
        module.eqJuncOp_$eq$eq = eqJuncOp_$eq$eq;
        var eqJuncOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqJuncOp_$eq$eq, 
                $div$eq: eqJuncOp_$div$eq
            };
        };
        module.eqJuncOp = eqJuncOp;
        var eqJuncOp_$div$eq = function (r) {
            return function (r$prime) {
                return !_ps.Prelude["=="](eqJuncOp({}))(r)(r$prime);
            };
        };
        module.eqJuncOp_$div$eq = eqJuncOp_$div$eq;
        var showInquire_show = function (__dict_Show_22) {
            return function (__dict_Show_23) {
                return function (_1) {
                    if (_1.ctor === "Inquire.EmptyAnd") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.EmptyOr") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.Pred") {
                        return _ps.Prelude.show(__dict_Show_22)(_1.values[0]) + _ps.Prelude.show(showRel({}))(_1.values[1]) + _ps.Prelude.show(__dict_Show_23)(_1.values[2]);
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Pred") {
                            if ((_1.values[2]).ctor === "Inquire.Pred") {
                                return _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[2]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Pred") {
                            return _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[2]) + ")";
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[2]).ctor === "Inquire.Pred") {
                            return "(" + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[2]);
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Junc") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (_ps.Prelude["=="](eqJuncOp({}))((_1.values[0]).values[1])(_1.values[1]) && _ps.Prelude["=="](eqJuncOp({}))(_1.values[1])((_1.values[2]).values[1])) {
                                    return _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))((_1.values[0]).values[1]) + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[2]);
                                };
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Junc") {
                            if (_ps.Prelude["=="](eqJuncOp({}))((_1.values[0]).values[1])(_1.values[1])) {
                                return _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))((_1.values[0]).values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[2]) + ")";
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[2]).ctor === "Inquire.Junc") {
                            if (_ps.Prelude["=="](eqJuncOp({}))(_1.values[1])((_1.values[2]).values[1])) {
                                return "(" + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[2]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        return "(" + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[2]) + ")";
                    };
                    if (_1.ctor === "Inquire.Wrap") {
                        if ((_1.values[0]).ctor === "Inquire.NOBOOL") {
                            if ((_1.values[1]).ctor === "Inquire.Wrap") {
                                return _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[1]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Wrap") {
                        if ((_1.values[1]).ctor === "Inquire.Wrap") {
                            if (((_1.values[1]).values[0]).ctor === "Inquire.NOBOOL") {
                                return _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[1]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Wrap") {
                        return _ps.Prelude.show(showWrapOp({}))(_1.values[0]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_22)(__dict_Show_23))(_1.values[1]) + ")";
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.showInquire_show = showInquire_show;
        var showInquire = function (_1) {
            return function (_2) {
                return {
                    show: showInquire_show(_1)(_2)
                };
            };
        };
        module.showInquire = showInquire;
        var gen = function (__dict_Show_26) {
            return function (__dict_Show_27) {
                return function (i) {
                    return _ps.Prelude.show(showInquire(__dict_Show_26)(__dict_Show_27))(i);
                };
            };
        };
        module.gen = gen;
        var eqInquire = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqInquire_$eq$eq(_1)(_2), 
                    $div$eq: eqInquire_$div$eq(_1)(_2)
                };
            };
        };
        module.eqInquire = eqInquire;
        var eqInquire_$eq$eq = function (__dict_Eq_28) {
            return function (__dict_Eq_29) {
                return function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Inquire.EmptyAnd") {
                            if (_2.ctor === "Inquire.EmptyAnd") {
                                return true;
                            };
                        };
                        if (_1.ctor === "Inquire.EmptyOr") {
                            if (_2.ctor === "Inquire.EmptyOr") {
                                return true;
                            };
                        };
                        if (_1.ctor === "Inquire.Pred") {
                            if (_2.ctor === "Inquire.Pred") {
                                return _ps.Prelude["=="](__dict_Eq_28)(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](eqRel({}))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](__dict_Eq_29)(_1.values[2])(_2.values[2]);
                            };
                        };
                        if (_1.ctor === "Inquire.Junc") {
                            if (_2.ctor === "Inquire.Junc") {
                                return _ps.Prelude["=="](eqInquire(__dict_Eq_28)(__dict_Eq_29))(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](eqJuncOp({}))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](eqInquire(__dict_Eq_28)(__dict_Eq_29))(_1.values[2])(_2.values[2]);
                            };
                        };
                        if (_1.ctor === "Inquire.Wrap") {
                            if (_2.ctor === "Inquire.Wrap") {
                                return _ps.Prelude["=="](eqInquire(__dict_Eq_28)(__dict_Eq_29))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](eqWrapOp({}))(_1.values[0])(_2.values[0]);
                            };
                        };
                        return false;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module.eqInquire_$eq$eq = eqInquire_$eq$eq;
        var eqInquire_$div$eq = function (__dict_Eq_30) {
            return function (__dict_Eq_31) {
                return function (i) {
                    return function (i$prime) {
                        return !_ps.Prelude["=="](eqInquire(__dict_Eq_30)(__dict_Eq_31))(i)(i$prime);
                    };
                };
            };
        };
        module.eqInquire_$div$eq = eqInquire_$div$eq;
        var idempotent = function (__dict_Eq_24) {
            return function (__dict_Eq_25) {
                return function (_1) {
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Inquire.AND") {
                            if (_ps.Prelude["=="](eqInquire(__dict_Eq_24)(__dict_Eq_25))(_1.values[0])(_1.values[2])) {
                                return _1.values[0];
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Inquire.OR") {
                            if (_ps.Prelude["=="](eqInquire(__dict_Eq_24)(__dict_Eq_25))(_1.values[0])(_1.values[2])) {
                                return _1.values[0];
                            };
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.idempotent = idempotent;
        var eq = function (k) {
            return function (v) {
                return eqObj({
                    key: k, 
                    val: v
                });
            };
        };
        module.eq = eq;
        var boolLikeInquire_not = function (_1) {
            if (_1.ctor === "Inquire.EmptyAnd") {
                return EmptyOr;
            };
            if (_1.ctor === "Inquire.EmptyOr") {
                return EmptyAnd;
            };
            return Wrap(NOT)(_1);
            throw "Failed pattern match";
        };
        module.boolLikeInquire_not = boolLikeInquire_not;
        var boolLikeInquire_$bar$bar = function (_1) {
            return function (_2) {
                if (_1.ctor === "Inquire.EmptyAnd") {
                    return EmptyAnd;
                };
                if (_2.ctor === "Inquire.EmptyAnd") {
                    return EmptyAnd;
                };
                if (_2.ctor === "Inquire.EmptyOr") {
                    return _1;
                };
                if (_1.ctor === "Inquire.EmptyOr") {
                    return _2;
                };
                return Junc(_1)(OR)(_2);
                throw "Failed pattern match";
            };
        };
        module.boolLikeInquire_$bar$bar = boolLikeInquire_$bar$bar;
        var boolLikeInquire_$amp$amp = function (_1) {
            return function (_2) {
                if (_1.ctor === "Inquire.EmptyOr") {
                    return EmptyOr;
                };
                if (_2.ctor === "Inquire.EmptyOr") {
                    return EmptyOr;
                };
                if (_2.ctor === "Inquire.EmptyAnd") {
                    return _1;
                };
                if (_1.ctor === "Inquire.EmptyAnd") {
                    return _2;
                };
                return Junc(_1)(AND)(_2);
                throw "Failed pattern match";
            };
        };
        module.boolLikeInquire_$amp$amp = boolLikeInquire_$amp$amp;
        var boolLikeInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $bar$bar: boolLikeInquire_$bar$bar, 
                $amp$amp: boolLikeInquire_$amp$amp, 
                not: boolLikeInquire_not
            };
        };
        module.boolLikeInquire = boolLikeInquire;
        var codistribute = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.OR") {
                        if ((_1.values[1]).ctor === "Inquire.AND") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Inquire.OR") {
                                    return _ps.Prelude["&&"](boolLikeInquire({}))((_1.values[2]).values[0])(_ps.Prelude["||"](boolLikeInquire({}))((_1.values[0]).values[2])((_1.values[2]).values[2]));
                                };
                            };
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.AND") {
                        if ((_1.values[1]).ctor === "Inquire.OR") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Inquire.AND") {
                                    return _ps.Prelude["||"](boolLikeInquire({}))((_1.values[2]).values[0])(_ps.Prelude["&&"](boolLikeInquire({}))((_1.values[0]).values[2])((_1.values[2]).values[2]));
                                };
                            };
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.codistribute = codistribute;
        var commute = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.AND") {
                    return _ps.Prelude["&&"](boolLikeInquire({}))(_1.values[2])(_1.values[0]);
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.OR") {
                    return _ps.Prelude["||"](boolLikeInquire({}))(_1.values[2])(_1.values[0]);
                };
            };
            throw "Failed pattern match";
        };
        module.commute = commute;
        var distribute = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.AND") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.OR") {
                            return _ps.Prelude["&&"](boolLikeInquire({}))(_ps.Prelude["||"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))(_ps.Prelude["||"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.OR") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.AND") {
                            return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude["&&"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))(_ps.Prelude["&&"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[2]));
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.distribute = distribute;
        var equiv = function (p) {
            return function (q) {
                return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude["&&"](boolLikeInquire({}))(p)(q))(_ps.Prelude["&&"](boolLikeInquire({}))(_ps.Prelude.not(boolLikeInquire({}))(p))(_ps.Prelude.not(boolLikeInquire({}))(q)));
            };
        };
        module.equiv = equiv;
        var implies = function (p) {
            return function (q) {
                return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude.not(boolLikeInquire({}))(p))(q);
            };
        };
        module.implies = implies;
        var neg = function (i) {
            return _ps.Prelude.not(boolLikeInquire({}))(i);
        };
        module.neg = neg;
        var or = function (i1) {
            return function (i2) {
                return _ps.Prelude["||"](boolLikeInquire({}))(i1)(i2);
            };
        };
        module.or = or;
        var xor = function (p) {
            return function (q) {
                return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude["&&"](boolLikeInquire({}))(p)(_ps.Prelude.not(boolLikeInquire({}))(q)))(_ps.Prelude["&&"](boolLikeInquire({}))(_ps.Prelude.not(boolLikeInquire({}))(p))(q));
            };
        };
        module.xor = xor;
        var bitraversableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                bitraverse: function (__dict_Applicative_33) {
                    return bitraversableInquire_bitraverse(__dict_Applicative_33);
                }
            };
        };
        module.bitraversableInquire = bitraversableInquire;
        var bitraversableInquire_bitraverse = function (__dict_Applicative_32) {
            return function (_1) {
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    if (typeof _2 !== "function") {
                        throw "function expected";
                    };
                    return function (_3) {
                        if (_3.ctor === "Inquire.EmptyAnd") {
                            return _ps.Prelude.pure(__dict_Applicative_32)(EmptyAnd);
                        };
                        if (_3.ctor === "Inquire.EmptyOr") {
                            return _ps.Prelude.pure(__dict_Applicative_32)(EmptyOr);
                        };
                        if (_3.ctor === "Inquire.Pred") {
                            return _ps.Prelude["<*>"](__dict_Applicative_32)(_ps.Prelude["<*>"](__dict_Applicative_32)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_32))(Pred)(_1(_3.values[0])))(_ps.Prelude.pure(__dict_Applicative_32)(_3.values[1])))(_2(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Junc") {
                            return _ps.Prelude["<*>"](__dict_Applicative_32)(_ps.Prelude["<*>"](__dict_Applicative_32)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_32))(Junc)(_ps.Data_Traversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_32)(_1)(_2)(_3.values[0])))(_ps.Prelude.pure(__dict_Applicative_32)(_3.values[1])))(_ps.Data_Traversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_32)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Wrap") {
                            return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_32))(Wrap(_3.values[0]))(_ps.Data_Traversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_32)(_1)(_2)(_3.values[1]));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module.bitraversableInquire_bitraverse = bitraversableInquire_bitraverse;
        var biFunctorInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$dollar$greater: biFunctorInquire_$less$dollar$dollar$greater
            };
        };
        module.biFunctorInquire = biFunctorInquire;
        var biFunctorInquire_$less$dollar$dollar$greater = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return function (_3) {
                    if (_3.ctor === "Inquire.EmptyAnd") {
                        return EmptyAnd;
                    };
                    if (_3.ctor === "Inquire.EmptyOr") {
                        return EmptyOr;
                    };
                    if (_3.ctor === "Inquire.Pred") {
                        return Pred(_1(_3.values[0]))(_3.values[1])(_2(_3.values[2]));
                    };
                    if (_3.ctor === "Inquire.Junc") {
                        return Junc(_ps.Data_Functor["<$$>"](biFunctorInquire({}))(_1)(_2)(_3.values[0]))(_3.values[1])(_ps.Data_Functor["<$$>"](biFunctorInquire({}))(_1)(_2)(_3.values[2]));
                    };
                    if (_3.ctor === "Inquire.Wrap") {
                        return Wrap(_3.values[0])(_ps.Data_Functor["<$$>"](biFunctorInquire({}))(_1)(_2)(_3.values[1]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.biFunctorInquire_$less$dollar$dollar$greater = biFunctorInquire_$less$dollar$dollar$greater;
        var biFoldableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                bifoldr: biFoldableInquire_bifoldr, 
                bifoldl: biFoldableInquire_bifoldl
            };
        };
        module.biFoldableInquire = biFoldableInquire;
        var biFoldableInquire_bifoldr = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return function (_3) {
                    return function (_4) {
                        if (_4.ctor === "Inquire.EmptyAnd") {
                            return _3;
                        };
                        if (_4.ctor === "Inquire.EmptyOr") {
                            return _3;
                        };
                        if (_4.ctor === "Inquire.Pred") {
                            return _1(_4.values[0])(_2(_4.values[2])(_3));
                        };
                        if (_4.ctor === "Inquire.Junc") {
                            return _ps.Data_Foldable.bifoldr(biFoldableInquire({}))(_1)(_2)(_ps.Data_Foldable.bifoldr(biFoldableInquire({}))(_1)(_2)(_3)(_4.values[2]))(_4.values[0]);
                        };
                        if (_4.ctor === "Inquire.Wrap") {
                            return _ps.Data_Foldable.bifoldr(biFoldableInquire({}))(_1)(_2)(_3)(_4.values[1]);
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module.biFoldableInquire_bifoldr = biFoldableInquire_bifoldr;
        var biFoldableInquire_bifoldl = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (g) {
                if (typeof g !== "function") {
                    throw "function expected";
                };
                return function (z) {
                    return function (i) {
                        return _ps.Data_Foldable.bifoldr(biFoldableInquire({}))(_ps.Prelude.flip(f))(_ps.Prelude.flip(g))(z)(i);
                    };
                };
            };
        };
        module.biFoldableInquire_bifoldl = biFoldableInquire_bifoldl;
        var associate = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.AND") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.AND") {
                            return _ps.Prelude["&&"](boolLikeInquire({}))(_ps.Prelude["&&"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.OR") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.OR") {
                            return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude["||"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.AND") {
                        if ((_1.values[1]).ctor === "Inquire.AND") {
                            return _ps.Prelude["&&"](boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["&&"](boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.OR") {
                        if ((_1.values[1]).ctor === "Inquire.OR") {
                            return _ps.Prelude["||"](boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["||"](boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.associate = associate;
        var assocRight = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.AND") {
                        if ((_1.values[1]).ctor === "Inquire.AND") {
                            return _ps.Prelude["&&"](boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["&&"](boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.OR") {
                        if ((_1.values[1]).ctor === "Inquire.OR") {
                            return _ps.Prelude["||"](boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["||"](boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.assocRight = assocRight;
        var assocLeft = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.AND") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.AND") {
                            return _ps.Prelude["&&"](boolLikeInquire({}))(_ps.Prelude["&&"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.OR") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.OR") {
                            return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude["||"](boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.assocLeft = assocLeft;
        var and = function (i1) {
            return function (i2) {
                return _ps.Prelude["&&"](boolLikeInquire({}))(i1)(i2);
            };
        };
        module.and = and;
        var absorb = function (__dict_Eq_34) {
            return function (__dict_Eq_35) {
                return function (_1) {
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Inquire.AND") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Inquire.OR") {
                                    if (_ps.Prelude["=="](eqInquire(__dict_Eq_34)(__dict_Eq_35))(_1.values[0])((_1.values[2]).values[0])) {
                                        return _1.values[0];
                                    };
                                };
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Inquire.OR") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Inquire.AND") {
                                    if (_ps.Prelude["=="](eqInquire(__dict_Eq_34)(__dict_Eq_35))(_1.values[0])((_1.values[2]).values[0])) {
                                        return _1.values[0];
                                    };
                                };
                            };
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.absorb = absorb;
        return module;
    })(_ps.Inquire || {});
    _ps.Data_Tuple = (function (module) {
        var Tuple = function (value0) {
            return function (value1) {
                return {
                    ctor: "Data.Tuple.Tuple", 
                    values: [ value0, value1 ]
                };
            };
        };
        module.Tuple = Tuple;
        var zip = _ps.Data_Array.zipWith(Tuple);
        module.zip = zip;
        var unzip = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    return (function (_1) {
                        return Tuple(_ps.Data_Array[":"]((_2[0]).values[0])(_1.values[0]))(_ps.Data_Array[":"]((_2[0]).values[1])(_1.values[1]));
                        throw "Failed pattern match";
                    })(unzip(_4));
                };
                if (_2.length === 0) {
                    return Tuple([  ])([  ]);
                };
                throw "Failed pattern match";
            })(_1);
        };
        module.unzip = unzip;
        var uncurry = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return _1(_2.values[0])(_2.values[1]);
                throw "Failed pattern match";
            };
        };
        module.uncurry = uncurry;
        var showTuple_show = function (__dict_Show_36) {
            return function (__dict_Show_37) {
                return function (_1) {
                    return "Tuple(" + _ps.Prelude.show(__dict_Show_36)(_1.values[0]) + ", " + _ps.Prelude.show(__dict_Show_37)(_1.values[1]) + ")";
                    throw "Failed pattern match";
                };
            };
        };
        module.showTuple_show = showTuple_show;
        var showTuple = function (_1) {
            return function (_2) {
                return {
                    show: showTuple_show(_1)(_2)
                };
            };
        };
        module.showTuple = showTuple;
        var curry = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (a) {
                return function (b) {
                    return f(Tuple(a)(b));
                };
            };
        };
        module.curry = curry;
        return module;
    })(_ps.Data_Tuple || {});
    _ps.Inquire_Combinators = (function (module) {
        function bimap(f) { return function(g) {    return function(x) {      return _ps.Data_Functor['<$$>'](_ps.Inquire.biFunctorInquire({}))(f)(g)(x);    }  }};
        module.bimap = bimap;
        function map(f) {  return function(x) {    return _ps.Prelude['<$>'](_ps.Inquire.functorInquire({}))(f)(x);  }};
        module.map = map;
        function unsafeFindByKey(v) {  return function(i) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return findByKey(_ps.Prelude.eqString({}))(v)(i);  }};
        module.unsafeFindByKey = unsafeFindByKey;
        function unsafeFindByVal(v) {  return function(i) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return findByVal(_ps.Prelude.eqString({}))(v)(i);  }};
        module.unsafeFindByVal = unsafeFindByVal;
        function unsafeRemove(i1) {  return function(i2) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return remove(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);  }};
        module.unsafeRemove = unsafeRemove;
        function unsafeRemoveAll(i1) {  return function(i2) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return removeAll(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);  }};
        module.unsafeRemoveAll = unsafeRemoveAll;
        function unsafeReplaceValByKey(v) {  return function(k) {    return function(i) {      /* We use String's eq typeclass because it uses `unsafeRefEq`*/      return replaceValByKey(_ps.Prelude.eqString({}))(v)(k)(i);    }  }};
        module.unsafeReplaceValByKey = unsafeReplaceValByKey;
        function unsafeReplaceValByVal(v1) {  return function(v2) {    return function(i) {      /* We use String's eq typeclass because it uses `unsafeRefEq`*/      return replaceValByVal(_ps.Prelude.eqString({}))(v1)(v2)(i);    }  }};
        module.unsafeReplaceValByVal = unsafeReplaceValByVal;
        var toObj = function (i) {
            return (function (updateVals) {
                if (typeof updateVals !== "function") {
                    throw "function expected";
                };
                return (function (updateKeys) {
                    if (typeof updateKeys !== "function") {
                        throw "function expected";
                    };
                    return _ps.Data_Foldable.bifoldr(_ps.Inquire.biFoldableInquire({}))(updateKeys)(updateVals)({
                        keys: [  ], 
                        vals: [  ]
                    })(i);
                })(function (k) {
                    return function (o) {
                        if (typeof o !== "object") {
                            throw "object expected";
                        };
                        if (!Array.isArray(o.keys)) {
                            throw "Array expected";
                        };
                        if (!Array.isArray(o.vals)) {
                            throw "Array expected";
                        };
                        return (function () {
                            var _1 = {};
                            for (var _2 in o) {
                                if (o.hasOwnProperty(_2)) {
                                    _1[_2] = o[_2];
                                };
                            };
                            _1.keys = _ps.Data_Array[":"](k)(o.keys);
                            return _1;
                        })();
                    };
                });
            })(function (v) {
                return function (o) {
                    if (typeof o !== "object") {
                        throw "object expected";
                    };
                    if (!Array.isArray(o.keys)) {
                        throw "Array expected";
                    };
                    if (!Array.isArray(o.vals)) {
                        throw "Array expected";
                    };
                    return (function () {
                        var _1 = {};
                        for (var _2 in o) {
                            if (o.hasOwnProperty(_2)) {
                                _1[_2] = o[_2];
                            };
                        };
                        _1.vals = _ps.Data_Array[":"](v)(o.vals);
                        return _1;
                    })();
                };
            });
        };
        module.toObj = toObj;
        var vals = function (i) {
            return (toObj(i)).vals;
        };
        module.vals = vals;
        var replaceValByVal = function (__dict_Eq_38) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Inquire.Pred") {
                            if (_ps.Prelude["=="](__dict_Eq_38)(_2)(_3.values[2])) {
                                return _ps.Inquire.Pred(_3.values[0])(_3.values[1])(_1);
                            };
                        };
                        if (_3.ctor === "Inquire.Junc") {
                            return _ps.Inquire.Junc(replaceValByVal(__dict_Eq_38)(_1)(_2)(_3.values[0]))(_3.values[1])(replaceValByVal(__dict_Eq_38)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Wrap") {
                            return _ps.Inquire.Wrap(_3.values[0])(replaceValByVal(__dict_Eq_38)(_1)(_2)(_3.values[1]));
                        };
                        return _3;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module.replaceValByVal = replaceValByVal;
        var replaceValByKey = function (__dict_Eq_39) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Inquire.Pred") {
                            if (_ps.Prelude["=="](__dict_Eq_39)(_2)(_3.values[0])) {
                                return _ps.Inquire.Pred(_2)(_3.values[1])(_1);
                            };
                        };
                        if (_3.ctor === "Inquire.Junc") {
                            return _ps.Inquire.Junc(replaceValByKey(__dict_Eq_39)(_1)(_2)(_3.values[0]))(_3.values[1])(replaceValByKey(__dict_Eq_39)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Wrap") {
                            return _ps.Inquire.Wrap(_3.values[0])(replaceValByKey(__dict_Eq_39)(_1)(_2)(_3.values[1]));
                        };
                        return _3;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module.replaceValByKey = replaceValByKey;
        var remove$prime = function (__dict_Eq_40) {
            return function (__dict_Eq_41) {
                return function (_1) {
                    if (typeof _1 !== "function") {
                        throw "function expected";
                    };
                    return function (_2) {
                        return function (_3) {
                            if (_3.ctor === "Inquire.Junc") {
                                return (function (r$prime) {
                                    return _1(_3.values[2])(r$prime) ? _ps.Inquire.Junc(remove$prime(__dict_Eq_40)(__dict_Eq_41)(_1)(_2)(_3.values[0]))(_3.values[1])(_3.values[2]) : _ps.Inquire.Junc(_3.values[0])(_3.values[1])(r$prime);
                                })(remove$prime(__dict_Eq_40)(__dict_Eq_41)(_1)(_2)(_3.values[2]));
                            };
                            if (_3.ctor === "Inquire.Wrap") {
                                return _ps.Inquire.Wrap(_3.values[0])(remove$prime(__dict_Eq_40)(__dict_Eq_41)(_1)(_2)(_3.values[1]));
                            };
                            if (_ps.Prelude["=="](_ps.Inquire.eqInquire(__dict_Eq_40)(__dict_Eq_41))(_2)(_3)) {
                                return _ps.Inquire.EmptyAnd;
                            };
                            return _3;
                            throw "Failed pattern match";
                        };
                    };
                };
            };
        };
        module.remove$prime = remove$prime;
        var removeAll = function (__dict_Eq_42) {
            return function (__dict_Eq_43) {
                return remove$prime(__dict_Eq_42)(__dict_Eq_43)(function (x) {
                    return function (y) {
                        return true;
                    };
                });
            };
        };
        module.removeAll = removeAll;
        var remove = function (__dict_Eq_44) {
            return function (__dict_Eq_45) {
                return remove$prime(__dict_Eq_44)(__dict_Eq_45)(_ps.Prelude["=="](_ps.Inquire.eqInquire(__dict_Eq_44)(__dict_Eq_45)));
            };
        };
        module.remove = remove;
        var keys = function (i) {
            return (toObj(i)).keys;
        };
        module.keys = keys;
        var toArrayObj = function (i) {
            return _ps.Data_Array.zipWith(function (x) {
                return function (y) {
                    return {
                        key: x, 
                        val: y
                    };
                };
            })(keys(i))(vals(i));
        };
        module.toArrayObj = toArrayObj;
        var toArrayPair = function (i) {
            return _ps.Data_Array.zipWith(function (x) {
                return function (y) {
                    return [ x, y ];
                };
            })(keys(i))(vals(i));
        };
        module.toArrayPair = toArrayPair;
        var toTuple = function (i) {
            return _ps.Data_Tuple.zip(keys(i))(vals(i));
        };
        module.toTuple = toTuple;
        var fromArrayPair = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length === 0) {
                    return _ps.Inquire.EmptyAnd;
                };
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    if ((_2[0]).length === 2) {
                        return _ps.Inquire.and(fromArrayPair(_4))(_ps.Inquire.eq(_2[0][0])(_2[0][1]));
                    };
                };
                throw "Failed pattern match";
            })(_1);
        };
        module.fromArrayPair = fromArrayPair;
        var fromArrayObj = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length === 0) {
                    return _ps.Inquire.EmptyAnd;
                };
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    return _ps.Inquire.and(fromArrayObj(_4))(_ps.Inquire.eq((_2[0]).key)((_2[0]).val));
                };
                throw "Failed pattern match";
            })(_1);
        };
        module.fromArrayObj = fromArrayObj;
        var findByVal = function (__dict_Eq_46) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Inquire.Pred") {
                        if (_ps.Prelude["=="](__dict_Eq_46)(_1)(_2.values[2])) {
                            return _ps.Data_Maybe.Just(_ps.Inquire.Pred(_2.values[0])(_2.values[1])(_1));
                        };
                    };
                    if (_2.ctor === "Inquire.Pred") {
                        return _ps.Data_Maybe.Nothing;
                    };
                    if (_2.ctor === "Inquire.Junc") {
                        return _ps.Data_Maybe.maybe(findByVal(__dict_Eq_46)(_1)(_2.values[0]))(_ps.Data_Maybe.Just)(findByVal(__dict_Eq_46)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Wrap") {
                        return findByVal(__dict_Eq_46)(_1)(_2.values[1]);
                    };
                    return _ps.Data_Maybe.Nothing;
                    throw "Failed pattern match";
                };
            };
        };
        module.findByVal = findByVal;
        var findByKey = function (__dict_Eq_47) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Inquire.Pred") {
                        if (_ps.Prelude["=="](__dict_Eq_47)(_1)(_2.values[0])) {
                            return _ps.Data_Maybe.Just(_ps.Inquire.Pred(_1)(_2.values[1])(_2.values[2]));
                        };
                    };
                    if (_2.ctor === "Inquire.Pred") {
                        return _ps.Data_Maybe.Nothing;
                    };
                    if (_2.ctor === "Inquire.Junc") {
                        return _ps.Data_Maybe.maybe(findByKey(__dict_Eq_47)(_1)(_2.values[0]))(_ps.Data_Maybe.Just)(findByKey(__dict_Eq_47)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Wrap") {
                        return findByKey(__dict_Eq_47)(_1)(_2.values[1]);
                    };
                    return _ps.Data_Maybe.Nothing;
                    throw "Failed pattern match";
                };
            };
        };
        module.findByKey = findByKey;
        var filterByVal = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (_2.ctor === "Inquire.Pred") {
                    return _1(_2.values[2]) ? _ps.Inquire.Pred(_2.values[0])(_2.values[1])(_2.values[2]) : _ps.Data_Monoid.mempty(_ps.Inquire.monoidInquire({}));
                };
                if (_2.ctor === "Inquire.Junc") {
                    return _ps.Inquire.Junc(filterByVal(_1)(_2.values[0]))(_2.values[1])(filterByVal(_1)(_2.values[2]));
                };
                if (_2.ctor === "Inquire.Wrap") {
                    return _ps.Inquire.Wrap(_2.values[0])(filterByVal(_1)(_2.values[1]));
                };
                return _2;
                throw "Failed pattern match";
            };
        };
        module.filterByVal = filterByVal;
        var filterByKey = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (_2.ctor === "Inquire.Pred") {
                    return _1(_2.values[0]) ? _ps.Inquire.Pred(_2.values[0])(_2.values[1])(_2.values[2]) : _ps.Data_Monoid.mempty(_ps.Inquire.monoidInquire({}));
                };
                if (_2.ctor === "Inquire.Junc") {
                    return _ps.Inquire.Junc(filterByKey(_1)(_2.values[0]))(_2.values[1])(filterByKey(_1)(_2.values[2]));
                };
                if (_2.ctor === "Inquire.Wrap") {
                    return _ps.Inquire.Wrap(_2.values[0])(filterByKey(_1)(_2.values[1]));
                };
                return _2;
                throw "Failed pattern match";
            };
        };
        module.filterByKey = filterByKey;
        return module;
    })(_ps.Inquire_Combinators || {});
    _ps.Inquire_Zipper = (function (module) {
        var L = function (value0) {
            return function (value1) {
                return {
                    ctor: "Inquire.Zipper.L", 
                    values: [ value0, value1 ]
                };
            };
        };
        module.L = L;
        var R = function (value0) {
            return function (value1) {
                return {
                    ctor: "Inquire.Zipper.R", 
                    values: [ value0, value1 ]
                };
            };
        };
        module.R = R;
        var D = function (value0) {
            return {
                ctor: "Inquire.Zipper.D", 
                values: [ value0 ]
            };
        };
        module.D = D;
        var Zip = function (value0) {
            return {
                ctor: "Inquire.Zipper.Zip", 
                values: [ value0 ]
            };
        };
        module.Zip = Zip;
        var zipUp = function (_1) {
            if ((_1.values[0]).context.length > 0) {
                var _7 = (_1.values[0]).context.slice(1);
                if (((_1.values[0]).context[0]).ctor === "Inquire.Zipper.D") {
                    return _ps.Data_Maybe.Just(Zip({
                        hole: _ps.Inquire.Wrap(((_1.values[0]).context[0]).values[0])((_1.values[0]).hole), 
                        context: _7
                    }));
                };
            };
            if ((_1.values[0]).context.length > 0) {
                var _13 = (_1.values[0]).context.slice(1);
                if (((_1.values[0]).context[0]).ctor === "Inquire.Zipper.L") {
                    return _ps.Data_Maybe.Just(Zip({
                        hole: _ps.Inquire.Junc((_1.values[0]).hole)(((_1.values[0]).context[0]).values[0])(((_1.values[0]).context[0]).values[1]), 
                        context: _13
                    }));
                };
            };
            if ((_1.values[0]).context.length > 0) {
                var _20 = (_1.values[0]).context.slice(1);
                if (((_1.values[0]).context[0]).ctor === "Inquire.Zipper.R") {
                    return _ps.Data_Maybe.Just(Zip({
                        hole: _ps.Inquire.Junc(((_1.values[0]).context[0]).values[1])(((_1.values[0]).context[0]).values[0])((_1.values[0]).hole), 
                        context: _20
                    }));
                };
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        module.zipUp = zipUp;
        var zipRight = function (_1) {
            if ((_1.values[0]).hole.ctor === "Inquire.Junc") {
                return _ps.Data_Maybe.Just(Zip({
                    hole: (_1.values[0]).hole.values[2], 
                    context: _ps.Data_Array[":"](R((_1.values[0]).hole.values[1])((_1.values[0]).hole.values[0]))((_1.values[0]).context)
                }));
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        module.zipRight = zipRight;
        var zipMost = function (f) {
            return function (iz) {
                return _ps.Data_Maybe.maybe(iz)(zipMost(f))(f(iz));
            };
        };
        module.zipMost = zipMost;
        var zipRightmost = zipMost(zipRight);
        module.zipRightmost = zipRightmost;
        var zipUpmost = zipMost(zipUp);
        module.zipUpmost = zipUpmost;
        var zipLeft = function (_1) {
            if ((_1.values[0]).hole.ctor === "Inquire.Junc") {
                return _ps.Data_Maybe.Just(Zip({
                    hole: (_1.values[0]).hole.values[0], 
                    context: _ps.Data_Array[":"](L((_1.values[0]).hole.values[1])((_1.values[0]).hole.values[2]))((_1.values[0]).context)
                }));
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        module.zipLeft = zipLeft;
        var zipLeftmost = zipMost(zipLeft);
        module.zipLeftmost = zipLeftmost;
        var zipDown = function (_1) {
            if ((_1.values[0]).hole.ctor === "Inquire.Wrap") {
                return _ps.Data_Maybe.Just(Zip({
                    hole: (_1.values[0]).hole.values[1], 
                    context: _ps.Data_Array[":"](D((_1.values[0]).hole.values[0]))((_1.values[0]).context)
                }));
            };
            if ((_1.values[0]).hole.ctor === "Inquire.Junc") {
                return zipRight(_1);
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        module.zipDown = zipDown;
        var toInquireZ = function (i) {
            return Zip({
                hole: i, 
                context: [  ]
            });
        };
        module.toInquireZ = toInquireZ;
        var modify = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return (function (_3, _4) {
                    return Zip((function () {
                        var _1 = {};
                        for (var _2 in _4.values[0]) {
                            if ((_4.values[0]).hasOwnProperty(_2)) {
                                _1[_2] = _4.values[0][_2];
                            };
                        };
                        _1.hole = _3((_4.values[0]).hole);
                        return _1;
                    })());
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.modify = modify;
        var getHole = function (_1) {
            return (_1.values[0]).hole;
            throw "Failed pattern match";
        };
        module.getHole = getHole;
        var query = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(getHole);
        };
        module.query = query;
        var fromInquireZ = function (_1) {
            if ((_1.values[0]).context.length === 0) {
                return (_1.values[0]).hole;
            };
            return _ps.Data_Maybe.maybe(_ps.Inquire.EmptyAnd)(fromInquireZ)(zipUp(_1));
            throw "Failed pattern match";
        };
        module.fromInquireZ = fromInquireZ;
        return module;
    })(_ps.Inquire_Zipper || {});
    _ps.Control_Monad_Eff = (function (module) {
        function retEff(a) {  return function() {    return a;  };};
        module.retEff = retEff;
        function bindEff(a) {  return function(f) {    return function() {      return f(a())();    };  };};
        module.bindEff = bindEff;
        function runPure(f) {  return f();};
        module.runPure = runPure;
        function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
        module.untilE = untilE;
        function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
        module.whileE = whileE;
        function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
        module.forE = forE;
        function foreachE(as) {  return function(f) {    for (var i = 0; i < as.length; i++) {      f(as[i])();    }  };};
        module.foreachE = foreachE;
        var monadEff_$greater$greater$eq = bindEff;
        module.monadEff_$greater$greater$eq = monadEff_$greater$greater$eq;
        var monadEff_$$return = retEff;
        module.monadEff_$$return = monadEff_$$return;
        var monadEff = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadEff_$$return, 
                $greater$greater$eq: monadEff_$greater$greater$eq
            };
        };
        module.monadEff = monadEff;
        return module;
    })(_ps.Control_Monad_Eff || {});
    _ps.Control_Monad_Eff_Unsafe = (function (module) {
        function unsafeInterleaveEff(f) {  return f;};
        module.unsafeInterleaveEff = unsafeInterleaveEff;
        return module;
    })(_ps.Control_Monad_Eff_Unsafe || {});
    _ps.Control_Monad_Error = (function (module) {
        function throwError(e) {  return function() {    throw e;  };};
        module.throwError = throwError;
        function catchError(c) {  return function(t) {    return function() {      try {        return t();      } catch(e) {        return c(e)();      }    };  };};
        module.catchError = catchError;
        return module;
    })(_ps.Control_Monad_Error || {});
    _ps.Control_Monad_ST = (function (module) {
        function newSTRef(val) {  return function () {    return { value: val };  };};
        module.newSTRef = newSTRef;
        function readSTRef(ref) {  return function() {    return ref.value;  };};
        module.readSTRef = readSTRef;
        function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
        module.modifySTRef = modifySTRef;
        function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
        module.writeSTRef = writeSTRef;
        function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
        module.newSTArray = newSTArray;
        function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
        module.peekSTArray = peekSTArray;
        function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
        module.pokeSTArray = pokeSTArray;
        function runST(f) {  return f;};
        module.runST = runST;
        function runSTArray(f) {  return f;};
        module.runSTArray = runSTArray;
        return module;
    })(_ps.Control_Monad_ST || {});
    _ps.Data_IORef = (function (module) {
        function newIORef(val) {  return function () {    return { value: val };  };};
        module.newIORef = newIORef;
        function readIORef(ref) {  return function() {    return ref.value;  };};
        module.readIORef = readIORef;
        function modifyIORef(ref) {  return function(f) {    return function() {      ref.value = f(ref.value);      return {};    };  };};
        module.modifyIORef = modifyIORef;
        function writeIORef(ref) {  return function(val) {    return function() {      ref.value = val;      return {};    };  };};
        module.writeIORef = writeIORef;
        function unsafeRunIORef(f) {  return f;};
        module.unsafeRunIORef = unsafeRunIORef;
        return module;
    })(_ps.Data_IORef || {});
    _ps.Debug_Trace = (function (module) {
        function trace(s) {  return function() {    console.log(s);    return {};  };};
        module.trace = trace;
        var print = function (__dict_Show_48) {
            return function (o) {
                return trace(_ps.Prelude.show(__dict_Show_48)(o));
            };
        };
        module.print = print;
        return module;
    })(_ps.Debug_Trace || {});
    _ps.Random = (function (module) {
        function random() {  return Math.random();};
        module.random = random;
        return module;
    })(_ps.Random || {});
    _ps.Control_Monad = (function (module) {
        var when = function (__dict_Monad_49) {
            return function (_1) {
                if (typeof _1 !== "boolean") {
                    throw "boolean expected";
                };
                return function (_2) {
                    if (_1) {
                        return _2;
                    };
                    if (!_1) {
                        return _ps.Prelude["return"](__dict_Monad_49)({});
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.when = when;
        var sequence = function (__dict_Monad_50) {
            return function (_1) {
                if (!Array.isArray(_1)) {
                    throw "Array expected";
                };
                return (function (_2) {
                    if (_2.length === 0) {
                        return _ps.Prelude["return"](__dict_Monad_50)([  ]);
                    };
                    if (_2.length > 0) {
                        var _4 = _2.slice(1);
                        return _ps.Prelude[">>="](__dict_Monad_50)(_2[0])(function (a) {
                            return _ps.Prelude[">>="](__dict_Monad_50)(sequence(__dict_Monad_50)(_4))(function (as) {
                                if (!Array.isArray(as)) {
                                    throw "Array expected";
                                };
                                return _ps.Prelude["return"](__dict_Monad_50)(_ps.Data_Array[":"](a)(as));
                            });
                        });
                    };
                    throw "Failed pattern match";
                })(_1);
            };
        };
        module.sequence = sequence;
        var zipWithM = function (__dict_Monad_51) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return function (xs) {
                    if (!Array.isArray(xs)) {
                        throw "Array expected";
                    };
                    return function (ys) {
                        if (!Array.isArray(ys)) {
                            throw "Array expected";
                        };
                        return sequence(__dict_Monad_51)(_ps.Data_Array.zipWith(f)(xs)(ys));
                    };
                };
            };
        };
        module.zipWithM = zipWithM;
        var replicateM = function (__dict_Monad_52) {
            return function (_1) {
                if (typeof _1 !== "number") {
                    throw "number expected";
                };
                return function (_2) {
                    if (_1 === 0) {
                        return _ps.Prelude["return"](__dict_Monad_52)([  ]);
                    };
                    return _ps.Prelude[">>="](__dict_Monad_52)(_2)(function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_52)(replicateM(__dict_Monad_52)(_1 - 1)(_2))(function (as) {
                            if (!Array.isArray(as)) {
                                throw "Array expected";
                            };
                            return _ps.Prelude["return"](__dict_Monad_52)(_ps.Data_Array[":"](a)(as));
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        module.replicateM = replicateM;
        var mapM = function (__dict_Monad_53) {
            return function (_1) {
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    if (!Array.isArray(_2)) {
                        throw "Array expected";
                    };
                    return (function (_3, _4) {
                        if (_4.length === 0) {
                            return _ps.Prelude["return"](__dict_Monad_53)([  ]);
                        };
                        if (_4.length > 0) {
                            var _6 = _4.slice(1);
                            return _ps.Prelude[">>="](__dict_Monad_53)(_3(_4[0]))(function (b) {
                                return _ps.Prelude[">>="](__dict_Monad_53)(mapM(__dict_Monad_53)(_3)(_6))(function (bs) {
                                    if (!Array.isArray(bs)) {
                                        throw "Array expected";
                                    };
                                    return _ps.Prelude["return"](__dict_Monad_53)(_ps.Data_Array[":"](b)(bs));
                                });
                            });
                        };
                        throw "Failed pattern match";
                    })(_1, _2);
                };
            };
        };
        module.mapM = mapM;
        var join = function (__dict_Monad_54) {
            return function (mm) {
                return _ps.Prelude[">>="](__dict_Monad_54)(mm)(function (m) {
                    return m;
                });
            };
        };
        module.join = join;
        var foldM = function (__dict_Monad_55) {
            return function (_1) {
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    return function (_3) {
                        if (!Array.isArray(_3)) {
                            throw "Array expected";
                        };
                        return (function (_4, _5, _6) {
                            if (_6.length === 0) {
                                return _ps.Prelude["return"](__dict_Monad_55)(_5);
                            };
                            if (_6.length > 0) {
                                var _8 = _6.slice(1);
                                return _ps.Prelude[">>="](__dict_Monad_55)(_4(_5)(_6[0]))(function (a$prime) {
                                    return foldM(__dict_Monad_55)(_4)(a$prime)(_8);
                                });
                            };
                            throw "Failed pattern match";
                        })(_1, _2, _3);
                    };
                };
            };
        };
        module.foldM = foldM;
        var $greater$eq$greater = function (__dict_Monad_56) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return function (g) {
                    if (typeof g !== "function") {
                        throw "function expected";
                    };
                    return function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_56)(f(a))(function (b) {
                            return g(b);
                        });
                    };
                };
            };
        };
        module[">=>"] = $greater$eq$greater;
        var $less$eq$less = function (__dict_Monad_57) {
            return _ps.Prelude.flip($greater$eq$greater(__dict_Monad_57));
        };
        module["<=<"] = $less$eq$less;
        return module;
    })(_ps.Control_Monad || {});
    _ps.Algebra = (function (module) {
        function $bar$plus$bar(dict) {
            return dict.$bar$plus$bar;
        };
        module["|+|"] = $bar$plus$bar;
        function ident(dict) {
            return dict.ident;
        };
        module.ident = ident;
        function inverse(dict) {
            return dict.inverse;
        };
        module.inverse = inverse;
        function $bar$times$bar(dict) {
            return dict.$bar$times$bar;
        };
        module["|*|"] = $bar$times$bar;
        function $bar$times$times$bar(dict) {
            return dict.$bar$times$times$bar;
        };
        module["|**|"] = $bar$times$times$bar;
        function $bar$minus$bar(dict) {
            return dict.$bar$minus$bar;
        };
        module["|-|"] = $bar$minus$bar;
        function zero(dict) {
            return dict.zero;
        };
        module.zero = zero;
        function one(dict) {
            return dict.one;
        };
        module.one = one;
        function recip(dict) {
            return dict.recip;
        };
        module.recip = recip;
        function $bar$div$bar(dict) {
            return dict.$bar$div$bar;
        };
        module["|/|"] = $bar$div$bar;
        function $bar$bslash$div$bar(dict) {
            return dict.$bar$bslash$div$bar;
        };
        module["|\\/|"] = $bar$bslash$div$bar;
        function top(dict) {
            return dict.top;
        };
        module.top = top;
        function bottom(dict) {
            return dict.bottom;
        };
        module.bottom = bottom;
        function $bar$tilde$bar(dict) {
            return dict.$bar$tilde$bar;
        };
        module["|~|"] = $bar$tilde$bar;
        function $bar$amp$bar(dict) {
            return dict.$bar$amp$bar;
        };
        module["|&|"] = $bar$amp$bar;
        function $bar$bar$bar(dict) {
            return dict.$bar$bar$bar;
        };
        module["|||"] = $bar$bar$bar;
        return module;
    })(_ps.Algebra || {});
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());