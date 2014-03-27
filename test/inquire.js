(function (_ps) {
    "use strict";
    _ps.Prelude = (function () {
        var module = {};
        var LT = {
            ctor: "Prelude.LT", 
            values: [  ]
        };
        var GT = {
            ctor: "Prelude.GT", 
            values: [  ]
        };
        var EQ = {
            ctor: "Prelude.EQ", 
            values: [  ]
        };
        function id(dict) {
            return dict.id;
        };
        function $less$less$less(dict) {
            return dict.$less$less$less;
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
        function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
        function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
        function compare(dict) {
            return dict.compare;
        };
        function numCompare(n1) {  return function(n2) {    return n1 < n2 ? module.LT : n1 > n2 ? module.GT : module.EQ;  };};
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
            return s;
        };
        var showString = function (_1) {
            return {
                show: showString_show
            };
        };
        var showOrdering_show = function (_1) {
            if (_1.ctor === "Prelude.LT") {
                return "LT";
            };
            if (_1.ctor === "Prelude.GT") {
                return "GT";
            };
            if (_1.ctor === "Prelude.EQ") {
                return "EQ";
            };
            throw "Failed pattern match";
        };
        var showOrdering = function (_1) {
            return {
                show: showOrdering_show
            };
        };
        var showNumber_show = showNumberImpl;
        var showNumber = function (_1) {
            return {
                show: showNumber_show
            };
        };
        var showBoolean_show = function (_1) {
            if (_1) {
                return "true";
            };
            if (!_1) {
                return "false";
            };
            throw "Failed pattern match";
        };
        var showBoolean = function (_1) {
            return {
                show: showBoolean_show
            };
        };
        var ordNumber_compare = numCompare;
        var ordNumber = function (_1) {
            return {
                compare: ordNumber_compare
            };
        };
        var on = function (f) {
            return function (g) {
                return function (x) {
                    return function (y) {
                        return f(g(x))(g(y));
                    };
                };
            };
        };
        var numNumber_negate = numNegate;
        var numNumber_$times = numMul;
        var numNumber_$plus = numAdd;
        var numNumber_$percent = numMod;
        var numNumber_$minus = numSub;
        var numNumber_$div = numDiv;
        var numNumber = function (_1) {
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
            return function (b) {
                return function (a) {
                    return f(a)(b);
                };
            };
        };
        var eqString_$eq$eq = refEq;
        var eqString_$div$eq = refIneq;
        var eqString = function (_1) {
            return {
                $eq$eq: eqString_$eq$eq, 
                $div$eq: eqString_$div$eq
            };
        };
        var eqNumber_$eq$eq = refEq;
        var eqNumber_$div$eq = refIneq;
        var eqNumber = function (_1) {
            return {
                $eq$eq: eqNumber_$eq$eq, 
                $div$eq: eqNumber_$div$eq
            };
        };
        var eqBoolean_$eq$eq = refEq;
        var eqBoolean_$div$eq = refIneq;
        var eqBoolean = function (_1) {
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
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        };
        var categoryArr = function (_1) {
            return {
                id: categoryArr_id, 
                $less$less$less: categoryArr_$less$less$less
            };
        };
        var boolLikeBoolean_not = boolNot;
        var boolLikeBoolean_$bar$bar = boolOr;
        var boolLikeBoolean_$amp$amp = boolAnd;
        var boolLikeBoolean = function (_1) {
            return {
                $amp$amp: boolLikeBoolean_$amp$amp, 
                $bar$bar: boolLikeBoolean_$bar$bar, 
                not: boolLikeBoolean_not
            };
        };
        var eqArray_$eq$eq = function (__dict_Eq_1) {
            return function (_1) {
                return function (_2) {
                    if (_1.length === 0) {
                        if (_2.length === 0) {
                            return true;
                        };
                    };
                    if (_1.length > 0) {
                        var _8 = _1.slice(1);
                        if (_2.length > 0) {
                            var _6 = _2.slice(1);
                            return $amp$amp(boolLikeBoolean({}))($eq$eq(__dict_Eq_1)(_1[0])(_2[0]))($eq$eq(eqArray(__dict_Eq_1))(_8)(_6));
                        };
                    };
                    return false;
                    throw "Failed pattern match";
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
                return function (ys) {
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
        var $greater$greater$greater = function (__dict_Category_5) {
            return function (f) {
                return function (g) {
                    return $less$less$less(__dict_Category_5)(g)(f);
                };
            };
        };
        var $greater$eq = function (__dict_Ord_6) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.LT") {
                            return false;
                        };
                        return true;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_6)(a1)(a2));
                };
            };
        };
        var $greater = function (__dict_Ord_7) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.GT") {
                            return true;
                        };
                        return false;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_7)(a1)(a2));
                };
            };
        };
        var $less$eq = function (__dict_Ord_8) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.GT") {
                            return false;
                        };
                        return true;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_8)(a1)(a2));
                };
            };
        };
        var $less = function (__dict_Ord_9) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.LT") {
                            return true;
                        };
                        return false;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_9)(a1)(a2));
                };
            };
        };
        var $dollar = function (f) {
            return function (x) {
                return f(x);
            };
        };
        var $hash = function (x) {
            return function (f) {
                return f(x);
            };
        };
        module.LT = LT;
        module.GT = GT;
        module.EQ = EQ;
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
        module.numCompare = numCompare;
        module[">="] = $greater$eq;
        module["<="] = $less$eq;
        module[">"] = $greater;
        module["<"] = $less;
        module.compare = compare;
        module.refIneq = refIneq;
        module.refEq = refEq;
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
        module.on = on;
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
        module.showOrdering = showOrdering;
        module.ordNumber = ordNumber;
        module.bitsNumber = bitsNumber;
        module.boolLikeBoolean = boolLikeBoolean;
        return module;
    })();
    _ps.Math = (function () {
        var module = {};
        var abs = Math.abs;;
        var acos = Math.acos;;
        var asin = Math.asin;;
        var atan = Math.atan;;
        function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
        var ceil = Math.ceil;;
        var cos = Math.cos;;
        var exp = Math.exp;;
        var floor = Math.floor;;
        var log = Math.log;;
        function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
        function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
        function pow(n){  return function(p) {    return Math.pow(n, p);  }};
        var round = Math.round;;
        var sin = Math.sin;;
        var sqrt = Math.sqrt;;
        var tan = Math.tan;;
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
        module.ceil = ceil;
        module.atan2 = atan2;
        module.atan = atan;
        module.asin = asin;
        module.acos = acos;
        module.abs = abs;
        return module;
    })();
    _ps.Global = (function () {
        var module = {};
        var nan = NaN;;
        var infinity = Infinity;;
        function toExponential(n) {  return n.toExponential();};
        function toFixed(d) {  return function(n) {    return n.toFixed(d);  };};
        function toPrecision(d) {  return function(n) {    return n.toPrecision(d);  };};
        function parseInt(n) {  return function(radix) {    return parseInt(n, radix);  };};
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
    })();
    _ps.Data_String_Regex = (function () {
        var module = {};
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
    })();
    _ps.Data_String = (function () {
        var module = {};
        function lengthS(s) {  return s.length;};
        function charAt(i) {  return function(s) {    return s.charAt(i);   };};
        function indexOfS(s1) {  return function(s2) {    return s1.indexOf(s2);  }; };
        function lastIndexOfS(s1) {  return function(s2) {    return s1.lastIndexOf(s2);  };};
        function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
        function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
        function sliceS(st) {  return function(e) {    return function(s) {      return s.slice(st, e);    };  };};
        function split(sep) {  return function(s) {    return s.split(sep);  };};
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
    })();
    _ps.Data_Maybe = (function () {
        var module = {};
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
        var showMaybe_show = function (__dict_Show_10) {
            return function (_1) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return "Just " + _ps.Prelude.show(__dict_Show_10)(_1.values[0]);
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
                return maybe(Nothing)(f)(m);
            };
        };
        var monadMaybe = function (_1) {
            return {
                $$return: monadMaybe_$$return, 
                $greater$greater$eq: monadMaybe_$greater$greater$eq
            };
        };
        var isNothing = maybe(true)(_ps.Prelude["const"](false));
        var isJust = maybe(false)(_ps.Prelude["const"](true));
        var functorMaybe_$less$dollar$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Maybe.Just") {
                    return Just(_1(_2.values[0]));
                };
                return Nothing;
                throw "Failed pattern match";
            };
        };
        var functorMaybe = function (_1) {
            return {
                $less$dollar$greater: functorMaybe_$less$dollar$greater
            };
        };
        var fromMaybe = function (a) {
            return maybe(a)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
        };
        var eqMaybe_$eq$eq = function (__dict_Eq_11) {
            return function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return true;
                        };
                    };
                    if (_1.ctor === "Data.Maybe.Just") {
                        if (_2.ctor === "Data.Maybe.Just") {
                            return _ps.Prelude["=="](__dict_Eq_11)(_1.values[0])(_2.values[0]);
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
        var eqMaybe_$div$eq = function (__dict_Eq_12) {
            return function (a) {
                return function (b) {
                    return !_ps.Prelude["=="](eqMaybe(__dict_Eq_12))(a)(b);
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
            return {
                pure: applicativeMaybe_pure, 
                $less$times$greater: applicativeMaybe_$less$times$greater
            };
        };
        module.Nothing = Nothing;
        module.Just = Just;
        module.isNothing = isNothing;
        module.isJust = isJust;
        module.fromMaybe = fromMaybe;
        module.maybe = maybe;
        module.monadMaybe = monadMaybe;
        module.applicativeMaybe = applicativeMaybe;
        module.functorMaybe = functorMaybe;
        module.showMaybe = showMaybe;
        module.eqMaybe = eqMaybe;
        return module;
    })();
    _ps.Data_Eq = (function () {
        var module = {};
        var Ref = function (value0) {
            return {
                ctor: "Data.Eq.Ref", 
                values: [ value0 ]
            };
        };
        var liftRef = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2.values[0])(_3.values[0]);
                    throw "Failed pattern match";
                };
            };
        };
        var eqRef_$eq$eq = liftRef(_ps.Prelude.refEq);
        var eqRef_$div$eq = liftRef(_ps.Prelude.refIneq);
        var eqRef = function (_1) {
            return {
                $eq$eq: eqRef_$eq$eq, 
                $div$eq: eqRef_$div$eq
            };
        };
        module.Ref = Ref;
        module.liftRef = liftRef;
        module.eqRef = eqRef;
        return module;
    })();
    _ps.Data_Either = (function () {
        var module = {};
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
        var showEither_show = function (__dict_Show_13) {
            return function (__dict_Show_14) {
                return function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return "Left " + _ps.Prelude.show(__dict_Show_13)(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return "Right " + _ps.Prelude.show(__dict_Show_14)(_1.values[0]);
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
            return {
                $less$dollar$greater: functorEither_$less$dollar$greater
            };
        };
        var eqEither_$eq$eq = function (__dict_Eq_15) {
            return function (__dict_Eq_16) {
                return function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Data.Either.Left") {
                            if (_2.ctor === "Data.Either.Left") {
                                return _ps.Prelude["=="](__dict_Eq_15)(_1.values[0])(_2.values[0]);
                            };
                        };
                        if (_1.ctor === "Data.Either.Right") {
                            if (_2.ctor === "Data.Either.Right") {
                                return _ps.Prelude["=="](__dict_Eq_16)(_1.values[0])(_2.values[0]);
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
        var eqEither_$div$eq = function (__dict_Eq_17) {
            return function (__dict_Eq_18) {
                return function (a) {
                    return function (b) {
                        return !_ps.Prelude["=="](eqEither(__dict_Eq_17)(__dict_Eq_18))(a)(b);
                    };
                };
            };
        };
        var either = function (_1) {
            return function (_2) {
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
        var isLeft = either(_ps.Prelude["const"](true))(_ps.Prelude["const"](false));
        var isRight = either(_ps.Prelude["const"](false))(_ps.Prelude["const"](true));
        var monadEither_$greater$greater$eq = either(function (e) {
            return function (_) {
                return Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        });
        var monadEither = function (_1) {
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
            return {
                pure: applicativeEither_pure, 
                $less$times$greater: applicativeEither_$less$times$greater
            };
        };
        module.Left = Left;
        module.Right = Right;
        module.isRight = isRight;
        module.isLeft = isLeft;
        module.either = either;
        module.monadEither = monadEither;
        module.applicativeEither = applicativeEither;
        module.functorEither = functorEither;
        module.showEither = showEither;
        module.eqEither = eqEither;
        return module;
    })();
    _ps.Data_BiTraversable = (function () {
        var module = {};
        function bitraverse(dict) {
            return dict.bitraverse;
        };
        function bisequence(dict) {
            return dict.bisequence;
        };
        module.bisequence = bisequence;
        module.bitraverse = bitraverse;
        return module;
    })();
    _ps.Data_BiFunctor = (function () {
        var module = {};
        function $less$dollar$dollar$greater(dict) {
            return dict.$less$dollar$dollar$greater;
        };
        var second = function (__dict_BiFunctor_19) {
            return function (f) {
                return $less$dollar$dollar$greater(__dict_BiFunctor_19)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(f);
            };
        };
        var first = function (__dict_BiFunctor_20) {
            return function (f) {
                return $less$dollar$dollar$greater(__dict_BiFunctor_20)(f)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        var bimap = function (__dict_BiFunctor_21) {
            return $less$dollar$dollar$greater(__dict_BiFunctor_21);
        };
        module.second = second;
        module.first = first;
        module.bimap = bimap;
        module["<$$>"] = $less$dollar$dollar$greater;
        return module;
    })();
    _ps.Data_BiFoldable = (function () {
        var module = {};
        function bifoldr(dict) {
            return dict.bifoldr;
        };
        function bifoldl(dict) {
            return dict.bifoldl;
        };
        module.bifoldl = bifoldl;
        module.bifoldr = bifoldr;
        return module;
    })();
    _ps.Data_Array_Unsafe = (function () {
        var module = {};
        var tail = function (_1) {
            if (_1.length > 0) {
                var _4 = _1.slice(1);
                return _4;
            };
            throw "Failed pattern match";
        };
        var head = function (_1) {
            if (_1.length > 0) {
                return _1[0];
            };
            throw "Failed pattern match";
        };
        module.tail = tail;
        module.head = head;
        return module;
    })();
    _ps.Data_Array = (function () {
        var module = {};
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
            if (_1.length > 0) {
                var _4 = _1.slice(1);
                return _ps.Data_Maybe.Just(_4);
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        var singleton = function (a) {
            return [ a ];
        };
        var monadArray_$$return = singleton;
        var isEmpty = function (_1) {
            if (_1.length === 0) {
                return true;
            };
            return false;
            throw "Failed pattern match";
        };
        var head = function (_1) {
            if (_1.length > 0) {
                return _ps.Data_Maybe.Just(_1[0]);
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        var eqEmptyArray_$eq$eq = function (_1) {
            return function (_2) {
                if (_1.length === 0) {
                    if (_2.length === 0) {
                        return true;
                    };
                };
                throw "Failed pattern match";
            };
        };
        var eqEmptyArray = function (_1) {
            return {
                $eq$eq: eqEmptyArray_$eq$eq, 
                $div$eq: eqEmptyArray_$div$eq
            };
        };
        var eqEmptyArray_$div$eq = function (a) {
            return function (a$prime) {
                return !_ps.Prelude["=="](eqEmptyArray({}))(a)(a$prime);
            };
        };
        var eqArray = function (_1) {
            return {
                $eq$eq: eqArray_$eq$eq(_1), 
                $div$eq: eqArray_$div$eq(_1)
            };
        };
        var eqArray_$eq$eq = function (__dict_Eq_22) {
            return function (_1) {
                return function (_2) {
                    if (_1.length === 0) {
                        if (_2.length === 0) {
                            return true;
                        };
                    };
                    if (_1.length > 0) {
                        var _8 = _1.slice(1);
                        if (_2.length > 0) {
                            var _6 = _2.slice(1);
                            return _ps.Prelude["=="](__dict_Eq_22)(_1[0])(_2[0]) && _ps.Prelude["=="](eqArray(__dict_Eq_22))(_8)(_6);
                        };
                    };
                    return false;
                    throw "Failed pattern match";
                };
            };
        };
        var eqArray_$div$eq = function (__dict_Eq_23) {
            return function (xs) {
                return function (ys) {
                    return !_ps.Prelude["=="](eqArray(__dict_Eq_23))(xs)(ys);
                };
            };
        };
        var drop = function (__copy__1) {
            return function (__copy__2) {
                var _1 = __copy__1;
                var _2 = __copy__2;
                tco: while (true) {
                    if (_1 === 0) {
                        return _2;
                    };
                    if (_2.length === 0) {
                        return [  ];
                    };
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        var __tco__1 = _1 - 1;
                        _1 = __tco__1;
                        _2 = _6;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var concatMap = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return concat(_1(_2[0]))(concatMap(_1)(_6));
                };
                throw "Failed pattern match";
            };
        };
        var monadArray_$greater$greater$eq = _ps.Prelude.flip(concatMap);
        var monadArray = function (_1) {
            return {
                $$return: monadArray_$$return, 
                $greater$greater$eq: monadArray_$greater$greater$eq
            };
        };
        var alternativeArray_empty = [  ];
        var alternativeArray_$less$bar$greater = concat;
        var alternativeArray = function (_1) {
            return {
                empty: alternativeArray_empty, 
                $less$bar$greater: alternativeArray_$less$bar$greater
            };
        };
        var $colon = function (a) {
            return concat([ a ]);
        };
        var filter = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    if (_1(_2[0])) {
                        return $colon(_2[0])(filter(_1)(_6));
                    };
                };
                if (_2.length > 0) {
                    var _8 = _2.slice(1);
                    return filter(_1)(_8);
                };
                throw "Failed pattern match";
            };
        };
        var map = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return $colon(_1(_2[0]))(map(_1)(_6));
                };
                throw "Failed pattern match";
            };
        };
        var functorArray_$less$dollar$greater = map;
        var functorArray = function (_1) {
            return {
                $less$dollar$greater: functorArray_$less$dollar$greater
            };
        };
        var showArray_show = function (__dict_Show_24) {
            return function (xs) {
                return "[" + joinWith(map(_ps.Prelude.show(__dict_Show_24))(xs))(",") + "]";
            };
        };
        var showArray = function (_1) {
            return {
                show: showArray_show(_1)
            };
        };
        var nubBy = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return $colon(_2[0])(nubBy(_1)(filter(function (y) {
                        return !_1(_2[0])(y);
                    })(_6)));
                };
                throw "Failed pattern match";
            };
        };
        var nub = function (__dict_Eq_25) {
            return nubBy(_ps.Prelude["=="](__dict_Eq_25));
        };
        var range = function (_1) {
            return function (_2) {
                if (_1 > _2) {
                    return [  ];
                };
                return $colon(_1)(range(_1 + 1)(_2));
                throw "Failed pattern match";
            };
        };
        var take = function (_1) {
            return function (_2) {
                if (_1 === 0) {
                    return [  ];
                };
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return $colon(_2[0])(take(_1 - 1)(_6));
                };
                throw "Failed pattern match";
            };
        };
        var zipWith = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_2.length > 0) {
                        var _10 = _2.slice(1);
                        if (_3.length > 0) {
                            var _8 = _3.slice(1);
                            return $colon(_1(_2[0])(_3[0]))(zipWith(_1)(_10)(_8));
                        };
                    };
                    return [  ];
                    throw "Failed pattern match";
                };
            };
        };
        module.nubBy = nubBy;
        module.nub = nub;
        module.take = take;
        module.drop = drop;
        module.zipWith = zipWith;
        module.range = range;
        module.isEmpty = isEmpty;
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
        module.map = map;
        module.tail = tail;
        module.head = head;
        module.showArray = showArray;
        module.eqEmptyArray = eqEmptyArray;
        module.eqArray = eqArray;
        module.monadArray = monadArray;
        module.functorArray = functorArray;
        module.alternativeArray = alternativeArray;
        return module;
    })();
    _ps.Data_Monoid = (function () {
        var module = {};
        function mempty(dict) {
            return dict.mempty;
        };
        function $less$greater(dict) {
            return dict.$less$greater;
        };
        var monoidString_mempty = "";
        var monoidString_$less$greater = _ps.Prelude["++"];
        var monoidString = function (_1) {
            return {
                mempty: monoidString_mempty, 
                $less$greater: monoidString_$less$greater
            };
        };
        var monoidArray_mempty = [  ];
        var monoidArray_$less$greater = _ps.Data_Array.concat;
        var monoidArray = function (_1) {
            return {
                mempty: monoidArray_mempty, 
                $less$greater: monoidArray_$less$greater
            };
        };
        module["<>"] = $less$greater;
        module.mempty = mempty;
        module.monoidString = monoidString;
        module.monoidArray = monoidArray;
        return module;
    })();
    _ps.Data_Tuple = (function () {
        var module = {};
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
            return function (_2) {
                return _1(_2.values[0])(_2.values[1]);
                throw "Failed pattern match";
            };
        };
        var swap = function (_1) {
            return Tuple(_1.values[1])(_1.values[0]);
            throw "Failed pattern match";
        };
        var snd = function (_1) {
            return _1.values[1];
            throw "Failed pattern match";
        };
        var showTuple_show = function (__dict_Show_26) {
            return function (__dict_Show_27) {
                return function (_1) {
                    return "Tuple(" + _ps.Prelude.show(__dict_Show_26)(_1.values[0]) + ", " + _ps.Prelude.show(__dict_Show_27)(_1.values[1]) + ")";
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
        var functorTuple_$less$dollar$greater = function (_1) {
            return function (_2) {
                return Tuple(_2.values[0])(_1(_2.values[1]));
                throw "Failed pattern match";
            };
        };
        var functorTuple = function (_1) {
            return {
                $less$dollar$greater: functorTuple_$less$dollar$greater
            };
        };
        var fst = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var eqTuple_$eq$eq = function (__dict_Eq_28) {
            return function (__dict_Eq_29) {
                return function (_1) {
                    return function (_2) {
                        return _ps.Prelude["=="](__dict_Eq_28)(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](__dict_Eq_29)(_1.values[1])(_2.values[1]);
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var eqTuple = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqTuple_$eq$eq(_1)(_2), 
                    $div$eq: eqTuple_$div$eq(_1)(_2)
                };
            };
        };
        var eqTuple_$div$eq = function (__dict_Eq_30) {
            return function (__dict_Eq_31) {
                return function (t1) {
                    return function (t2) {
                        return !_ps.Prelude["=="](eqTuple(__dict_Eq_30)(__dict_Eq_31))(t1)(t2);
                    };
                };
            };
        };
        var curry = function (f) {
            return function (a) {
                return function (b) {
                    return f(Tuple(a)(b));
                };
            };
        };
        module.Tuple = Tuple;
        module.swap = swap;
        module.unzip = unzip;
        module.zip = zip;
        module.uncurry = uncurry;
        module.curry = curry;
        module.snd = snd;
        module.fst = fst;
        module.showTuple = showTuple;
        module.eqTuple = eqTuple;
        module.functorTuple = functorTuple;
        return module;
    })();
    _ps.Control_Monad_Trans = (function () {
        var module = {};
        function lift(dict) {
            return dict.lift;
        };
        module.lift = lift;
        return module;
    })();
    _ps.Control_Monad_Writer_Trans = (function () {
        var module = {};
        var WriterT = function (value0) {
            return {
                ctor: "Control.Monad.Writer.Trans.WriterT", 
                values: [ value0 ]
            };
        };
        var runWriterT = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var monadWriterT_$greater$greater$eq = function (__dict_Monoid_32) {
            return function (__dict_Monad_33) {
                return function (m) {
                    return function (k) {
                        return WriterT(_ps.Prelude[">>="](__dict_Monad_33)(runWriterT(m))(function (_2) {
                            return _ps.Prelude[">>="](__dict_Monad_33)(runWriterT(k(_2.values[0])))(function (_1) {
                                return _ps.Prelude["return"](__dict_Monad_33)(_ps.Data_Tuple.Tuple(_1.values[0])(_ps.Data_Monoid["<>"](__dict_Monoid_32)(_2.values[1])(_1.values[1])));
                                throw "Failed pattern match";
                            });
                            throw "Failed pattern match";
                        }));
                    };
                };
            };
        };
        var monadWriterT_$$return = function (__dict_Monoid_34) {
            return function (__dict_Monad_35) {
                return function (a) {
                    return WriterT(_ps.Prelude["return"](__dict_Monad_35)(_ps.Data_Tuple.Tuple(a)(_ps.Data_Monoid.mempty(__dict_Monoid_34))));
                };
            };
        };
        var monadWriterT = function (_1) {
            return function (_2) {
                return {
                    $$return: monadWriterT_$$return(_1)(_2), 
                    $greater$greater$eq: monadWriterT_$greater$greater$eq(_1)(_2)
                };
            };
        };
        var monadTransWriterT_lift = function (__dict_Monoid_36) {
            return function (__dict_Monad_37) {
                return function (m) {
                    return WriterT(_ps.Prelude[">>="](__dict_Monad_37)(m)(function (a) {
                        return _ps.Prelude["return"](__dict_Monad_37)(_ps.Data_Tuple.Tuple(a)(_ps.Data_Monoid.mempty(__dict_Monoid_36)));
                    }));
                };
            };
        };
        var monadTransWriterT = function (_1) {
            return {
                lift: function (__dict_Monad_38) {
                    return monadTransWriterT_lift(_1)(__dict_Monad_38);
                }
            };
        };
        var mapWriterT = function (f) {
            return function (m) {
                return WriterT(f(runWriterT(m)));
            };
        };
        var liftCatchWriter = function ($$catch) {
            return function (m) {
                return function (h) {
                    return WriterT($$catch(runWriterT(m))(function (e) {
                        return runWriterT(h(e));
                    }));
                };
            };
        };
        var functorWriterT_$less$dollar$greater = function (__dict_Functor_39) {
            return function (f) {
                return mapWriterT(_ps.Prelude["<$>"](__dict_Functor_39)(function (_1) {
                    return _ps.Data_Tuple.Tuple(f(_1.values[0]))(_1.values[1]);
                    throw "Failed pattern match";
                }));
            };
        };
        var functorWriterT = function (_1) {
            return {
                $less$dollar$greater: functorWriterT_$less$dollar$greater(_1)
            };
        };
        var appWriterT_pure = function (__dict_Monoid_40) {
            return function (__dict_Applicative_41) {
                return function (a) {
                    return WriterT(_ps.Prelude.pure(__dict_Applicative_41)(_ps.Data_Tuple.Tuple(a)(_ps.Data_Monoid.mempty(__dict_Monoid_40))));
                };
            };
        };
        var appWriterT_$less$times$greater = function (__dict_Monoid_42) {
            return function (__dict_Applicative_43) {
                return function (f) {
                    return function (v) {
                        return WriterT((function () {
                            var k = function (_1) {
                                return function (_2) {
                                    return _ps.Data_Tuple.Tuple(_1.values[0](_2.values[0]))(_ps.Data_Monoid["<>"](__dict_Monoid_42)(_1.values[1])(_2.values[1]));
                                    throw "Failed pattern match";
                                };
                            };
                            return _ps.Prelude["<*>"](__dict_Applicative_43)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_43))(k)(runWriterT(f)))(runWriterT(v));
                        })());
                    };
                };
            };
        };
        var appWriterT = function (_1) {
            return function (_2) {
                return {
                    pure: appWriterT_pure(_1)(_2), 
                    $less$times$greater: appWriterT_$less$times$greater(_1)(_2)
                };
            };
        };
        var altWriterT_empty = function (__dict_Monoid_44) {
            return function (__dict_Alternative_45) {
                return WriterT(_ps.Prelude.empty(__dict_Alternative_45));
            };
        };
        var altWriterT_$less$bar$greater = function (__dict_Monoid_46) {
            return function (__dict_Alternative_47) {
                return function (m) {
                    return function (n) {
                        return WriterT(_ps.Prelude["<|>"](__dict_Alternative_47)(runWriterT(m))(runWriterT(n)));
                    };
                };
            };
        };
        var altWriterT = function (_1) {
            return function (_2) {
                return {
                    empty: altWriterT_empty(_1)(_2), 
                    $less$bar$greater: altWriterT_$less$bar$greater(_1)(_2)
                };
            };
        };
        module.WriterT = WriterT;
        module.liftCatchWriter = liftCatchWriter;
        module.mapWriterT = mapWriterT;
        module.runWriterT = runWriterT;
        module.monadWriterT = monadWriterT;
        module.appWriterT = appWriterT;
        module.altWriterT = altWriterT;
        module.functorWriterT = functorWriterT;
        module.monadTransWriterT = monadTransWriterT;
        return module;
    })();
    _ps.Control_Monad_State_Trans = (function () {
        var module = {};
        var StateT = function (value0) {
            return {
                ctor: "Control.Monad.State.Trans.StateT", 
                values: [ value0 ]
            };
        };
        var runStateT = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var withStateT = function (f) {
            return function (s) {
                return StateT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(runStateT(s))(f));
            };
        };
        var monadTransStateT_lift = function (__dict_Monad_48) {
            return function (m) {
                return StateT(function (s) {
                    return _ps.Prelude[">>="](__dict_Monad_48)(m)(function (x) {
                        return _ps.Prelude["return"](__dict_Monad_48)(_ps.Data_Tuple.Tuple(x)(s));
                    });
                });
            };
        };
        var monadTransStateT = function (_1) {
            return {
                lift: function (__dict_Monad_49) {
                    return monadTransStateT_lift(__dict_Monad_49);
                }
            };
        };
        var monadStateT_$greater$greater$eq = function (__dict_Monad_50) {
            return function (_2) {
                return function (_3) {
                    return StateT(function (s) {
                        return _ps.Prelude[">>="](__dict_Monad_50)(_2.values[0](s))(function (_1) {
                            return runStateT(_3(_1.values[0]))(_1.values[1]);
                            throw "Failed pattern match";
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        var monadStateT_$$return = function (__dict_Monad_51) {
            return function (a) {
                return StateT(function (s) {
                    return _ps.Prelude["return"](__dict_Monad_51)(_ps.Data_Tuple.Tuple(a)(s));
                });
            };
        };
        var monadStateT = function (_1) {
            return {
                $$return: monadStateT_$$return(_1), 
                $greater$greater$eq: monadStateT_$greater$greater$eq(_1)
            };
        };
        var mapStateT = function (f) {
            return function (m) {
                return StateT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(runStateT(m)));
            };
        };
        var liftPassState = function (__dict_Monad_52) {
            return function (pass) {
                return function (m) {
                    return StateT(function (s) {
                        return pass(_ps.Prelude[">>="](__dict_Monad_52)(runStateT(m)(s))(function (_1) {
                            return _ps.Prelude["return"](__dict_Monad_52)(_ps.Data_Tuple.Tuple(_ps.Data_Tuple.Tuple((_1.values[0]).values[0])(_1.values[1]))((_1.values[0]).values[1]));
                            throw "Failed pattern match";
                        }));
                    });
                };
            };
        };
        var liftListenState = function (__dict_Monad_53) {
            return function (listen) {
                return function (m) {
                    return StateT(function (s) {
                        return _ps.Prelude[">>="](__dict_Monad_53)(listen(runStateT(m)(s)))(function (_1) {
                            return _ps.Prelude["return"](__dict_Monad_53)(_ps.Data_Tuple.Tuple(_ps.Data_Tuple.Tuple((_1.values[0]).values[0])(_1.values[1]))((_1.values[0]).values[1]));
                            throw "Failed pattern match";
                        });
                    });
                };
            };
        };
        var liftCatchState = function ($$catch) {
            return function (m) {
                return function (h) {
                    return StateT(function (s) {
                        return $$catch(runStateT(m)(s))(function (e) {
                            return runStateT(h(e))(s);
                        });
                    });
                };
            };
        };
        var execStateT = function (__dict_Monad_54) {
            return function (m) {
                return function (s) {
                    return _ps.Prelude[">>="](__dict_Monad_54)(runStateT(m)(s))(function (_1) {
                        return _ps.Prelude["return"](__dict_Monad_54)(_1.values[1]);
                        throw "Failed pattern match";
                    });
                };
            };
        };
        var evalStateT = function (__dict_Monad_55) {
            return function (m) {
                return function (s) {
                    return _ps.Prelude[">>="](__dict_Monad_55)(runStateT(m)(s))(function (_1) {
                        return _ps.Prelude["return"](__dict_Monad_55)(_1.values[0]);
                        throw "Failed pattern match";
                    });
                };
            };
        };
        var altStateT_empty = function (__dict_Alternative_56) {
            return StateT(function (_) {
                return _ps.Prelude.empty(__dict_Alternative_56);
            });
        };
        var altStateT_$less$bar$greater = function (__dict_Alternative_57) {
            return function (x) {
                return function (y) {
                    return StateT(function (s) {
                        return _ps.Prelude["<|>"](__dict_Alternative_57)(runStateT(x)(s))(runStateT(y)(s));
                    });
                };
            };
        };
        var altStateT = function (_1) {
            return {
                empty: altStateT_empty(_1), 
                $less$bar$greater: altStateT_$less$bar$greater(_1)
            };
        };
        module.StateT = StateT;
        module.liftPassState = liftPassState;
        module.liftListenState = liftListenState;
        module.liftCatchState = liftCatchState;
        module.withStateT = withStateT;
        module.mapStateT = mapStateT;
        module.execStateT = execStateT;
        module.evalStateT = evalStateT;
        module.runStateT = runStateT;
        module.monadStateT = monadStateT;
        module.altStateT = altStateT;
        module.monadTransStateT = monadTransStateT;
        return module;
    })();
    _ps.Control_Monad_Reader_Trans = (function () {
        var module = {};
        var ReaderT = function (value0) {
            return {
                ctor: "Control.Monad.Reader.Trans.ReaderT", 
                values: [ value0 ]
            };
        };
        var runReaderT = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var withReaderT = function (f) {
            return function (m) {
                return ReaderT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(runReaderT(m))(f));
            };
        };
        var monadReaderT_$greater$greater$eq = function (__dict_Monad_58) {
            return function (m) {
                return function (k) {
                    return ReaderT(function (r) {
                        return _ps.Prelude[">>="](__dict_Monad_58)(runReaderT(m)(r))(function (a) {
                            return runReaderT(k(a))(r);
                        });
                    });
                };
            };
        };
        var monadReaderT_$$return = function (__dict_Monad_59) {
            return function (x) {
                return ReaderT(function (_) {
                    return _ps.Prelude["return"](__dict_Monad_59)(x);
                });
            };
        };
        var monadReaderT = function (_1) {
            return {
                $$return: monadReaderT_$$return(_1), 
                $greater$greater$eq: monadReaderT_$greater$greater$eq(_1)
            };
        };
        var mapReaderT = function (f) {
            return function (m) {
                return ReaderT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(runReaderT(m)));
            };
        };
        var liftReaderT = function (m) {
            return ReaderT(_ps.Prelude["const"](m));
        };
        var monadTransReaderT_lift = function (__dict_Monad_60) {
            return liftReaderT;
        };
        var monadTransReaderT = function (_1) {
            return {
                lift: function (__dict_Monad_61) {
                    return monadTransReaderT_lift(__dict_Monad_61);
                }
            };
        };
        var liftCatchReader = function ($$catch) {
            return function (m) {
                return function (h) {
                    return ReaderT(function (r) {
                        return $$catch(runReaderT(m)(r))(function (e) {
                            return runReaderT(h(e))(r);
                        });
                    });
                };
            };
        };
        var functorReaderT_$less$dollar$greater = function (__dict_Functor_62) {
            return function (f) {
                return mapReaderT(_ps.Prelude["<$>"](__dict_Functor_62)(f));
            };
        };
        var functorReaderT = function (_1) {
            return {
                $less$dollar$greater: functorReaderT_$less$dollar$greater(_1)
            };
        };
        var appReaderT_pure = function (__dict_Applicative_63) {
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(liftReaderT)(_ps.Prelude.pure(__dict_Applicative_63));
        };
        var appReaderT_$less$times$greater = function (__dict_Applicative_64) {
            return function (f) {
                return function (v) {
                    return ReaderT(function (r) {
                        return _ps.Prelude["<*>"](__dict_Applicative_64)(runReaderT(f)(r))(runReaderT(v)(r));
                    });
                };
            };
        };
        var appReaderT = function (_1) {
            return {
                pure: appReaderT_pure(_1), 
                $less$times$greater: appReaderT_$less$times$greater(_1)
            };
        };
        var altReaderT_empty = function (__dict_Alternative_65) {
            return liftReaderT(_ps.Prelude.empty(__dict_Alternative_65));
        };
        var altReaderT_$less$bar$greater = function (__dict_Alternative_66) {
            return function (m) {
                return function (n) {
                    return ReaderT(function (r) {
                        return _ps.Prelude["<|>"](__dict_Alternative_66)(runReaderT(m)(r))(runReaderT(n)(r));
                    });
                };
            };
        };
        var altReaderT = function (_1) {
            return {
                empty: altReaderT_empty(_1), 
                $less$bar$greater: altReaderT_$less$bar$greater(_1)
            };
        };
        module.ReaderT = ReaderT;
        module.liftCatchReader = liftCatchReader;
        module.liftReaderT = liftReaderT;
        module.mapReaderT = mapReaderT;
        module.withReaderT = withReaderT;
        module.runReaderT = runReaderT;
        module.monadReaderT = monadReaderT;
        module.appReaderT = appReaderT;
        module.altReaderT = altReaderT;
        module.functorReaderT = functorReaderT;
        module.monadTransReaderT = monadTransReaderT;
        return module;
    })();
    _ps.Control_Monad_Identity = (function () {
        var module = {};
        var Identity = function (value0) {
            return {
                ctor: "Control.Monad.Identity.Identity", 
                values: [ value0 ]
            };
        };
        var runIdentity = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var monadIdentity_$greater$greater$eq = function (m) {
            return function (f) {
                return f(runIdentity(m));
            };
        };
        var monadIdentity_$$return = Identity;
        var monadIdentity = function (_1) {
            return {
                $$return: monadIdentity_$$return, 
                $greater$greater$eq: monadIdentity_$greater$greater$eq
            };
        };
        var functorIdentity_$less$dollar$greater = function (f) {
            return function (m) {
                return Identity(f(runIdentity(m)));
            };
        };
        var functorIdentity = function (_1) {
            return {
                $less$dollar$greater: functorIdentity_$less$dollar$greater
            };
        };
        var applicativeIdentity_pure = Identity;
        var applicativeIdentity_$less$times$greater = function (_1) {
            return function (_2) {
                return Identity(_1.values[0](_2.values[0]));
                throw "Failed pattern match";
            };
        };
        var applicativeIdentity = function (_1) {
            return {
                pure: applicativeIdentity_pure, 
                $less$times$greater: applicativeIdentity_$less$times$greater
            };
        };
        module.Identity = Identity;
        module.runIdentity = runIdentity;
        module.monadIdentity = monadIdentity;
        module.applicativeIdentity = applicativeIdentity;
        module.functorIdentity = functorIdentity;
        return module;
    })();
    _ps.Control_Monad_Reader = (function () {
        var module = {};
        var withReader = _ps.Control_Monad_Reader_Trans.withReaderT;
        var runReader = function (m) {
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Identity.runIdentity)(_ps.Control_Monad_Reader_Trans.runReaderT(m));
        };
        var mapReader = function (f) {
            return _ps.Control_Monad_Reader_Trans.mapReaderT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Identity.Identity)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(_ps.Control_Monad_Identity.runIdentity)));
        };
        module.mapReader = mapReader;
        module.withReader = withReader;
        module.runReader = runReader;
        return module;
    })();
    _ps.Control_Monad_State = (function () {
        var module = {};
        var withState = _ps.Control_Monad_State_Trans.withStateT;
        var runState = function (s) {
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Identity.runIdentity)(_ps.Control_Monad_State_Trans.runStateT(s));
        };
        var mapState = function (f) {
            return _ps.Control_Monad_State_Trans.mapStateT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Identity.Identity)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(_ps.Control_Monad_Identity.runIdentity)));
        };
        var execState = function (m) {
            return function (s) {
                return _ps.Data_Tuple.snd(runState(m)(s));
            };
        };
        var evalState = function (m) {
            return function (s) {
                return _ps.Data_Tuple.fst(runState(m)(s));
            };
        };
        module.withState = withState;
        module.mapState = mapState;
        module.execState = execState;
        module.evalState = evalState;
        module.runState = runState;
        return module;
    })();
    _ps.Control_Monad_Writer = (function () {
        var module = {};
        var runWriter = _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Identity.runIdentity)(_ps.Control_Monad_Writer_Trans.runWriterT);
        var mapWriter = function (f) {
            return _ps.Control_Monad_Writer_Trans.mapWriterT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Identity.Identity)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(_ps.Control_Monad_Identity.runIdentity)));
        };
        module.mapWriter = mapWriter;
        module.runWriter = runWriter;
        return module;
    })();
    _ps.Control_Monad_Error = (function () {
        var module = {};
        function noMsg(dict) {
            return dict.noMsg;
        };
        function strMsg(dict) {
            return dict.strMsg;
        };
        var errorString_strMsg = _ps.Prelude.id(_ps.Prelude.categoryArr({}));
        var errorString_noMsg = "";
        var errorString = function (_1) {
            return {
                noMsg: errorString_noMsg, 
                strMsg: errorString_strMsg
            };
        };
        var errorEitherAlternative_empty = function (__dict_Error_67) {
            return _ps.Data_Either.Left(noMsg(__dict_Error_67));
        };
        var errorEitherAlternative_$less$bar$greater = function (__dict_Error_68) {
            return function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Either.Left") {
                        return _2;
                    };
                    return _1;
                    throw "Failed pattern match";
                };
            };
        };
        var errorEitherAlternative = function (_1) {
            return {
                empty: errorEitherAlternative_empty(_1), 
                $less$bar$greater: errorEitherAlternative_$less$bar$greater(_1)
            };
        };
        module.strMsg = strMsg;
        module.noMsg = noMsg;
        module.errorString = errorString;
        module.errorEitherAlternative = errorEitherAlternative;
        return module;
    })();
    _ps.Control_Monad_Error_Trans = (function () {
        var module = {};
        var ErrorT = function (value0) {
            return {
                ctor: "Control.Monad.Error.Trans.ErrorT", 
                values: [ value0 ]
            };
        };
        var runErrorT = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var monadTransErrorT_lift = function (__dict_Error_69) {
            return function (__dict_Monad_70) {
                return function (m) {
                    return ErrorT(_ps.Prelude[">>="](__dict_Monad_70)(m)(function (a) {
                        return _ps.Prelude["return"](__dict_Monad_70)(_ps.Data_Either.Right(a));
                    }));
                };
            };
        };
        var monadTransErrorT = function (_1) {
            return {
                lift: function (__dict_Monad_71) {
                    return monadTransErrorT_lift(_1)(__dict_Monad_71);
                }
            };
        };
        var monadErrorT_$greater$greater$eq = function (__dict_Monad_72) {
            return function (__dict_Error_73) {
                return function (m) {
                    return function (f) {
                        return ErrorT(_ps.Prelude[">>="](__dict_Monad_72)(runErrorT(m))(function (a) {
                            if (a.ctor === "Data.Either.Left") {
                                return _ps.Prelude["return"](__dict_Monad_72)(_ps.Data_Either.Left(a.values[0]));
                            };
                            if (a.ctor === "Data.Either.Right") {
                                return runErrorT(f(a.values[0]));
                            };
                            throw "Failed pattern match";
                        }));
                    };
                };
            };
        };
        var monadErrorT_$$return = function (__dict_Monad_74) {
            return function (__dict_Error_75) {
                return function (a) {
                    return ErrorT(_ps.Prelude["return"](__dict_Monad_74)(_ps.Data_Either.Right(a)));
                };
            };
        };
        var monadErrorT = function (_1) {
            return function (_2) {
                return {
                    $$return: monadErrorT_$$return(_1)(_2), 
                    $greater$greater$eq: monadErrorT_$greater$greater$eq(_1)(_2)
                };
            };
        };
        var mapErrorT = function (f) {
            return function (m) {
                return ErrorT(f(runErrorT(m)));
            };
        };
        var liftPassError = function (__dict_Monad_76) {
            return function (pass) {
                return mapErrorT(function (m) {
                    return pass(_ps.Prelude[">>="](__dict_Monad_76)(m)(function (a) {
                        return _ps.Prelude["return"](__dict_Monad_76)((function (_1) {
                            if (_1.ctor === "Data.Either.Left") {
                                return _ps.Data_Tuple.Tuple(_ps.Data_Either.Left(_1.values[0]))(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
                            };
                            if (_1.ctor === "Data.Either.Right") {
                                return _ps.Data_Tuple.Tuple(_ps.Data_Either.Right((_1.values[0]).values[0]))((_1.values[0]).values[1]);
                            };
                            throw "Failed pattern match";
                        })(a));
                    }));
                });
            };
        };
        var liftListenError = function (__dict_Monad_77) {
            return function (listen) {
                return mapErrorT(function (m) {
                    return _ps.Prelude[">>="](__dict_Monad_77)(listen(m))(function (_1) {
                        return _ps.Prelude["return"](__dict_Monad_77)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Data_Either.monadEither({}))))(function (r) {
                            return _ps.Data_Tuple.Tuple(r)(_1.values[1]);
                        })(_1.values[0]));
                        throw "Failed pattern match";
                    });
                });
            };
        };
        var functorErrorT_$less$dollar$greater = function (__dict_Functor_78) {
            return function (f) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(ErrorT)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude["<$>"](__dict_Functor_78)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Data_Either.monadEither({}))))(f)))(runErrorT));
            };
        };
        var functorErrorT = function (_1) {
            return {
                $less$dollar$greater: functorErrorT_$less$dollar$greater(_1)
            };
        };
        var appErrorT_pure = function (__dict_Functor_79) {
            return function (__dict_Monad_80) {
                return function (a) {
                    return ErrorT(_ps.Prelude["return"](__dict_Monad_80)(_ps.Data_Either.Right(a)));
                };
            };
        };
        var appErrorT_$less$times$greater = function (__dict_Functor_81) {
            return function (__dict_Monad_82) {
                return function (f) {
                    return function (v) {
                        return ErrorT(_ps.Prelude[">>="](__dict_Monad_82)(runErrorT(f))(function (mf) {
                            return (function (_1) {
                                if (_1.ctor === "Data.Either.Left") {
                                    return _ps.Prelude["return"](__dict_Monad_82)(_ps.Data_Either.Left(_1.values[0]));
                                };
                                if (_1.ctor === "Data.Either.Right") {
                                    var _3 = _1.values[0];
                                    return _ps.Prelude[">>="](__dict_Monad_82)(runErrorT(v))(function (mv) {
                                        return _ps.Prelude["return"](__dict_Monad_82)((function (_1) {
                                            if (_1.ctor === "Data.Either.Left") {
                                                return _ps.Data_Either.Left(_1.values[0]);
                                            };
                                            if (_1.ctor === "Data.Either.Right") {
                                                return _ps.Data_Either.Right(_3(_1.values[0]));
                                            };
                                            throw "Failed pattern match";
                                        })(mv));
                                    });
                                };
                                throw "Failed pattern match";
                            })(mf);
                        }));
                    };
                };
            };
        };
        var appErrorT = function (_1) {
            return function (_2) {
                return {
                    pure: appErrorT_pure(_1)(_2), 
                    $less$times$greater: appErrorT_$less$times$greater(_1)(_2)
                };
            };
        };
        var altErrorT_empty = function (__dict_Monad_83) {
            return function (__dict_Error_84) {
                return ErrorT(_ps.Prelude["return"](__dict_Monad_83)(_ps.Data_Either.Left(_ps.Control_Monad_Error.strMsg(__dict_Error_84)("No alternative"))));
            };
        };
        var altErrorT_$less$bar$greater = function (__dict_Monad_85) {
            return function (__dict_Error_86) {
                return function (x) {
                    return function (y) {
                        return ErrorT(_ps.Prelude[">>="](__dict_Monad_85)(runErrorT(x))(function (e) {
                            if (e.ctor === "Data.Either.Left") {
                                return runErrorT(y);
                            };
                            return _ps.Prelude["return"](__dict_Monad_85)(e);
                            throw "Failed pattern match";
                        }));
                    };
                };
            };
        };
        var altErrorT = function (_1) {
            return function (_2) {
                return {
                    empty: altErrorT_empty(_1)(_2), 
                    $less$bar$greater: altErrorT_$less$bar$greater(_1)(_2)
                };
            };
        };
        module.ErrorT = ErrorT;
        module.liftPassError = liftPassError;
        module.liftListenError = liftListenError;
        module.mapErrorT = mapErrorT;
        module.runErrorT = runErrorT;
        module.monadErrorT = monadErrorT;
        module.appErrorT = appErrorT;
        module.functorErrorT = functorErrorT;
        module.altErrorT = altErrorT;
        module.monadTransErrorT = monadTransErrorT;
        return module;
    })();
    _ps.Control_Monad_Eff = (function () {
        var module = {};
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
    })();
    _ps.Control_Monad_Eff_Random = (function () {
        var module = {};
        function random() {  return Math.random();};
        module.random = random;
        return module;
    })();
    _ps.Control_Monad_Eff_Unsafe = (function () {
        var module = {};
        function unsafeInterleaveEff(f) {  return f;};
        module.unsafeInterleaveEff = unsafeInterleaveEff;
        return module;
    })();
    _ps.Control_Monad_ST = (function () {
        var module = {};
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
    })();
    _ps.Debug_Trace = (function () {
        var module = {};
        function trace(s) {  return function() {    console.log(s);    return {};  };};
        var print = function (__dict_Show_87) {
            return function (o) {
                return trace(_ps.Prelude.show(__dict_Show_87)(o));
            };
        };
        module.print = print;
        module.trace = trace;
        return module;
    })();
    _ps.Test_QuickCheck = (function () {
        var module = {};
        var Success = {
            ctor: "Test.QuickCheck.Success", 
            values: [  ]
        };
        var Failed = function (value0) {
            return {
                ctor: "Test.QuickCheck.Failed", 
                values: [ value0 ]
            };
        };
        var Nat = function (value0) {
            return {
                ctor: "Test.QuickCheck.Nat", 
                values: [ value0 ]
            };
        };
        function arb(dict) {
            return dict.arb;
        };
        function test(dict) {
            return dict.test;
        };
        function randomRange(low) {  return function(high) {    return Math.floor(Math.random() * (high - low + 1)) + low;  }};
        function fromCharCode(n) {  return String.fromCharCode(n);};
        var unNat = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var testableResult_test = _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}));
        var testableResult = function (_1) {
            return {
                test: testableResult_test
            };
        };
        var testableFunction_test = function (__dict_Show_88) {
            return function (__dict_Arb_89) {
                return function (__dict_Testable_90) {
                    return function (f) {
                        return function __do() {
                            var t = arb(__dict_Arb_89)();
                            return _ps.Prelude[">>="](_ps.Control_Monad_Eff.monadEff({}))(test(__dict_Testable_90)(f(t)))(function (result) {
                                if (result.ctor === "Test.QuickCheck.Success") {
                                    return _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(Success);
                                };
                                if (result.ctor === "Test.QuickCheck.Failed") {
                                    return _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(Failed("Failed on input " + _ps.Prelude.show(__dict_Show_88)(t) + ": \n" + result.values[0]));
                                };
                                throw "Failed pattern match";
                            })();
                        };
                    };
                };
            };
        };
        var testableFunction = function (_1) {
            return function (_2) {
                return function (_3) {
                    return {
                        test: testableFunction_test(_1)(_2)(_3)
                    };
                };
            };
        };
        var testableBoolean_test = function (_1) {
            if (_1) {
                return _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(Success);
            };
            if (!_1) {
                return _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(Failed("Test returned false"));
            };
            throw "Failed pattern match";
        };
        var testableBoolean = function (_1) {
            return {
                test: testableBoolean_test
            };
        };
        var sized = function (f) {
            return _ps.Prelude[">>="](_ps.Control_Monad_Eff.monadEff({}))(_ps.Control_Monad_Eff_Random.random)(f);
        };
        var resize = function (n) {
            return function (x) {
                return sized(function (n) {
                    return x;
                });
            };
        };
        var quickCheck$prime = function (__dict_Testable_91) {
            return function (_1) {
                return function (_2) {
                    if (_1 === 0) {
                        return _ps.Debug_Trace.trace("All tests passed");
                    };
                    return _ps.Prelude[">>="](_ps.Control_Monad_Eff.monadEff({}))(test(__dict_Testable_91)(_2))(function (result) {
                        if (result.ctor === "Test.QuickCheck.Success") {
                            return quickCheck$prime(__dict_Testable_91)(_1 - 1)(_2);
                        };
                        if (result.ctor === "Test.QuickCheck.Failed") {
                            return _ps.Debug_Trace.trace("Failed after " + _ps.Prelude.show(_ps.Prelude.showNumber({}))(_1) + " tests: \n" + result.values[0]);
                        };
                        throw "Failed pattern match";
                    });
                    throw "Failed pattern match";
                };
            };
        };
        var quickCheck = function (__dict_Testable_92) {
            return function (prop) {
                return quickCheck$prime(__dict_Testable_92)(100)(prop);
            };
        };
        var choose = function (_1) {
            return randomRange(_1.values[0])(_1.values[1]);
            throw "Failed pattern match";
        };
        var oneof = function (xs) {
            var n = choose(_ps.Data_Tuple.Tuple(0)(_ps.Data_Array.length(xs) - 1));
            return xs[n];
        };
        var elements = function (xs) {
            return oneof(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Data_Array.monadArray({}))))(_ps.Control_Monad_Eff.retEff)(xs));
        };
        var arbTuple_arb = function (__dict_Arb_93) {
            return function (__dict_Arb_94) {
                return _ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Data_Tuple.Tuple)(arb(__dict_Arb_93)))(arb(__dict_Arb_94));
            };
        };
        var arbTuple = function (_1) {
            return function (_2) {
                return {
                    arb: arbTuple_arb(_1)(_2)
                };
            };
        };
        var arbNumber_arb = _ps.Control_Monad_Eff_Random.random;
        var arbNumber = function (_1) {
            return {
                arb: arbNumber_arb
            };
        };
        var arbNat_arb = function __do() {
            var n = _ps.Control_Monad_Eff_Random.random();
            return Nat(n * 100);
        };
        var arbNat = function (_1) {
            return {
                arb: arbNat_arb
            };
        };
        var arbBoolean_arb = function __do() {
            var n = _ps.Control_Monad_Eff_Random.random();
            return (n * 2) < 1;
        };
        var arbBoolean = function (_1) {
            return {
                arb: arbBoolean_arb
            };
        };
        var arbEither_arb = function (__dict_Arb_96) {
            return function (__dict_Arb_97) {
                return function __do() {
                    var b = arb(arbBoolean({}))();
                    return (b ? _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Data_Either.Left)(arb(__dict_Arb_96)) : _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Data_Either.Right)(arb(__dict_Arb_97)))();
                };
            };
        };
        var arbEither = function (_1) {
            return function (_2) {
                return {
                    arb: arbEither_arb(_1)(_2)
                };
            };
        };
        var arbMaybe_arb = function (__dict_Arb_95) {
            return function __do() {
                var b = arb(arbBoolean({}))();
                return (b ? _ps.Prelude.pure(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Data_Maybe.Nothing) : _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Data_Maybe.Just)(arb(__dict_Arb_95)))();
            };
        };
        var arbMaybe = function (_1) {
            return {
                arb: arbMaybe_arb(_1)
            };
        };
        var arbArray = function (_1) {
            return {
                arb: arbArray_arb(_1)
            };
        };
        var arbArray_arb = function (__dict_Arb_98) {
            return function __do() {
                var b = arb(arbBoolean({}))();
                return (b ? _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))([  ]) : function __do() {
    var a = arb(__dict_Arb_98)();
    var as = arb(arbArray(__dict_Arb_98))();
    return _ps.Data_Array[":"](a)(as);
})();
            };
        };
        var arbString_arb = function __do() {
            var codes = arb(arbArray(arbNat({})))();
            return (function (_4) {
                return _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(_ps.Data_Array.joinWith(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Data_Array.monadArray({}))))(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(fromCharCode)(unNat))(_4))(""));
                throw "Failed pattern match";
            })(_ps.Data_Array.filter(function (_1) {
                return 32 <= _1.values[0] && _1.values[0] <= 127;
                throw "Failed pattern match";
            })(codes))();
        };
        var arbString = function (_1) {
            return {
                arb: arbString_arb
            };
        };
        module.Nat = Nat;
        module.Success = Success;
        module.Failed = Failed;
        module.fromCharCode = fromCharCode;
        module.randomRange = randomRange;
        module.resize = resize;
        module.sized = sized;
        module.elements = elements;
        module.oneof = oneof;
        module.choose = choose;
        module.quickCheck = quickCheck;
        module.quickCheck$prime = quickCheck$prime;
        module.test = test;
        module.arb = arb;
        module.unNat = unNat;
        module.arbNumber = arbNumber;
        module.arbNat = arbNat;
        module.arbBoolean = arbBoolean;
        module.arbString = arbString;
        module.arbArray = arbArray;
        module.arbMaybe = arbMaybe;
        module.arbEither = arbEither;
        module.arbTuple = arbTuple;
        module.testableResult = testableResult;
        module.testableBoolean = testableBoolean;
        module.testableFunction = testableFunction;
        return module;
    })();
    _ps.Control_Monad = (function () {
        var module = {};
        var when = function (__dict_Monad_99) {
            return function (_1) {
                return function (_2) {
                    if (_1) {
                        return _2;
                    };
                    if (!_1) {
                        return _ps.Prelude["return"](__dict_Monad_99)({});
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var replicateM = function (__dict_Monad_100) {
            return function (_1) {
                return function (_2) {
                    if (_1 === 0) {
                        return _ps.Prelude["return"](__dict_Monad_100)([  ]);
                    };
                    return _ps.Prelude[">>="](__dict_Monad_100)(_2)(function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_100)(replicateM(__dict_Monad_100)(_1 - 1)(_2))(function (as) {
                            return _ps.Prelude["return"](__dict_Monad_100)(_ps.Data_Array[":"](a)(as));
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        var join = function (__dict_Monad_101) {
            return function (mm) {
                return _ps.Prelude[">>="](__dict_Monad_101)(mm)(function (m) {
                    return m;
                });
            };
        };
        var foldM = function (__dict_Monad_102) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.length === 0) {
                            return _ps.Prelude["return"](__dict_Monad_102)(_2);
                        };
                        if (_3.length > 0) {
                            var _8 = _3.slice(1);
                            return _ps.Prelude[">>="](__dict_Monad_102)(_1(_2)(_3[0]))(function (a$prime) {
                                return foldM(__dict_Monad_102)(_1)(a$prime)(_8);
                            });
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var $greater$eq$greater = function (__dict_Monad_103) {
            return function (f) {
                return function (g) {
                    return function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_103)(f(a))(function (b) {
                            return g(b);
                        });
                    };
                };
            };
        };
        var $less$eq$less = function (__dict_Monad_104) {
            return _ps.Prelude.flip($greater$eq$greater(__dict_Monad_104));
        };
        module.when = when;
        module.foldM = foldM;
        module.join = join;
        module["<=<"] = $less$eq$less;
        module[">=>"] = $greater$eq$greater;
        module.replicateM = replicateM;
        return module;
    })();
    _ps.Control_Monad_Maybe_Trans = (function () {
        var module = {};
        var MaybeT = function (value0) {
            return {
                ctor: "Control.Monad.Maybe.Trans.MaybeT", 
                values: [ value0 ]
            };
        };
        var runMaybeT = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var monadTransMaybeT_lift = function (__dict_Monad_105) {
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(MaybeT)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(__dict_Monad_105)))(_ps.Data_Maybe.Just));
        };
        var monadTransMaybeT = function (_1) {
            return {
                lift: function (__dict_Monad_106) {
                    return monadTransMaybeT_lift(__dict_Monad_106);
                }
            };
        };
        var monadMaybeT_$greater$greater$eq = function (__dict_Monad_107) {
            return function (x) {
                return function (f) {
                    return MaybeT(_ps.Prelude[">>="](__dict_Monad_107)(runMaybeT(x))(function (v) {
                        if (v.ctor === "Data.Maybe.Nothing") {
                            return _ps.Prelude["return"](__dict_Monad_107)(_ps.Data_Maybe.Nothing);
                        };
                        if (v.ctor === "Data.Maybe.Just") {
                            return runMaybeT(f(v.values[0]));
                        };
                        throw "Failed pattern match";
                    }));
                };
            };
        };
        var monadMaybeT_$$return = function (__dict_Monad_108) {
            return function (x) {
                return MaybeT(_ps.Prelude["return"](__dict_Monad_108)(_ps.Data_Maybe.Just(x)));
            };
        };
        var monadMaybeT = function (_1) {
            return {
                $$return: monadMaybeT_$$return(_1), 
                $greater$greater$eq: monadMaybeT_$greater$greater$eq(_1)
            };
        };
        var mapMaybeT = function (f) {
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(MaybeT)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(runMaybeT));
        };
        var liftPassMaybe = function (__dict_Monad_109) {
            return function (pass) {
                return mapMaybeT(function (m) {
                    return pass(_ps.Prelude[">>="](__dict_Monad_109)(m)(function (a) {
                        return _ps.Prelude["return"](__dict_Monad_109)((function (_1) {
                            if (_1.ctor === "Data.Maybe.Nothing") {
                                return _ps.Data_Tuple.Tuple(_ps.Data_Maybe.Nothing)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
                            };
                            if (_1.ctor === "Data.Maybe.Just") {
                                return _ps.Data_Tuple.Tuple(_ps.Data_Maybe.Just((_1.values[0]).values[0]))((_1.values[0]).values[1]);
                            };
                            throw "Failed pattern match";
                        })(a));
                    }));
                });
            };
        };
        var liftListenMaybe = function (__dict_Monad_110) {
            return function (listen) {
                return mapMaybeT(function (m) {
                    return _ps.Prelude[">>="](__dict_Monad_110)(listen(m))(function (_1) {
                        return _ps.Prelude["return"](__dict_Monad_110)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Data_Maybe.monadMaybe({}))))(function (r) {
                            return _ps.Data_Tuple.Tuple(r)(_1.values[1]);
                        })(_1.values[0]));
                        throw "Failed pattern match";
                    });
                });
            };
        };
        var liftCatchMaybe = function ($$catch) {
            return function (m) {
                return function (h) {
                    return MaybeT($$catch(runMaybeT(m))(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(runMaybeT)(h)));
                };
            };
        };
        module.MaybeT = MaybeT;
        module.liftPassMaybe = liftPassMaybe;
        module.liftListenMaybe = liftListenMaybe;
        module.liftCatchMaybe = liftCatchMaybe;
        module.mapMaybeT = mapMaybeT;
        module.runMaybeT = runMaybeT;
        module.monadMaybeT = monadMaybeT;
        module.monadTransMaybeT = monadTransMaybeT;
        return module;
    })();
    _ps.Control_Monad_Error_Class = (function () {
        var module = {};
        function throwError(dict) {
            return dict.throwError;
        };
        function catchError(dict) {
            return dict.catchError;
        };
        var monadErrorWriterT_throwError = function (__dict_Monad_111) {
            return function (__dict_Monoid_112) {
                return function (__dict_MonadError_113) {
                    return function (e) {
                        return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_112))(__dict_Monad_111)(throwError(__dict_MonadError_113)(e));
                    };
                };
            };
        };
        var monadErrorWriterT_catchError = function (__dict_Monad_114) {
            return function (__dict_Monoid_115) {
                return function (__dict_MonadError_116) {
                    return _ps.Control_Monad_Writer_Trans.liftCatchWriter(catchError(__dict_MonadError_116));
                };
            };
        };
        var monadErrorWriterT = function (_1) {
            return function (_2) {
                return function (_3) {
                    return {
                        throwError: monadErrorWriterT_throwError(_1)(_2)(_3), 
                        catchError: monadErrorWriterT_catchError(_1)(_2)(_3)
                    };
                };
            };
        };
        var monadErrorStateT_throwError = function (__dict_Monad_117) {
            return function (__dict_MonadError_118) {
                return function (e) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_117)(throwError(__dict_MonadError_118)(e));
                };
            };
        };
        var monadErrorStateT_catchError = function (__dict_Monad_119) {
            return function (__dict_MonadError_120) {
                return _ps.Control_Monad_State_Trans.liftCatchState(catchError(__dict_MonadError_120));
            };
        };
        var monadErrorStateT = function (_1) {
            return function (_2) {
                return {
                    throwError: monadErrorStateT_throwError(_1)(_2), 
                    catchError: monadErrorStateT_catchError(_1)(_2)
                };
            };
        };
        var monadErrorReaderT_throwError = function (__dict_Monad_121) {
            return function (__dict_MonadError_122) {
                return function (e) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_121)(throwError(__dict_MonadError_122)(e));
                };
            };
        };
        var monadErrorReaderT_catchError = function (__dict_Monad_123) {
            return function (__dict_MonadError_124) {
                return _ps.Control_Monad_Reader_Trans.liftCatchReader(catchError(__dict_MonadError_124));
            };
        };
        var monadErrorReaderT = function (_1) {
            return function (_2) {
                return {
                    throwError: monadErrorReaderT_throwError(_1)(_2), 
                    catchError: monadErrorReaderT_catchError(_1)(_2)
                };
            };
        };
        var monadErrorMaybeT_throwError = function (__dict_Monad_125) {
            return function (__dict_MonadError_126) {
                return function (e) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_125)(throwError(__dict_MonadError_126)(e));
                };
            };
        };
        var monadErrorMaybeT_catchError = function (__dict_Monad_127) {
            return function (__dict_MonadError_128) {
                return _ps.Control_Monad_Maybe_Trans.liftCatchMaybe(catchError(__dict_MonadError_128));
            };
        };
        var monadErrorMaybeT = function (_1) {
            return function (_2) {
                return {
                    throwError: monadErrorMaybeT_throwError(_1)(_2), 
                    catchError: monadErrorMaybeT_catchError(_1)(_2)
                };
            };
        };
        var monadErrorError_throwError = function (__dict_Error_129) {
            return _ps.Data_Either.Left;
        };
        var monadErrorError_catchError = function (__dict_Error_130) {
            return function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Either.Left") {
                        return _2(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return _ps.Data_Either.Right(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var monadErrorErrorT_throwError = function (__dict_Monad_131) {
            return function (__dict_Error_132) {
                return function (e) {
                    return _ps.Control_Monad_Error_Trans.ErrorT(_ps.Prelude["return"](__dict_Monad_131)(_ps.Data_Either.Left(e)));
                };
            };
        };
        var monadErrorErrorT_catchError = function (__dict_Monad_133) {
            return function (__dict_Error_134) {
                return function (m) {
                    return function (h) {
                        return _ps.Control_Monad_Error_Trans.ErrorT(_ps.Prelude[">>="](__dict_Monad_133)(_ps.Control_Monad_Error_Trans.runErrorT(m))(function (a) {
                            if (a.ctor === "Data.Either.Left") {
                                return _ps.Control_Monad_Error_Trans.runErrorT(h(a.values[0]));
                            };
                            if (a.ctor === "Data.Either.Right") {
                                return _ps.Prelude["return"](__dict_Monad_133)(_ps.Data_Either.Right(a.values[0]));
                            };
                            throw "Failed pattern match";
                        }));
                    };
                };
            };
        };
        var monadErrorErrorT = function (_1) {
            return function (_2) {
                return {
                    throwError: monadErrorErrorT_throwError(_1)(_2), 
                    catchError: monadErrorErrorT_catchError(_1)(_2)
                };
            };
        };
        var monadErrorError = function (_1) {
            return {
                throwError: monadErrorError_throwError(_1), 
                catchError: monadErrorError_catchError(_1)
            };
        };
        module.catchError = catchError;
        module.throwError = throwError;
        module.monadErrorError = monadErrorError;
        module.monadErrorErrorT = monadErrorErrorT;
        module.monadErrorMaybeT = monadErrorMaybeT;
        module.monadErrorReaderT = monadErrorReaderT;
        module.monadErrorWriterT = monadErrorWriterT;
        module.monadErrorStateT = monadErrorStateT;
        return module;
    })();
    _ps.Control_Monad_Reader_Class = (function () {
        var module = {};
        function ask(dict) {
            return dict.ask;
        };
        function local(dict) {
            return dict.local;
        };
        var reader = function (__dict_Monad_135) {
            return function (__dict_MonadReader_136) {
                return function (f) {
                    return _ps.Prelude[">>="](__dict_Monad_135)(ask(__dict_MonadReader_136))(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude["return"](__dict_Monad_135))(f));
                };
            };
        };
        var monadReaderWriterT_local = function (__dict_Monad_137) {
            return function (__dict_Monoid_138) {
                return function (__dict_MonadReader_139) {
                    return function (f) {
                        return _ps.Control_Monad_Writer_Trans.mapWriterT(local(__dict_MonadReader_139)(f));
                    };
                };
            };
        };
        var monadReaderWriterT_ask = function (__dict_Monad_140) {
            return function (__dict_Monoid_141) {
                return function (__dict_MonadReader_142) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_141))(__dict_Monad_140)(ask(__dict_MonadReader_142));
                };
            };
        };
        var monadReaderWriterT = function (_1) {
            return function (_2) {
                return function (_3) {
                    return {
                        ask: monadReaderWriterT_ask(_1)(_2)(_3), 
                        local: monadReaderWriterT_local(_1)(_2)(_3)
                    };
                };
            };
        };
        var monadReaderStateT_local = function (__dict_Monad_143) {
            return function (__dict_MonadReader_144) {
                return function (f) {
                    return _ps.Control_Monad_State_Trans.mapStateT(local(__dict_MonadReader_144)(f));
                };
            };
        };
        var monadReaderStateT_ask = function (__dict_Monad_145) {
            return function (__dict_MonadReader_146) {
                return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_145)(ask(__dict_MonadReader_146));
            };
        };
        var monadReaderStateT = function (_1) {
            return function (_2) {
                return {
                    ask: monadReaderStateT_ask(_1)(_2), 
                    local: monadReaderStateT_local(_1)(_2)
                };
            };
        };
        var monadReaderReaderT_local = function (__dict_Monad_147) {
            return _ps.Control_Monad_Reader_Trans.withReaderT;
        };
        var monadReaderReaderT_ask = function (__dict_Monad_148) {
            return _ps.Control_Monad_Reader_Trans.ReaderT(_ps.Prelude["return"](__dict_Monad_148));
        };
        var monadReaderReaderT = function (_1) {
            return {
                ask: monadReaderReaderT_ask(_1), 
                local: monadReaderReaderT_local(_1)
            };
        };
        var monadReaderMaybeT_local = function (__dict_Monad_149) {
            return function (__dict_MonadReader_150) {
                return function (f) {
                    return _ps.Control_Monad_Maybe_Trans.mapMaybeT(local(__dict_MonadReader_150)(f));
                };
            };
        };
        var monadReaderMaybeT_ask = function (__dict_Monad_151) {
            return function (__dict_MonadReader_152) {
                return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_151)(ask(__dict_MonadReader_152));
            };
        };
        var monadReaderMaybeT = function (_1) {
            return function (_2) {
                return {
                    ask: monadReaderMaybeT_ask(_1)(_2), 
                    local: monadReaderMaybeT_local(_1)(_2)
                };
            };
        };
        var monadReaderFun_local = _ps.Prelude[">>>"](_ps.Prelude.categoryArr({}));
        var monadReaderFun_ask = _ps.Prelude.id(_ps.Prelude.categoryArr({}));
        var monadReaderFun = function (_1) {
            return {
                ask: monadReaderFun_ask, 
                local: monadReaderFun_local
            };
        };
        var monadReaderErrorT_local = function (__dict_Monad_153) {
            return function (__dict_Error_154) {
                return function (__dict_MonadReader_155) {
                    return function (f) {
                        return _ps.Control_Monad_Error_Trans.mapErrorT(local(__dict_MonadReader_155)(f));
                    };
                };
            };
        };
        var monadReaderErrorT_ask = function (__dict_Monad_156) {
            return function (__dict_Error_157) {
                return function (__dict_MonadReader_158) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_157))(__dict_Monad_156)(ask(__dict_MonadReader_158));
                };
            };
        };
        var monadReaderErrorT = function (_1) {
            return function (_2) {
                return function (_3) {
                    return {
                        ask: monadReaderErrorT_ask(_1)(_2)(_3), 
                        local: monadReaderErrorT_local(_1)(_2)(_3)
                    };
                };
            };
        };
        module.reader = reader;
        module.local = local;
        module.ask = ask;
        module.monadReaderFun = monadReaderFun;
        module.monadReaderReaderT = monadReaderReaderT;
        module.monadReaderErrorT = monadReaderErrorT;
        module.monadReaderMaybeT = monadReaderMaybeT;
        module.monadReaderWriterT = monadReaderWriterT;
        module.monadReaderStateT = monadReaderStateT;
        return module;
    })();
    _ps.Control_Monad_State_Class = (function () {
        var module = {};
        function state(dict) {
            return dict.state;
        };
        var put = function (__dict_Monad_159) {
            return function (__dict_MonadState_160) {
                return function (s) {
                    return state(__dict_MonadState_160)(function (_) {
                        return _ps.Data_Tuple.Tuple({})(s);
                    });
                };
            };
        };
        var monadStateWriterT_state = function (__dict_Monad_161) {
            return function (__dict_Monoid_162) {
                return function (__dict_MonadState_163) {
                    return function (f) {
                        return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Writer_Trans.monadTransWriterT(__dict_Monoid_162))(__dict_Monad_161)(state(__dict_MonadState_163)(f));
                    };
                };
            };
        };
        var monadStateWriterT = function (_1) {
            return function (_2) {
                return function (_3) {
                    return {
                        state: monadStateWriterT_state(_1)(_2)(_3)
                    };
                };
            };
        };
        var monadStateStateT_state = function (__dict_Monad_164) {
            return function (f) {
                return _ps.Control_Monad_State_Trans.StateT(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude["return"](__dict_Monad_164))(f));
            };
        };
        var monadStateStateT1_state = function (__dict_Monad_165) {
            return function (__dict_MonadState_166) {
                return function (f) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_165)(state(__dict_MonadState_166)(f));
                };
            };
        };
        var monadStateStateT1 = function (_1) {
            return function (_2) {
                return {
                    state: monadStateStateT1_state(_1)(_2)
                };
            };
        };
        var monadStateStateT = function (_1) {
            return {
                state: monadStateStateT_state(_1)
            };
        };
        var monadStateReaderT_state = function (__dict_Monad_167) {
            return function (__dict_MonadState_168) {
                return function (f) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_167)(state(__dict_MonadState_168)(f));
                };
            };
        };
        var monadStateReaderT = function (_1) {
            return function (_2) {
                return {
                    state: monadStateReaderT_state(_1)(_2)
                };
            };
        };
        var monadStateMaybeT_state = function (__dict_Monad_169) {
            return function (__dict_MonadState_170) {
                return function (f) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_169)(state(__dict_MonadState_170)(f));
                };
            };
        };
        var monadStateMaybeT = function (_1) {
            return function (_2) {
                return {
                    state: monadStateMaybeT_state(_1)(_2)
                };
            };
        };
        var monadStateErrorT_state = function (__dict_Monad_171) {
            return function (__dict_Error_172) {
                return function (__dict_MonadState_173) {
                    return function (f) {
                        return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_172))(__dict_Monad_171)(state(__dict_MonadState_173)(f));
                    };
                };
            };
        };
        var monadStateErrorT = function (_1) {
            return function (_2) {
                return function (_3) {
                    return {
                        state: monadStateErrorT_state(_1)(_2)(_3)
                    };
                };
            };
        };
        var modify = function (__dict_Monad_174) {
            return function (__dict_MonadState_175) {
                return function (f) {
                    return state(__dict_MonadState_175)(function (s) {
                        return _ps.Data_Tuple.Tuple({})(f(s));
                    });
                };
            };
        };
        var gets = function (__dict_Monad_176) {
            return function (__dict_MonadState_177) {
                return function (f) {
                    return state(__dict_MonadState_177)(function (s) {
                        return _ps.Data_Tuple.Tuple(f(s))(s);
                    });
                };
            };
        };
        var get = function (__dict_Monad_178) {
            return function (__dict_MonadState_179) {
                return state(__dict_MonadState_179)(function (s) {
                    return _ps.Data_Tuple.Tuple(s)(s);
                });
            };
        };
        module.modify = modify;
        module.put = put;
        module.gets = gets;
        module.get = get;
        module.state = state;
        module.monadStateStateT = monadStateStateT;
        module.monadStateStateT1 = monadStateStateT1;
        module.monadStateErrorT = monadStateErrorT;
        module.monadStateMaybeT = monadStateMaybeT;
        module.monadStateReaderT = monadStateReaderT;
        module.monadStateWriterT = monadStateWriterT;
        return module;
    })();
    _ps.Control_Monad_Writer_Class = (function () {
        var module = {};
        function writer(dict) {
            return dict.writer;
        };
        function listen(dict) {
            return dict.listen;
        };
        function pass(dict) {
            return dict.pass;
        };
        var tell = function (__dict_Monoid_180) {
            return function (__dict_Monad_181) {
                return function (__dict_MonadWriter_182) {
                    return function (w) {
                        return writer(__dict_MonadWriter_182)(_ps.Data_Tuple.Tuple({})(w));
                    };
                };
            };
        };
        var monadWriterWriterT_writer = function (__dict_Monoid_183) {
            return function (__dict_Monad_184) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Writer_Trans.WriterT)(_ps.Prelude["return"](__dict_Monad_184));
            };
        };
        var monadWriterWriterT_pass = function (__dict_Monoid_185) {
            return function (__dict_Monad_186) {
                return function (m) {
                    return _ps.Control_Monad_Writer_Trans.WriterT(_ps.Prelude[">>="](__dict_Monad_186)(_ps.Control_Monad_Writer_Trans.runWriterT(m))(function (_1) {
                        return _ps.Prelude["return"](__dict_Monad_186)(_ps.Data_Tuple.Tuple((_1.values[0]).values[0])((_1.values[0]).values[1](_1.values[1])));
                        throw "Failed pattern match";
                    }));
                };
            };
        };
        var monadWriterWriterT_listen = function (__dict_Monoid_187) {
            return function (__dict_Monad_188) {
                return function (m) {
                    return _ps.Control_Monad_Writer_Trans.WriterT(_ps.Prelude[">>="](__dict_Monad_188)(_ps.Control_Monad_Writer_Trans.runWriterT(m))(function (_1) {
                        return _ps.Prelude["return"](__dict_Monad_188)(_ps.Data_Tuple.Tuple(_ps.Data_Tuple.Tuple(_1.values[0])(_1.values[1]))(_1.values[1]));
                        throw "Failed pattern match";
                    }));
                };
            };
        };
        var monadWriterWriterT = function (_1) {
            return function (_2) {
                return {
                    writer: monadWriterWriterT_writer(_1)(_2), 
                    listen: monadWriterWriterT_listen(_1)(_2), 
                    pass: monadWriterWriterT_pass(_1)(_2)
                };
            };
        };
        var monadWriterStateT_writer = function (__dict_Monad_189) {
            return function (__dict_MonadWriter_190) {
                return function (wd) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_State_Trans.monadTransStateT({}))(__dict_Monad_189)(writer(__dict_MonadWriter_190)(wd));
                };
            };
        };
        var monadWriterStateT_pass = function (__dict_Monad_191) {
            return function (__dict_MonadWriter_192) {
                return _ps.Control_Monad_State_Trans.liftPassState(__dict_Monad_191)(pass(__dict_MonadWriter_192));
            };
        };
        var monadWriterStateT_listen = function (__dict_Monad_193) {
            return function (__dict_MonadWriter_194) {
                return _ps.Control_Monad_State_Trans.liftListenState(__dict_Monad_193)(listen(__dict_MonadWriter_194));
            };
        };
        var monadWriterStateT = function (_1) {
            return function (_2) {
                return {
                    writer: monadWriterStateT_writer(_1)(_2), 
                    listen: monadWriterStateT_listen(_1)(_2), 
                    pass: monadWriterStateT_pass(_1)(_2)
                };
            };
        };
        var monadWriterReaderT_writer = function (__dict_Monad_195) {
            return function (__dict_MonadWriter_196) {
                return function (wd) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Reader_Trans.monadTransReaderT({}))(__dict_Monad_195)(writer(__dict_MonadWriter_196)(wd));
                };
            };
        };
        var monadWriterReaderT_pass = function (__dict_Monad_197) {
            return function (__dict_MonadWriter_198) {
                return _ps.Control_Monad_Reader_Trans.mapReaderT(pass(__dict_MonadWriter_198));
            };
        };
        var monadWriterReaderT_listen = function (__dict_Monad_199) {
            return function (__dict_MonadWriter_200) {
                return _ps.Control_Monad_Reader_Trans.mapReaderT(listen(__dict_MonadWriter_200));
            };
        };
        var monadWriterReaderT = function (_1) {
            return function (_2) {
                return {
                    writer: monadWriterReaderT_writer(_1)(_2), 
                    listen: monadWriterReaderT_listen(_1)(_2), 
                    pass: monadWriterReaderT_pass(_1)(_2)
                };
            };
        };
        var monadWriterMaybeT_writer = function (__dict_Monad_201) {
            return function (__dict_MonadWriter_202) {
                return function (wd) {
                    return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Maybe_Trans.monadTransMaybeT({}))(__dict_Monad_201)(writer(__dict_MonadWriter_202)(wd));
                };
            };
        };
        var monadWriterMaybeT_pass = function (__dict_Monad_203) {
            return function (__dict_MonadWriter_204) {
                return _ps.Control_Monad_Maybe_Trans.liftPassMaybe(__dict_Monad_203)(pass(__dict_MonadWriter_204));
            };
        };
        var monadWriterMaybeT_listen = function (__dict_Monad_205) {
            return function (__dict_MonadWriter_206) {
                return _ps.Control_Monad_Maybe_Trans.liftListenMaybe(__dict_Monad_205)(listen(__dict_MonadWriter_206));
            };
        };
        var monadWriterMaybeT = function (_1) {
            return function (_2) {
                return {
                    writer: monadWriterMaybeT_writer(_1)(_2), 
                    listen: monadWriterMaybeT_listen(_1)(_2), 
                    pass: monadWriterMaybeT_pass(_1)(_2)
                };
            };
        };
        var monadWriterErrorT_writer = function (__dict_Monad_207) {
            return function (__dict_Error_208) {
                return function (__dict_MonadWriter_209) {
                    return function (wd) {
                        return _ps.Control_Monad_Trans.lift(_ps.Control_Monad_Error_Trans.monadTransErrorT(__dict_Error_208))(__dict_Monad_207)(writer(__dict_MonadWriter_209)(wd));
                    };
                };
            };
        };
        var monadWriterErrorT_pass = function (__dict_Monad_210) {
            return function (__dict_Error_211) {
                return function (__dict_MonadWriter_212) {
                    return _ps.Control_Monad_Error_Trans.liftPassError(__dict_Monad_210)(pass(__dict_MonadWriter_212));
                };
            };
        };
        var monadWriterErrorT_listen = function (__dict_Monad_213) {
            return function (__dict_Error_214) {
                return function (__dict_MonadWriter_215) {
                    return _ps.Control_Monad_Error_Trans.liftListenError(__dict_Monad_213)(listen(__dict_MonadWriter_215));
                };
            };
        };
        var monadWriterErrorT = function (_1) {
            return function (_2) {
                return function (_3) {
                    return {
                        writer: monadWriterErrorT_writer(_1)(_2)(_3), 
                        listen: monadWriterErrorT_listen(_1)(_2)(_3), 
                        pass: monadWriterErrorT_pass(_1)(_2)(_3)
                    };
                };
            };
        };
        var listens = function (__dict_Monoid_216) {
            return function (__dict_Monad_217) {
                return function (__dict_MonadWriter_218) {
                    return function (f) {
                        return function (m) {
                            return _ps.Prelude[">>="](__dict_Monad_217)(listen(__dict_MonadWriter_218)(m))(function (_1) {
                                return _ps.Prelude["return"](__dict_Monad_217)(_ps.Data_Tuple.Tuple(_1.values[0])(f(_1.values[1])));
                                throw "Failed pattern match";
                            });
                        };
                    };
                };
            };
        };
        var censor = function (__dict_Monoid_219) {
            return function (__dict_Monad_220) {
                return function (__dict_MonadWriter_221) {
                    return function (f) {
                        return function (m) {
                            return pass(__dict_MonadWriter_221)(_ps.Prelude[">>="](__dict_Monad_220)(m)(function (a) {
                                return _ps.Prelude["return"](__dict_Monad_220)(_ps.Data_Tuple.Tuple(a)(f));
                            }));
                        };
                    };
                };
            };
        };
        module.censor = censor;
        module.listens = listens;
        module.tell = tell;
        module.pass = pass;
        module.listen = listen;
        module.writer = writer;
        module.monadWriterWriterT = monadWriterWriterT;
        module.monadWriterErrorT = monadWriterErrorT;
        module.monadWriterMaybeT = monadWriterMaybeT;
        module.monadWriterStateT = monadWriterStateT;
        module.monadWriterReaderT = monadWriterReaderT;
        return module;
    })();
    _ps.Text_Parsing_Parser = (function () {
        var module = {};
        var ParseError = function (value0) {
            return {
                ctor: "Text.Parsing.Parser.ParseError", 
                values: [ value0 ]
            };
        };
        var Consumed = function (value0) {
            return {
                ctor: "Text.Parsing.Parser.Consumed", 
                values: [ value0 ]
            };
        };
        var ParserT = function (value0) {
            return {
                ctor: "Text.Parsing.Parser.ParserT", 
                values: [ value0 ]
            };
        };
        var unParserT = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var runConsumed = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var errorParseError_strMsg = function (msg) {
            return ParseError({
                message: msg
            });
        };
        var errorParseError_noMsg = ParseError({
            message: ""
        });
        var errorParseError = function (_1) {
            return {
                noMsg: errorParseError_noMsg, 
                strMsg: errorParseError_strMsg
            };
        };
        var monadErrorParserT_catchError = function (__dict_Monad_230) {
            return function (p) {
                return function (f) {
                    return ParserT(_ps.Control_Monad_Error_Class.catchError(_ps.Control_Monad_Error_Class.monadErrorStateT(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_230)(errorParseError({}))))(_ps.Control_Monad_Error_Class.monadErrorStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_230)(errorParseError({})))(_ps.Control_Monad_Error_Class.monadErrorErrorT(__dict_Monad_230)(errorParseError({})))))(unParserT(p))(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(unParserT)(f)));
                };
            };
        };
        var monadErrorParserT_throwError = function (__dict_Monad_229) {
            return function (e) {
                return ParserT(_ps.Control_Monad_Error_Class.throwError(_ps.Control_Monad_Error_Class.monadErrorStateT(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_229)(errorParseError({}))))(_ps.Control_Monad_Error_Class.monadErrorStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_229)(errorParseError({})))(_ps.Control_Monad_Error_Class.monadErrorErrorT(__dict_Monad_229)(errorParseError({})))))(e));
            };
        };
        var monadErrorParserT = function (_1) {
            return {
                throwError: monadErrorParserT_throwError(_1), 
                catchError: monadErrorParserT_catchError(_1)
            };
        };
        var fail = function (__dict_Monad_231) {
            return function (message) {
                return _ps.Control_Monad_Error_Class.throwError(monadErrorParserT(__dict_Monad_231))(ParseError({
                    message: message
                }));
            };
        };
        var monadParserT_$$return = function (__dict_Monad_228) {
            return function (a) {
                return ParserT(_ps.Prelude["return"](_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_228)(errorParseError({})))))(a));
            };
        };
        var monadParserT_$greater$greater$eq = function (__dict_Monad_227) {
            return function (p) {
                return function (f) {
                    return ParserT(_ps.Prelude[">>="](_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_227)(errorParseError({})))))(unParserT(p))(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(unParserT)(f)));
                };
            };
        };
        var monadParserT = function (_1) {
            return {
                $$return: monadParserT_$$return(_1), 
                $greater$greater$eq: monadParserT_$greater$greater$eq(_1)
            };
        };
        var monadStateConsumerParserT_state = function (__dict_Monad_226) {
            return function (f) {
                return ParserT(_ps.Control_Monad_State_Class.state(_ps.Control_Monad_State_Class.monadStateStateT1(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_226)(errorParseError({}))))(_ps.Control_Monad_State_Class.monadStateStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_226)(errorParseError({})))))(f));
            };
        };
        var monadStateConsumerParserT = function (_1) {
            return {
                state: monadStateConsumerParserT_state(_1)
            };
        };
        var monadStateParserT_state = function (__dict_Monad_225) {
            return function (f) {
                return ParserT(_ps.Control_Monad_State_Class.state(_ps.Control_Monad_State_Class.monadStateStateT(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_225)(errorParseError({})))))(f));
            };
        };
        var monadStateParserT = function (_1) {
            return {
                state: monadStateParserT_state(_1)
            };
        };
        var monadTransParserT_lift = function (__dict_Monad_223) {
            return function (m) {
                return ParserT(_ps.Control_Monad_Trans.lift(_ps.Control_Monad_State_Trans.monadTransStateT({}))(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_223)(errorParseError({}))))(_ps.Control_Monad_Trans.lift(_ps.Control_Monad_State_Trans.monadTransStateT({}))(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_223)(errorParseError({})))(_ps.Control_Monad_Trans.lift(_ps.Control_Monad_Error_Trans.monadTransErrorT(errorParseError({})))(__dict_Monad_223)(m))));
            };
        };
        var monadTransParserT = function (_1) {
            return {
                lift: function (__dict_Monad_224) {
                    return monadTransParserT_lift(__dict_Monad_224);
                }
            };
        };
        var runParserT = function (__dict_Monad_222) {
            return function (s) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Error_Trans.runErrorT)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude.flip(_ps.Control_Monad_State_Trans.evalStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_222)(errorParseError({}))))(Consumed(false)))(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude.flip(_ps.Control_Monad_State_Trans.evalStateT(_ps.Control_Monad_State_Trans.monadStateT(_ps.Control_Monad_Error_Trans.monadErrorT(__dict_Monad_222)(errorParseError({})))))(s))(unParserT)));
            };
        };
        var runParser = function (s) {
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Monad_Identity.runIdentity)(runParserT(_ps.Control_Monad_Identity.monadIdentity({}))(s));
        };
        var alternativeParserT_empty = function (__dict_Monad_232) {
            return ParserT(_ps.Prelude.empty(_ps.Control_Monad_State_Trans.altStateT(_ps.Control_Monad_State_Trans.altStateT(_ps.Control_Monad_Error_Trans.altErrorT(__dict_Monad_232)(errorParseError({}))))));
        };
        var alternativeParserT_$less$bar$greater = function (__dict_Monad_233) {
            return function (p1) {
                return function (p2) {
                    return ParserT(_ps.Prelude["<|>"](_ps.Control_Monad_State_Trans.altStateT(_ps.Control_Monad_State_Trans.altStateT(_ps.Control_Monad_Error_Trans.altErrorT(__dict_Monad_233)(errorParseError({})))))(unParserT(p1))(unParserT(p2)));
                };
            };
        };
        var alternativeParserT = function (_1) {
            return {
                empty: alternativeParserT_empty(_1), 
                $less$bar$greater: alternativeParserT_$less$bar$greater(_1)
            };
        };
        module.ParserT = ParserT;
        module.Consumed = Consumed;
        module.ParseError = ParseError;
        module.fail = fail;
        module.runParser = runParser;
        module.runParserT = runParserT;
        module.unParserT = unParserT;
        module.runConsumed = runConsumed;
        module.errorParseError = errorParseError;
        module.monadParserT = monadParserT;
        module.alternativeParserT = alternativeParserT;
        module.monadTransParserT = monadTransParserT;
        module.monadErrorParserT = monadErrorParserT;
        module.monadStateParserT = monadStateParserT;
        module.monadStateConsumerParserT = monadStateConsumerParserT;
        return module;
    })();
    _ps.Text_Parsing_Parser_String = (function () {
        var module = {};
        var string = function (__dict_Monad_234) {
            return function (s) {
                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_234))(_ps.Control_Monad_State_Class.get(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_234))(_ps.Text_Parsing_Parser.monadStateParserT(__dict_Monad_234)))(function (s$prime) {
                    return (function (_1) {
                        if (_1 === 0) {
                            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_234))(_ps.Control_Monad_State_Class.put(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_234))(_ps.Text_Parsing_Parser.monadStateConsumerParserT(__dict_Monad_234))(_ps.Text_Parsing_Parser.Consumed(true)))(function (_) {
                                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_234))(_ps.Control_Monad_State_Class.put(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_234))(_ps.Text_Parsing_Parser.monadStateParserT(__dict_Monad_234))(_ps.Data_String.substring(_ps.Data_String.lengthS(s))(_ps.Data_String.lengthS(s$prime))(s$prime)))(function (_) {
                                    return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_234))(s);
                                });
                            });
                        };
                        return _ps.Text_Parsing_Parser.fail(__dict_Monad_234)("Expected \"" + s + "\"");
                        throw "Failed pattern match";
                    })(_ps.Data_String.indexOfS(s$prime)(s));
                });
            };
        };
        var eof = function (__dict_Monad_235) {
            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_235))(_ps.Control_Monad_State_Class.get(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_235))(_ps.Text_Parsing_Parser.monadStateParserT(__dict_Monad_235)))(function (s) {
                if (s === "") {
                    return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_235))({});
                };
                return _ps.Text_Parsing_Parser.fail(__dict_Monad_235)("Expected EOF");
                throw "Failed pattern match";
            });
        };
        var $$char = function (__dict_Monad_236) {
            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_236))(_ps.Control_Monad_State_Class.get(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_236))(_ps.Text_Parsing_Parser.monadStateParserT(__dict_Monad_236)))(function (s) {
                if (s === "") {
                    return _ps.Text_Parsing_Parser.fail(__dict_Monad_236)("Unexpected EOF");
                };
                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_236))(_ps.Control_Monad_State_Class.put(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_236))(_ps.Text_Parsing_Parser.monadStateConsumerParserT(__dict_Monad_236))(_ps.Text_Parsing_Parser.Consumed(true)))(function (_) {
                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_236))(_ps.Control_Monad_State_Class.put(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_236))(_ps.Text_Parsing_Parser.monadStateParserT(__dict_Monad_236))(_ps.Data_String.substring(1)(_ps.Data_String.lengthS(s))(s)))(function (_) {
                        return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_236))(_ps.Data_String.substr(0)(1)(s));
                    });
                });
                throw "Failed pattern match";
            });
        };
        module["char"] = $$char;
        module.string = string;
        module.eof = eof;
        return module;
    })();
    _ps.Text_Parsing_Parser_Combinators = (function () {
        var module = {};
        var $$try = function (__dict_Monad_237) {
            return function (p) {
                return _ps.Control_Monad_Error_Class.catchError(_ps.Text_Parsing_Parser.monadErrorParserT(__dict_Monad_237))(p)(function (e) {
                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_237))(_ps.Control_Monad_State_Class.get(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_237))(_ps.Text_Parsing_Parser.monadStateConsumerParserT(__dict_Monad_237)))(function (_1) {
                        return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_237))(_ps.Control_Monad.when(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_237))(_1.values[0])(_ps.Control_Monad_State_Class.put(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_237))(_ps.Text_Parsing_Parser.monadStateConsumerParserT(__dict_Monad_237))(_ps.Text_Parsing_Parser.Consumed(false))))(function (_) {
                            return _ps.Control_Monad_Error_Class.throwError(_ps.Text_Parsing_Parser.monadErrorParserT(__dict_Monad_237))(e);
                        });
                        throw "Failed pattern match";
                    });
                });
            };
        };
        var sepEndBy = function (__dict_Monad_238) {
            return function (p) {
                return function (sep) {
                    return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_238))(sepEndBy1(__dict_Monad_238)(p)(sep))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_238))([  ]));
                };
            };
        };
        var sepEndBy1 = function (__dict_Monad_239) {
            return function (p) {
                return function (sep) {
                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_239))(p)(function (a) {
                        return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_239))(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_239))(sep)(function (_) {
                            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_239))(sepEndBy(__dict_Monad_239)(p)(sep))(function (as) {
                                return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_239))(_ps.Data_Array[":"](a)(as));
                            });
                        }))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_239))([ a ]));
                    });
                };
            };
        };
        var optional = function (__dict_Monad_240) {
            return function (p) {
                return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_240))(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_240))(p)(function (_) {
                    return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_240))({});
                }))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_240))({}));
            };
        };
        var option = function (__dict_Monad_241) {
            return function (a) {
                return function (p) {
                    return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_241))(p)(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_241))(a));
                };
            };
        };
        var optionMaybe = function (__dict_Monad_242) {
            return function (p) {
                return option(__dict_Monad_242)(_ps.Data_Maybe.Nothing)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_242))))(_ps.Data_Maybe.Just)(p));
            };
        };
        var many = function (__dict_Monad_243) {
            return function (p) {
                return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_243))(many1(__dict_Monad_243)(p))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_243))([  ]));
            };
        };
        var many1 = function (__dict_Monad_244) {
            return function (p) {
                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_244))(p)(function (a) {
                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_244))(many(__dict_Monad_244)(p))(function (as) {
                        return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_244))(_ps.Data_Array[":"](a)(as));
                    });
                });
            };
        };
        var sepBy1 = function (__dict_Monad_245) {
            return function (p) {
                return function (sep) {
                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_245))(p)(function (a) {
                        return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_245))(many(__dict_Monad_245)(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_245))(sep)(function (_) {
                            return p;
                        })))(function (as) {
                            return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_245))(_ps.Data_Array[":"](a)(as));
                        });
                    });
                };
            };
        };
        var sepBy = function (__dict_Monad_246) {
            return function (p) {
                return function (sep) {
                    return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_246))(sepBy1(__dict_Monad_246)(p)(sep))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_246))([  ]));
                };
            };
        };
        var endBy1 = function (__dict_Monad_247) {
            return function (p) {
                return function (sep) {
                    return many1(__dict_Monad_247)(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_247))(p)(function (a) {
                        return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_247))(sep)(function (_) {
                            return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_247))(a);
                        });
                    }));
                };
            };
        };
        var endBy = function (__dict_Monad_248) {
            return function (p) {
                return function (sep) {
                    return many(__dict_Monad_248)(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_248))(p)(function (a) {
                        return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_248))(sep)(function (_) {
                            return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_248))(a);
                        });
                    }));
                };
            };
        };
        var choice = function (__dict_Monad_249) {
            return function (_1) {
                if (_1.length === 0) {
                    return _ps.Text_Parsing_Parser.fail(__dict_Monad_249)("Nothing to parse");
                };
                if (_1.length === 1) {
                    return _1[0];
                };
                if (_1.length > 0) {
                    var _5 = _1.slice(1);
                    return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_249))(_1[0])(choice(__dict_Monad_249)(_5));
                };
                throw "Failed pattern match";
            };
        };
        var chainr1 = function (__dict_Monad_250) {
            return function (p) {
                return function (f) {
                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_250))(p)(function (a) {
                        return chainr1$prime(__dict_Monad_250)(p)(f)(a);
                    });
                };
            };
        };
        var chainr1$prime = function (__dict_Monad_251) {
            return function (p) {
                return function (f) {
                    return function (a) {
                        return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_251))(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_251))(f)(function (f$prime) {
                            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_251))(chainr1(__dict_Monad_251)(p)(f))(function (a$prime) {
                                return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_251))(f$prime(a)(a$prime));
                            });
                        }))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_251))(a));
                    };
                };
            };
        };
        var chainr = function (__dict_Monad_252) {
            return function (p) {
                return function (f) {
                    return function (a) {
                        return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_252))(chainr1(__dict_Monad_252)(p)(f))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_252))(a));
                    };
                };
            };
        };
        var chainl1$prime = function (__dict_Monad_253) {
            return function (p) {
                return function (f) {
                    return function (a) {
                        return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_253))(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_253))(f)(function (f$prime) {
                            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_253))(p)(function (a$prime) {
                                return chainl1$prime(__dict_Monad_253)(p)(f)(f$prime(a)(a$prime));
                            });
                        }))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_253))(a));
                    };
                };
            };
        };
        var chainl1 = function (__dict_Monad_254) {
            return function (p) {
                return function (f) {
                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_254))(p)(function (a) {
                        return chainl1$prime(__dict_Monad_254)(p)(f)(a);
                    });
                };
            };
        };
        var chainl = function (__dict_Monad_255) {
            return function (p) {
                return function (f) {
                    return function (a) {
                        return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_255))(chainl1(__dict_Monad_255)(p)(f))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_255))(a));
                    };
                };
            };
        };
        var between = function (__dict_Monad_256) {
            return function (open) {
                return function (close) {
                    return function (p) {
                        return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_256))(open)(function (_) {
                            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_256))(p({}))(function (a) {
                                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_256))(close)(function (_) {
                                    return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_256))(a);
                                });
                            });
                        });
                    };
                };
            };
        };
        var $less$qmark$greater = function (__dict_Monad_257) {
            return function (p) {
                return function (msg) {
                    return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_257))(p)(_ps.Text_Parsing_Parser.fail(__dict_Monad_257)(msg));
                };
            };
        };
        module.choice = choice;
        module.chainr1$prime = chainr1$prime;
        module.chainr1 = chainr1;
        module.chainl1$prime = chainl1$prime;
        module.chainl1 = chainl1;
        module.chainl = chainl;
        module.chainr = chainr;
        module.endBy = endBy;
        module.endBy1 = endBy1;
        module.sepEndBy1 = sepEndBy1;
        module.sepEndBy = sepEndBy;
        module.sepBy1 = sepBy1;
        module.sepBy = sepBy;
        module["try"] = $$try;
        module.optionMaybe = optionMaybe;
        module.optional = optional;
        module.option = option;
        module.between = between;
        module["<?>"] = $less$qmark$greater;
        module.many1 = many1;
        module.many = many;
        return module;
    })();
    _ps.Control_Applicative = (function () {
        var module = {};
        var lift3 = function (__dict_Applicative_258) {
            return function (f) {
                return function (x) {
                    return function (y) {
                        return function (z) {
                            return _ps.Prelude["<*>"](__dict_Applicative_258)(_ps.Prelude["<*>"](__dict_Applicative_258)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_258))(f)(x))(y))(z);
                        };
                    };
                };
            };
        };
        var lift2 = function (__dict_Applicative_259) {
            return function (f) {
                return function (x) {
                    return function (y) {
                        return _ps.Prelude["<*>"](__dict_Applicative_259)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_259))(f)(x))(y);
                    };
                };
            };
        };
        var $less$times = function (__dict_Applicative_260) {
            return function (x) {
                return function (y) {
                    return _ps.Prelude["<*>"](__dict_Applicative_260)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_260))(_ps.Prelude["const"])(x))(y);
                };
            };
        };
        var $times$greater = function (__dict_Applicative_261) {
            return function (x) {
                return function (y) {
                    return _ps.Prelude["<*>"](__dict_Applicative_261)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_261))(_ps.Prelude["const"](_ps.Prelude.id(_ps.Prelude.categoryArr({}))))(x))(y);
                };
            };
        };
        module.lift3 = lift3;
        module.lift2 = lift2;
        module["*>"] = $times$greater;
        module["<*"] = $less$times;
        return module;
    })();
    _ps.Data_Foldable = (function () {
        var module = {};
        function foldr(dict) {
            return dict.foldr;
        };
        function foldl(dict) {
            return dict.foldl;
        };
        function foldMap(dict) {
            return dict.foldMap;
        };
        var traverse_ = function (__dict_Applicative_262) {
            return function (__dict_Foldable_263) {
                return function (f) {
                    return foldr(__dict_Foldable_263)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Applicative["*>"](__dict_Applicative_262))(f))(_ps.Prelude.pure(__dict_Applicative_262)({}));
                };
            };
        };
        var sum = function (__dict_Foldable_264) {
            return foldl(__dict_Foldable_264)(_ps.Prelude["+"](_ps.Prelude.numNumber({})))(0);
        };
        var sequence_ = function (__dict_Applicative_265) {
            return function (__dict_Foldable_266) {
                return traverse_(__dict_Applicative_265)(__dict_Foldable_266)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        var product = function (__dict_Foldable_267) {
            return foldl(__dict_Foldable_267)(_ps.Prelude["*"](_ps.Prelude.numNumber({})))(1);
        };
        var or = function (__dict_Foldable_268) {
            return foldl(__dict_Foldable_268)(_ps.Prelude["||"](_ps.Prelude.boolLikeBoolean({})))(false);
        };
        var mconcat = function (__dict_Foldable_269) {
            return function (__dict_Monoid_270) {
                return foldl(__dict_Foldable_269)(_ps.Data_Monoid["<>"](__dict_Monoid_270))(_ps.Data_Monoid.mempty(__dict_Monoid_270));
            };
        };
        var for_ = function (__dict_Applicative_271) {
            return function (__dict_Foldable_272) {
                return _ps.Prelude.flip(traverse_(__dict_Applicative_271)(__dict_Foldable_272));
            };
        };
        var foldableTuple_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[1])(_2);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableTuple_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[1]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableTuple_foldMap = function (__dict_Monoid_273) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[1]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableTuple = function (_1) {
            return {
                foldr: foldableTuple_foldr, 
                foldl: foldableTuple_foldl, 
                foldMap: function (__dict_Monoid_274) {
                    return foldableTuple_foldMap(__dict_Monoid_274);
                }
            };
        };
        var foldableRef_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[0])(_2);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableRef_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[0]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableRef_foldMap = function (__dict_Monoid_275) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[0]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableRef = function (_1) {
            return {
                foldr: foldableRef_foldr, 
                foldl: foldableRef_foldl, 
                foldMap: function (__dict_Monoid_276) {
                    return foldableRef_foldMap(__dict_Monoid_276);
                }
            };
        };
        var foldableMaybe_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Maybe.Nothing") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Maybe.Just") {
                        return _1(_3.values[0])(_2);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableMaybe_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Maybe.Nothing") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Maybe.Just") {
                        return _1(_2)(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableMaybe_foldMap = function (__dict_Monoid_277) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return _ps.Data_Monoid.mempty(__dict_Monoid_277);
                    };
                    if (_2.ctor === "Data.Maybe.Just") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableMaybe = function (_1) {
            return {
                foldr: foldableMaybe_foldr, 
                foldl: foldableMaybe_foldl, 
                foldMap: function (__dict_Monoid_278) {
                    return foldableMaybe_foldMap(__dict_Monoid_278);
                }
            };
        };
        var foldableEither_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _1(_3.values[0])(_2);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableEither_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _1(_2)(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableEither_foldMap = function (__dict_Monoid_279) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Either.Left") {
                        return _ps.Data_Monoid.mempty(__dict_Monoid_279);
                    };
                    if (_2.ctor === "Data.Either.Right") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableEither = function (_1) {
            return {
                foldr: foldableEither_foldr, 
                foldl: foldableEither_foldl, 
                foldMap: function (__dict_Monoid_280) {
                    return foldableEither_foldMap(__dict_Monoid_280);
                }
            };
        };
        var foldableArray = function (_1) {
            return {
                foldr: foldableArray_foldr, 
                foldl: foldableArray_foldl, 
                foldMap: function (__dict_Monoid_282) {
                    return foldableArray_foldMap(__dict_Monoid_282);
                }
            };
        };
        var foldableArray_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.length === 0) {
                        return _2;
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        return _1(_3[0])(foldr(foldableArray({}))(_1)(_2)(_8));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableArray_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.length === 0) {
                        return _2;
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        return foldl(foldableArray({}))(_1)(_1(_2)(_3[0]))(_8);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableArray_foldMap = function (__dict_Monoid_281) {
            return function (_1) {
                return function (_2) {
                    if (_2.length === 0) {
                        return _ps.Data_Monoid.mempty(__dict_Monoid_281);
                    };
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        return _ps.Data_Monoid["<>"](__dict_Monoid_281)(_1(_2[0]))(foldMap(foldableArray({}))(__dict_Monoid_281)(_1)(_6));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var fold = function (__dict_Foldable_283) {
            return function (__dict_Monoid_284) {
                return foldMap(__dict_Foldable_283)(__dict_Monoid_284)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        var find = function (__dict_Foldable_285) {
            return function (p) {
                return function (f) {
                    return (function (_1) {
                        if (_1.length > 0) {
                            return _ps.Data_Maybe.Just(_1[0]);
                        };
                        if (_1.length === 0) {
                            return _ps.Data_Maybe.Nothing;
                        };
                        throw "Failed pattern match";
                    })(foldMap(__dict_Foldable_285)(_ps.Data_Monoid.monoidArray({}))(function (x) {
                        return p(x) ? [ x ] : [  ];
                    })(f));
                };
            };
        };
        var any = function (__dict_Foldable_286) {
            return function (p) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_286)(_ps.Data_Monoid.monoidArray({}))(function (x) {
                    return [ p(x) ];
                }));
            };
        };
        var elem = function (__dict_Eq_287) {
            return function (__dict_Foldable_288) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(any(__dict_Foldable_288))(_ps.Prelude["=="](__dict_Eq_287));
            };
        };
        var notElem = function (__dict_Eq_289) {
            return function (__dict_Foldable_290) {
                return function (x) {
                    return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude.not(_ps.Prelude.boolLikeBoolean({})))(elem(__dict_Eq_289)(__dict_Foldable_290)(x));
                };
            };
        };
        var and = function (__dict_Foldable_291) {
            return foldl(__dict_Foldable_291)(_ps.Prelude["&&"](_ps.Prelude.boolLikeBoolean({})))(true);
        };
        var all = function (__dict_Foldable_292) {
            return function (p) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_292)(_ps.Data_Monoid.monoidArray({}))(function (x) {
                    return [ p(x) ];
                }));
            };
        };
        module.find = find;
        module.notElem = notElem;
        module.elem = elem;
        module.product = product;
        module.sum = sum;
        module.all = all;
        module.any = any;
        module.or = or;
        module.and = and;
        module.mconcat = mconcat;
        module.sequence_ = sequence_;
        module.for_ = for_;
        module.traverse_ = traverse_;
        module.fold = fold;
        module.foldMap = foldMap;
        module.foldl = foldl;
        module.foldr = foldr;
        module.foldableArray = foldableArray;
        module.foldableEither = foldableEither;
        module.foldableMaybe = foldableMaybe;
        module.foldableRef = foldableRef;
        module.foldableTuple = foldableTuple;
        return module;
    })();
    _ps.Data_Traversable = (function () {
        var module = {};
        function traverse(dict) {
            return dict.traverse;
        };
        function sequence(dict) {
            return dict.sequence;
        };
        var traversableTuple_traverse = function (__dict_Applicative_294) {
            return function (_1) {
                return function (_2) {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_294))(_ps.Data_Tuple.Tuple(_2.values[0]))(_1(_2.values[1]));
                    throw "Failed pattern match";
                };
            };
        };
        var traversableTuple_sequence = function (__dict_Applicative_295) {
            return function (_1) {
                return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_295))(_ps.Data_Tuple.Tuple(_1.values[0]))(_1.values[1]);
                throw "Failed pattern match";
            };
        };
        var traversableTuple = function (_1) {
            return {
                traverse: function (__dict_Applicative_296) {
                    return traversableTuple_traverse(__dict_Applicative_296);
                }, 
                sequence: function (__dict_Applicative_297) {
                    return traversableTuple_sequence(__dict_Applicative_297);
                }
            };
        };
        var traversableRef_traverse = function (__dict_Applicative_298) {
            return function (_1) {
                return function (_2) {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_298))(_ps.Data_Eq.Ref)(_1(_2.values[0]));
                    throw "Failed pattern match";
                };
            };
        };
        var traversableRef_sequence = function (__dict_Applicative_299) {
            return function (_1) {
                return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_299))(_ps.Data_Eq.Ref)(_1.values[0]);
                throw "Failed pattern match";
            };
        };
        var traversableRef = function (_1) {
            return {
                traverse: function (__dict_Applicative_300) {
                    return traversableRef_traverse(__dict_Applicative_300);
                }, 
                sequence: function (__dict_Applicative_301) {
                    return traversableRef_sequence(__dict_Applicative_301);
                }
            };
        };
        var traversableMaybe_traverse = function (__dict_Applicative_302) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return _ps.Prelude.pure(__dict_Applicative_302)(_ps.Data_Maybe.Nothing);
                    };
                    if (_2.ctor === "Data.Maybe.Just") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_302))(_ps.Data_Maybe.Just)(_1(_2.values[0]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var traversableMaybe_sequence = function (__dict_Applicative_303) {
            return function (_1) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return _ps.Prelude.pure(__dict_Applicative_303)(_ps.Data_Maybe.Nothing);
                };
                if (_1.ctor === "Data.Maybe.Just") {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_303))(_ps.Data_Maybe.Just)(_1.values[0]);
                };
                throw "Failed pattern match";
            };
        };
        var traversableMaybe = function (_1) {
            return {
                traverse: function (__dict_Applicative_304) {
                    return traversableMaybe_traverse(__dict_Applicative_304);
                }, 
                sequence: function (__dict_Applicative_305) {
                    return traversableMaybe_sequence(__dict_Applicative_305);
                }
            };
        };
        var traversableEither_traverse = function (__dict_Applicative_306) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Either.Left") {
                        return _ps.Prelude.pure(__dict_Applicative_306)(_ps.Data_Either.Left(_2.values[0]));
                    };
                    if (_2.ctor === "Data.Either.Right") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_306))(_ps.Data_Either.Right)(_1(_2.values[0]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var traversableEither_sequence = function (__dict_Applicative_307) {
            return function (_1) {
                if (_1.ctor === "Data.Either.Left") {
                    return _ps.Prelude.pure(__dict_Applicative_307)(_ps.Data_Either.Left(_1.values[0]));
                };
                if (_1.ctor === "Data.Either.Right") {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_307))(_ps.Data_Either.Right)(_1.values[0]);
                };
                throw "Failed pattern match";
            };
        };
        var traversableEither = function (_1) {
            return {
                traverse: function (__dict_Applicative_308) {
                    return traversableEither_traverse(__dict_Applicative_308);
                }, 
                sequence: function (__dict_Applicative_309) {
                    return traversableEither_sequence(__dict_Applicative_309);
                }
            };
        };
        var traversableArray = function (_1) {
            return {
                traverse: function (__dict_Applicative_312) {
                    return traversableArray_traverse(__dict_Applicative_312);
                }, 
                sequence: function (__dict_Applicative_313) {
                    return traversableArray_sequence(__dict_Applicative_313);
                }
            };
        };
        var traversableArray_traverse = function (__dict_Applicative_310) {
            return function (_1) {
                return function (_2) {
                    if (_2.length === 0) {
                        return _ps.Prelude.pure(__dict_Applicative_310)([  ]);
                    };
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        return _ps.Prelude["<*>"](__dict_Applicative_310)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_310))(_ps.Data_Array[":"])(_1(_2[0])))(traverse(traversableArray({}))(__dict_Applicative_310)(_1)(_6));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var traversableArray_sequence = function (__dict_Applicative_311) {
            return function (_1) {
                if (_1.length === 0) {
                    return _ps.Prelude.pure(__dict_Applicative_311)([  ]);
                };
                if (_1.length > 0) {
                    var _4 = _1.slice(1);
                    return _ps.Prelude["<*>"](__dict_Applicative_311)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_311))(_ps.Data_Array[":"])(_1[0]))(sequence(traversableArray({}))(__dict_Applicative_311)(_4));
                };
                throw "Failed pattern match";
            };
        };
        var zipWithA = function (__dict_Applicative_293) {
            return function (f) {
                return function (xs) {
                    return function (ys) {
                        return sequence(traversableArray({}))(__dict_Applicative_293)(_ps.Data_Array.zipWith(f)(xs)(ys));
                    };
                };
            };
        };
        var $$for = function (__dict_Applicative_314) {
            return function (__dict_Traversable_315) {
                return function (x) {
                    return function (f) {
                        return traverse(__dict_Traversable_315)(__dict_Applicative_314)(f)(x);
                    };
                };
            };
        };
        module.zipWithA = zipWithA;
        module["for"] = $$for;
        module.sequence = sequence;
        module.traverse = traverse;
        module.traversableArray = traversableArray;
        module.traversableEither = traversableEither;
        module.traversableRef = traversableRef;
        module.traversableMaybe = traversableMaybe;
        module.traversableTuple = traversableTuple;
        return module;
    })();
    _ps.Network_Inquire = (function () {
        var module = {};
        var NOBOOL = {
            ctor: "Network.Inquire.NOBOOL", 
            values: [  ]
        };
        var NOT = {
            ctor: "Network.Inquire.NOT", 
            values: [  ]
        };
        var IEQ = {
            ctor: "Network.Inquire.IEQ", 
            values: [  ]
        };
        var INE = {
            ctor: "Network.Inquire.INE", 
            values: [  ]
        };
        var IGT = {
            ctor: "Network.Inquire.IGT", 
            values: [  ]
        };
        var IGE = {
            ctor: "Network.Inquire.IGE", 
            values: [  ]
        };
        var ILT = {
            ctor: "Network.Inquire.ILT", 
            values: [  ]
        };
        var ILE = {
            ctor: "Network.Inquire.ILE", 
            values: [  ]
        };
        var AND = {
            ctor: "Network.Inquire.AND", 
            values: [  ]
        };
        var OR = {
            ctor: "Network.Inquire.OR", 
            values: [  ]
        };
        var True = {
            ctor: "Network.Inquire.True", 
            values: [  ]
        };
        var False = {
            ctor: "Network.Inquire.False", 
            values: [  ]
        };
        var Pred = function (value0) {
            return function (value1) {
                return function (value2) {
                    return {
                        ctor: "Network.Inquire.Pred", 
                        values: [ value0, value1, value2 ]
                    };
                };
            };
        };
        var Junc = function (value0) {
            return function (value1) {
                return function (value2) {
                    return {
                        ctor: "Network.Inquire.Junc", 
                        values: [ value0, value1, value2 ]
                    };
                };
            };
        };
        var Wrap = function (value0) {
            return function (value1) {
                return {
                    ctor: "Network.Inquire.Wrap", 
                    values: [ value0, value1 ]
                };
            };
        };
        function unsafeGenerate(i) {  var showDict = {    show: function(k) {      if ({}.toString.call(k).slice(8, -1) === 'Function') {        return k().toString();      } else {        return k.toString();      }    }  };  return generate(showDict)(showDict)(i);};
        function unsafeEncode(x) {  var show = function(k) {    if ({}.toString.call(k).slice(8, -1) === 'Function') {      return k().toString();    } else {      return k.toString();    }  };  if ({}.toString.call(x).slice(8, -1) === 'Array') {    return x.map(encodeURIComponent).join();  } else {    return encodeURIComponent(show(x));  }};
        var traversableInquire = function (_1) {
            return {
                traverse: function (__dict_Applicative_318) {
                    return traversableInquire_traverse(__dict_Applicative_318);
                }, 
                sequence: function (__dict_Applicative_319) {
                    return traversableInquire_sequence(__dict_Applicative_319);
                }
            };
        };
        var traversableInquire_traverse = function (__dict_Applicative_316) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Network.Inquire.True") {
                        return _ps.Prelude.pure(__dict_Applicative_316)(True);
                    };
                    if (_2.ctor === "Network.Inquire.False") {
                        return _ps.Prelude.pure(__dict_Applicative_316)(False);
                    };
                    if (_2.ctor === "Network.Inquire.Pred") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_316))(Pred(_2.values[0])(_2.values[1]))(_1(_2.values[2]));
                    };
                    if (_2.ctor === "Network.Inquire.Junc") {
                        return _ps.Prelude["<*>"](__dict_Applicative_316)(_ps.Prelude["<*>"](__dict_Applicative_316)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_316))(Junc)(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_316)(_1)(_2.values[0])))(_ps.Prelude.pure(__dict_Applicative_316)(_2.values[1])))(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_316)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Network.Inquire.Wrap") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_316))(Wrap(_2.values[0]))(_ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_316)(_1)(_2.values[1]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var traversableInquire_sequence = function (__dict_Applicative_317) {
            return _ps.Data_Traversable.traverse(traversableInquire({}))(__dict_Applicative_317)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
        };
        var showWrapOp_show = function (_1) {
            if (_1.ctor === "Network.Inquire.NOBOOL") {
                return "";
            };
            if (_1.ctor === "Network.Inquire.NOT") {
                return "!";
            };
            throw "Failed pattern match";
        };
        var showWrapOp = function (_1) {
            return {
                show: showWrapOp_show
            };
        };
        var showRel_show = function (_1) {
            if (_1.ctor === "Network.Inquire.IEQ") {
                return "=";
            };
            if (_1.ctor === "Network.Inquire.INE") {
                return "!=";
            };
            if (_1.ctor === "Network.Inquire.IGT") {
                return ">";
            };
            if (_1.ctor === "Network.Inquire.IGE") {
                return ">=";
            };
            if (_1.ctor === "Network.Inquire.ILT") {
                return "<";
            };
            if (_1.ctor === "Network.Inquire.ILE") {
                return "<=";
            };
            throw "Failed pattern match";
        };
        var showRel = function (_1) {
            return {
                show: showRel_show
            };
        };
        var showJuncOp_show = function (_1) {
            if (_1.ctor === "Network.Inquire.AND") {
                return "&";
            };
            if (_1.ctor === "Network.Inquire.OR") {
                return ";";
            };
            throw "Failed pattern match";
        };
        var showJuncOp = function (_1) {
            return {
                show: showJuncOp_show
            };
        };
        var showInquire = function (_1) {
            return function (_2) {
                return {
                    show: showInquire_show(_1)(_2)
                };
            };
        };
        var showInquire_show = function (__dict_Show_320) {
            return function (__dict_Show_321) {
                return function (_1) {
                    if (_1.ctor === "Network.Inquire.True") {
                        return "True";
                    };
                    if (_1.ctor === "Network.Inquire.False") {
                        return "False";
                    };
                    if (_1.ctor === "Network.Inquire.Pred") {
                        return "Pred " + _ps.Prelude.show(__dict_Show_320)(_1.values[0]) + " " + _ps.Prelude.show(showRel({}))(_1.values[1]) + " " + _ps.Prelude.show(__dict_Show_321)(_1.values[2]);
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        return "Junc (" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]) + ")";
                    };
                    if (_1.ctor === "Network.Inquire.Wrap") {
                        return "Wrap (" + _ps.Prelude.show(showWrapOp({}))(_1.values[0]) + " " + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[1]) + ")";
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var pred = function (o) {
            return Pred(o.key)(o.rel)(o.val);
        };
        var neObj = function (o) {
            return pred({
                key: o.key, 
                rel: INE, 
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
        var monoidInquire_mempty = True;
        var monoidInquire_$less$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Network.Inquire.True") {
                    return _1;
                };
                if (_1.ctor === "Network.Inquire.True") {
                    return _2;
                };
                return Junc(_1)(AND)(_2);
                throw "Failed pattern match";
            };
        };
        var monoidInquire = function (_1) {
            return {
                mempty: monoidInquire_mempty, 
                $less$greater: monoidInquire_$less$greater
            };
        };
        var ltObj = function (o) {
            return pred({
                key: o.key, 
                rel: ILT, 
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
            return pred({
                key: o.key, 
                rel: ILE, 
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
            return pred({
                key: o.key, 
                rel: IGT, 
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
        var generate = function (__dict_Show_322) {
            return function (__dict_Show_323) {
                return function (i) {
                    return _ps.Global.encodeURIComponent(_ps.Prelude.show(showInquire(__dict_Show_322)(__dict_Show_323))(i));
                };
            };
        };
        var geObj = function (o) {
            return pred({
                key: o.key, 
                rel: IGE, 
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
            return {
                $less$dollar$greater: functorInquire_$less$dollar$greater
            };
        };
        var functorInquire_$less$dollar$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Network.Inquire.True") {
                    return True;
                };
                if (_2.ctor === "Network.Inquire.False") {
                    return False;
                };
                if (_2.ctor === "Network.Inquire.Pred") {
                    return Pred(_2.values[0])(_2.values[1])(_1(_2.values[2]));
                };
                if (_2.ctor === "Network.Inquire.Junc") {
                    return Junc(_ps.Prelude["<$>"](functorInquire({}))(_1)(_2.values[0]))(_2.values[1])(_ps.Prelude["<$>"](functorInquire({}))(_1)(_2.values[2]));
                };
                if (_2.ctor === "Network.Inquire.Wrap") {
                    return Wrap(_2.values[0])(_ps.Prelude["<$>"](functorInquire({}))(_1)(_2.values[1]));
                };
                throw "Failed pattern match";
            };
        };
        var foldableInquire = function (_1) {
            return {
                foldr: foldableInquire_foldr, 
                foldl: foldableInquire_foldl, 
                foldMap: function (__dict_Monoid_325) {
                    return foldableInquire_foldMap(__dict_Monoid_325);
                }
            };
        };
        var foldableInquire_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Network.Inquire.True") {
                        return _2;
                    };
                    if (_3.ctor === "Network.Inquire.False") {
                        return _2;
                    };
                    if (_3.ctor === "Network.Inquire.Pred") {
                        return _1(_3.values[2])(_2);
                    };
                    if (_3.ctor === "Network.Inquire.Junc") {
                        return _ps.Data_Foldable.foldr(foldableInquire({}))(_1)(_ps.Data_Foldable.foldr(foldableInquire({}))(_1)(_2)(_3.values[2]))(_3.values[0]);
                    };
                    if (_3.ctor === "Network.Inquire.Wrap") {
                        return _ps.Data_Foldable.foldr(foldableInquire({}))(_1)(_2)(_3.values[1]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableInquire_foldl = function (f) {
            return function (z) {
                return function (i) {
                    return _ps.Data_Foldable.foldr(foldableInquire({}))(_ps.Prelude.flip(f))(z)(i);
                };
            };
        };
        var foldableInquire_foldMap = function (__dict_Monoid_324) {
            return function (f) {
                return _ps.Data_Foldable.foldr(foldableInquire({}))(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Monoid["<>"](__dict_Monoid_324))(f))(_ps.Data_Monoid.mempty(__dict_Monoid_324));
            };
        };
        var eqWrapOp_$eq$eq = function (_1) {
            return function (_2) {
                if (_1.ctor === "Network.Inquire.NOBOOL") {
                    if (_2.ctor === "Network.Inquire.NOBOOL") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.NOT") {
                    if (_2.ctor === "Network.Inquire.NOT") {
                        return true;
                    };
                };
                return false;
                throw "Failed pattern match";
            };
        };
        var eqWrapOp = function (_1) {
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
                if (_1.ctor === "Network.Inquire.IEQ") {
                    if (_2.ctor === "Network.Inquire.IEQ") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.INE") {
                    if (_2.ctor === "Network.Inquire.INE") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.IGT") {
                    if (_2.ctor === "Network.Inquire.IGT") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.IGE") {
                    if (_2.ctor === "Network.Inquire.IGE") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.ILT") {
                    if (_2.ctor === "Network.Inquire.ILT") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.ILE") {
                    if (_2.ctor === "Network.Inquire.ILE") {
                        return true;
                    };
                };
                return false;
                throw "Failed pattern match";
            };
        };
        var eqRel = function (_1) {
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
            return pred({
                key: o.key, 
                rel: IEQ, 
                val: o.val
            });
        };
        var eqJuncOp_$eq$eq = function (_1) {
            return function (_2) {
                if (_1.ctor === "Network.Inquire.AND") {
                    if (_2.ctor === "Network.Inquire.AND") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.OR") {
                    if (_2.ctor === "Network.Inquire.OR") {
                        return true;
                    };
                };
                return false;
                throw "Failed pattern match";
            };
        };
        var eqJuncOp = function (_1) {
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
        var eqInquire = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqInquire_$eq$eq(_1)(_2), 
                    $div$eq: eqInquire_$div$eq(_1)(_2)
                };
            };
        };
        var eqInquire_$eq$eq = function (__dict_Eq_326) {
            return function (__dict_Eq_327) {
                return function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Network.Inquire.True") {
                            if (_2.ctor === "Network.Inquire.True") {
                                return true;
                            };
                        };
                        if (_1.ctor === "Network.Inquire.False") {
                            if (_2.ctor === "Network.Inquire.False") {
                                return true;
                            };
                        };
                        if (_1.ctor === "Network.Inquire.Pred") {
                            if (_2.ctor === "Network.Inquire.Pred") {
                                return _ps.Prelude["=="](__dict_Eq_326)(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](eqRel({}))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](__dict_Eq_327)(_1.values[2])(_2.values[2]);
                            };
                        };
                        if (_1.ctor === "Network.Inquire.Junc") {
                            if (_2.ctor === "Network.Inquire.Junc") {
                                return _ps.Prelude["=="](eqInquire(__dict_Eq_326)(__dict_Eq_327))(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](eqJuncOp({}))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](eqInquire(__dict_Eq_326)(__dict_Eq_327))(_1.values[2])(_2.values[2]);
                            };
                        };
                        if (_1.ctor === "Network.Inquire.Wrap") {
                            if (_2.ctor === "Network.Inquire.Wrap") {
                                return _ps.Prelude["=="](eqInquire(__dict_Eq_326)(__dict_Eq_327))(_1.values[1])(_2.values[1]) && _ps.Prelude["=="](eqWrapOp({}))(_1.values[0])(_2.values[0]);
                            };
                        };
                        return false;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var eqInquire_$div$eq = function (__dict_Eq_328) {
            return function (__dict_Eq_329) {
                return function (i) {
                    return function (i$prime) {
                        return !_ps.Prelude["=="](eqInquire(__dict_Eq_328)(__dict_Eq_329))(i)(i$prime);
                    };
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
            if (_1.ctor === "Network.Inquire.True") {
                return False;
            };
            if (_1.ctor === "Network.Inquire.False") {
                return True;
            };
            return Wrap(NOT)(_1);
            throw "Failed pattern match";
        };
        var boolLikeInquire_$bar$bar = function (_1) {
            return function (_2) {
                if (_1.ctor === "Network.Inquire.True") {
                    return True;
                };
                if (_2.ctor === "Network.Inquire.True") {
                    return True;
                };
                if (_2.ctor === "Network.Inquire.False") {
                    return _1;
                };
                if (_1.ctor === "Network.Inquire.False") {
                    return _2;
                };
                return Junc(_1)(OR)(_2);
                throw "Failed pattern match";
            };
        };
        var boolLikeInquire_$amp$amp = function (_1) {
            return function (_2) {
                if (_1.ctor === "Network.Inquire.False") {
                    return False;
                };
                if (_2.ctor === "Network.Inquire.False") {
                    return False;
                };
                if (_2.ctor === "Network.Inquire.True") {
                    return _1;
                };
                if (_1.ctor === "Network.Inquire.True") {
                    return _2;
                };
                return Junc(_1)(AND)(_2);
                throw "Failed pattern match";
            };
        };
        var boolLikeInquire = function (_1) {
            return {
                $bar$bar: boolLikeInquire_$bar$bar, 
                $amp$amp: boolLikeInquire_$amp$amp, 
                not: boolLikeInquire_not
            };
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
            return {
                bitraverse: function (__dict_Applicative_332) {
                    return bitraversableInquire_bitraverse(__dict_Applicative_332);
                }, 
                bisequence: function (__dict_Applicative_333) {
                    return bitraversableInquire_bisequence(__dict_Applicative_333);
                }
            };
        };
        var bitraversableInquire_bitraverse = function (__dict_Applicative_330) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Network.Inquire.True") {
                            return _ps.Prelude.pure(__dict_Applicative_330)(True);
                        };
                        if (_3.ctor === "Network.Inquire.False") {
                            return _ps.Prelude.pure(__dict_Applicative_330)(False);
                        };
                        if (_3.ctor === "Network.Inquire.Pred") {
                            return _ps.Prelude["<*>"](__dict_Applicative_330)(_ps.Prelude["<*>"](__dict_Applicative_330)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_330))(Pred)(_1(_3.values[0])))(_ps.Prelude.pure(__dict_Applicative_330)(_3.values[1])))(_2(_3.values[2]));
                        };
                        if (_3.ctor === "Network.Inquire.Junc") {
                            return _ps.Prelude["<*>"](__dict_Applicative_330)(_ps.Prelude["<*>"](__dict_Applicative_330)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_330))(Junc)(_ps.Data_BiTraversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_330)(_1)(_2)(_3.values[0])))(_ps.Prelude.pure(__dict_Applicative_330)(_3.values[1])))(_ps.Data_BiTraversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_330)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Network.Inquire.Wrap") {
                            return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_330))(Wrap(_3.values[0]))(_ps.Data_BiTraversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_330)(_1)(_2)(_3.values[1]));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var bitraversableInquire_bisequence = function (__dict_Applicative_331) {
            return _ps.Data_BiTraversable.bitraverse(bitraversableInquire({}))(__dict_Applicative_331)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
        };
        var biFunctorInquire = function (_1) {
            return {
                $less$dollar$dollar$greater: biFunctorInquire_$less$dollar$dollar$greater
            };
        };
        var biFunctorInquire_$less$dollar$dollar$greater = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Network.Inquire.True") {
                        return True;
                    };
                    if (_3.ctor === "Network.Inquire.False") {
                        return False;
                    };
                    if (_3.ctor === "Network.Inquire.Pred") {
                        return Pred(_1(_3.values[0]))(_3.values[1])(_2(_3.values[2]));
                    };
                    if (_3.ctor === "Network.Inquire.Junc") {
                        return Junc(_ps.Data_BiFunctor["<$$>"](biFunctorInquire({}))(_1)(_2)(_3.values[0]))(_3.values[1])(_ps.Data_BiFunctor["<$$>"](biFunctorInquire({}))(_1)(_2)(_3.values[2]));
                    };
                    if (_3.ctor === "Network.Inquire.Wrap") {
                        return Wrap(_3.values[0])(_ps.Data_BiFunctor["<$$>"](biFunctorInquire({}))(_1)(_2)(_3.values[1]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var biFoldableInquire = function (_1) {
            return {
                bifoldr: biFoldableInquire_bifoldr, 
                bifoldl: biFoldableInquire_bifoldl
            };
        };
        var biFoldableInquire_bifoldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    return function (_4) {
                        if (_4.ctor === "Network.Inquire.True") {
                            return _3;
                        };
                        if (_4.ctor === "Network.Inquire.False") {
                            return _3;
                        };
                        if (_4.ctor === "Network.Inquire.Pred") {
                            return _1(_4.values[0])(_2(_4.values[2])(_3));
                        };
                        if (_4.ctor === "Network.Inquire.Junc") {
                            return _ps.Data_BiFoldable.bifoldr(biFoldableInquire({}))(_1)(_2)(_ps.Data_BiFoldable.bifoldr(biFoldableInquire({}))(_1)(_2)(_3)(_4.values[2]))(_4.values[0]);
                        };
                        if (_4.ctor === "Network.Inquire.Wrap") {
                            return _ps.Data_BiFoldable.bifoldr(biFoldableInquire({}))(_1)(_2)(_3)(_4.values[1]);
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var biFoldableInquire_bifoldl = function (f) {
            return function (g) {
                return function (z) {
                    return function (i) {
                        return _ps.Data_BiFoldable.bifoldr(biFoldableInquire({}))(_ps.Prelude.flip(f))(_ps.Prelude.flip(g))(z)(i);
                    };
                };
            };
        };
        var and = function (i1) {
            return function (i2) {
                return _ps.Prelude["&&"](boolLikeInquire({}))(i1)(i2);
            };
        };
        module.NOBOOL = NOBOOL;
        module.NOT = NOT;
        module.AND = AND;
        module.OR = OR;
        module.IEQ = IEQ;
        module.INE = INE;
        module.IGT = IGT;
        module.IGE = IGE;
        module.ILT = ILT;
        module.ILE = ILE;
        module.True = True;
        module.False = False;
        module.Pred = Pred;
        module.Junc = Junc;
        module.Wrap = Wrap;
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
        module.unsafeGenerate = unsafeGenerate;
        module.generate = generate;
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
    })();
    _ps.Network_Inquire_Combinators = (function () {
        var module = {};
        function bimap(f) { return function(g) {    return function(x) {      return _ps.Data_Functor['<$$>'](_ps.Inquire.biFunctorInquire({}))(f)(g)(x);    }  }};
        function map(f) {  return function(x) {    return _ps.Prelude['<$>'](_ps.Inquire.functorInquire({}))(f)(x);  }};
        function unsafeFindByKey(v) {  return function(i) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return findByKey(_ps.Prelude.eqString({}))(v)(i);  }};
        function unsafeFindByVal(v) {  return function(i) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return findByVal(_ps.Prelude.eqString({}))(v)(i);  }};
        function unsafeRemove(i1) {  return function(i2) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return remove(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);  }};
        function unsafeRemoveAll(i1) {  return function(i2) {    /* We use String's eq typeclass because it uses `unsafeRefEq`*/    return removeAll(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);  }};
        function unsafeReplaceValByKey(v) {  return function(k) {    return function(i) {      /* We use String's eq typeclass because it uses `unsafeRefEq`*/      return replaceValByKey(_ps.Prelude.eqString({}))(v)(k)(i);    }  }};
        function unsafeReplaceValByVal(v1) {  return function(v2) {    return function(i) {      /* We use String's eq typeclass because it uses `unsafeRefEq`*/      return replaceValByVal(_ps.Prelude.eqString({}))(v1)(v2)(i);    }  }};
        function unsafeFromObj(rawObj) {  var arr = [];  for (var k in rawObj) {    if (rawObj.hasOwnProperty(k)) {      arr.push({key: k, val: rawObj[k]});    }  }  return fromArrayObj(arr);};
        var toObj = function (i) {
            var updateVals = function (v) {
                return function (o) {
                    var _1 = {};
                    for (var _2 in o) {
                        if (o.hasOwnProperty(_2)) {
                            _1[_2] = o[_2];
                        };
                    };
                    _1.vals = _ps.Data_Array[":"](v)(o.vals);
                    return _1;
                };
            };
            return (function () {
                var updateKeys = function (k) {
                    return function (o) {
                        var _1 = {};
                        for (var _2 in o) {
                            if (o.hasOwnProperty(_2)) {
                                _1[_2] = o[_2];
                            };
                        };
                        _1.keys = _ps.Data_Array[":"](k)(o.keys);
                        return _1;
                    };
                };
                return _ps.Data_BiFoldable.bifoldr(_ps.Network_Inquire.biFoldableInquire({}))(updateKeys)(updateVals)({
                    keys: [  ], 
                    vals: [  ]
                })(i);
            })();
        };
        var vals = function (i) {
            return (toObj(i)).vals;
        };
        var replaceValByVal = function (__dict_Eq_334) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Network.Inquire.Pred") {
                            if (_ps.Prelude["=="](__dict_Eq_334)(_2)(_3.values[2])) {
                                return _ps.Network_Inquire.Pred(_3.values[0])(_3.values[1])(_1);
                            };
                        };
                        if (_3.ctor === "Network.Inquire.Junc") {
                            return _ps.Network_Inquire.Junc(replaceValByVal(__dict_Eq_334)(_1)(_2)(_3.values[0]))(_3.values[1])(replaceValByVal(__dict_Eq_334)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Network.Inquire.Wrap") {
                            return _ps.Network_Inquire.Wrap(_3.values[0])(replaceValByVal(__dict_Eq_334)(_1)(_2)(_3.values[1]));
                        };
                        return _3;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var replaceValByKey = function (__dict_Eq_335) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.ctor === "Network.Inquire.Pred") {
                            if (_ps.Prelude["=="](__dict_Eq_335)(_2)(_3.values[0])) {
                                return _ps.Network_Inquire.Pred(_2)(_3.values[1])(_1);
                            };
                        };
                        if (_3.ctor === "Network.Inquire.Junc") {
                            return _ps.Network_Inquire.Junc(replaceValByKey(__dict_Eq_335)(_1)(_2)(_3.values[0]))(_3.values[1])(replaceValByKey(__dict_Eq_335)(_1)(_2)(_3.values[2]));
                        };
                        if (_3.ctor === "Network.Inquire.Wrap") {
                            return _ps.Network_Inquire.Wrap(_3.values[0])(replaceValByKey(__dict_Eq_335)(_1)(_2)(_3.values[1]));
                        };
                        return _3;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var remove$prime = function (__dict_Eq_336) {
            return function (__dict_Eq_337) {
                return function (_1) {
                    return function (_2) {
                        return function (_3) {
                            if (_3.ctor === "Network.Inquire.Junc") {
                                var r$prime = remove$prime(__dict_Eq_336)(__dict_Eq_337)(_1)(_2)(_3.values[2]);
                                return _1(_3.values[2])(r$prime) ? _ps.Network_Inquire.Junc(remove$prime(__dict_Eq_336)(__dict_Eq_337)(_1)(_2)(_3.values[0]))(_3.values[1])(_3.values[2]) : _ps.Network_Inquire.Junc(_3.values[0])(_3.values[1])(r$prime);
                            };
                            if (_3.ctor === "Network.Inquire.Wrap") {
                                return _ps.Network_Inquire.Wrap(_3.values[0])(remove$prime(__dict_Eq_336)(__dict_Eq_337)(_1)(_2)(_3.values[1]));
                            };
                            if (_ps.Prelude["=="](_ps.Network_Inquire.eqInquire(__dict_Eq_336)(__dict_Eq_337))(_2)(_3)) {
                                return _ps.Network_Inquire.True;
                            };
                            return _3;
                            throw "Failed pattern match";
                        };
                    };
                };
            };
        };
        var removeAll = function (__dict_Eq_338) {
            return function (__dict_Eq_339) {
                return remove$prime(__dict_Eq_338)(__dict_Eq_339)(function (x) {
                    return function (y) {
                        return true;
                    };
                });
            };
        };
        var remove = function (__dict_Eq_340) {
            return function (__dict_Eq_341) {
                return remove$prime(__dict_Eq_340)(__dict_Eq_341)(_ps.Prelude["=="](_ps.Network_Inquire.eqInquire(__dict_Eq_340)(__dict_Eq_341)));
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
        var idempotent = function (__dict_Eq_342) {
            return function (__dict_Eq_343) {
                return function (_1) {
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                            if (_ps.Prelude["=="](_ps.Network_Inquire.eqInquire(__dict_Eq_342)(__dict_Eq_343))(_1.values[0])(_1.values[2])) {
                                return _1.values[0];
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                            if (_ps.Prelude["=="](_ps.Network_Inquire.eqInquire(__dict_Eq_342)(__dict_Eq_343))(_1.values[0])(_1.values[2])) {
                                return _1.values[0];
                            };
                        };
                    };
                    return _1;
                    throw "Failed pattern match";
                };
            };
        };
        var fromArrayPair = function (_1) {
            if (_1.length === 0) {
                return _ps.Network_Inquire.True;
            };
            if (_1.length === 1) {
                if ((_1[0]).length === 2) {
                    return _ps.Network_Inquire.eq(_1[0][0])(_1[0][1]);
                };
            };
            if (_1.length > 0) {
                var _7 = _1.slice(1);
                if ((_1[0]).length === 2) {
                    return _ps.Network_Inquire.and(_ps.Network_Inquire.eq(_1[0][0])(_1[0][1]))(fromArrayPair(_7));
                };
            };
            throw "Failed pattern match";
        };
        var fromArrayObj = function (_1) {
            if (_1.length === 0) {
                return _ps.Network_Inquire.True;
            };
            if (_1.length === 1) {
                return _ps.Network_Inquire.eq((_1[0]).key)((_1[0]).val);
            };
            if (_1.length > 0) {
                var _7 = _1.slice(1);
                return _ps.Network_Inquire.and(_ps.Network_Inquire.eq((_1[0]).key)((_1[0]).val))(fromArrayObj(_7));
            };
            throw "Failed pattern match";
        };
        var findByVal = function (__dict_Eq_344) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Network.Inquire.Pred") {
                        if (_ps.Prelude["=="](__dict_Eq_344)(_1)(_2.values[2])) {
                            return _ps.Data_Maybe.Just(_ps.Network_Inquire.Pred(_2.values[0])(_2.values[1])(_1));
                        };
                    };
                    if (_2.ctor === "Network.Inquire.Pred") {
                        return _ps.Data_Maybe.Nothing;
                    };
                    if (_2.ctor === "Network.Inquire.Junc") {
                        return _ps.Data_Maybe.maybe(findByVal(__dict_Eq_344)(_1)(_2.values[0]))(_ps.Data_Maybe.Just)(findByVal(__dict_Eq_344)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Network.Inquire.Wrap") {
                        return findByVal(__dict_Eq_344)(_1)(_2.values[1]);
                    };
                    return _ps.Data_Maybe.Nothing;
                    throw "Failed pattern match";
                };
            };
        };
        var findByKey = function (__dict_Eq_345) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Network.Inquire.Pred") {
                        if (_ps.Prelude["=="](__dict_Eq_345)(_1)(_2.values[0])) {
                            return _ps.Data_Maybe.Just(_ps.Network_Inquire.Pred(_1)(_2.values[1])(_2.values[2]));
                        };
                    };
                    if (_2.ctor === "Network.Inquire.Pred") {
                        return _ps.Data_Maybe.Nothing;
                    };
                    if (_2.ctor === "Network.Inquire.Junc") {
                        return _ps.Data_Maybe.maybe(findByKey(__dict_Eq_345)(_1)(_2.values[0]))(_ps.Data_Maybe.Just)(findByKey(__dict_Eq_345)(_1)(_2.values[2]));
                    };
                    if (_2.ctor === "Network.Inquire.Wrap") {
                        return findByKey(__dict_Eq_345)(_1)(_2.values[1]);
                    };
                    return _ps.Data_Maybe.Nothing;
                    throw "Failed pattern match";
                };
            };
        };
        var filterByVal = function (_1) {
            return function (_2) {
                if (_2.ctor === "Network.Inquire.Pred") {
                    return _1(_2.values[2]) ? _ps.Network_Inquire.Pred(_2.values[0])(_2.values[1])(_2.values[2]) : _ps.Data_Monoid.mempty(_ps.Network_Inquire.monoidInquire({}));
                };
                if (_2.ctor === "Network.Inquire.Junc") {
                    return _ps.Network_Inquire.Junc(filterByVal(_1)(_2.values[0]))(_2.values[1])(filterByVal(_1)(_2.values[2]));
                };
                if (_2.ctor === "Network.Inquire.Wrap") {
                    return _ps.Network_Inquire.Wrap(_2.values[0])(filterByVal(_1)(_2.values[1]));
                };
                return _2;
                throw "Failed pattern match";
            };
        };
        var filterByKey = function (_1) {
            return function (_2) {
                if (_2.ctor === "Network.Inquire.Pred") {
                    return _1(_2.values[0]) ? _ps.Network_Inquire.Pred(_2.values[0])(_2.values[1])(_2.values[2]) : _ps.Data_Monoid.mempty(_ps.Network_Inquire.monoidInquire({}));
                };
                if (_2.ctor === "Network.Inquire.Junc") {
                    return _ps.Network_Inquire.Junc(filterByKey(_1)(_2.values[0]))(_2.values[1])(filterByKey(_1)(_2.values[2]));
                };
                if (_2.ctor === "Network.Inquire.Wrap") {
                    return _ps.Network_Inquire.Wrap(_2.values[0])(filterByKey(_1)(_2.values[1]));
                };
                return _2;
                throw "Failed pattern match";
            };
        };
        var distribute = function (_1) {
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                    if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Network.Inquire.OR") {
                            return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                    if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Network.Inquire.AND") {
                            return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[2]));
                        };
                    };
                };
            };
            return _1;
            throw "Failed pattern match";
        };
        var commute = function (_1) {
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                    return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[2])(_1.values[0]);
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                    return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[2])(_1.values[0]);
                };
            };
            return _1;
            throw "Failed pattern match";
        };
        var codistribute = function (_1) {
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Network.Inquire.OR") {
                        if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Network.Inquire.OR") {
                                    return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[2]).values[0])(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[2])((_1.values[2]).values[2]));
                                };
                            };
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Network.Inquire.AND") {
                        if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Network.Inquire.AND") {
                                    return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[2]).values[0])(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[2])((_1.values[2]).values[2]));
                                };
                            };
                        };
                    };
                };
            };
            return _1;
            throw "Failed pattern match";
        };
        var associate = function (_1) {
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Network.Inquire.AND") {
                        if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                            return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Network.Inquire.OR") {
                        if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                            return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                    if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Network.Inquire.AND") {
                            return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                    if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Network.Inquire.OR") {
                            return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            return _1;
            throw "Failed pattern match";
        };
        var assocRight = function (_1) {
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Network.Inquire.AND") {
                        if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                            return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Network.Inquire.OR") {
                        if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                            return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[0])(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))((_1.values[0]).values[2])(_1.values[2]));
                        };
                    };
                };
            };
            return _1;
            throw "Failed pattern match";
        };
        var assocLeft = function (_1) {
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                    if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Network.Inquire.AND") {
                            return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                    if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Network.Inquire.OR") {
                            return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            return _1;
            throw "Failed pattern match";
        };
        var absorb = function (__dict_Eq_346) {
            return function (__dict_Eq_347) {
                return function (_1) {
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Network.Inquire.AND") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Network.Inquire.OR") {
                                    if (_ps.Prelude["=="](_ps.Network_Inquire.eqInquire(__dict_Eq_346)(__dict_Eq_347))(_1.values[0])((_1.values[2]).values[0])) {
                                        return _1.values[0];
                                    };
                                };
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Network.Inquire.AND") {
                                    if (_ps.Prelude["=="](_ps.Network_Inquire.eqInquire(__dict_Eq_346)(__dict_Eq_347))(_1.values[0])((_1.values[2]).values[0])) {
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
        module.unsafeFromObj = unsafeFromObj;
        module.unsafeReplaceValByVal = unsafeReplaceValByVal;
        module.unsafeReplaceValByKey = unsafeReplaceValByKey;
        module.unsafeRemoveAll = unsafeRemoveAll;
        module.unsafeRemove = unsafeRemove;
        module.unsafeFindByVal = unsafeFindByVal;
        module.unsafeFindByKey = unsafeFindByKey;
        module.idempotent = idempotent;
        module.codistribute = codistribute;
        module.distribute = distribute;
        module.commute = commute;
        module.assocRight = assocRight;
        module.assocLeft = assocLeft;
        module.associate = associate;
        module.absorb = absorb;
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
    })();
    _ps.Network_Inquire_Laws = (function () {
        var module = {};
        var wop = _ps.Test_QuickCheck.elements([ _ps.Network_Inquire.NOBOOL, _ps.Network_Inquire.NOT ]);
        var rel = _ps.Test_QuickCheck.elements([ _ps.Network_Inquire.IEQ, _ps.Network_Inquire.INE, _ps.Network_Inquire.IGT, _ps.Network_Inquire.IGE, _ps.Network_Inquire.ILT, _ps.Network_Inquire.ILE ]);
        var law_functor_id = function (i) {
            return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["<$>"](_ps.Network_Inquire.functorInquire({}))(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(i))(i);
        };
        var law_bool_or_identity = function (i) {
            return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(i)(_ps.Network_Inquire.False))(i) && _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Network_Inquire.False)(i))(i);
        };
        var law_bool_or_idempotence = function (i) {
            return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(i)(_ps.Network_Inquire_Combinators.idempotent(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(i)(i)));
        };
        var law_bool_or_annihilator = function (i) {
            return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(i)(_ps.Network_Inquire.True))(_ps.Network_Inquire.True) && _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Network_Inquire.True)(i))(_ps.Network_Inquire.True);
        };
        var law_bool_or_absorbtion = function (p) {
            return function (q) {
                return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(p)(_ps.Network_Inquire_Combinators.absorb(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))));
            };
        };
        var law_bool_distribute_or = function (p) {
            return function (q) {
                return function (r) {
                    return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(r)))(_ps.Network_Inquire_Combinators.distribute(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(q)(r))));
                };
            };
        };
        var law_bool_distribute_and = function (p) {
            return function (q) {
                return function (r) {
                    return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(r)))(_ps.Network_Inquire_Combinators.distribute(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(q)(r))));
                };
            };
        };
        var law_bool_commute_or = function (p) {
            return function (q) {
                return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))(_ps.Network_Inquire_Combinators.commute(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(q)(p)));
            };
        };
        var law_bool_commute_and = function (p) {
            return function (q) {
                return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))(_ps.Network_Inquire_Combinators.commute(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(q)(p)));
            };
        };
        var law_bool_assoc_or = function (p) {
            return function (q) {
                return function (r) {
                    return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(q)(r)))(_ps.Network_Inquire_Combinators.associate(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))(r)));
                };
            };
        };
        var law_bool_assoc_and = function (p) {
            return function (q) {
                return function (r) {
                    return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(q)(r)))(_ps.Network_Inquire_Combinators.associate(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))(r)));
                };
            };
        };
        var law_bool_and_identity = function (i) {
            return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(i)(_ps.Network_Inquire.True))(i) && _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Network_Inquire.True)(i))(i);
        };
        var law_bool_and_idempotence = function (i) {
            return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(i)(_ps.Network_Inquire_Combinators.idempotent(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(i)(i)));
        };
        var law_bool_and_annihilator = function (i) {
            return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(i)(_ps.Network_Inquire.False))(_ps.Network_Inquire.False) && _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Network_Inquire.False)(i))(_ps.Network_Inquire.False);
        };
        var law_bool_and_absorbtion = function (p) {
            return function (q) {
                return _ps.Prelude["=="](_ps.Network_Inquire.eqInquire(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({})))(p)(_ps.Network_Inquire_Combinators.absorb(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(p)(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(p)(q))));
            };
        };
        var jop = _ps.Test_QuickCheck.elements([ _ps.Network_Inquire.AND, _ps.Network_Inquire.OR ]);
        var div = function (m) {
            return function (n) {
                return _ps.Math.floor(m / n);
            };
        };
        var inq$prime = function (__dict_Arb_348) {
            return function (__dict_Arb_349) {
                return function (_1) {
                    if (_1 === 0) {
                        return _ps.Test_QuickCheck.oneof([ _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(_ps.Network_Inquire.True), _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(_ps.Network_Inquire.False) ]);
                    };
                    if (_1 === 1) {
                        return _ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Network_Inquire.Pred)(_ps.Test_QuickCheck.arb(__dict_Arb_348)))(rel))(_ps.Test_QuickCheck.arb(__dict_Arb_349));
                    };
                    return _ps.Test_QuickCheck.oneof([ _ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Network_Inquire.Pred)(_ps.Test_QuickCheck.arb(__dict_Arb_348)))(rel))(_ps.Test_QuickCheck.arb(__dict_Arb_349)), _ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Network_Inquire.Junc)(inq$prime(__dict_Arb_348)(__dict_Arb_349)(div(_1)(2))))(jop))(inq$prime(__dict_Arb_348)(__dict_Arb_349)(div(_1)(2))), _ps.Prelude["<*>"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({}))))(_ps.Network_Inquire.Wrap)(wop))(inq$prime(__dict_Arb_348)(__dict_Arb_349)(div(_1)(2))) ]);
                    throw "Failed pattern match";
                };
            };
        };
        var inq = function (__dict_Arb_350) {
            return function (__dict_Arb_351) {
                return _ps.Test_QuickCheck.sized(inq$prime(__dict_Arb_350)(__dict_Arb_351));
            };
        };
        var arbInquire_arb = function (__dict_Arb_352) {
            return function (__dict_Arb_353) {
                return inq(__dict_Arb_352)(__dict_Arb_353);
            };
        };
        var arbInquire = function (_1) {
            return function (_2) {
                return {
                    arb: arbInquire_arb(_1)(_2)
                };
            };
        };
        var main = function __do() {
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("Boolean laws\n")();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking and associativity")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))))(law_bool_assoc_and)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking or associativity")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))))(law_bool_assoc_or)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking and commutativity")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({}))))(law_bool_commute_and)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking or commutativity")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({}))))(law_bool_commute_or)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking distributativity and over or")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))))(law_bool_distribute_and)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking distributativity or over and")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))))(law_bool_distribute_or)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking and identity")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))(law_bool_and_identity)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking or identity")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))(law_bool_or_identity)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking and annihilator")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))(law_bool_and_annihilator)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking or annihilator")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))(law_bool_or_annihilator)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking and idempotence")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))(law_bool_and_idempotence)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking or idempotence")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))(law_bool_or_idempotence)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking and absorbtion")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({}))))(law_bool_and_absorbtion)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking or absorbtion")();
            _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({}))))(law_bool_or_absorbtion)();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("\nFunctor laws\n")();
            _ps.Debug_Trace.print(_ps.Prelude.showString({}))("checking functor identity")();
            return _ps.Test_QuickCheck.quickCheck(_ps.Test_QuickCheck.testableFunction(_ps.Network_Inquire.showInquire(_ps.Prelude.showString({}))(_ps.Prelude.showString({})))(arbInquire(_ps.Test_QuickCheck.arbString({}))(_ps.Test_QuickCheck.arbString({})))(_ps.Test_QuickCheck.testableBoolean({})))(law_functor_id)();
        };
        module.main = main;
        module.law_functor_id = law_functor_id;
        module.law_bool_or_absorbtion = law_bool_or_absorbtion;
        module.law_bool_and_absorbtion = law_bool_and_absorbtion;
        module.law_bool_or_idempotence = law_bool_or_idempotence;
        module.law_bool_and_idempotence = law_bool_and_idempotence;
        module.law_bool_or_annihilator = law_bool_or_annihilator;
        module.law_bool_and_annihilator = law_bool_and_annihilator;
        module.law_bool_or_identity = law_bool_or_identity;
        module.law_bool_and_identity = law_bool_and_identity;
        module.law_bool_distribute_or = law_bool_distribute_or;
        module.law_bool_distribute_and = law_bool_distribute_and;
        module.law_bool_commute_or = law_bool_commute_or;
        module.law_bool_commute_and = law_bool_commute_and;
        module.law_bool_assoc_or = law_bool_assoc_or;
        module.law_bool_assoc_and = law_bool_assoc_and;
        module.div = div;
        module.wop = wop;
        module.jop = jop;
        module.rel = rel;
        module.inq$prime = inq$prime;
        module.inq = inq;
        module.arbInquire = arbInquire;
        return module;
    })();
    _ps.Network_Inquire_Zipper = (function () {
        var module = {};
        var L = function (value0) {
            return function (value1) {
                return {
                    ctor: "Network.Inquire.Zipper.L", 
                    values: [ value0, value1 ]
                };
            };
        };
        var R = function (value0) {
            return function (value1) {
                return {
                    ctor: "Network.Inquire.Zipper.R", 
                    values: [ value0, value1 ]
                };
            };
        };
        var D = function (value0) {
            return {
                ctor: "Network.Inquire.Zipper.D", 
                values: [ value0 ]
            };
        };
        var Zip = function (value0) {
            return {
                ctor: "Network.Inquire.Zipper.Zip", 
                values: [ value0 ]
            };
        };
        var zipUp = function (_1) {
            if ((_1.values[0]).context.length > 0) {
                var _7 = (_1.values[0]).context.slice(1);
                if (((_1.values[0]).context[0]).ctor === "Network.Inquire.Zipper.D") {
                    return _ps.Data_Maybe.Just(Zip({
                        hole: _ps.Network_Inquire.Wrap(((_1.values[0]).context[0]).values[0])((_1.values[0]).hole), 
                        context: _7
                    }));
                };
            };
            if ((_1.values[0]).context.length > 0) {
                var _13 = (_1.values[0]).context.slice(1);
                if (((_1.values[0]).context[0]).ctor === "Network.Inquire.Zipper.L") {
                    return _ps.Data_Maybe.Just(Zip({
                        hole: _ps.Network_Inquire.Junc((_1.values[0]).hole)(((_1.values[0]).context[0]).values[0])(((_1.values[0]).context[0]).values[1]), 
                        context: _13
                    }));
                };
            };
            if ((_1.values[0]).context.length > 0) {
                var _20 = (_1.values[0]).context.slice(1);
                if (((_1.values[0]).context[0]).ctor === "Network.Inquire.Zipper.R") {
                    return _ps.Data_Maybe.Just(Zip({
                        hole: _ps.Network_Inquire.Junc(((_1.values[0]).context[0]).values[1])(((_1.values[0]).context[0]).values[0])((_1.values[0]).hole), 
                        context: _20
                    }));
                };
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        var zipRight = function (_1) {
            if ((_1.values[0]).hole.ctor === "Network.Inquire.Junc") {
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
            if ((_1.values[0]).hole.ctor === "Network.Inquire.Junc") {
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
            if ((_1.values[0]).hole.ctor === "Network.Inquire.Wrap") {
                return _ps.Data_Maybe.Just(Zip({
                    hole: (_1.values[0]).hole.values[1], 
                    context: _ps.Data_Array[":"](D((_1.values[0]).hole.values[0]))((_1.values[0]).context)
                }));
            };
            if ((_1.values[0]).hole.ctor === "Network.Inquire.Junc") {
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
            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(f)(getHole);
        };
        var fromInquireZ = _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(getHole)(zipUpmost);
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
    })();
    _ps.Text_Parsing_Parser_Expr = (function () {
        var module = {};
        var AssocNone = {
            ctor: "Text.Parsing.Parser.Expr.AssocNone", 
            values: [  ]
        };
        var AssocLeft = {
            ctor: "Text.Parsing.Parser.Expr.AssocLeft", 
            values: [  ]
        };
        var AssocRight = {
            ctor: "Text.Parsing.Parser.Expr.AssocRight", 
            values: [  ]
        };
        var Infix = function (value0) {
            return function (value1) {
                return {
                    ctor: "Text.Parsing.Parser.Expr.Infix", 
                    values: [ value0, value1 ]
                };
            };
        };
        var Prefix = function (value0) {
            return {
                ctor: "Text.Parsing.Parser.Expr.Prefix", 
                values: [ value0 ]
            };
        };
        var Postfix = function (value0) {
            return {
                ctor: "Text.Parsing.Parser.Expr.Postfix", 
                values: [ value0 ]
            };
        };
        var termP = function (__dict_Monad_354) {
            return function (prefixP) {
                return function (term) {
                    return function (postfixP) {
                        return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_354))(prefixP)(function (pre) {
                            return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_354))(term)(function (x) {
                                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_354))(postfixP)(function (post) {
                                    return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_354))(post(pre(x)));
                                });
                            });
                        });
                    };
                };
            };
        };
        var splitOp = function (_1) {
            return function (_2) {
                return (function (_3, _4) {
                    if (_3.ctor === "Text.Parsing.Parser.Expr.Infix") {
                        if ((_3.values[1]).ctor === "Text.Parsing.Parser.Expr.AssocNone") {
                            var _1 = {};
                            for (var _2 in _4) {
                                if (_4.hasOwnProperty(_2)) {
                                    _1[_2] = _4[_2];
                                };
                            };
                            _1.nassoc = _ps.Data_Array[":"](_3.values[0])(_4.nassoc);
                            return _1;
                        };
                    };
                    if (_3.ctor === "Text.Parsing.Parser.Expr.Infix") {
                        if ((_3.values[1]).ctor === "Text.Parsing.Parser.Expr.AssocLeft") {
                            var _1 = {};
                            for (var _2 in _4) {
                                if (_4.hasOwnProperty(_2)) {
                                    _1[_2] = _4[_2];
                                };
                            };
                            _1.lassoc = _ps.Data_Array[":"](_3.values[0])(_4.lassoc);
                            return _1;
                        };
                    };
                    if (_3.ctor === "Text.Parsing.Parser.Expr.Infix") {
                        if ((_3.values[1]).ctor === "Text.Parsing.Parser.Expr.AssocRight") {
                            var _1 = {};
                            for (var _2 in _4) {
                                if (_4.hasOwnProperty(_2)) {
                                    _1[_2] = _4[_2];
                                };
                            };
                            _1.rassoc = _ps.Data_Array[":"](_3.values[0])(_4.rassoc);
                            return _1;
                        };
                    };
                    if (_3.ctor === "Text.Parsing.Parser.Expr.Prefix") {
                        var _1 = {};
                        for (var _2 in _4) {
                            if (_4.hasOwnProperty(_2)) {
                                _1[_2] = _4[_2];
                            };
                        };
                        _1.prefix = _ps.Data_Array[":"](_3.values[0])(_4.prefix);
                        return _1;
                    };
                    if (_3.ctor === "Text.Parsing.Parser.Expr.Postfix") {
                        var _1 = {};
                        for (var _2 in _4) {
                            if (_4.hasOwnProperty(_2)) {
                                _1[_2] = _4[_2];
                            };
                        };
                        _1.postfix = _ps.Data_Array[":"](_3.values[0])(_4.postfix);
                        return _1;
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        var rassocP = function (__dict_Monad_355) {
            return function (x) {
                return function (rassocOp) {
                    return function (prefixP) {
                        return function (term) {
                            return function (postfixP) {
                                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_355))(rassocOp)(function (f) {
                                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_355))(_ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_355))(termP(__dict_Monad_355)(prefixP)(term)(postfixP))(function (z) {
                                        return rassocP1(__dict_Monad_355)(z)(rassocOp)(prefixP)(term)(postfixP);
                                    }))(function (y) {
                                        return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_355))(f(x)(y));
                                    });
                                });
                            };
                        };
                    };
                };
            };
        };
        var rassocP1 = function (__dict_Monad_356) {
            return function (x) {
                return function (rassocOp) {
                    return function (prefixP) {
                        return function (term) {
                            return function (postfixP) {
                                return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_356))(rassocP(__dict_Monad_356)(x)(rassocOp)(prefixP)(term)(postfixP))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_356))(x));
                            };
                        };
                    };
                };
            };
        };
        var nassocP = function (__dict_Monad_357) {
            return function (x) {
                return function (nassocOp) {
                    return function (prefixP) {
                        return function (term) {
                            return function (postfixP) {
                                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_357))(nassocOp)(function (f) {
                                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_357))(termP(__dict_Monad_357)(prefixP)(term)(postfixP))(function (y) {
                                        return _ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_357))(f(x)(y));
                                    });
                                });
                            };
                        };
                    };
                };
            };
        };
        var lassocP = function (__dict_Monad_358) {
            return function (x) {
                return function (lassocOp) {
                    return function (prefixP) {
                        return function (term) {
                            return function (postfixP) {
                                return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_358))(lassocOp)(function (f) {
                                    return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_358))(termP(__dict_Monad_358)(prefixP)(term)(postfixP))(function (y) {
                                        return lassocP1(__dict_Monad_358)(f(x)(y))(lassocOp)(prefixP)(term)(postfixP);
                                    });
                                });
                            };
                        };
                    };
                };
            };
        };
        var lassocP1 = function (__dict_Monad_359) {
            return function (x) {
                return function (lassocOp) {
                    return function (prefixP) {
                        return function (term) {
                            return function (postfixP) {
                                return _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_359))(lassocP(__dict_Monad_359)(x)(lassocOp)(prefixP)(term)(postfixP))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_359))(x));
                            };
                        };
                    };
                };
            };
        };
        var buildExprParser = function (__dict_Monad_360) {
            return function (operators) {
                return function (simpleExpr) {
                    var makeParser = function (term) {
                        return function (ops) {
                            var accum = _ps.Data_Foldable.foldr(_ps.Data_Foldable.foldableArray({}))(splitOp)({
                                rassoc: [  ], 
                                lassoc: [  ], 
                                nassoc: [  ], 
                                prefix: [  ], 
                                postfix: [  ]
                            })(ops);
                            return (function () {
                                var rassocOp = _ps.Text_Parsing_Parser_Combinators.choice(__dict_Monad_360)(accum.rassoc);
                                return (function () {
                                    var lassocOp = _ps.Text_Parsing_Parser_Combinators.choice(__dict_Monad_360)(accum.lassoc);
                                    return (function () {
                                        var nassocOp = _ps.Text_Parsing_Parser_Combinators.choice(__dict_Monad_360)(accum.nassoc);
                                        return (function () {
                                            var prefixOp = _ps.Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_360)(_ps.Text_Parsing_Parser_Combinators.choice(__dict_Monad_360)(accum.prefix))("");
                                            return (function () {
                                                var postfixOp = _ps.Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_360)(_ps.Text_Parsing_Parser_Combinators.choice(__dict_Monad_360)(accum.postfix))("");
                                                return (function () {
                                                    var postfixP = _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_360))(postfixOp)(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_360))(_ps.Prelude.id(_ps.Prelude.categoryArr({}))));
                                                    return (function () {
                                                        var prefixP = _ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_360))(prefixOp)(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_360))(_ps.Prelude.id(_ps.Prelude.categoryArr({}))));
                                                        return _ps.Prelude[">>="](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_360))(termP(__dict_Monad_360)(prefixP)(term)(postfixP))(function (x) {
                                                            return _ps.Text_Parsing_Parser_Combinators["<?>"](__dict_Monad_360)(_ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_360))(_ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_360))(_ps.Prelude["<|>"](_ps.Text_Parsing_Parser.alternativeParserT(__dict_Monad_360))(rassocP(__dict_Monad_360)(x)(rassocOp)(prefixP)(term)(postfixP))(lassocP(__dict_Monad_360)(x)(lassocOp)(prefixP)(term)(postfixP)))(nassocP(__dict_Monad_360)(x)(nassocOp)(prefixP)(term)(postfixP)))(_ps.Prelude["return"](_ps.Text_Parsing_Parser.monadParserT(__dict_Monad_360))(x)))("operator");
                                                        });
                                                    })();
                                                })();
                                            })();
                                        })();
                                    })();
                                })();
                            })();
                        };
                    };
                    return _ps.Data_Foldable.foldl(_ps.Data_Foldable.foldableArray({}))(makeParser)(simpleExpr)(operators);
                };
            };
        };
        module.Infix = Infix;
        module.Prefix = Prefix;
        module.Postfix = Postfix;
        module.AssocNone = AssocNone;
        module.AssocLeft = AssocLeft;
        module.AssocRight = AssocRight;
        module.buildExprParser = buildExprParser;
        module.termP = termP;
        module.nassocP = nassocP;
        module.lassocP1 = lassocP1;
        module.lassocP = lassocP;
        module.rassocP1 = rassocP1;
        module.rassocP = rassocP;
        module.splitOp = splitOp;
        return module;
    })();
    _ps.Network_Inquire_Laws.main();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());