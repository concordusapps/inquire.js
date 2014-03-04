(function (_ps) {
    "use strict";
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
        function readNumber(n) {  return parseFloat(n);};
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
        var liftRef = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return function (_3) {
                    if (_2.ctor === "Prelude.Ref") {
                        if (_3.ctor === "Prelude.Ref") {
                            return _1(_2.values[0])(_3.values[0]);
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.liftRef = liftRef;
        var refEq = liftRef(unsafeRefEq);
        module.refEq = refEq;
        var refIneq = liftRef(unsafeRefIneq);
        module.refIneq = refIneq;
        var flip = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
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
            if (typeof _1 !== "string") {
                throw "string expected";
            };
            return (function (_2) {
                return _2;
                throw "Failed pattern match";
            })(_1);
        };
        module.__Prelude_Show_Prim_String_show = __Prelude_Show_Prim_String_show;
        var __Prelude_Show_Prim_String = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: __Prelude_Show_Prim_String_show
            };
        };
        module.__Prelude_Show_Prim_String = __Prelude_Show_Prim_String;
        var __Prelude_Show_Prim_Number_show = showNumber;
        module.__Prelude_Show_Prim_Number_show = __Prelude_Show_Prim_Number_show;
        var __Prelude_Show_Prim_Number = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: __Prelude_Show_Prim_Number_show
            };
        };
        module.__Prelude_Show_Prim_Number = __Prelude_Show_Prim_Number;
        var __Prelude_Show_Prim_Boolean_show = function (_1) {
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
        module.__Prelude_Show_Prim_Boolean_show = __Prelude_Show_Prim_Boolean_show;
        var __Prelude_Show_Prim_Boolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: __Prelude_Show_Prim_Boolean_show
            };
        };
        module.__Prelude_Show_Prim_Boolean = __Prelude_Show_Prim_Boolean;
        var __Prelude_Read_Prim_String_read = function (_1) {
            if (typeof _1 !== "string") {
                throw "string expected";
            };
            return (function (_2) {
                return _2;
                throw "Failed pattern match";
            })(_1);
        };
        module.__Prelude_Read_Prim_String_read = __Prelude_Read_Prim_String_read;
        var __Prelude_Read_Prim_String = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: __Prelude_Read_Prim_String_read
            };
        };
        module.__Prelude_Read_Prim_String = __Prelude_Read_Prim_String;
        var __Prelude_Read_Prim_Number_read = readNumber;
        module.__Prelude_Read_Prim_Number_read = __Prelude_Read_Prim_Number_read;
        var __Prelude_Read_Prim_Number = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                read: __Prelude_Read_Prim_Number_read
            };
        };
        module.__Prelude_Read_Prim_Number = __Prelude_Read_Prim_Number;
        var __Prelude_Read_Prim_Boolean_read = function (_1) {
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
        module.__Prelude_Read_Prim_Boolean_read = __Prelude_Read_Prim_Boolean_read;
        var __Prelude_Read_Prim_Boolean = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return function (_3) {
                    return _1(_2(_3));
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Category_Prim_Function_$less$less$less = __Prelude_Category_Prim_Function_$less$less$less;
        var __Prelude_Category_Prim_Function_$greater$greater$greater = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return function (_3) {
                    return _2(_1(_3));
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Category_Prim_Function_$greater$greater$greater = __Prelude_Category_Prim_Function_$greater$greater$greater;
        var __Prelude_Category_Prim_Function = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $amp$amp: __Prelude_BoolLike_Prim_Boolean_$amp$amp, 
                $bar$bar: __Prelude_BoolLike_Prim_Boolean_$bar$bar, 
                not: __Prelude_BoolLike_Prim_Boolean_not
            };
        };
        module.__Prelude_BoolLike_Prim_Boolean = __Prelude_BoolLike_Prim_Boolean;
        var __Prelude_Eq_Prim_Array_$eq$eq = function (__dict_Eq_1) {
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
                                return $amp$amp(__Prelude_BoolLike_Prim_Boolean({}))($eq$eq(__dict_Eq_1)(_3[0])(_4[0]))($eq$eq(__Prelude_Eq_Prim_Array(__dict_Eq_1))(_8)(_6));
                            };
                        };
                        return false;
                        throw "Failed pattern match";
                    })(_1, _2);
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
                if (!Array.isArray(_1)) {
                    throw "Array expected";
                };
                return function (_2) {
                    if (!Array.isArray(_2)) {
                        throw "Array expected";
                    };
                    return (function (_3, _4) {
                        return not(__Prelude_BoolLike_Prim_Boolean({}))($eq$eq(__Prelude_Eq_Prim_Array(__dict_Eq_2))(_3)(_4));
                        throw "Failed pattern match";
                    })(_1, _2);
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
                        if (typeof f$prime !== "function") {
                            throw "function expected";
                        };
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
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return _1(_2);
                throw "Failed pattern match";
            };
        };
        module["$"] = $dollar;
        var $hash = function (_1) {
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return (function (_3, _4) {
                    return _4(_3);
                    throw "Failed pattern match";
                })(_1, _2);
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
        function toLower(s) {  return s.toLower();};
        module.toLower = toLower;
        function toUpper(s) {  return s.toUpper();};
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
        var fromMaybe = function (_1) {
            return maybe(_1)(_ps.Prelude.id(_ps.Prelude.__Prelude_Category_Prim_Function({})));
            throw "Failed pattern match";
        };
        module.fromMaybe = fromMaybe;
        var __Prelude_Show_Data_Maybe_Maybe_show = function (__dict_Show_5) {
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
        module.__Prelude_Show_Data_Maybe_Maybe_show = __Prelude_Show_Data_Maybe_Maybe_show;
        var __Prelude_Show_Data_Maybe_Maybe = function (_1) {
            return {
                show: __Prelude_Show_Data_Maybe_Maybe_show(_1)
            };
        };
        module.__Prelude_Show_Data_Maybe_Maybe = __Prelude_Show_Data_Maybe_Maybe;
        var __Prelude_Monad_Data_Maybe_Maybe_$greater$greater$eq = function (_1) {
            return function (_2) {
                if (typeof _2 !== "function") {
                    throw "function expected";
                };
                return (function (_3, _4) {
                    return maybe(Nothing)(_4)(_3);
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        module.__Prelude_Monad_Data_Maybe_Maybe_$greater$greater$eq = __Prelude_Monad_Data_Maybe_Maybe_$greater$greater$eq;
        var __Prelude_Monad_Data_Maybe_Maybe_$$return = Just;
        module.__Prelude_Monad_Data_Maybe_Maybe_$$return = __Prelude_Monad_Data_Maybe_Maybe_$$return;
        var __Prelude_Monad_Data_Maybe_Maybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: __Prelude_Monad_Data_Maybe_Maybe_$$return, 
                $greater$greater$eq: __Prelude_Monad_Data_Maybe_Maybe_$greater$greater$eq
            };
        };
        module.__Prelude_Monad_Data_Maybe_Maybe = __Prelude_Monad_Data_Maybe_Maybe;
        var __Prelude_Functor_Data_Maybe_Maybe_$less$dollar$greater = function (_1) {
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
        module.__Prelude_Functor_Data_Maybe_Maybe_$less$dollar$greater = __Prelude_Functor_Data_Maybe_Maybe_$less$dollar$greater;
        var __Prelude_Functor_Data_Maybe_Maybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: __Prelude_Functor_Data_Maybe_Maybe_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Data_Maybe_Maybe = __Prelude_Functor_Data_Maybe_Maybe;
        var __Prelude_Applicative_Data_Maybe_Maybe_pure = Just;
        module.__Prelude_Applicative_Data_Maybe_Maybe_pure = __Prelude_Applicative_Data_Maybe_Maybe_pure;
        var __Prelude_Applicative_Data_Maybe_Maybe_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return _ps.Prelude["<$>"](__Prelude_Functor_Data_Maybe_Maybe({}))(_1.values[0])(_2);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Applicative_Data_Maybe_Maybe_$less$times$greater = __Prelude_Applicative_Data_Maybe_Maybe_$less$times$greater;
        var __Prelude_Applicative_Data_Maybe_Maybe = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                pure: __Prelude_Applicative_Data_Maybe_Maybe_pure, 
                $less$times$greater: __Prelude_Applicative_Data_Maybe_Maybe_$less$times$greater
            };
        };
        module.__Prelude_Applicative_Data_Maybe_Maybe = __Prelude_Applicative_Data_Maybe_Maybe;
        return module;
    })(_ps.Data_Maybe || {});
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
        var __Prelude_Show_Data_Either_Either_show = function (__dict_Show_6) {
            return function (__dict_Show_7) {
                return function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return "Left " + _ps.Prelude.show(__dict_Show_6)(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return "Right " + _ps.Prelude.show(__dict_Show_7)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Show_Data_Either_Either_show = __Prelude_Show_Data_Either_Either_show;
        var __Prelude_Show_Data_Either_Either = function (_1) {
            return function (_2) {
                return {
                    show: __Prelude_Show_Data_Either_Either_show(_1)(_2)
                };
            };
        };
        module.__Prelude_Show_Data_Either_Either = __Prelude_Show_Data_Either_Either;
        var __Prelude_Monad_Data_Either_Either_$greater$greater$eq = either(function (e) {
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
        module.__Prelude_Monad_Data_Either_Either_$greater$greater$eq = __Prelude_Monad_Data_Either_Either_$greater$greater$eq;
        var __Prelude_Monad_Data_Either_Either_$$return = Right;
        module.__Prelude_Monad_Data_Either_Either_$$return = __Prelude_Monad_Data_Either_Either_$$return;
        var __Prelude_Monad_Data_Either_Either = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: __Prelude_Monad_Data_Either_Either_$$return, 
                $greater$greater$eq: __Prelude_Monad_Data_Either_Either_$greater$greater$eq
            };
        };
        module.__Prelude_Monad_Data_Either_Either = __Prelude_Monad_Data_Either_Either;
        var __Prelude_Functor_Data_Either_Either_$less$dollar$greater = function (_1) {
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
        module.__Prelude_Functor_Data_Either_Either_$less$dollar$greater = __Prelude_Functor_Data_Either_Either_$less$dollar$greater;
        var __Prelude_Functor_Data_Either_Either = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: __Prelude_Functor_Data_Either_Either_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Data_Either_Either = __Prelude_Functor_Data_Either_Either;
        var __Prelude_Applicative_Data_Either_Either_pure = Right;
        module.__Prelude_Applicative_Data_Either_Either_pure = __Prelude_Applicative_Data_Either_Either_pure;
        var __Prelude_Applicative_Data_Either_Either_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Either.Left") {
                    return Left(_1.values[0]);
                };
                if (_1.ctor === "Data.Either.Right") {
                    return _ps.Prelude["<$>"](__Prelude_Functor_Data_Either_Either({}))(_1.values[0])(_2);
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Applicative_Data_Either_Either_$less$times$greater = __Prelude_Applicative_Data_Either_Either_$less$times$greater;
        var __Prelude_Applicative_Data_Either_Either = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                pure: __Prelude_Applicative_Data_Either_Either_pure, 
                $less$times$greater: __Prelude_Applicative_Data_Either_Either_$less$times$greater
            };
        };
        module.__Prelude_Applicative_Data_Either_Either = __Prelude_Applicative_Data_Either_Either;
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
        var singleton = function (_1) {
            return [ _1 ];
            throw "Failed pattern match";
        };
        module.singleton = singleton;
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
        var __Prelude_Monad_Prim_Array_$greater$greater$eq = concatMap;
        module.__Prelude_Monad_Prim_Array_$greater$greater$eq = __Prelude_Monad_Prim_Array_$greater$greater$eq;
        var __Prelude_Monad_Prim_Array_$$return = singleton;
        module.__Prelude_Monad_Prim_Array_$$return = __Prelude_Monad_Prim_Array_$$return;
        var __Prelude_Monad_Prim_Array = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
        var __Prelude_Functor_Prim_Array_$less$dollar$greater = map;
        module.__Prelude_Functor_Prim_Array_$less$dollar$greater = __Prelude_Functor_Prim_Array_$less$dollar$greater;
        var __Prelude_Functor_Prim_Array = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: __Prelude_Functor_Prim_Array_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Prim_Array = __Prelude_Functor_Prim_Array;
        var __Prelude_Show_Prim_Array_show = function (__dict_Show_8) {
            return function (_1) {
                if (!Array.isArray(_1)) {
                    throw "Array expected";
                };
                return (function (_2) {
                    return "[" + joinWith(map(_ps.Prelude.show(__dict_Show_8))(_2))(",") + "]";
                    throw "Failed pattern match";
                })(_1);
            };
        };
        module.__Prelude_Show_Prim_Array_show = __Prelude_Show_Prim_Array_show;
        var __Prelude_Show_Prim_Array = function (_1) {
            return {
                show: __Prelude_Show_Prim_Array_show(_1)
            };
        };
        module.__Prelude_Show_Prim_Array = __Prelude_Show_Prim_Array;
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
        var mconcat = function (__dict_Monoid_9) {
            return _ps.Data_Array.foldl($less$greater(__dict_Monoid_9))(mempty(__dict_Monoid_9));
        };
        module.mconcat = mconcat;
        var __Data_Monoid_Monoid_Prim_String_mempty = "";
        module.__Data_Monoid_Monoid_Prim_String_mempty = __Data_Monoid_Monoid_Prim_String_mempty;
        var __Data_Monoid_Monoid_Prim_String_$less$greater = _ps.Prelude["++"];
        module.__Data_Monoid_Monoid_Prim_String_$less$greater = __Data_Monoid_Monoid_Prim_String_$less$greater;
        var __Data_Monoid_Monoid_Prim_String = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: __Data_Monoid_Monoid_Prim_String_mempty, 
                $less$greater: __Data_Monoid_Monoid_Prim_String_$less$greater
            };
        };
        module.__Data_Monoid_Monoid_Prim_String = __Data_Monoid_Monoid_Prim_String;
        var __Data_Monoid_Monoid_Prim_Array_mempty = [  ];
        module.__Data_Monoid_Monoid_Prim_Array_mempty = __Data_Monoid_Monoid_Prim_Array_mempty;
        var __Data_Monoid_Monoid_Prim_Array_$less$greater = _ps.Data_Array.concat;
        module.__Data_Monoid_Monoid_Prim_Array_$less$greater = __Data_Monoid_Monoid_Prim_Array_$less$greater;
        var __Data_Monoid_Monoid_Prim_Array = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: __Data_Monoid_Monoid_Prim_Array_mempty, 
                $less$greater: __Data_Monoid_Monoid_Prim_Array_$less$greater
            };
        };
        module.__Data_Monoid_Monoid_Prim_Array = __Data_Monoid_Monoid_Prim_Array;
        return module;
    })(_ps.Data_Monoid || {});
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
        var curry = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return function (_3) {
                    return _1(Tuple(_2)(_3));
                    throw "Failed pattern match";
                };
            };
        };
        module.curry = curry;
        var __Prelude_Show_Data_Tuple_Tuple_show = function (__dict_Show_10) {
            return function (__dict_Show_11) {
                return function (_1) {
                    return "Tuple(" + _ps.Prelude.show(__dict_Show_10)(_1.values[0]) + ", " + _ps.Prelude.show(__dict_Show_11)(_1.values[1]) + ")";
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Show_Data_Tuple_Tuple_show = __Prelude_Show_Data_Tuple_Tuple_show;
        var __Prelude_Show_Data_Tuple_Tuple = function (_1) {
            return function (_2) {
                return {
                    show: __Prelude_Show_Data_Tuple_Tuple_show(_1)(_2)
                };
            };
        };
        module.__Prelude_Show_Data_Tuple_Tuple = __Prelude_Show_Data_Tuple_Tuple;
        return module;
    })(_ps.Data_Tuple || {});
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
        var __Prelude_Monad_Control_Monad_Eff_Eff_$greater$greater$eq = bindEff;
        module.__Prelude_Monad_Control_Monad_Eff_Eff_$greater$greater$eq = __Prelude_Monad_Control_Monad_Eff_Eff_$greater$greater$eq;
        var __Prelude_Monad_Control_Monad_Eff_Eff_$$return = retEff;
        module.__Prelude_Monad_Control_Monad_Eff_Eff_$$return = __Prelude_Monad_Control_Monad_Eff_Eff_$$return;
        var __Prelude_Monad_Control_Monad_Eff_Eff = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $$return: __Prelude_Monad_Control_Monad_Eff_Eff_$$return, 
                $greater$greater$eq: __Prelude_Monad_Control_Monad_Eff_Eff_$greater$greater$eq
            };
        };
        module.__Prelude_Monad_Control_Monad_Eff_Eff = __Prelude_Monad_Control_Monad_Eff_Eff;
        return module;
    })(_ps.Control_Monad_Eff || {});
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
        var print = function (__dict_Show_12) {
            return function (_1) {
                return trace(_ps.Prelude.show(__dict_Show_12)(_1));
                throw "Failed pattern match";
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
        var when = function (__dict_Monad_13) {
            return function (_1) {
                if (typeof _1 !== "boolean") {
                    throw "boolean expected";
                };
                return function (_2) {
                    if (_1) {
                        return _2;
                    };
                    if (!_1) {
                        return _ps.Prelude["return"](__dict_Monad_13)({});
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.when = when;
        var sequence = function (__dict_Monad_14) {
            return function (_1) {
                if (!Array.isArray(_1)) {
                    throw "Array expected";
                };
                return (function (_2) {
                    if (_2.length === 0) {
                        return _ps.Prelude["return"](__dict_Monad_14)([  ]);
                    };
                    if (_2.length > 0) {
                        var _4 = _2.slice(1);
                        return _ps.Prelude[">>="](__dict_Monad_14)(_2[0])(function (a) {
                            return _ps.Prelude[">>="](__dict_Monad_14)(sequence(__dict_Monad_14)(_4))(function (as) {
                                if (!Array.isArray(as)) {
                                    throw "Array expected";
                                };
                                return _ps.Prelude["return"](__dict_Monad_14)(_ps.Data_Array[":"](a)(as));
                            });
                        });
                    };
                    throw "Failed pattern match";
                })(_1);
            };
        };
        module.sequence = sequence;
        var replicateM = function (__dict_Monad_15) {
            return function (_1) {
                if (typeof _1 !== "number") {
                    throw "number expected";
                };
                return function (_2) {
                    if (_1 === 0) {
                        return _ps.Prelude["return"](__dict_Monad_15)([  ]);
                    };
                    return _ps.Prelude[">>="](__dict_Monad_15)(_2)(function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_15)(replicateM(__dict_Monad_15)(_1 - 1)(_2))(function (as) {
                            if (!Array.isArray(as)) {
                                throw "Array expected";
                            };
                            return _ps.Prelude["return"](__dict_Monad_15)(_ps.Data_Array[":"](a)(as));
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        module.replicateM = replicateM;
        var mapM = function (__dict_Monad_16) {
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
                            return _ps.Prelude["return"](__dict_Monad_16)([  ]);
                        };
                        if (_4.length > 0) {
                            var _6 = _4.slice(1);
                            return _ps.Prelude[">>="](__dict_Monad_16)(_3(_4[0]))(function (b) {
                                return _ps.Prelude[">>="](__dict_Monad_16)(mapM(__dict_Monad_16)(_3)(_6))(function (bs) {
                                    if (!Array.isArray(bs)) {
                                        throw "Array expected";
                                    };
                                    return _ps.Prelude["return"](__dict_Monad_16)(_ps.Data_Array[":"](b)(bs));
                                });
                            });
                        };
                        throw "Failed pattern match";
                    })(_1, _2);
                };
            };
        };
        module.mapM = mapM;
        var join = function (__dict_Monad_17) {
            return function (_1) {
                return _ps.Prelude[">>="](__dict_Monad_17)(_1)(function (m) {
                    return m;
                });
                throw "Failed pattern match";
            };
        };
        module.join = join;
        var foldM = function (__dict_Monad_18) {
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
                                return _ps.Prelude["return"](__dict_Monad_18)(_5);
                            };
                            if (_6.length > 0) {
                                var _8 = _6.slice(1);
                                return _ps.Prelude[">>="](__dict_Monad_18)(_4(_5)(_6[0]))(function (a$prime) {
                                    return foldM(__dict_Monad_18)(_4)(a$prime)(_8);
                                });
                            };
                            throw "Failed pattern match";
                        })(_1, _2, _3);
                    };
                };
            };
        };
        module.foldM = foldM;
        var $greater$eq$greater = function (__dict_Monad_19) {
            return function (_1) {
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    if (typeof _2 !== "function") {
                        throw "function expected";
                    };
                    return function (_3) {
                        return _ps.Prelude[">>="](__dict_Monad_19)(_1(_3))(function (b) {
                            return _2(b);
                        });
                        throw "Failed pattern match";
                    };
                };
            };
        };
        module[">=>"] = $greater$eq$greater;
        var $less$eq$less = function (__dict_Monad_20) {
            return _ps.Prelude.flip($greater$eq$greater(__dict_Monad_20));
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
    _ps.Inquire = (function (module) {
        var NoBool = {
            ctor: "Inquire.NoBool", 
            values: [  ]
        };
        module.NoBool = NoBool;
        var Not = {
            ctor: "Inquire.Not", 
            values: [  ]
        };
        module.Not = Not;
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
        var And = {
            ctor: "Inquire.And", 
            values: [  ]
        };
        module.And = And;
        var Or = {
            ctor: "Inquire.Or", 
            values: [  ]
        };
        module.Or = Or;
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
        var or = function (_1) {
            return function (_2) {
                return Junc(_1)(Or)(_2);
                throw "Failed pattern match";
            };
        };
        module.or = or;
        var distribute = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.And") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.Or") {
                            return Junc(Junc(_1.values[0])(Or)((_1.values[2]).values[0]))(And)(Junc(_1.values[0])(Or)((_1.values[2]).values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.Or") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.And") {
                            return Junc(Junc(_1.values[0])(And)((_1.values[2]).values[0]))(Or)(Junc(_1.values[0])(And)((_1.values[2]).values[2]));
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.distribute = distribute;
        var commute = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.And") {
                    return Junc(_1.values[2])(And)(_1.values[0]);
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.Or") {
                    return Junc(_1.values[2])(Or)(_1.values[0]);
                };
            };
            throw "Failed pattern match";
        };
        module.commute = commute;
        var codistribute = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.Or") {
                        if ((_1.values[1]).ctor === "Inquire.And") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Inquire.Or") {
                                    return Junc((_1.values[2]).values[0])(And)(Junc((_1.values[0]).values[2])(Or)((_1.values[2]).values[2]));
                                };
                            };
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.And") {
                        if ((_1.values[1]).ctor === "Inquire.Or") {
                            if ((_1.values[2]).ctor === "Inquire.Junc") {
                                if (((_1.values[2]).values[1]).ctor === "Inquire.And") {
                                    return Junc((_1.values[2]).values[0])(Or)(Junc((_1.values[0]).values[2])(And)((_1.values[2]).values[2]));
                                };
                            };
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.codistribute = codistribute;
        var associate = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.And") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.And") {
                            return Junc(Junc(_1.values[0])(And)((_1.values[2]).values[0]))(And)((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.Or") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.Or") {
                            return Junc(Junc(_1.values[0])(Or)((_1.values[2]).values[0]))(Or)((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.And") {
                        if ((_1.values[1]).ctor === "Inquire.And") {
                            return Junc((_1.values[0]).values[0])(And)(Junc((_1.values[0]).values[2])(And)(_1.values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.Or") {
                        if ((_1.values[1]).ctor === "Inquire.Or") {
                            return Junc((_1.values[0]).values[0])(Or)(Junc((_1.values[0]).values[2])(Or)(_1.values[2]));
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
                    if (((_1.values[0]).values[1]).ctor === "Inquire.And") {
                        if ((_1.values[1]).ctor === "Inquire.And") {
                            return Junc((_1.values[0]).values[0])(And)(Junc((_1.values[0]).values[2])(And)(_1.values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[0]).ctor === "Inquire.Junc") {
                    if (((_1.values[0]).values[1]).ctor === "Inquire.Or") {
                        if ((_1.values[1]).ctor === "Inquire.Or") {
                            return Junc((_1.values[0]).values[0])(Or)(Junc((_1.values[0]).values[2])(Or)(_1.values[2]));
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.assocRight = assocRight;
        var assocLeft = function (_1) {
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.And") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.And") {
                            return Junc(Junc(_1.values[0])(And)((_1.values[2]).values[0]))(And)((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            if (_1.ctor === "Inquire.Junc") {
                if ((_1.values[1]).ctor === "Inquire.Or") {
                    if ((_1.values[2]).ctor === "Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Inquire.Or") {
                            return Junc(Junc(_1.values[0])(Or)((_1.values[2]).values[0]))(Or)((_1.values[2]).values[2]);
                        };
                    };
                };
            };
            throw "Failed pattern match";
        };
        module.assocLeft = assocLeft;
        var and = function (_1) {
            return function (_2) {
                return Junc(_1)(And)(_2);
                throw "Failed pattern match";
            };
        };
        module.and = and;
        var __Prelude_Show_Inquire_WrapOp_show = function (_1) {
            if (_1.ctor === "Inquire.NoBool") {
                return "";
            };
            if (_1.ctor === "Inquire.Not") {
                return "!";
            };
            throw "Failed pattern match";
        };
        module.__Prelude_Show_Inquire_WrapOp_show = __Prelude_Show_Inquire_WrapOp_show;
        var __Prelude_Show_Inquire_WrapOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: __Prelude_Show_Inquire_WrapOp_show
            };
        };
        module.__Prelude_Show_Inquire_WrapOp = __Prelude_Show_Inquire_WrapOp;
        var __Prelude_Show_Inquire_Rel_show = function (_1) {
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
        module.__Prelude_Show_Inquire_Rel_show = __Prelude_Show_Inquire_Rel_show;
        var __Prelude_Show_Inquire_Rel = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: __Prelude_Show_Inquire_Rel_show
            };
        };
        module.__Prelude_Show_Inquire_Rel = __Prelude_Show_Inquire_Rel;
        var __Prelude_Show_Inquire_JuncOp_show = function (_1) {
            if (_1.ctor === "Inquire.And") {
                return "&";
            };
            if (_1.ctor === "Inquire.Or") {
                return ";";
            };
            throw "Failed pattern match";
        };
        module.__Prelude_Show_Inquire_JuncOp_show = __Prelude_Show_Inquire_JuncOp_show;
        var __Prelude_Show_Inquire_JuncOp = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: __Prelude_Show_Inquire_JuncOp_show
            };
        };
        module.__Prelude_Show_Inquire_JuncOp = __Prelude_Show_Inquire_JuncOp;
        var __Prelude_Show_Inquire_Inquire = function (_1) {
            return function (_2) {
                return {
                    show: __Prelude_Show_Inquire_Inquire_show(_1)(_2)
                };
            };
        };
        module.__Prelude_Show_Inquire_Inquire = __Prelude_Show_Inquire_Inquire;
        var __Prelude_Show_Inquire_Inquire_show = function (__dict_Show_21) {
            return function (__dict_Show_22) {
                return function (_1) {
                    if (_1.ctor === "Inquire.EmptyAnd") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.EmptyOr") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.Pred") {
                        return _ps.Prelude.show(__dict_Show_21)(_1.values[0]) + _ps.Prelude.show(__Prelude_Show_Inquire_Rel({}))(_1.values[1]) + _ps.Prelude.show(__dict_Show_22)(_1.values[2]);
                    };
                    if (_1.ctor === "Inquire.Junc") {
                        return "(" + _ps.Prelude.show(__Prelude_Show_Inquire_Inquire(__dict_Show_21)(__dict_Show_22))(_1.values[0]) + ")" + _ps.Prelude.show(__Prelude_Show_Inquire_JuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(__Prelude_Show_Inquire_Inquire(__dict_Show_21)(__dict_Show_22))(_1.values[2]) + ")";
                    };
                    if (_1.ctor === "Inquire.Wrap") {
                        return _ps.Prelude.show(__Prelude_Show_Inquire_WrapOp({}))(_1.values[0]) + "(" + _ps.Prelude.show(__Prelude_Show_Inquire_Inquire(__dict_Show_21)(__dict_Show_22))(_1.values[1]) + ")";
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Show_Inquire_Inquire_show = __Prelude_Show_Inquire_Inquire_show;
        var __Prelude_Functor_Inquire_Inquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $less$dollar$greater: __Prelude_Functor_Inquire_Inquire_$less$dollar$greater
            };
        };
        module.__Prelude_Functor_Inquire_Inquire = __Prelude_Functor_Inquire_Inquire;
        var __Prelude_Functor_Inquire_Inquire_$less$dollar$greater = function (_1) {
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
                    return Junc(_ps.Prelude["<$>"](__Prelude_Functor_Inquire_Inquire({}))(_1)(_2.values[0]))(_2.values[1])(_ps.Prelude["<$>"](__Prelude_Functor_Inquire_Inquire({}))(_1)(_2.values[2]));
                };
                if (_2.ctor === "Inquire.Wrap") {
                    return Wrap(_2.values[0])(_ps.Prelude["<$>"](__Prelude_Functor_Inquire_Inquire({}))(_1)(_2.values[1]));
                };
                throw "Failed pattern match";
            };
        };
        module.__Prelude_Functor_Inquire_Inquire_$less$dollar$greater = __Prelude_Functor_Inquire_Inquire_$less$dollar$greater;
        var __Algebra_BooleanAlgebra_Inquire_Inquire_$bar$bar$bar = function (_1) {
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
                return Junc(_1)(Or)(_2);
                throw "Failed pattern match";
            };
        };
        module.__Algebra_BooleanAlgebra_Inquire_Inquire_$bar$bar$bar = __Algebra_BooleanAlgebra_Inquire_Inquire_$bar$bar$bar;
        var __Algebra_BooleanAlgebra_Inquire_Inquire_$bar$amp$bar = function (_1) {
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
                return Junc(_1)(And)(_2);
                throw "Failed pattern match";
            };
        };
        module.__Algebra_BooleanAlgebra_Inquire_Inquire_$bar$amp$bar = __Algebra_BooleanAlgebra_Inquire_Inquire_$bar$amp$bar;
        var __Algebra_BooleanAlgebra_Inquire_Inquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                $bar$bar$bar: __Algebra_BooleanAlgebra_Inquire_Inquire_$bar$bar$bar, 
                $bar$amp$bar: __Algebra_BooleanAlgebra_Inquire_Inquire_$bar$amp$bar
            };
        };
        module.__Algebra_BooleanAlgebra_Inquire_Inquire = __Algebra_BooleanAlgebra_Inquire_Inquire;
        return module;
    })(_ps.Inquire || {});
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());