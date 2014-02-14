(function (_ps) {
    "use strict";
    _ps.String = (function (module) {
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
        function toLower(s) {  return s.toLower();};
        module.toLower = toLower;
        function toUpper(s) {  return s.toUpper();};
        module.toUpper = toUpper;
        function trim(s) {  return s.trim();};
        module.trim = trim;
        return module;
    })(_ps.String || {});
    _ps.Regex = (function (module) {
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
    })(_ps.Regex || {});
    _ps.Prelude = (function (module) {
        var Ref = function (value0) {
            return {
                ctor: "Prelude.Ref", 
                values: [ value0 ]
            };
        };
        module.Ref = Ref;
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
        function showNumber(n) {  return n.toString();};
        module.showNumber = showNumber;
        function read(dict) {
            return dict.read;
        };
        module.read = read;
        function readNumber(n) {  return parseInt(n, 10);};
        module.readNumber = readNumber;
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
        function refEq(r1) {  return function(r2) {    return r1.value === r2.value;  };};
        module.refEq = refEq;
        function refIneq(r1) {  return function(r2) {    return r1.value !== r2.value;  };};
        module.refIneq = refIneq;
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
        var flip = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3)(_2);
                    throw "Failed pattern match";
                };
            };
        };
        module.flip = flip;
        var $$const = function (_1) {
            return function (_2) {
                return _1;
                throw "Failed pattern match";
            };
        };
        module["const"] = $$const;
        var __Prelude_Show_Prim_String_show = function (_1) {
            return _1;
            throw "Failed pattern match";
        };
        module.__Prelude_Show_Prim_String_show = __Prelude_Show_Prim_String_show;
        var __Prelude_Show_Prim_String = function (_1) {
            return {
                show: __Prelude_Show_Prim_String_show
            };
        };
        module.__Prelude_Show_Prim_String = __Prelude_Show_Prim_String;
        var __Prelude_Show_Prim_Number_show = showNumber;
        module.__Prelude_Show_Prim_Number_show = __Prelude_Show_Prim_Number_show;
        var __Prelude_Show_Prim_Number = function (_1) {
            return {
                show: __Prelude_Show_Prim_Number_show
            };
        };
        module.__Prelude_Show_Prim_Number = __Prelude_Show_Prim_Number;
        var __Prelude_Show_Prim_Boolean_show = function (_1) {
            if (_1) {
                return "true";
            };
            if (!_1) {
                return "false";
            };
            throw "Failed pattern match";
        };
        module.__Prelude_Show_Prim_Boolean_show = __Prelude_Show_Prim_Boolean_show;
        var __Prelude_Show_Prim_Boolean = function (_1) {
            return {
                show: __Prelude_Show_Prim_Boolean_show
            };
        };
        module.__Prelude_Show_Prim_Boolean = __Prelude_Show_Prim_Boolean;
        var __Prelude_Read_Prim_String_read = function (_1) {
            return _1;
            throw "Failed pattern match";
        };
        module.__Prelude_Read_Prim_String_read = __Prelude_Read_Prim_String_read;
        var __Prelude_Read_Prim_String = function (_1) {
            return {
                read: __Prelude_Read_Prim_String_read
            };
        };
        module.__Prelude_Read_Prim_String = __Prelude_Read_Prim_String;
        var __Prelude_Read_Prim_Number_read = readNumber;
        module.__Prelude_Read_Prim_Number_read = __Prelude_Read_Prim_Number_read;
        var __Prelude_Read_Prim_Number = function (_1) {
            return {
                read: __Prelude_Read_Prim_Number_read
            };
        };
        module.__Prelude_Read_Prim_Number = __Prelude_Read_Prim_Number;
        var __Prelude_Read_Prim_Boolean_read = function (_1) {
            if (_1 === "true") {
                return true;
            };
            return false;
            throw "Failed pattern match";
        };
        module.__Prelude_Read_Prim_Boolean_read = __Prelude_Read_Prim_Boolean_read;
        var __Prelude_Read_Prim_Boolean = function (_1) {
            return {
                read: __Prelude_Read_Prim_Boolean_read
            };
        };
        module.__Prelude_Read_Prim_Boolean = __Prelude_Read_Prim_Boolean;
        var __Prelude_Ord_Prim_Number_$less$eq = numLessEq;
        module.__Prelude_Ord_Prim_Number_$less$eq = __Prelude_Ord_Prim_Number_$less$eq;
        var __Prelude_Ord_Prim_Number_$less = numLess;
        module.__Prelude_Ord_Prim_Number_$less = __Prelude_Ord_Prim_Number_$less;
        var __Prelude_Ord_Prim_Number_$greater$eq = numGreaterEq;
        module.__Prelude_Ord_Prim_Number_$greater$eq = __Prelude_Ord_Prim_Number_$greater$eq;
        var __Prelude_Ord_Prim_Number_$greater = numGreater;
        module.__Prelude_Ord_Prim_Number_$greater = __Prelude_Ord_Prim_Number_$greater;
        var __Prelude_Ord_Prim_Number = function (_1) {
            return {
                $less: __Prelude_Ord_Prim_Number_$less, 
                $greater: __Prelude_Ord_Prim_Number_$greater, 
                $less$eq: __Prelude_Ord_Prim_Number_$less$eq, 
                $greater$eq: __Prelude_Ord_Prim_Number_$greater$eq
            };
        };
        module.__Prelude_Ord_Prim_Number = __Prelude_Ord_Prim_Number;
        var __Prelude_Num_Prim_Number_negate = numNegate;
        module.__Prelude_Num_Prim_Number_negate = __Prelude_Num_Prim_Number_negate;
        var __Prelude_Num_Prim_Number_$times = numMul;
        module.__Prelude_Num_Prim_Number_$times = __Prelude_Num_Prim_Number_$times;
        var __Prelude_Num_Prim_Number_$plus = numAdd;
        module.__Prelude_Num_Prim_Number_$plus = __Prelude_Num_Prim_Number_$plus;
        var __Prelude_Num_Prim_Number_$percent = numMod;
        module.__Prelude_Num_Prim_Number_$percent = __Prelude_Num_Prim_Number_$percent;
        var __Prelude_Num_Prim_Number_$minus = numSub;
        module.__Prelude_Num_Prim_Number_$minus = __Prelude_Num_Prim_Number_$minus;
        var __Prelude_Num_Prim_Number_$div = numDiv;
        module.__Prelude_Num_Prim_Number_$div = __Prelude_Num_Prim_Number_$div;
        var __Prelude_Num_Prim_Number = function (_1) {
            return {
                $plus: __Prelude_Num_Prim_Number_$plus, 
                $minus: __Prelude_Num_Prim_Number_$minus, 
                $times: __Prelude_Num_Prim_Number_$times, 
                $div: __Prelude_Num_Prim_Number_$div, 
                $percent: __Prelude_Num_Prim_Number_$percent, 
                negate: __Prelude_Num_Prim_Number_negate
            };
        };
        module.__Prelude_Num_Prim_Number = __Prelude_Num_Prim_Number;
        var __Prelude_Functor_var_$less$dollar$greater = function (__dict_Applicative_0) {
            return function (_1) {
                return function (_2) {
                    return $less$times$greater(__dict_Applicative_0)(pure(__dict_Applicative_0)(_1))(_2);
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Functor_var_$less$dollar$greater = __Prelude_Functor_var_$less$dollar$greater;
        var __Prelude_Functor_var = function (_1) {
            return {
                $less$dollar$greater: __Prelude_Functor_var_$less$dollar$greater(_1)
            };
        };
        module.__Prelude_Functor_var = __Prelude_Functor_var;
        var __Prelude_Eq_Prim_String_$eq$eq = unsafeRefEq;
        module.__Prelude_Eq_Prim_String_$eq$eq = __Prelude_Eq_Prim_String_$eq$eq;
        var __Prelude_Eq_Prim_String_$div$eq = unsafeRefIneq;
        module.__Prelude_Eq_Prim_String_$div$eq = __Prelude_Eq_Prim_String_$div$eq;
        var __Prelude_Eq_Prim_String = function (_1) {
            return {
                $eq$eq: __Prelude_Eq_Prim_String_$eq$eq, 
                $div$eq: __Prelude_Eq_Prim_String_$div$eq
            };
        };
        module.__Prelude_Eq_Prim_String = __Prelude_Eq_Prim_String;
        var __Prelude_Eq_Prim_Number_$eq$eq = unsafeRefEq;
        module.__Prelude_Eq_Prim_Number_$eq$eq = __Prelude_Eq_Prim_Number_$eq$eq;
        var __Prelude_Eq_Prim_Number_$div$eq = unsafeRefIneq;
        module.__Prelude_Eq_Prim_Number_$div$eq = __Prelude_Eq_Prim_Number_$div$eq;
        var __Prelude_Eq_Prim_Number = function (_1) {
            return {
                $eq$eq: __Prelude_Eq_Prim_Number_$eq$eq, 
                $div$eq: __Prelude_Eq_Prim_Number_$div$eq
            };
        };
        module.__Prelude_Eq_Prim_Number = __Prelude_Eq_Prim_Number;
        var __Prelude_Eq_Prim_Boolean_$eq$eq = unsafeRefEq;
        module.__Prelude_Eq_Prim_Boolean_$eq$eq = __Prelude_Eq_Prim_Boolean_$eq$eq;
        var __Prelude_Eq_Prim_Boolean_$div$eq = unsafeRefIneq;
        module.__Prelude_Eq_Prim_Boolean_$div$eq = __Prelude_Eq_Prim_Boolean_$div$eq;
        var __Prelude_Eq_Prim_Boolean = function (_1) {
            return {
                $eq$eq: __Prelude_Eq_Prim_Boolean_$eq$eq, 
                $div$eq: __Prelude_Eq_Prim_Boolean_$div$eq
            };
        };
        module.__Prelude_Eq_Prim_Boolean = __Prelude_Eq_Prim_Boolean;
        var __Prelude_Eq_Prelude_Ref_$eq$eq = refEq;
        module.__Prelude_Eq_Prelude_Ref_$eq$eq = __Prelude_Eq_Prelude_Ref_$eq$eq;
        var __Prelude_Eq_Prelude_Ref_$div$eq = refIneq;
        module.__Prelude_Eq_Prelude_Ref_$div$eq = __Prelude_Eq_Prelude_Ref_$div$eq;
        var __Prelude_Eq_Prelude_Ref = function (_1) {
            return {
                $eq$eq: __Prelude_Eq_Prelude_Ref_$eq$eq, 
                $div$eq: __Prelude_Eq_Prelude_Ref_$div$eq
            };
        };
        module.__Prelude_Eq_Prelude_Ref = __Prelude_Eq_Prelude_Ref;
        var __Prelude_Category_Prim_Function_id = function (_1) {
            return _1;
            throw "Failed pattern match";
        };
        module.__Prelude_Category_Prim_Function_id = __Prelude_Category_Prim_Function_id;
        var __Prelude_Category_Prim_Function_$less$less$less = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2(_3));
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Category_Prim_Function_$less$less$less = __Prelude_Category_Prim_Function_$less$less$less;
        var __Prelude_Category_Prim_Function_$greater$greater$greater = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _2(_1(_3));
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Category_Prim_Function_$greater$greater$greater = __Prelude_Category_Prim_Function_$greater$greater$greater;
        var __Prelude_Category_Prim_Function = function (_1) {
            return {
                id: __Prelude_Category_Prim_Function_id, 
                $less$less$less: __Prelude_Category_Prim_Function_$less$less$less, 
                $greater$greater$greater: __Prelude_Category_Prim_Function_$greater$greater$greater
            };
        };
        module.__Prelude_Category_Prim_Function = __Prelude_Category_Prim_Function;
        var __Prelude_BoolLike_Prim_Boolean_not = boolNot;
        module.__Prelude_BoolLike_Prim_Boolean_not = __Prelude_BoolLike_Prim_Boolean_not;
        var __Prelude_BoolLike_Prim_Boolean_$bar$bar = boolOr;
        module.__Prelude_BoolLike_Prim_Boolean_$bar$bar = __Prelude_BoolLike_Prim_Boolean_$bar$bar;
        var __Prelude_BoolLike_Prim_Boolean_$amp$amp = boolAnd;
        module.__Prelude_BoolLike_Prim_Boolean_$amp$amp = __Prelude_BoolLike_Prim_Boolean_$amp$amp;
        var __Prelude_BoolLike_Prim_Boolean = function (_1) {
            return {
                $amp$amp: __Prelude_BoolLike_Prim_Boolean_$amp$amp, 
                $bar$bar: __Prelude_BoolLike_Prim_Boolean_$bar$bar, 
                not: __Prelude_BoolLike_Prim_Boolean_not
            };
        };
        module.__Prelude_BoolLike_Prim_Boolean = __Prelude_BoolLike_Prim_Boolean;
        var __Prelude_Eq_Prim_Array_$eq$eq = function (__dict_Eq_1) {
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
                            return $amp$amp(__Prelude_BoolLike_Prim_Boolean({}))($eq$eq(__dict_Eq_1)(_1[0])(_2[0]))($eq$eq(__Prelude_Eq_Prim_Array(__dict_Eq_1))(_8)(_6));
                        };
                    };
                    return false;
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Eq_Prim_Array_$eq$eq = __Prelude_Eq_Prim_Array_$eq$eq;
        var __Prelude_Eq_Prim_Array = function (_1) {
            return {
                $eq$eq: __Prelude_Eq_Prim_Array_$eq$eq(_1), 
                $div$eq: __Prelude_Eq_Prim_Array_$div$eq(_1)
            };
        };
        module.__Prelude_Eq_Prim_Array = __Prelude_Eq_Prim_Array;
        var __Prelude_Eq_Prim_Array_$div$eq = function (__dict_Eq_2) {
            return function (_1) {
                return function (_2) {
                    return not(__Prelude_BoolLike_Prim_Boolean({}))($eq$eq(__Prelude_Eq_Prim_Array(__dict_Eq_2))(_1)(_2));
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Eq_Prim_Array_$div$eq = __Prelude_Eq_Prim_Array_$div$eq;
        var __Prelude_Bits_Prim_Number_zshr = numZshr;
        module.__Prelude_Bits_Prim_Number_zshr = __Prelude_Bits_Prim_Number_zshr;
        var __Prelude_Bits_Prim_Number_shr = numShr;
        module.__Prelude_Bits_Prim_Number_shr = __Prelude_Bits_Prim_Number_shr;
        var __Prelude_Bits_Prim_Number_shl = numShl;
        module.__Prelude_Bits_Prim_Number_shl = __Prelude_Bits_Prim_Number_shl;
        var __Prelude_Bits_Prim_Number_complement = numComplement;
        module.__Prelude_Bits_Prim_Number_complement = __Prelude_Bits_Prim_Number_complement;
        var __Prelude_Bits_Prim_Number_$up = numXor;
        module.__Prelude_Bits_Prim_Number_$up = __Prelude_Bits_Prim_Number_$up;
        var __Prelude_Bits_Prim_Number_$bar = numOr;
        module.__Prelude_Bits_Prim_Number_$bar = __Prelude_Bits_Prim_Number_$bar;
        var __Prelude_Bits_Prim_Number_$amp = numAnd;
        module.__Prelude_Bits_Prim_Number_$amp = __Prelude_Bits_Prim_Number_$amp;
        var __Prelude_Bits_Prim_Number = function (_1) {
            return {
                $amp: __Prelude_Bits_Prim_Number_$amp, 
                $bar: __Prelude_Bits_Prim_Number_$bar, 
                $up: __Prelude_Bits_Prim_Number_$up, 
                shl: __Prelude_Bits_Prim_Number_shl, 
                shr: __Prelude_Bits_Prim_Number_shr, 
                zshr: __Prelude_Bits_Prim_Number_zshr, 
                complement: __Prelude_Bits_Prim_Number_complement
            };
        };
        module.__Prelude_Bits_Prim_Number = __Prelude_Bits_Prim_Number;
        var __Prelude_Applicative_var_pure = function (__dict_Monad_3) {
            return $$return(__dict_Monad_3);
        };
        module.__Prelude_Applicative_var_pure = __Prelude_Applicative_var_pure;
        var __Prelude_Applicative_var_$less$times$greater = function (__dict_Monad_4) {
            return function (_1) {
                return function (_2) {
                    return $greater$greater$eq(__dict_Monad_4)(_1)(function (f$prime) {
                        return $greater$greater$eq(__dict_Monad_4)(_2)(function (a$prime) {
                            return $$return(__dict_Monad_4)(f$prime(a$prime));
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Applicative_var_$less$times$greater = __Prelude_Applicative_var_$less$times$greater;
        var __Prelude_Applicative_var = function (_1) {
            return {
                pure: __Prelude_Applicative_var_pure(_1), 
                $less$times$greater: __Prelude_Applicative_var_$less$times$greater(_1)
            };
        };
        module.__Prelude_Applicative_var = __Prelude_Applicative_var;
        var $dollar = function (_1) {
            return function (_2) {
                return _1(_2);
                throw "Failed pattern match";
            };
        };
        module["$"] = $dollar;
        var $hash = function (_1) {
            return function (_2) {
                return _2(_1);
                throw "Failed pattern match";
            };
        };
        module["#"] = $hash;
        return module;
    })(_ps.Prelude || {});
    _ps.Maybe = (function (module) {
        var Nothing = {
            ctor: "Maybe.Nothing", 
            values: [  ]
        };
        module.Nothing = Nothing;
        var Just = function (value0) {
            return {
                ctor: "Maybe.Just", 
                values: [ value0 ]
            };
        };
        module.Just = Just;
        var maybe = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Maybe.Nothing") {
                        return _1;
                    };
                    if (_3.ctor === "Maybe.Just") {
                        return _2(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.maybe = maybe;
        var fromMaybe = function (_1) {
            return maybe(_1)(_ps.Prelude.id(_ps.Prelude.__Prelude_Category_Prim_Function({})));
            throw "Failed pattern match";
        };
        module.fromMaybe = fromMaybe;
        var __Prelude_Show_Maybe_Maybe_show = function (__dict_Show_5) {
            return function (_1) {
                if (_1.ctor === "Maybe.Just") {
                    return "Just " + _ps.Prelude.show(__dict_Show_5)(_1.values[0]);
                };
                if (_1.ctor === "Maybe.Nothing") {
                    return "Nothing";
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Show_Maybe_Maybe_show = __Prelude_Show_Maybe_Maybe_show;
        var __Prelude_Show_Maybe_Maybe = function (_1) {
            return {
                show: __Prelude_Show_Maybe_Maybe_show(_1)
            };
        };
        module.__Prelude_Show_Maybe_Maybe = __Prelude_Show_Maybe_Maybe;
        var __Prelude_Monad_Maybe_Maybe_$greater$greater$eq = function (_1) {
            return function (_2) {
                return maybe(Nothing)(_2)(_1);
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Monad_Maybe_Maybe_$greater$greater$eq = __Prelude_Monad_Maybe_Maybe_$greater$greater$eq;
        var __Prelude_Monad_Maybe_Maybe_$$return = Just;
        module.__Prelude_Monad_Maybe_Maybe_$$return = __Prelude_Monad_Maybe_Maybe_$$return;
        var __Prelude_Monad_Maybe_Maybe = function (_1) {
            return {
                $$return: __Prelude_Monad_Maybe_Maybe_$$return, 
                $greater$greater$eq: __Prelude_Monad_Maybe_Maybe_$greater$greater$eq
            };
        };
        module.__Prelude_Monad_Maybe_Maybe = __Prelude_Monad_Maybe_Maybe;
        var __Prelude_Functor_Maybe_Maybe_$less$dollar$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Maybe.Just") {
                    return Just(_1(_2.values[0]));
                };
                return Nothing;
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Functor_Maybe_Maybe_$less$dollar$greater = __Prelude_Functor_Maybe_Maybe_$less$dollar$greater;
        var __Prelude_Functor_Maybe_Maybe = function (_1) {
            return {
                $less$dollar$greater: __Prelude_Functor_Maybe_Maybe_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Maybe_Maybe = __Prelude_Functor_Maybe_Maybe;
        var __Prelude_Applicative_Maybe_Maybe_pure = Just;
        module.__Prelude_Applicative_Maybe_Maybe_pure = __Prelude_Applicative_Maybe_Maybe_pure;
        var __Prelude_Applicative_Maybe_Maybe_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Maybe.Just") {
                    return _ps.Prelude["<$>"](__Prelude_Functor_Maybe_Maybe({}))(_1.values[0])(_2);
                };
                if (_1.ctor === "Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Applicative_Maybe_Maybe_$less$times$greater = __Prelude_Applicative_Maybe_Maybe_$less$times$greater;
        var __Prelude_Applicative_Maybe_Maybe = function (_1) {
            return {
                pure: __Prelude_Applicative_Maybe_Maybe_pure, 
                $less$times$greater: __Prelude_Applicative_Maybe_Maybe_$less$times$greater
            };
        };
        module.__Prelude_Applicative_Maybe_Maybe = __Prelude_Applicative_Maybe_Maybe;
        return module;
    })(_ps.Maybe || {});
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
        function max(n){  return Math.max(n);};
        module.max = max;
        function min(n){  return Math.min(n);};
        module.min = min;
        function pow(n){  return Math.pow(n);};
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
    _ps.Inquire = (function (module) {
        var INoBool = {
            ctor: "Inquire.INoBool", 
            values: [  ]
        };
        module.INoBool = INoBool;
        var INot = {
            ctor: "Inquire.INot", 
            values: [  ]
        };
        module.INot = INot;
        var IEQ = {
            ctor: "Inquire.IEQ", 
            values: [  ]
        };
        module.IEQ = IEQ;
        var INE = {
            ctor: "Inquire.INE", 
            values: [  ]
        };
        module.INE = INE;
        var IGT = {
            ctor: "Inquire.IGT", 
            values: [  ]
        };
        module.IGT = IGT;
        var IGE = {
            ctor: "Inquire.IGE", 
            values: [  ]
        };
        module.IGE = IGE;
        var ILT = {
            ctor: "Inquire.ILT", 
            values: [  ]
        };
        module.ILT = ILT;
        var ILE = {
            ctor: "Inquire.ILE", 
            values: [  ]
        };
        module.ILE = ILE;
        var IAnd = {
            ctor: "Inquire.IAnd", 
            values: [  ]
        };
        module.IAnd = IAnd;
        var IOr = {
            ctor: "Inquire.IOr", 
            values: [  ]
        };
        module.IOr = IOr;
        var Empty = {
            ctor: "Inquire.Empty", 
            values: [  ]
        };
        module.Empty = Empty;
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
        var Group = function (value0) {
            return function (value1) {
                return function (value2) {
                    return {
                        ctor: "Inquire.Group", 
                        values: [ value0, value1, value2 ]
                    };
                };
            };
        };
        module.Group = Group;
        var Wrap = function (value0) {
            return function (value1) {
                return {
                    ctor: "Inquire.Wrap", 
                    values: [ value0, value1 ]
                };
            };
        };
        module.Wrap = Wrap;
        var __Prelude_Functor_Inquire_Inquire = function (_1) {
            return {
                $less$dollar$greater: __Prelude_Functor_Inquire_Inquire_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Inquire_Inquire = __Prelude_Functor_Inquire_Inquire;
        var __Prelude_Functor_Inquire_Inquire_$less$dollar$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Inquire.Empty") {
                    return Empty;
                };
                if (_2.ctor === "Inquire.Pred") {
                    return Pred(_2.values[0])(_2.values[1])(_1(_2.values[2]));
                };
                if (_2.ctor === "Inquire.Group") {
                    return Group(_ps.Prelude["<$>"](__Prelude_Functor_Inquire_Inquire({}))(_1)(_2.values[0]))(_2.values[1])(_ps.Prelude["<$>"](__Prelude_Functor_Inquire_Inquire({}))(_1)(_2.values[2]));
                };
                if (_2.ctor === "Inquire.Wrap") {
                    return Wrap(_2.values[0])(_ps.Prelude["<$>"](__Prelude_Functor_Inquire_Inquire({}))(_1)(_2.values[1]));
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Functor_Inquire_Inquire_$less$dollar$greater = __Prelude_Functor_Inquire_Inquire_$less$dollar$greater;
        return module;
    })(_ps.Inquire || {});
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
    _ps.Either = (function (module) {
        var Left = function (value0) {
            return {
                ctor: "Either.Left", 
                values: [ value0 ]
            };
        };
        module.Left = Left;
        var Right = function (value0) {
            return {
                ctor: "Either.Right", 
                values: [ value0 ]
            };
        };
        module.Right = Right;
        var either = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Either.Left") {
                        return _1(_3.values[0]);
                    };
                    if (_3.ctor === "Either.Right") {
                        return _2(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.either = either;
        var __Prelude_Show_Either_Either_show = function (__dict_Show_6) {
            return function (__dict_Show_7) {
                return function (_1) {
                    if (_1.ctor === "Either.Left") {
                        return "Left " + _ps.Prelude.show(__dict_Show_6)(_1.values[0]);
                    };
                    if (_1.ctor === "Either.Right") {
                        return "Right " + _ps.Prelude.show(__dict_Show_7)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Show_Either_Either_show = __Prelude_Show_Either_Either_show;
        var __Prelude_Show_Either_Either = function (_1) {
            return function (_2) {
                return {
                    show: __Prelude_Show_Either_Either_show(_1)(_2)
                };
            };
        };
        module.__Prelude_Show_Either_Either = __Prelude_Show_Either_Either;
        var __Prelude_Monad_Either_Either_$greater$greater$eq = either(function (e) {
            return function (_) {
                return Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        });
        module.__Prelude_Monad_Either_Either_$greater$greater$eq = __Prelude_Monad_Either_Either_$greater$greater$eq;
        var __Prelude_Monad_Either_Either_$$return = Right;
        module.__Prelude_Monad_Either_Either_$$return = __Prelude_Monad_Either_Either_$$return;
        var __Prelude_Monad_Either_Either = function (_1) {
            return {
                $$return: __Prelude_Monad_Either_Either_$$return, 
                $greater$greater$eq: __Prelude_Monad_Either_Either_$greater$greater$eq
            };
        };
        module.__Prelude_Monad_Either_Either = __Prelude_Monad_Either_Either;
        var __Prelude_Functor_Either_Either_$less$dollar$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Either.Left") {
                    return Left(_2.values[0]);
                };
                if (_2.ctor === "Either.Right") {
                    return Right(_1(_2.values[0]));
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Functor_Either_Either_$less$dollar$greater = __Prelude_Functor_Either_Either_$less$dollar$greater;
        var __Prelude_Functor_Either_Either = function (_1) {
            return {
                $less$dollar$greater: __Prelude_Functor_Either_Either_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Either_Either = __Prelude_Functor_Either_Either;
        var __Prelude_Applicative_Either_Either_pure = Right;
        module.__Prelude_Applicative_Either_Either_pure = __Prelude_Applicative_Either_Either_pure;
        var __Prelude_Applicative_Either_Either_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Either.Left") {
                    return Left(_1.values[0]);
                };
                if (_1.ctor === "Either.Right") {
                    return _ps.Prelude["<$>"](__Prelude_Functor_Either_Either({}))(_1.values[0])(_2);
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Applicative_Either_Either_$less$times$greater = __Prelude_Applicative_Either_Either_$less$times$greater;
        var __Prelude_Applicative_Either_Either = function (_1) {
            return {
                pure: __Prelude_Applicative_Either_Either_pure, 
                $less$times$greater: __Prelude_Applicative_Either_Either_$less$times$greater
            };
        };
        module.__Prelude_Applicative_Either_Either = __Prelude_Applicative_Either_Either;
        return module;
    })(_ps.Either || {});
    _ps.Eff = (function (module) {
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
        var __Prelude_Monad_Eff_Eff_$greater$greater$eq = bindEff;
        module.__Prelude_Monad_Eff_Eff_$greater$greater$eq = __Prelude_Monad_Eff_Eff_$greater$greater$eq;
        var __Prelude_Monad_Eff_Eff_$$return = retEff;
        module.__Prelude_Monad_Eff_Eff_$$return = __Prelude_Monad_Eff_Eff_$$return;
        var __Prelude_Monad_Eff_Eff = function (_1) {
            return {
                $$return: __Prelude_Monad_Eff_Eff_$$return, 
                $greater$greater$eq: __Prelude_Monad_Eff_Eff_$greater$greater$eq
            };
        };
        module.__Prelude_Monad_Eff_Eff = __Prelude_Monad_Eff_Eff;
        return module;
    })(_ps.Eff || {});
    _ps.Errors = (function (module) {
        function throwError(e) {  return function() {    throw e;  };};
        module.throwError = throwError;
        function catchError(c) {  return function(t) {    return function() {      try {        return t();      } catch(e) {        return c(e)();      }    };  };};
        module.catchError = catchError;
        return module;
    })(_ps.Errors || {});
    _ps.IORef = (function (module) {
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
    })(_ps.IORef || {});
    _ps.Random = (function (module) {
        function random() {  return Math.random();};
        module.random = random;
        return module;
    })(_ps.Random || {});
    _ps.ST = (function (module) {
        function newSTRef(val) {  return function () {    return { value: val };  };};
        module.newSTRef = newSTRef;
        function readSTRef(ref) {  return function() {    return ref.value;  };};
        module.readSTRef = readSTRef;
        function modifySTRef(ref) {  return function(f) {    return function() {      ref.value = f(ref.value);    };  };};
        module.modifySTRef = modifySTRef;
        function writeSTRef(ref) {  return function(a) {    return function() {      ref.value = a;    };  };};
        module.writeSTRef = writeSTRef;
        function runST(f) {  return f;};
        module.runST = runST;
        return module;
    })(_ps.ST || {});
    _ps.Trace = (function (module) {
        function trace(s) {  return function() {    console.log(s);    return {};  };};
        module.trace = trace;
        var print = function (__dict_Show_8) {
            return function (_1) {
                return trace(_ps.Prelude.show(__dict_Show_8)(_1));
                throw "Failed pattern match";
            };
        };
        module.print = print;
        return module;
    })(_ps.Trace || {});
    _ps.Arrays = (function (module) {
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
        function sort(l) {  var l1 = l.slice();  l.sort();  return l1;};
        module.sort = sort;
        function splice(s) {  return function(e) {    return function(l1) {      return function(l2) {        return l2.splice(s, e, l1);      };     };   };};
        module.splice = splice;
        var tailSafe = function (_1) {
            if (_1.length > 0) {
                var _4 = _1.slice(1);
                return _ps.Maybe.Just(_4);
            };
            return _ps.Maybe.Nothing;
            throw "Failed pattern match";
        };
        module.tailSafe = tailSafe;
        var tail = function (_1) {
            if (_1.length > 0) {
                var _4 = _1.slice(1);
                return _4;
            };
            throw "Failed pattern match";
        };
        module.tail = tail;
        var singleton = function (_1) {
            return [ _1 ];
            throw "Failed pattern match";
        };
        module.singleton = singleton;
        var range = function (_1) {
            return function (_2) {
                return (function () {
                    var ns = [  ];
                    for (var n = _1; n < _2; n++) {
                        ns = push(ns)(n);
                    };
                    return ns;
                })();
                throw "Failed pattern match";
            };
        };
        module.range = range;
        var isEmpty = function (_1) {
            if (_1.length === 0) {
                return true;
            };
            return false;
            throw "Failed pattern match";
        };
        module.isEmpty = isEmpty;
        var headSafe = function (_1) {
            if (_1.length > 0) {
                return _ps.Maybe.Just(_1[0]);
            };
            return _ps.Maybe.Nothing;
            throw "Failed pattern match";
        };
        module.headSafe = headSafe;
        var head = function (_1) {
            if (_1.length > 0) {
                return _1[0];
            };
            throw "Failed pattern match";
        };
        module.head = head;
        var foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        return _1(foldr(_1)(_2)(_8))(_3[0]);
                    };
                    if (_3.length === 0) {
                        return _2;
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.foldr = foldr;
        var foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.length === 0) {
                        return _2;
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        return foldl(_1)(_1(_3[0])(_2))(_8);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.foldl = foldl;
        var concatMap = function (_1) {
            return function (_2) {
                if (_1.length === 0) {
                    return [  ];
                };
                if (_1.length > 0) {
                    var _6 = _1.slice(1);
                    return concat(_2(_1[0]))(concatMap(_6)(_2));
                };
                throw "Failed pattern match";
            };
        };
        module.concatMap = concatMap;
        var any = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return false;
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return _1(_2[0]) || any(_1)(_6);
                };
                throw "Failed pattern match";
            };
        };
        module.any = any;
        var all = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return true;
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return _1(_2[0]) && all(_1)(_6);
                };
                throw "Failed pattern match";
            };
        };
        module.all = all;
        var __Prelude_Show_Prim_Array = function (_1) {
            return {
                show: __Prelude_Show_Prim_Array_show(_1)
            };
        };
        module.__Prelude_Show_Prim_Array = __Prelude_Show_Prim_Array;
        var __Prelude_Show_Prim_Array_show = function (__dict_Show_9) {
            return function (_1) {
                if (_1.length === 0) {
                    return "[]";
                };
                if (_1.length > 0) {
                    var _4 = _1.slice(1);
                    return _ps.Prelude.show(__dict_Show_9)(_1[0]) + " : " + _ps.Prelude.show(__Prelude_Show_Prim_Array(__dict_Show_9))(_4);
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Show_Prim_Array_show = __Prelude_Show_Prim_Array_show;
        var __Prelude_Monad_Prim_Array_$greater$greater$eq = concatMap;
        module.__Prelude_Monad_Prim_Array_$greater$greater$eq = __Prelude_Monad_Prim_Array_$greater$greater$eq;
        var __Prelude_Monad_Prim_Array_$$return = singleton;
        module.__Prelude_Monad_Prim_Array_$$return = __Prelude_Monad_Prim_Array_$$return;
        var __Prelude_Monad_Prim_Array = function (_1) {
            return {
                $$return: __Prelude_Monad_Prim_Array_$$return, 
                $greater$greater$eq: __Prelude_Monad_Prim_Array_$greater$greater$eq
            };
        };
        module.__Prelude_Monad_Prim_Array = __Prelude_Monad_Prim_Array;
        var __Prelude_Alternative_Prim_Array_empty = [  ];
        module.__Prelude_Alternative_Prim_Array_empty = __Prelude_Alternative_Prim_Array_empty;
        var __Prelude_Alternative_Prim_Array_$less$bar$greater = concat;
        module.__Prelude_Alternative_Prim_Array_$less$bar$greater = __Prelude_Alternative_Prim_Array_$less$bar$greater;
        var __Prelude_Alternative_Prim_Array = function (_1) {
            return {
                empty: __Prelude_Alternative_Prim_Array_empty, 
                $less$bar$greater: __Prelude_Alternative_Prim_Array_$less$bar$greater
            };
        };
        module.__Prelude_Alternative_Prim_Array = __Prelude_Alternative_Prim_Array;
        var $colon = function (_1) {
            return concat([ _1 ]);
            throw "Failed pattern match";
        };
        module[":"] = $colon;
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
        module.filter = filter;
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
        module.map = map;
        var __Prelude_Functor_Prim_Array_$less$dollar$greater = map;
        module.__Prelude_Functor_Prim_Array_$less$dollar$greater = __Prelude_Functor_Prim_Array_$less$dollar$greater;
        var __Prelude_Functor_Prim_Array = function (_1) {
            return {
                $less$dollar$greater: __Prelude_Functor_Prim_Array_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Prim_Array = __Prelude_Functor_Prim_Array;
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
        module.zipWith = zipWith;
        return module;
    })(_ps.Arrays || {});
    _ps.Monad = (function (module) {
        var when = function (__dict_Monad_10) {
            return function (_1) {
                return function (_2) {
                    if (_1) {
                        return _2;
                    };
                    if (!_1) {
                        return _ps.Prelude["return"](__dict_Monad_10)({});
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.when = when;
        var sequence = function (__dict_Monad_11) {
            return function (_1) {
                if (_1.length === 0) {
                    return _ps.Prelude["return"](__dict_Monad_11)([  ]);
                };
                if (_1.length > 0) {
                    var _4 = _1.slice(1);
                    return _ps.Prelude[">>="](__dict_Monad_11)(_1[0])(function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_11)(sequence(__dict_Monad_11)(_4))(function (as) {
                            return _ps.Prelude["return"](__dict_Monad_11)(_ps.Arrays[":"](a)(as));
                        });
                    });
                };
                throw "Failed pattern match";
            };
        };
        module.sequence = sequence;
        var replicateM = function (__dict_Monad_12) {
            return function (_1) {
                return function (_2) {
                    if (_1 === 0) {
                        return _ps.Prelude["return"](__dict_Monad_12)([  ]);
                    };
                    return _ps.Prelude[">>="](__dict_Monad_12)(_2)(function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_12)(replicateM(__dict_Monad_12)(_1 - 1)(_2))(function (as) {
                            return _ps.Prelude["return"](__dict_Monad_12)(_ps.Arrays[":"](a)(as));
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        module.replicateM = replicateM;
        var mapM = function (__dict_Monad_13) {
            return function (_1) {
                return function (_2) {
                    if (_2.length === 0) {
                        return _ps.Prelude["return"](__dict_Monad_13)([  ]);
                    };
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        return _ps.Prelude[">>="](__dict_Monad_13)(_1(_2[0]))(function (b) {
                            return _ps.Prelude[">>="](__dict_Monad_13)(mapM(__dict_Monad_13)(_1)(_6))(function (bs) {
                                return _ps.Prelude["return"](__dict_Monad_13)(_ps.Arrays[":"](b)(bs));
                            });
                        });
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.mapM = mapM;
        var join = function (__dict_Monad_14) {
            return function (_1) {
                return _ps.Prelude[">>="](__dict_Monad_14)(_1)(function (m) {
                    return m;
                });
                throw "Failed pattern match";
            };
        };
        module.join = join;
        var foldM = function (__dict_Monad_15) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.length === 0) {
                            return _ps.Prelude["return"](__dict_Monad_15)(_2);
                        };
                        if (_3.length > 0) {
                            var _8 = _3.slice(1);
                            return _ps.Prelude[">>="](__dict_Monad_15)(_1(_2)(_3[0]))(function (a$prime) {
                                return foldM(__dict_Monad_15)(_1)(a$prime)(_8);
                            });
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module.foldM = foldM;
        var $greater$eq$greater = function (__dict_Monad_16) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        return _ps.Prelude[">>="](__dict_Monad_16)(_1(_3))(function (b) {
                            return _2(b);
                        });
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module[">=>"] = $greater$eq$greater;
        var $less$eq$less = function (__dict_Monad_17) {
            return _ps.Prelude.flip($greater$eq$greater(__dict_Monad_17));
        };
        module["<=<"] = $less$eq$less;
        return module;
    })(_ps.Monad || {});
    _ps.Monoid = (function (module) {
        function mempty(dict) {
            return dict.mempty;
        };
        module.mempty = mempty;
        function $less$greater(dict) {
            return dict.$less$greater;
        };
        module["<>"] = $less$greater;
        var mconcat = function (__dict_Monoid_18) {
            return function (_1) {
                if (_1.length === 0) {
                    return mempty(__dict_Monoid_18);
                };
                if (_1.length > 0) {
                    var _4 = _1.slice(1);
                    return $less$greater(__dict_Monoid_18)(_1[0])(mconcat(__dict_Monoid_18)(_4));
                };
                throw "Failed pattern match";
            };
        };
        module.mconcat = mconcat;
        var __Monoid_Monoid_Prim_String_mempty = "";
        module.__Monoid_Monoid_Prim_String_mempty = __Monoid_Monoid_Prim_String_mempty;
        var __Monoid_Monoid_Prim_String_$less$greater = _ps.Prelude["++"];
        module.__Monoid_Monoid_Prim_String_$less$greater = __Monoid_Monoid_Prim_String_$less$greater;
        var __Monoid_Monoid_Prim_String = function (_1) {
            return {
                mempty: __Monoid_Monoid_Prim_String_mempty, 
                $less$greater: __Monoid_Monoid_Prim_String_$less$greater
            };
        };
        module.__Monoid_Monoid_Prim_String = __Monoid_Monoid_Prim_String;
        var __Monoid_Monoid_Prim_Array_mempty = [  ];
        module.__Monoid_Monoid_Prim_Array_mempty = __Monoid_Monoid_Prim_Array_mempty;
        var __Monoid_Monoid_Prim_Array_$less$greater = _ps.Arrays.concat;
        module.__Monoid_Monoid_Prim_Array_$less$greater = __Monoid_Monoid_Prim_Array_$less$greater;
        var __Monoid_Monoid_Prim_Array = function (_1) {
            return {
                mempty: __Monoid_Monoid_Prim_Array_mempty, 
                $less$greater: __Monoid_Monoid_Prim_Array_$less$greater
            };
        };
        module.__Monoid_Monoid_Prim_Array = __Monoid_Monoid_Prim_Array;
        return module;
    })(_ps.Monoid || {});
    _ps.Tuples = (function (module) {
        var Tuple = function (value0) {
            return function (value1) {
                return {
                    ctor: "Tuples.Tuple", 
                    values: [ value0, value1 ]
                };
            };
        };
        module.Tuple = Tuple;
        var zip = _ps.Arrays.zipWith(Tuple);
        module.zip = zip;
        var unzip = function (_1) {
            return (function (_2) {
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    return (function (_1) {
                        return Tuple(_ps.Arrays[":"]((_2[0]).values[0])(_1.values[0]))(_ps.Arrays[":"]((_2[0]).values[1])(_1.values[1]));
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
            return function (_2) {
                return _1(_2.values[0])(_2.values[1]);
                throw "Failed pattern match";
            };
        };
        module.uncurry = uncurry;
        var curry = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(Tuple(_2)(_3));
                    throw "Failed pattern match";
                };
            };
        };
        module.curry = curry;
        var __Prelude_Show_Tuples_Tuple_show = function (__dict_Show_19) {
            return function (__dict_Show_20) {
                return function (_1) {
                    return "Tuple(" + _ps.Prelude.show(__dict_Show_19)(_1.values[0]) + ", " + _ps.Prelude.show(__dict_Show_20)(_1.values[1]) + ")";
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Show_Tuples_Tuple_show = __Prelude_Show_Tuples_Tuple_show;
        var __Prelude_Show_Tuples_Tuple = function (_1) {
            return function (_2) {
                return {
                    show: __Prelude_Show_Tuples_Tuple_show(_1)(_2)
                };
            };
        };
        module.__Prelude_Show_Tuples_Tuple = __Prelude_Show_Tuples_Tuple;
        return module;
    })(_ps.Tuples || {});
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());