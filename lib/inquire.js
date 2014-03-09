(function (_ps) {
    "use strict";
    _ps.Text_Parsing_Read = (function (module) {
        function read(dict) {
            return dict.read;
        };
        var readNumberImpl = parseFloat;;
        var readString_read = function (s) {
            if (typeof s !== "string") {
                throw "string expected";
            };
            return s;
        };
        var readString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: readString_read
            };
        };
        var readNumber_read = readNumberImpl;
        var readNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: readNumber_read
            };
        };
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
        var readBoolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: readBoolean_read
            };
        };
        module.readNumberImpl = readNumberImpl;
        module.read = read;
        module.readString = readString;
        module.readBoolean = readBoolean;
        module.readNumber = readNumber;
        return module;
    })(_ps.Text_Parsing_Read || {});
    _ps.Prelude = (function (module) {
        function id(dict) {
            return dict.id;
        };
        function $less$less$less(dict) {
            return dict.$less$less$less;
        };
        function $greater$greater$greater(dict) {
            return dict.$greater$greater$greater;
        };
        function show(dict) {
            return dict.show;
        };
        function showNumberImpl(n) {  return n.toString();};
        function $less$dollar$greater(dict) {
            return dict.$less$dollar$greater;
        };
        function pure(dict) {
            return dict.pure;
        };
        function $less$times$greater(dict) {
            return dict.$less$times$greater;
        };
        function empty(dict) {
            return dict.empty;
        };
        function $less$bar$greater(dict) {
            return dict.$less$bar$greater;
        };
        function $$return(dict) {
            return dict.$$return;
        };
        function $greater$greater$eq(dict) {
            return dict.$greater$greater$eq;
        };
        function $plus(dict) {
            return dict.$plus;
        };
        function $minus(dict) {
            return dict.$minus;
        };
        function $times(dict) {
            return dict.$times;
        };
        function $div(dict) {
            return dict.$div;
        };
        function $percent(dict) {
            return dict.$percent;
        };
        function negate(dict) {
            return dict.negate;
        };
        function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
        function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
        function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
        function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
        function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
        function numNegate(n) {  return -n;};
        function $eq$eq(dict) {
            return dict.$eq$eq;
        };
        function $div$eq(dict) {
            return dict.$div$eq;
        };
        function unsafeRefEq(r1) {  return function(r2) {    return r1 === r2;  };};
        function unsafeRefIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
        function $less(dict) {
            return dict.$less;
        };
        function $greater(dict) {
            return dict.$greater;
        };
        function $less$eq(dict) {
            return dict.$less$eq;
        };
        function $greater$eq(dict) {
            return dict.$greater$eq;
        };
        function numLess(n1) {  return function(n2) {    return n1 < n2;  };};
        function numLessEq(n1) {  return function(n2) {    return n1 <= n2;  };};
        function numGreater(n1) {  return function(n2) {    return n1 > n2;  };};
        function numGreaterEq(n1) {  return function(n2) {    return n1 >= n2;  };};
        function $amp(dict) {
            return dict.$amp;
        };
        function $bar(dict) {
            return dict.$bar;
        };
        function $up(dict) {
            return dict.$up;
        };
        function shl(dict) {
            return dict.shl;
        };
        function shr(dict) {
            return dict.shr;
        };
        function zshr(dict) {
            return dict.zshr;
        };
        function complement(dict) {
            return dict.complement;
        };
        function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
        function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
        function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
        function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
        function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
        function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
        function numComplement(n) {  return ~n;};
        function $bang$bang(xs) {  return function(n) {    return xs[n];  };};
        function $amp$amp(dict) {
            return dict.$amp$amp;
        };
        function $bar$bar(dict) {
            return dict.$bar$bar;
        };
        function not(dict) {
            return dict.not;
        };
        function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
        function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
        function boolNot(b) {  return !b;};
        function $plus$plus(s1) {  return function(s2) {    return s1 + s2;  };};
        var showString_show = function (s) {
            if (typeof s !== "string") {
                throw "string expected";
            };
            return s;
        };
        var showString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showString_show
            };
        };
        var showNumber_show = showNumberImpl;
        var showNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showNumber_show
            };
        };
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
        var showBoolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showBoolean_show
            };
        };
        var ordNumber_$less$eq = numLessEq;
        var ordNumber_$less = numLess;
        var ordNumber_$greater$eq = numGreaterEq;
        var ordNumber_$greater = numGreater;
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
        var numNumber_negate = numNegate;
        var numNumber_$times = numMul;
        var numNumber_$plus = numAdd;
        var numNumber_$percent = numMod;
        var numNumber_$minus = numSub;
        var numNumber_$div = numDiv;
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
        var functorFromApplicative = function (_1) {
            return {
                $less$dollar$greater: functorFromApplicative_$less$dollar$greater(_1)
            };
        };
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
        var eqString_$eq$eq = unsafeRefEq;
        var eqString_$div$eq = unsafeRefIneq;
        var eqString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqString_$eq$eq, 
                $div$eq: eqString_$div$eq
            };
        };
        var eqNumber_$eq$eq = unsafeRefEq;
        var eqNumber_$div$eq = unsafeRefIneq;
        var eqNumber = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqNumber_$eq$eq, 
                $div$eq: eqNumber_$div$eq
            };
        };
        var eqBoolean_$eq$eq = unsafeRefEq;
        var eqBoolean_$div$eq = unsafeRefIneq;
        var eqBoolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqBoolean_$eq$eq, 
                $div$eq: eqBoolean_$div$eq
            };
        };
        var $$const = function (_1) {
            return function (_2) {
                return _1;
                throw "Failed pattern match";
            };
        };
        var categoryArr_id = function (x) {
            return x;
        };
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
        var boolLikeBoolean_not = boolNot;
        var boolLikeBoolean_$bar$bar = boolOr;
        var boolLikeBoolean_$amp$amp = boolAnd;
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
        var eqArray = function (_1) {
            return {
                $eq$eq: eqArray_$eq$eq(_1), 
                $div$eq: eqArray_$div$eq(_1)
            };
        };
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
        var bitsNumber_zshr = numZshr;
        var bitsNumber_shr = numShr;
        var bitsNumber_shl = numShl;
        var bitsNumber_complement = numComplement;
        var bitsNumber_$up = numXor;
        var bitsNumber_$bar = numOr;
        var bitsNumber_$amp = numAnd;
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
        var applicativeFromMonad_pure = function (__dict_Monad_3) {
            return $$return(__dict_Monad_3);
        };
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
        var applicativeFromMonad = function (_1) {
            return {
                pure: applicativeFromMonad_pure(_1), 
                $less$times$greater: applicativeFromMonad_$less$times$greater(_1)
            };
        };
        var $dollar = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (x) {
                return f(x);
            };
        };
        var $hash = function (x) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return f(x);
            };
        };
        module["++"] = $plus$plus;
        module.boolNot = boolNot;
        module.boolOr = boolOr;
        module.boolAnd = boolAnd;
        module.not = not;
        module["||"] = $bar$bar;
        module["&&"] = $amp$amp;
        module["!!"] = $bang$bang;
        module.numComplement = numComplement;
        module.numXor = numXor;
        module.numOr = numOr;
        module.numAnd = numAnd;
        module.numZshr = numZshr;
        module.numShr = numShr;
        module.numShl = numShl;
        module.complement = complement;
        module.zshr = zshr;
        module.shr = shr;
        module.shl = shl;
        module["^"] = $up;
        module["|"] = $bar;
        module["&"] = $amp;
        module.numGreaterEq = numGreaterEq;
        module.numGreater = numGreater;
        module.numLessEq = numLessEq;
        module.numLess = numLess;
        module[">="] = $greater$eq;
        module["<="] = $less$eq;
        module[">"] = $greater;
        module["<"] = $less;
        module.unsafeRefIneq = unsafeRefIneq;
        module.unsafeRefEq = unsafeRefEq;
        module["/="] = $div$eq;
        module["=="] = $eq$eq;
        module.numNegate = numNegate;
        module.numMod = numMod;
        module.numDiv = numDiv;
        module.numMul = numMul;
        module.numSub = numSub;
        module.numAdd = numAdd;
        module.negate = negate;
        module["%"] = $percent;
        module["/"] = $div;
        module["*"] = $times;
        module["-"] = $minus;
        module["+"] = $plus;
        module[">>="] = $greater$greater$eq;
        module["return"] = $$return;
        module["<|>"] = $less$bar$greater;
        module.empty = empty;
        module["<*>"] = $less$times$greater;
        module.pure = pure;
        module["<$>"] = $less$dollar$greater;
        module.showNumberImpl = showNumberImpl;
        module.show = show;
        module["#"] = $hash;
        module["$"] = $dollar;
        module[">>>"] = $greater$greater$greater;
        module["<<<"] = $less$less$less;
        module.id = id;
        module["const"] = $$const;
        module.flip = flip;
        module.categoryArr = categoryArr;
        module.showString = showString;
        module.showBoolean = showBoolean;
        module.showNumber = showNumber;
        module.functorFromApplicative = functorFromApplicative;
        module.applicativeFromMonad = applicativeFromMonad;
        module.numNumber = numNumber;
        module.eqString = eqString;
        module.eqNumber = eqNumber;
        module.eqBoolean = eqBoolean;
        module.eqArray = eqArray;
        module.ordNumber = ordNumber;
        module.bitsNumber = bitsNumber;
        module.boolLikeBoolean = boolLikeBoolean;
        return module;
    })(_ps.Prelude || {});
    _ps.Math = (function (module) {
        function abs(n){  return Math.abs(n);};
        function acos(n){  return Math.acos(n);};
        function asin(n){  return Math.asin(n);};
        function atan(n){  return Math.atan(n);};
        function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
        function aceil(n){  return Math.aceil(n);};
        function cos(n){  return Math.cos(n);};
        function exp(n){  return Math.exp(n);};
        function floor(n){  return Math.floor(n);};
        function log(n){  return Math.log(n);};
        function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
        function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
        function pow(n){  return function(p) {    return Math.pow(n, p);  }};
        function round(n){  return Math.round(n);};
        function sin(n){  return Math.sin(n);};
        function sqrt(n){  return Math.sqrt(n);};
        function tan(n){  return Math.tan(n);};
        var e       = Math.E;;
        var ln2     = Math.LN2;;
        var ln10    = Math.LN10;;
        var log2e   = Math.LOG2E;;
        var log10e  = Math.LOG10E;;
        var pi      = Math.PI;;
        var sqrt1_2 = Math.SQRT1_2;;
        var sqrt2   = Math.SQRT2;;
        module.sqrt2 = sqrt2;
        module.sqrt1_2 = sqrt1_2;
        module.pi = pi;
        module.log10e = log10e;
        module.log2e = log2e;
        module.ln10 = ln10;
        module.ln2 = ln2;
        module.e = e;
        module.tan = tan;
        module.sqrt = sqrt;
        module.sin = sin;
        module.round = round;
        module.pow = pow;
        module.min = min;
        module.max = max;
        module.log = log;
        module.floor = floor;
        module.exp = exp;
        module.cos = cos;
        module.aceil = aceil;
        module.atan2 = atan2;
        module.atan = atan;
        module.asin = asin;
        module.acos = acos;
        module.abs = abs;
        return module;
    })(_ps.Math || {});
    _ps.Global = (function (module) {
        var nan = NaN;;
        var infinity = Infinity;;
        function toExponential(n) {  return n.toExponential();};
        function toFixed(d) {  return function(n) {    return n.toFixed(d);  };};
        function toPrecision(d) {  return function(n) {    return n.toPrecision(d);  };};
        module.isNaN = isNaN;
        module.decodeURI = decodeURI;
        module.encodeURI = encodeURI;
        module.decodeURIComponent = decodeURIComponent;
        module.encodeURIComponent = encodeURIComponent;
        module.parseInt = parseInt;
        module.parseFloat = parseFloat;
        module.isFinite = isFinite;
        module.toPrecision = toPrecision;
        module.toFixed = toFixed;
        module.toExponential = toExponential;
        module.infinity = infinity;
        module.nan = nan;
        return module;
    })(_ps.Global || {});
    _ps.Data_String_Regex = (function (module) {
        function regex(s1) {  return function(s2) {    return new Regex(s1, s2);  };};
        function test(r) {  return function (s) {    return r.test(s);  };};
        function match(r) {  return function (s) {    return s.match(r);   };};
        function replaceR(r) {  return function(s1) {    return function(s2) {      return s2.replace(r, s1);    };  };};
        function search(r) {  return function (s) {    return s.search(r);  };};
        module.search = search;
        module.replaceR = replaceR;
        module.match = match;
        module.test = test;
        module.regex = regex;
        return module;
    })(_ps.Data_String_Regex || {});
    _ps.Data_String = (function (module) {
        function lengthS(s) {  return s.length;};
        function charAt(i) {  return function(s) {    return s.charAt(i);   };};
        function indexOfS(s1) {  return function(s2) {    return s1.indexOf(s2);  }; };
        function lastIndexOfS(s1) {  return function(s2) {    return s1.lastIndexOf(s2);  };};
        function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
        function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
        function sliceS(st) {  return function(e) {    return function(s) {      return s.slice(st, e);    };  };};
        function split(sep) {  return function(s) {    return s.split(s);  };};
        function substr(n1) {  return function(n2) {    return function(s) {      return s.substr(n1, n2);    };  };};
        function substring(n1) {  return function(n2) {    return function(s) {      return s.substring(n1, n2);    };  };};
        function toLower(s) {  return s.toLowerCase();};
        function toUpper(s) {  return s.toUpperCase();};
        function trim(s) {  return s.trim();};
        module.trim = trim;
        module.toUpper = toUpper;
        module.toLower = toLower;
        module.substring = substring;
        module.substr = substr;
        module.split = split;
        module.sliceS = sliceS;
        module.replace = replace;
        module.localeCompare = localeCompare;
        module.lastIndexOfS = lastIndexOfS;
        module.indexOfS = indexOfS;
        module.charAt = charAt;
        module.lengthS = lengthS;
        return module;
    })(_ps.Data_String || {});
    _ps.Data_Maybe = (function (module) {
        var Nothing = {
            ctor: "Data.Maybe.Nothing", 
            values: [  ]
        };
        var Just = function (value0) {
            return {
                ctor: "Data.Maybe.Just", 
                values: [ value0 ]
            };
        };
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
        var showMaybe = function (_1) {
            return {
                show: showMaybe_show(_1)
            };
        };
        var monadMaybe_$$return = Just;
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
        var monadMaybe_$greater$greater$eq = function (m) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return maybe(Nothing)(f)(m);
            };
        };
        var monadMaybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadMaybe_$$return, 
                $greater$greater$eq: monadMaybe_$greater$greater$eq
            };
        };
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
        var functorMaybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorMaybe_$less$dollar$greater
            };
        };
        var fromMaybe = function (a) {
            return maybe(a)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
        };
        var eqMaybe_$eq$eq = function (__dict_Eq_6) {
            return function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return true;
                        };
                    };
                    if (_1.ctor === "Data.Maybe.Just") {
                        if (_2.ctor === "Data.Maybe.Just") {
                            return _ps.Prelude["=="](__dict_Eq_6)(_1.values[0])(_2.values[0]);
                        };
                    };
                    return false;
                    throw "Failed pattern match";
                };
            };
        };
        var eqMaybe = function (_1) {
            return {
                $eq$eq: eqMaybe_$eq$eq(_1), 
                $div$eq: eqMaybe_$div$eq(_1)
            };
        };
        var eqMaybe_$div$eq = function (__dict_Eq_7) {
            return function (a) {
                return function (b) {
                    return !_ps.Prelude["=="](eqMaybe(__dict_Eq_7))(a)(b);
                };
            };
        };
        var applicativeMaybe_pure = Just;
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
        var applicativeMaybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                pure: applicativeMaybe_pure, 
                $less$times$greater: applicativeMaybe_$less$times$greater
            };
        };
        module.Nothing = Nothing;
        module.Just = Just;
        module.fromMaybe = fromMaybe;
        module.maybe = maybe;
        module.monadMaybe = monadMaybe;
        module.applicativeMaybe = applicativeMaybe;
        module.functorMaybe = functorMaybe;
        module.showMaybe = showMaybe;
        module.eqMaybe = eqMaybe;
        return module;
    })(_ps.Data_Maybe || {});
    _ps.Data_Functor = (function (module) {
        function $less$dollar$dollar$greater(dict) {
            return dict.$less$dollar$dollar$greater;
        };
        var second = function (__dict_BiFunctor_8) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return $less$dollar$dollar$greater(__dict_BiFunctor_8)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(f);
            };
        };
        var map = function (__dict_Functor_9) {
            return _ps.Prelude["<$>"](__dict_Functor_9);
        };
        var first = function (__dict_BiFunctor_10) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return $less$dollar$dollar$greater(__dict_BiFunctor_10)(f)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        var bimap = function (__dict_BiFunctor_11) {
            return $less$dollar$dollar$greater(__dict_BiFunctor_11);
        };
        module.second = second;
        module.first = first;
        module.bimap = bimap;
        module.map = map;
        module["<$$>"] = $less$dollar$dollar$greater;
        return module;
    })(_ps.Data_Functor || {});
    _ps.Data_Eq = (function (module) {
        var Ref = function (value0) {
            return {
                ctor: "Data.Eq.Ref", 
                values: [ value0 ]
            };
        };
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
        var refEq = liftRef(_ps.Prelude.unsafeRefEq);
        var refIneq = liftRef(_ps.Prelude.unsafeRefIneq);
        var eqRef_$eq$eq = refEq;
        var eqRef_$div$eq = refIneq;
        var eqRef = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqRef_$eq$eq, 
                $div$eq: eqRef_$div$eq
            };
        };
        module.Ref = Ref;
        module.refIneq = refIneq;
        module.refEq = refEq;
        module.liftRef = liftRef;
        module.eqRef = eqRef;
        return module;
    })(_ps.Data_Eq || {});
    _ps.Data_Enum = (function (module) {
        function toEnum(dict) {
            return dict.toEnum;
        };
        function fromEnum(dict) {
            return dict.fromEnum;
        };
        module.fromEnum = fromEnum;
        module.toEnum = toEnum;
        return module;
    })(_ps.Data_Enum || {});
    _ps.Data_Either = (function (module) {
        var Left = function (value0) {
            return {
                ctor: "Data.Either.Left", 
                values: [ value0 ]
            };
        };
        var Right = function (value0) {
            return {
                ctor: "Data.Either.Right", 
                values: [ value0 ]
            };
        };
        var showEither_show = function (__dict_Show_12) {
            return function (__dict_Show_13) {
                return function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return "Left " + _ps.Prelude.show(__dict_Show_12)(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return "Right " + _ps.Prelude.show(__dict_Show_13)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var showEither = function (_1) {
            return function (_2) {
                return {
                    show: showEither_show(_1)(_2)
                };
            };
        };
        var monadEither_$$return = Right;
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
        var functorEither = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorEither_$less$dollar$greater
            };
        };
        var eqEither_$eq$eq = function (__dict_Eq_14) {
            return function (__dict_Eq_15) {
                return function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Data.Either.Left") {
                            if (_2.ctor === "Data.Either.Left") {
                                return _ps.Prelude["=="](__dict_Eq_14)(_1.values[0])(_2.values[0]);
                            };
                        };
                        if (_1.ctor === "Data.Either.Right") {
                            if (_2.ctor === "Data.Either.Right") {
                                return _ps.Prelude["=="](__dict_Eq_15)(_1.values[0])(_2.values[0]);
                            };
                        };
                        return false;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var eqEither = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqEither_$eq$eq(_1)(_2), 
                    $div$eq: eqEither_$div$eq(_1)(_2)
                };
            };
        };
        var eqEither_$div$eq = function (__dict_Eq_16) {
            return function (__dict_Eq_17) {
                return function (a) {
                    return function (b) {
                        return !_ps.Prelude["=="](eqEither(__dict_Eq_16)(__dict_Eq_17))(a)(b);
                    };
                };
            };
        };
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
        var monadEither = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadEither_$$return, 
                $greater$greater$eq: monadEither_$greater$greater$eq
            };
        };
        var applicativeEither_pure = Right;
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
        var applicativeEither = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                pure: applicativeEither_pure, 
                $less$times$greater: applicativeEither_$less$times$greater
            };
        };
        module.Left = Left;
        module.Right = Right;
        module.either = either;
        module.monadEither = monadEither;
        module.applicativeEither = applicativeEither;
        module.functorEither = functorEither;
        module.showEither = showEither;
        module.eqEither = eqEither;
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
        module.tail = tail;
        module.head = head;
        return module;
    })(_ps.Data_Array_Unsafe || {});
    _ps.Data_Array = (function (module) {
        function length(xs) {  return xs.length;};
        function indexOf(l) {  return function (e) {    return l.indexOf(e);  };};
        function lastIndexOf(l) {  return function (e) {    return l.lastIndexOf(e);  };};
        function concat(l1) {  return function (l2) {    return l1.concat(l2);  };};
        function joinS(l) {  return l.join();};
        function joinWith(l) {  return function (s) {    return l.join(s);  };};
        function push(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
        function reverse(l) {  var l1 = l.slice();  l1.reverse();   return l1;};
        function shift(l) {  var l1 = l.slice();  l1.shift();  return l1;};
        function slice(s) {  return function(e) {    return function (l) {      return l.slice(s, e);    };  };};
        function sort(l) {  var l1 = l.slice();  l1.sort();  return l1;};
        function insertAt(index) {  return function(a) {    return function(l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
        function deleteAt(index) {  return function(n) {    return function(l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
        function updateAt(index) {  return function(a) {    return function(l) {      var l1 = l.slice();      l1[index] = a;      return l1;    };   };};
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
        var singleton = function (a) {
            return [ a ];
        };
        var monadArray_$$return = singleton;
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
        var monadArray_$greater$greater$eq = concatMap;
        var monadArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadArray_$$return, 
                $greater$greater$eq: monadArray_$greater$greater$eq
            };
        };
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
        var alternativeArray_empty = [  ];
        var alternativeArray_$less$bar$greater = concat;
        var alternativeArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                empty: alternativeArray_empty, 
                $less$bar$greater: alternativeArray_$less$bar$greater
            };
        };
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
        var $colon = function (a) {
            return concat([ a ]);
        };
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
        var functorArray_$less$dollar$greater = map;
        var functorArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorArray_$less$dollar$greater
            };
        };
        var showArray_show = function (__dict_Show_18) {
            return function (xs) {
                if (!Array.isArray(xs)) {
                    throw "Array expected";
                };
                return "[" + joinWith(map(_ps.Prelude.show(__dict_Show_18))(xs))(",") + "]";
            };
        };
        var showArray = function (_1) {
            return {
                show: showArray_show(_1)
            };
        };
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
        module.take = take;
        module.drop = drop;
        module.all = all;
        module.any = any;
        module.zipWith = zipWith;
        module.range = range;
        module.isEmpty = isEmpty;
        module.find = find;
        module.filter = filter;
        module.concatMap = concatMap;
        module.singleton = singleton;
        module[":"] = $colon;
        module.updateAt = updateAt;
        module.deleteAt = deleteAt;
        module.insertAt = insertAt;
        module.sort = sort;
        module.slice = slice;
        module.shift = shift;
        module.reverse = reverse;
        module.push = push;
        module.joinWith = joinWith;
        module.joinS = joinS;
        module.concat = concat;
        module.lastIndexOf = lastIndexOf;
        module.indexOf = indexOf;
        module.length = length;
        module.foldl = foldl;
        module.foldr = foldr;
        module.map = map;
        module.tail = tail;
        module.head = head;
        module.showArray = showArray;
        module.monadArray = monadArray;
        module.functorArray = functorArray;
        module.alternativeArray = alternativeArray;
        return module;
    })(_ps.Data_Array || {});
    _ps.Data_Monoid = (function (module) {
        function mempty(dict) {
            return dict.mempty;
        };
        function $less$greater(dict) {
            return dict.$less$greater;
        };
        var monoidString_mempty = "";
        var monoidString_$less$greater = _ps.Prelude["++"];
        var monoidString = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: monoidString_mempty, 
                $less$greater: monoidString_$less$greater
            };
        };
        var monoidArray_mempty = [  ];
        var monoidArray_$less$greater = _ps.Data_Array.concat;
        var monoidArray = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: monoidArray_mempty, 
                $less$greater: monoidArray_$less$greater
            };
        };
        var mconcat = function (__dict_Monoid_19) {
            return _ps.Data_Array.foldl($less$greater(__dict_Monoid_19))(mempty(__dict_Monoid_19));
        };
        module.mconcat = mconcat;
        module["<>"] = $less$greater;
        module.mempty = mempty;
        module.monoidString = monoidString;
        module.monoidArray = monoidArray;
        return module;
    })(_ps.Data_Monoid || {});
    _ps.Data_Foldable = (function (module) {
        function foldr(dict) {
            return dict.foldr;
        };
        function foldl(dict) {
            return dict.foldl;
        };
        function bifoldr(dict) {
            return dict.bifoldr;
        };
        function bifoldl(dict) {
            return dict.bifoldl;
        };
        var foldMap = function (__dict_Foldable_20) {
            return function (__dict_Monoid_21) {
                return function (f) {
                    if (typeof f !== "function") {
                        throw "function expected";
                    };
                    return function (t) {
                        return foldr(__dict_Foldable_20)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Monoid["<>"](__dict_Monoid_21))(f))(_ps.Data_Monoid.mempty(__dict_Monoid_21))(t);
                    };
                };
            };
        };
        module.foldMap = foldMap;
        module.bifoldl = bifoldl;
        module.bifoldr = bifoldr;
        module.foldl = foldl;
        module.foldr = foldr;
        return module;
    })(_ps.Data_Foldable || {});
    _ps.Data_Traversable = (function (module) {
        function traverse(dict) {
            return dict.traverse;
        };
        function bitraverse(dict) {
            return dict.bitraverse;
        };
        var sequence = function (__dict_Applicative_22) {
            return function (__dict_Traversable_23) {
                return function (t) {
                    return traverse(__dict_Traversable_23)(__dict_Applicative_22)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(t);
                };
            };
        };
        var bisequence = function (__dict_Applicative_24) {
            return function (__dict_BiTraversable_25) {
                return function (t) {
                    return bitraverse(__dict_BiTraversable_25)(__dict_Applicative_24)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(t);
                };
            };
        };
        module.bisequence = bisequence;
        module.bitraverse = bitraverse;
        module.sequence = sequence;
        module.traverse = traverse;
        return module;
    })(_ps.Data_Traversable || {});
    _ps.Inquire = (function (module) {
        var NOBOOL = {
            ctor: "Inquire.NOBOOL", 
            values: [  ]
        };
        var NOT = {
            ctor: "Inquire.NOT", 
            values: [  ]
        };
        var EQ = {
            ctor: "Inquire.EQ", 
            values: [  ]
        };
        var NE = {
            ctor: "Inquire.NE", 
            values: [  ]
        };
        var GT = {
            ctor: "Inquire.GT", 
            values: [  ]
        };
        var GE = {
            ctor: "Inquire.GE", 
            values: [  ]
        };
        var LT = {
            ctor: "Inquire.LT", 
            values: [  ]
        };
        var LE = {
            ctor: "Inquire.LE", 
            values: [  ]
        };
        var AND = {
            ctor: "Inquire.AND", 
            values: [  ]
        };
        var OR = {
            ctor: "Inquire.OR", 
            values: [  ]
        };
        var EmptyAnd = {
            ctor: "Inquire.EmptyAnd", 
            values: [  ]
        };
        var EmptyOr = {
            ctor: "Inquire.EmptyOr", 
            values: [  ]
        };
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
        var Wrap = function (value0) {
            return function (value1) {
                return {
                    ctor: "Inquire.Wrap", 
                    values: [ value0, value1 ]
                };
            };
        };
        function generate(i) {  var showDict = {    show: function(k) {      return k.toString();    }  };  return gen(showDict)(showDict)(i);};
        var traversableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                traverse: function (__dict_Applicative_27) {
                    return traversableInquire_traverse(__dict_Applicative_27);
                }
            };
        };
        var traversableInquire_traverse = function (__dict_Applicative_26) {
            return function (_1) {
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    if (_2.ctor === "Inquire.EmptyAnd") {
                        return _ps.Prelude.pure(__dict_Applicative_26)(EmptyAnd);
                    };
                    if (_2.ctor === "Inquire.EmptyOr") {
                        return _ps.Prelude.pure(__dict_Applicative_26)(EmptyOr);
                    };
                    if (_2.ctor === "Inquire.Pred") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_26))(Pred(_2.values[0])(_2.values[1]))(_1(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Junc") {
                        return _ps.Prelude["<*>"](__dict_Applicative_26)(_ps.Prelude["<*>"](__dict_Applicative_26)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_26))(Junc)(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_26)(_1)(_2.values[0])))(_ps.Prelude.pure(__dict_Applicative_26)(_2.values[1])))(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_26)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Wrap") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_26))(Wrap(_2.values[0]))(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_26)(_1)(_2.values[1]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var showWrapOp_show = function (_1) {
            if (_1.ctor === "Inquire.NOBOOL") {
                return "";
            };
            if (_1.ctor === "Inquire.NOT") {
                return "!";
            };
            throw "Failed pattern match";
        };
        var showWrapOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showWrapOp_show
            };
        };
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
        var showRel = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showRel_show
            };
        };
        var showJuncOp_show = function (_1) {
            if (_1.ctor === "Inquire.AND") {
                return "&";
            };
            if (_1.ctor === "Inquire.OR") {
                return ";";
            };
            throw "Failed pattern match";
        };
        var showJuncOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showJuncOp_show
            };
        };
        var pred = function (o) {
            if (typeof o !== "object") {
                throw "object expected";
            };
            return Pred(o.key)(o.rel)(o.val);
        };
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
        var ne = function (k) {
            return function (v) {
                return neObj({
                    key: k, 
                    val: v
                });
            };
        };
        var monoidInquire_mempty = EmptyAnd;
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
        var monoidInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: monoidInquire_mempty, 
                $less$greater: monoidInquire_$less$greater
            };
        };
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
        var lt = function (k) {
            return function (v) {
                return ltObj({
                    key: k, 
                    val: v
                });
            };
        };
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
        var le = function (k) {
            return function (v) {
                return leObj({
                    key: k, 
                    val: v
                });
            };
        };
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
        var gt = function (k) {
            return function (v) {
                return gtObj({
                    key: k, 
                    val: v
                });
            };
        };
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
        var ge = function (k) {
            return function (v) {
                return geObj({
                    key: k, 
                    val: v
                });
            };
        };
        var functorInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: functorInquire_$less$dollar$greater
            };
        };
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
        var foldableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                foldr: foldableInquire_foldr, 
                foldl: foldableInquire_foldl
            };
        };
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
        var eqWrapOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqWrapOp_$eq$eq, 
                $div$eq: eqWrapOp_$div$eq
            };
        };
        var eqWrapOp_$div$eq = function (r) {
            return function (r$prime) {
                return !_ps.Prelude["=="](eqWrapOp({}))(r)(r$prime);
            };
        };
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
        var eqRel = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqRel_$eq$eq, 
                $div$eq: eqRel_$div$eq
            };
        };
        var eqRel_$div$eq = function (r) {
            return function (r$prime) {
                return !_ps.Prelude["=="](eqRel({}))(r)(r$prime);
            };
        };
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
        var eqJuncOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $eq$eq: eqJuncOp_$eq$eq, 
                $div$eq: eqJuncOp_$div$eq
            };
        };
        var eqJuncOp_$div$eq = function (r) {
            return function (r$prime) {
                return !_ps.Prelude["=="](eqJuncOp({}))(r)(r$prime);
            };
        };
        var showInquire_show = function (__dict_Show_28) {
            return function (__dict_Show_29) {
                return function (_1) {
                    if (_1.ctor === "Inquire.EmptyAnd") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.EmptyOr") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.Pred") {
                        return _ps.Prelude.show(__dict_Show_28)(_1.values[0]) + _ps.Prelude.show(showRel({}))(_1.values[1]) + _ps.Prelude.show(__dict_Show_29)(_1.values[2]);
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Pred") {
                            if ((_1.values[2]).ctor === "Inquire.Pred") {
                                return _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[2]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Pred") {
                            return _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[2]) + ")";
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[2]).ctor === "Inquire.Pred") {
                            return "(" + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[2]);
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Junc") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (_ps.Prelude["=="](eqJuncOp({}))((_1.values[0]).values[1])(_1.values[1]) && _ps.Prelude["=="](eqJuncOp({}))(_1.values[1])((_1.values[2]).values[1])) {
                                    return _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))((_1.values[0]).values[1]) + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[2]);
                                };
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Inquire.Junc") {
                            if (_ps.Prelude["=="](eqJuncOp({}))((_1.values[0]).values[1])(_1.values[1])) {
                                return _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))((_1.values[0]).values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[2]) + ")";
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[2]).ctor === "Inquire.Junc") {
                            if (_ps.Prelude["=="](eqJuncOp({}))(_1.values[1])((_1.values[2]).values[1])) {
                                return "(" + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[2]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        return "(" + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[2]) + ")";
                    };
                    if (_1.ctor === "Inquire.Wrap") {
                        if ((_1.values[0]).ctor === "Inquire.NOBOOL") {
                            if ((_1.values[1]).ctor === "Inquire.Wrap") {
                                return _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[1]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Wrap") {
                        if ((_1.values[1]).ctor === "Inquire.Wrap") {
                            if (((_1.values[1]).values[0]).ctor === "Inquire.NOBOOL") {
                                return _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[1]);
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Wrap") {
                        return _ps.Prelude.show(showWrapOp({}))(_1.values[0]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_28)(__dict_Show_29))(_1.values[1]) + ")";
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var showInquire = function (_1) {
            return function (_2) {
                return {
                    show: showInquire_show(_1)(_2)
                };
            };
        };
        var gen = function (__dict_Show_32) {
            return function (__dict_Show_33) {
                return function (i) {
                    return _ps.Prelude.show(showInquire(__dict_Show_32)(__dict_Show_33))(i);
                };
            };
        };
        var eqInquire = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqInquire_$eq$eq(_1)(_2), 
                    $div$eq: eqInquire_$div$eq(_1)(_2)
                };
            };
        };
        var eqInquire_$eq$eq = function (__dict_Eq_34) {
            return function (__dict_Eq_35) {
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
                                return _ps.Prelude["=="](__dict_Eq_34)(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](eqRel({}))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](__dict_Eq_35)(_1.values[2])(_2.values[2]);
                            };
                        };
                        if (_1.ctor === "Inquire.Junc") {
                            if (_2.ctor === "Inquire.Junc") {
                                return _ps.Prelude["=="](eqInquire(__dict_Eq_34)(__dict_Eq_35))(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](eqJuncOp({}))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](eqInquire(__dict_Eq_34)(__dict_Eq_35))(_1.values[2])(_2.values[2]);
                            };
                        };
                        if (_1.ctor === "Inquire.Wrap") {
                            if (_2.ctor === "Inquire.Wrap") {
                                return _ps.Prelude["=="](eqInquire(__dict_Eq_34)(__dict_Eq_35))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](eqWrapOp({}))(_1.values[0])(_2.values[0]);
                            };
                        };
                        return false;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var eqInquire_$div$eq = function (__dict_Eq_36) {
            return function (__dict_Eq_37) {
                return function (i) {
                    return function (i$prime) {
                        return !_ps.Prelude["=="](eqInquire(__dict_Eq_36)(__dict_Eq_37))(i)(i$prime);
                    };
                };
            };
        };
        var idempotent = function (__dict_Eq_30) {
            return function (__dict_Eq_31) {
                return function (_1) {
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Inquire.AND") {
                            if (_ps.Prelude["=="](eqInquire(__dict_Eq_30)(__dict_Eq_31))(_1.values[0])(_1.values[2])) {
                                return _1.values[0];
                            };
                        };
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Inquire.OR") {
                            if (_ps.Prelude["=="](eqInquire(__dict_Eq_30)(__dict_Eq_31))(_1.values[0])(_1.values[2])) {
                                return _1.values[0];
                            };
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var eq = function (k) {
            return function (v) {
                return eqObj({
                    key: k, 
                    val: v
                });
            };
        };
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
        var equiv = function (p) {
            return function (q) {
                return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude["&&"](boolLikeInquire({}))(p)(q))(_ps.Prelude["&&"](boolLikeInquire({}))(_ps.Prelude.not(boolLikeInquire({}))(p))(_ps.Prelude.not(boolLikeInquire({}))(q)));
            };
        };
        var implies = function (p) {
            return function (q) {
                return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude.not(boolLikeInquire({}))(p))(q);
            };
        };
        var neg = function (i) {
            return _ps.Prelude.not(boolLikeInquire({}))(i);
        };
        var or = function (i1) {
            return function (i2) {
                return _ps.Prelude["||"](boolLikeInquire({}))(i1)(i2);
            };
        };
        var xor = function (p) {
            return function (q) {
                return _ps.Prelude["||"](boolLikeInquire({}))(_ps.Prelude["&&"](boolLikeInquire({}))(p)(_ps.Prelude.not(boolLikeInquire({}))(q)))(_ps.Prelude["&&"](boolLikeInquire({}))(_ps.Prelude.not(boolLikeInquire({}))(p))(q));
            };
        };
        var bitraversableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                bitraverse: function (__dict_Applicative_39) {
                    return bitraversableInquire_bitraverse(__dict_Applicative_39);
                }
            };
        };
        var bitraversableInquire_bitraverse = function (__dict_Applicative_38) {
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
                            return _ps.Prelude.pure(__dict_Applicative_38)(EmptyAnd);
                        };
                        if (_3.ctor === "Inquire.EmptyOr") {
                            return _ps.Prelude.pure(__dict_Applicative_38)(EmptyOr);
                        };
                        if (_3.ctor === "Inquire.Pred") {
                            return _ps.Prelude["<*>"](__dict_Applicative_38)(_ps.Prelude["<*>"](__dict_Applicative_38)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_38))(Pred)(_1(_3.values[0])))(_ps.Prelude.pure(__dict_Applicative_38)(_3.values[1])))(_2(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Junc") {
                            return _ps.Prelude["<*>"](__dict_Applicative_38)(_ps.Prelude["<*>"](__dict_Applicative_38)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_38))(Junc)(_ps.Data_Traversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_38)(_1)(_2)(_3.values[0])))(_ps.Prelude.pure(__dict_Applicative_38)(_3.values[1])))(_ps.Data_Traversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_38)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Wrap") {
                            return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_38))(Wrap(_3.values[0]))(_ps.Data_Traversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_38)(_1)(_2)(_3.values[1]));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var biFunctorInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$dollar$greater: biFunctorInquire_$less$dollar$dollar$greater
            };
        };
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
        var biFoldableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                bifoldr: biFoldableInquire_bifoldr, 
                bifoldl: biFoldableInquire_bifoldl
            };
        };
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
        var and = function (i1) {
            return function (i2) {
                return _ps.Prelude["&&"](boolLikeInquire({}))(i1)(i2);
            };
        };
        var absorb = function (__dict_Eq_40) {
            return function (__dict_Eq_41) {
                return function (_1) {
                    if (_1.ctor === "Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Inquire.AND") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Inquire.OR") {
                                    if (_ps.Prelude["=="](eqInquire(__dict_Eq_40)(__dict_Eq_41))(_1.values[0])((_1.values[2]).values[0])) {
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
                                    if (_ps.Prelude["=="](eqInquire(__dict_Eq_40)(__dict_Eq_41))(_1.values[0])((_1.values[2]).values[0])) {
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
        module.NOBOOL = NOBOOL;
        module.NOT = NOT;
        module.AND = AND;
        module.OR = OR;
        module.EQ = EQ;
        module.NE = NE;
        module.GT = GT;
        module.GE = GE;
        module.LT = LT;
        module.LE = LE;
        module.EmptyAnd = EmptyAnd;
        module.EmptyOr = EmptyOr;
        module.Pred = Pred;
        module.Junc = Junc;
        module.Wrap = Wrap;
        module.idempotent = idempotent;
        module.codistribute = codistribute;
        module.distribute = distribute;
        module.commute = commute;
        module.assocRight = assocRight;
        module.assocLeft = assocLeft;
        module.associate = associate;
        module.absorb = absorb;
        module.xor = xor;
        module.equiv = equiv;
        module.implies = implies;
        module.neg = neg;
        module.or = or;
        module.and = and;
        module.leObj = leObj;
        module.ltObj = ltObj;
        module.geObj = geObj;
        module.gtObj = gtObj;
        module.neObj = neObj;
        module.eqObj = eqObj;
        module.le = le;
        module.lt = lt;
        module.ge = ge;
        module.gt = gt;
        module.ne = ne;
        module.eq = eq;
        module.generate = generate;
        module.gen = gen;
        module.eqRel = eqRel;
        module.eqJuncOp = eqJuncOp;
        module.eqWrapOp = eqWrapOp;
        module.eqInquire = eqInquire;
        module.showRel = showRel;
        module.showJuncOp = showJuncOp;
        module.showWrapOp = showWrapOp;
        module.showInquire = showInquire;
        module.functorInquire = functorInquire;
        module.monoidInquire = monoidInquire;
        module.biFunctorInquire = biFunctorInquire;
        module.foldableInquire = foldableInquire;
        module.biFoldableInquire = biFoldableInquire;
        module.traversableInquire = traversableInquire;
        module.bitraversableInquire = bitraversableInquire;
        module.boolLikeInquire = boolLikeInquire;
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
        var zip = _ps.Data_Array.zipWith(Tuple);
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
        var uncurry = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return _1(_2.values[0])(_2.values[1]);
                throw "Failed pattern match";
            };
        };
        var showTuple_show = function (__dict_Show_42) {
            return function (__dict_Show_43) {
                return function (_1) {
                    return "Tuple(" + _ps.Prelude.show(__dict_Show_42)(_1.values[0]) + ", " + _ps.Prelude.show(__dict_Show_43)(_1.values[1]) + ")";
                    throw "Failed pattern match";
                };
            };
        };
        var showTuple = function (_1) {
            return function (_2) {
                return {
                    show: showTuple_show(_1)(_2)
                };
            };
        };
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
        module.Tuple = Tuple;
        module.unzip = unzip;
        module.zip = zip;
        module.uncurry = uncurry;
        module.curry = curry;
        module.showTuple = showTuple;
        return module;
    })(_ps.Data_Tuple || {});
    _ps.Inquire_Combinators = (function (module) {
        function bimap(f) { return function(g) {    return function(x) {      return _ps.Data_Functor['<$$>'](_ps.Inquire.biFunctorInquire({}))(f)(g)(x);    }  }};
        function map(f) {  return function(x) {    return _ps.Prelude['<$>'](_ps.Inquire.functorInquire({}))(f)(x);  }};
        function unsafeFindByKey(v) {  return function(i) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return findByKey(_ps.Prelude.eqString({}))(v)(i);  }};
        function unsafeFindByVal(v) {  return function(i) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return findByVal(_ps.Prelude.eqString({}))(v)(i);  }};
        function unsafeRemove(i1) {  return function(i2) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return remove(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);  }};
        function unsafeRemoveAll(i1) {  return function(i2) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return removeAll(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);  }};
        function unsafeReplaceValByKey(v) {  return function(k) {    return function(i) {      /* We use String's eq typeclass because it uses `unsafeRefEq`*/      return replaceValByKey(_ps.Prelude.eqString({}))(v)(k)(i);    }  }};
        function unsafeReplaceValByVal(v1) {  return function(v2) {    return function(i) {      /* We use String's eq typeclass because it uses `unsafeRefEq`*/      return replaceValByVal(_ps.Prelude.eqString({}))(v1)(v2)(i);    }  }};
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
        var vals = function (i) {
            return (toObj(i)).vals;
        };
        var replaceValByVal = function (__dict_Eq_44) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Inquire.Pred") {
                            if (_ps.Prelude["=="](__dict_Eq_44)(_2)(_3.values[2])) {
                                return _ps.Inquire.Pred(_3.values[0])(_3.values[1])(_1);
                            };
                        };
                        if (_3.ctor === "Inquire.Junc") {
                            return _ps.Inquire.Junc(replaceValByVal(__dict_Eq_44)(_1)(_2)(_3.values[0]))(_3.values[1])(replaceValByVal(__dict_Eq_44)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Wrap") {
                            return _ps.Inquire.Wrap(_3.values[0])(replaceValByVal(__dict_Eq_44)(_1)(_2)(_3.values[1]));
                        };
                        return _3;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var replaceValByKey = function (__dict_Eq_45) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Inquire.Pred") {
                            if (_ps.Prelude["=="](__dict_Eq_45)(_2)(_3.values[0])) {
                                return _ps.Inquire.Pred(_2)(_3.values[1])(_1);
                            };
                        };
                        if (_3.ctor === "Inquire.Junc") {
                            return _ps.Inquire.Junc(replaceValByKey(__dict_Eq_45)(_1)(_2)(_3.values[0]))(_3.values[1])(replaceValByKey(__dict_Eq_45)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Inquire.Wrap") {
                            return _ps.Inquire.Wrap(_3.values[0])(replaceValByKey(__dict_Eq_45)(_1)(_2)(_3.values[1]));
                        };
                        return _3;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var remove$prime = function (__dict_Eq_46) {
            return function (__dict_Eq_47) {
                return function (_1) {
                    if (typeof _1 !== "function") {
                        throw "function expected";
                    };
                    return function (_2) {
                        return function (_3) {
                            if (_3.ctor === "Inquire.Junc") {
                                return (function (r$prime) {
                                    return _1(_3.values[2])(r$prime) ? _ps.Inquire.Junc(remove$prime(__dict_Eq_46)(__dict_Eq_47)(_1)(_2)(_3.values[0]))(_3.values[1])(_3.values[2]) : _ps.Inquire.Junc(_3.values[0])(_3.values[1])(r$prime);
                                })(remove$prime(__dict_Eq_46)(__dict_Eq_47)(_1)(_2)(_3.values[2]));
                            };
                            if (_3.ctor === "Inquire.Wrap") {
                                return _ps.Inquire.Wrap(_3.values[0])(remove$prime(__dict_Eq_46)(__dict_Eq_47)(_1)(_2)(_3.values[1]));
                            };
                            if (_ps.Prelude["=="](_ps.Inquire.eqInquire(__dict_Eq_46)(__dict_Eq_47))(_2)(_3)) {
                                return _ps.Inquire.EmptyAnd;
                            };
                            return _3;
                            throw "Failed pattern match";
                        };
                    };
                };
            };
        };
        var removeAll = function (__dict_Eq_48) {
            return function (__dict_Eq_49) {
                return remove$prime(__dict_Eq_48)(__dict_Eq_49)(function (x) {
                    return function (y) {
                        return true;
                    };
                });
            };
        };
        var remove = function (__dict_Eq_50) {
            return function (__dict_Eq_51) {
                return remove$prime(__dict_Eq_50)(__dict_Eq_51)(_ps.Prelude["=="](_ps.Inquire.eqInquire(__dict_Eq_50)(__dict_Eq_51)));
            };
        };
        var keys = function (i) {
            return (toObj(i)).keys;
        };
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
        var toArrayPair = function (i) {
            return _ps.Data_Array.zipWith(function (x) {
                return function (y) {
                    return [ x, y ];
                };
            })(keys(i))(vals(i));
        };
        var toTuple = function (i) {
            return _ps.Data_Tuple.zip(keys(i))(vals(i));
        };
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
        var findByVal = function (__dict_Eq_52) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Inquire.Pred") {
                        if (_ps.Prelude["=="](__dict_Eq_52)(_1)(_2.values[2])) {
                            return _ps.Data_Maybe.Just(_ps.Inquire.Pred(_2.values[0])(_2.values[1])(_1));
                        };
                    };
                    if (_2.ctor === "Inquire.Pred") {
                        return _ps.Data_Maybe.Nothing;
                    };
                    if (_2.ctor === "Inquire.Junc") {
                        return _ps.Data_Maybe.maybe(findByVal(__dict_Eq_52)(_1)(_2.values[0]))(_ps.Data_Maybe.Just)(findByVal(__dict_Eq_52)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Wrap") {
                        return findByVal(__dict_Eq_52)(_1)(_2.values[1]);
                    };
                    return _ps.Data_Maybe.Nothing;
                    throw "Failed pattern match";
                };
            };
        };
        var findByKey = function (__dict_Eq_53) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Inquire.Pred") {
                        if (_ps.Prelude["=="](__dict_Eq_53)(_1)(_2.values[0])) {
                            return _ps.Data_Maybe.Just(_ps.Inquire.Pred(_1)(_2.values[1])(_2.values[2]));
                        };
                    };
                    if (_2.ctor === "Inquire.Pred") {
                        return _ps.Data_Maybe.Nothing;
                    };
                    if (_2.ctor === "Inquire.Junc") {
                        return _ps.Data_Maybe.maybe(findByKey(__dict_Eq_53)(_1)(_2.values[0]))(_ps.Data_Maybe.Just)(findByKey(__dict_Eq_53)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Inquire.Wrap") {
                        return findByKey(__dict_Eq_53)(_1)(_2.values[1]);
                    };
                    return _ps.Data_Maybe.Nothing;
                    throw "Failed pattern match";
                };
            };
        };
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
        module.unsafeReplaceValByVal = unsafeReplaceValByVal;
        module.unsafeReplaceValByKey = unsafeReplaceValByKey;
        module.unsafeRemoveAll = unsafeRemoveAll;
        module.unsafeRemove = unsafeRemove;
        module.unsafeFindByVal = unsafeFindByVal;
        module.unsafeFindByKey = unsafeFindByKey;
        module.map = map;
        module.bimap = bimap;
        module.replaceValByVal = replaceValByVal;
        module.replaceValByKey = replaceValByKey;
        module.removeAll = removeAll;
        module.remove = remove;
        module.findByKey = findByKey;
        module.findByVal = findByVal;
        module.filterByKey = filterByKey;
        module.filterByVal = filterByVal;
        module.fromArrayObj = fromArrayObj;
        module.fromArrayPair = fromArrayPair;
        module.toArrayObj = toArrayObj;
        module.toArrayPair = toArrayPair;
        module.toTuple = toTuple;
        module.vals = vals;
        module.keys = keys;
        module.toObj = toObj;
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
        var R = function (value0) {
            return function (value1) {
                return {
                    ctor: "Inquire.Zipper.R", 
                    values: [ value0, value1 ]
                };
            };
        };
        var D = function (value0) {
            return {
                ctor: "Inquire.Zipper.D", 
                values: [ value0 ]
            };
        };
        var Zip = function (value0) {
            return {
                ctor: "Inquire.Zipper.Zip", 
                values: [ value0 ]
            };
        };
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
        var zipMost = function (f) {
            return function (iz) {
                return _ps.Data_Maybe.maybe(iz)(zipMost(f))(f(iz));
            };
        };
        var zipRightmost = zipMost(zipRight);
        var zipUpmost = zipMost(zipUp);
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
        var zipLeftmost = zipMost(zipLeft);
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
        var toInquireZ = function (i) {
            return Zip({
                hole: i, 
                context: [  ]
            });
        };
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
        var getHole = function (_1) {
            return (_1.values[0]).hole;
            throw "Failed pattern match";
        };
        var query = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(getHole);
        };
        var fromInquireZ = function (_1) {
            if ((_1.values[0]).context.length === 0) {
                return (_1.values[0]).hole;
            };
            return _ps.Data_Maybe.maybe(_ps.Inquire.EmptyAnd)(fromInquireZ)(zipUp(_1));
            throw "Failed pattern match";
        };
        module.Zip = Zip;
        module.modify = modify;
        module.query = query;
        module.getHole = getHole;
        module.zipRightmost = zipRightmost;
        module.zipLeftmost = zipLeftmost;
        module.zipUpmost = zipUpmost;
        module.zipMost = zipMost;
        module.zipUp = zipUp;
        module.zipDown = zipDown;
        module.zipRight = zipRight;
        module.zipLeft = zipLeft;
        module.fromInquireZ = fromInquireZ;
        module.toInquireZ = toInquireZ;
        return module;
    })(_ps.Inquire_Zipper || {});
    _ps.Control_Monad_Eff = (function (module) {
        function retEff(a) {  return function() {    return a;  };};
        function bindEff(a) {  return function(f) {    return function() {      return f(a())();    };  };};
        function runPure(f) {  return f();};
        function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
        function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
        function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
        function foreachE(as) {  return function(f) {    for (var i = 0; i < as.length; i++) {      f(as[i])();    }  };};
        var monadEff_$greater$greater$eq = bindEff;
        var monadEff_$$return = retEff;
        var monadEff = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: monadEff_$$return, 
                $greater$greater$eq: monadEff_$greater$greater$eq
            };
        };
        module.foreachE = foreachE;
        module.forE = forE;
        module.whileE = whileE;
        module.untilE = untilE;
        module.runPure = runPure;
        module.bindEff = bindEff;
        module.retEff = retEff;
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
        function catchError(c) {  return function(t) {    return function() {      try {        return t();      } catch(e) {        return c(e)();      }    };  };};
        module.catchError = catchError;
        module.throwError = throwError;
        return module;
    })(_ps.Control_Monad_Error || {});
    _ps.Control_Monad_ST = (function (module) {
        function newSTRef(val) {  return function () {    return { value: val };  };};
        function readSTRef(ref) {  return function() {    return ref.value;  };};
        function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
        function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
        function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
        function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
        function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
        function runST(f) {  return f;};
        function runSTArray(f) {  return f;};
        module.runSTArray = runSTArray;
        module.runST = runST;
        module.pokeSTArray = pokeSTArray;
        module.peekSTArray = peekSTArray;
        module.newSTArray = newSTArray;
        module.writeSTRef = writeSTRef;
        module.modifySTRef = modifySTRef;
        module.readSTRef = readSTRef;
        module.newSTRef = newSTRef;
        return module;
    })(_ps.Control_Monad_ST || {});
    _ps.Data_IORef = (function (module) {
        function newIORef(val) {  return function () {    return { value: val };  };};
        function readIORef(ref) {  return function() {    return ref.value;  };};
        function modifyIORef(ref) {  return function(f) {    return function() {      ref.value = f(ref.value);      return {};    };  };};
        function writeIORef(ref) {  return function(val) {    return function() {      ref.value = val;      return {};    };  };};
        function unsafeRunIORef(f) {  return f;};
        module.unsafeRunIORef = unsafeRunIORef;
        module.writeIORef = writeIORef;
        module.modifyIORef = modifyIORef;
        module.readIORef = readIORef;
        module.newIORef = newIORef;
        return module;
    })(_ps.Data_IORef || {});
    _ps.Debug_Trace = (function (module) {
        function trace(s) {  return function() {    console.log(s);    return {};  };};
        var print = function (__dict_Show_54) {
            return function (o) {
                return trace(_ps.Prelude.show(__dict_Show_54)(o));
            };
        };
        module.print = print;
        module.trace = trace;
        return module;
    })(_ps.Debug_Trace || {});
    _ps.Random = (function (module) {
        function random() {  return Math.random();};
        module.random = random;
        return module;
    })(_ps.Random || {});
    _ps.Control_Monad = (function (module) {
        var when = function (__dict_Monad_55) {
            return function (_1) {
                if (typeof _1 !== "boolean") {
                    throw "boolean expected";
                };
                return function (_2) {
                    if (_1) {
                        return _2;
                    };
                    if (!_1) {
                        return _ps.Prelude["return"](__dict_Monad_55)({});
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var sequence = function (__dict_Monad_56) {
            return function (_1) {
                if (!Array.isArray(_1)) {
                    throw "Array expected";
                };
                return (function (_2) {
                    if (_2.length === 0) {
                        return _ps.Prelude["return"](__dict_Monad_56)([  ]);
                    };
                    if (_2.length > 0) {
                        var _4 = _2.slice(1);
                        return _ps.Prelude[">>="](__dict_Monad_56)(_2[0])(function (a) {
                            return _ps.Prelude[">>="](__dict_Monad_56)(sequence(__dict_Monad_56)(_4))(function (as) {
                                if (!Array.isArray(as)) {
                                    throw "Array expected";
                                };
                                return _ps.Prelude["return"](__dict_Monad_56)(_ps.Data_Array[":"](a)(as));
                            });
                        });
                    };
                    throw "Failed pattern match";
                })(_1);
            };
        };
        var zipWithM = function (__dict_Monad_57) {
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
                        return sequence(__dict_Monad_57)(_ps.Data_Array.zipWith(f)(xs)(ys));
                    };
                };
            };
        };
        var replicateM = function (__dict_Monad_58) {
            return function (_1) {
                if (typeof _1 !== "number") {
                    throw "number expected";
                };
                return function (_2) {
                    if (_1 === 0) {
                        return _ps.Prelude["return"](__dict_Monad_58)([  ]);
                    };
                    return _ps.Prelude[">>="](__dict_Monad_58)(_2)(function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_58)(replicateM(__dict_Monad_58)(_1 - 1)(_2))(function (as) {
                            if (!Array.isArray(as)) {
                                throw "Array expected";
                            };
                            return _ps.Prelude["return"](__dict_Monad_58)(_ps.Data_Array[":"](a)(as));
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        var mapM = function (__dict_Monad_59) {
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
                            return _ps.Prelude["return"](__dict_Monad_59)([  ]);
                        };
                        if (_4.length > 0) {
                            var _6 = _4.slice(1);
                            return _ps.Prelude[">>="](__dict_Monad_59)(_3(_4[0]))(function (b) {
                                return _ps.Prelude[">>="](__dict_Monad_59)(mapM(__dict_Monad_59)(_3)(_6))(function (bs) {
                                    if (!Array.isArray(bs)) {
                                        throw "Array expected";
                                    };
                                    return _ps.Prelude["return"](__dict_Monad_59)(_ps.Data_Array[":"](b)(bs));
                                });
                            });
                        };
                        throw "Failed pattern match";
                    })(_1, _2);
                };
            };
        };
        var join = function (__dict_Monad_60) {
            return function (mm) {
                return _ps.Prelude[">>="](__dict_Monad_60)(mm)(function (m) {
                    return m;
                });
            };
        };
        var foldM = function (__dict_Monad_61) {
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
                                return _ps.Prelude["return"](__dict_Monad_61)(_5);
                            };
                            if (_6.length > 0) {
                                var _8 = _6.slice(1);
                                return _ps.Prelude[">>="](__dict_Monad_61)(_4(_5)(_6[0]))(function (a$prime) {
                                    return foldM(__dict_Monad_61)(_4)(a$prime)(_8);
                                });
                            };
                            throw "Failed pattern match";
                        })(_1, _2, _3);
                    };
                };
            };
        };
        var $greater$eq$greater = function (__dict_Monad_62) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
                return function (g) {
                    if (typeof g !== "function") {
                        throw "function expected";
                    };
                    return function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_62)(f(a))(function (b) {
                            return g(b);
                        });
                    };
                };
            };
        };
        var $less$eq$less = function (__dict_Monad_63) {
            return _ps.Prelude.flip($greater$eq$greater(__dict_Monad_63));
        };
        module.zipWithM = zipWithM;
        module.when = when;
        module.foldM = foldM;
        module.join = join;
        module.sequence = sequence;
        module["<=<"] = $less$eq$less;
        module[">=>"] = $greater$eq$greater;
        module.mapM = mapM;
        module.replicateM = replicateM;
        return module;
    })(_ps.Control_Monad || {});
    _ps.Algebra = (function (module) {
        function $bar$plus$bar(dict) {
            return dict.$bar$plus$bar;
        };
        function ident(dict) {
            return dict.ident;
        };
        function inverse(dict) {
            return dict.inverse;
        };
        function $bar$times$bar(dict) {
            return dict.$bar$times$bar;
        };
        function $bar$times$times$bar(dict) {
            return dict.$bar$times$times$bar;
        };
        function $bar$minus$bar(dict) {
            return dict.$bar$minus$bar;
        };
        function zero(dict) {
            return dict.zero;
        };
        function one(dict) {
            return dict.one;
        };
        function recip(dict) {
            return dict.recip;
        };
        function $bar$div$bar(dict) {
            return dict.$bar$div$bar;
        };
        function $bar$bslash$div$bar(dict) {
            return dict.$bar$bslash$div$bar;
        };
        function top(dict) {
            return dict.top;
        };
        function bottom(dict) {
            return dict.bottom;
        };
        function $bar$tilde$bar(dict) {
            return dict.$bar$tilde$bar;
        };
        function $bar$amp$bar(dict) {
            return dict.$bar$amp$bar;
        };
        function $bar$bar$bar(dict) {
            return dict.$bar$bar$bar;
        };
        module["|||"] = $bar$bar$bar;
        module["|&|"] = $bar$amp$bar;
        module["|~|"] = $bar$tilde$bar;
        module.bottom = bottom;
        module.top = top;
        module["|\\/|"] = $bar$bslash$div$bar;
        module["|/|"] = $bar$div$bar;
        module.recip = recip;
        module.one = one;
        module.zero = zero;
        module["|-|"] = $bar$minus$bar;
        module["|**|"] = $bar$times$times$bar;
        module["|*|"] = $bar$times$bar;
        module.inverse = inverse;
        module.ident = ident;
        module["|+|"] = $bar$plus$bar;
        return module;
    })(_ps.Algebra || {});
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());