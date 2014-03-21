(function (_ps) {
    "use strict";
    _ps.Prelude = (function () {
        var module = {};
        function id(dict) {
            return dict.id;
        };
        function $less$less$less(dict) {
            return dict.$less$less$less;
        };
        function show(dict) {
            return dict.show;
        };
        function $less$dollar$greater(dict) {
            return dict.$less$dollar$greater;
        };
        function pure(dict) {
            return dict.pure;
        };
        function $less$times$greater(dict) {
            return dict.$less$times$greater;
        };
        function $eq$eq(dict) {
            return dict.$eq$eq;
        };
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
        var categoryArr = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                id: categoryArr_id, 
                $less$less$less: categoryArr_$less$less$less
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
        var $dollar = function (f) {
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (x) {
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
        module["=="] = $eq$eq;
        module["<*>"] = $less$times$greater;
        module.pure = pure;
        module["<$>"] = $less$dollar$greater;
        module.show = show;
        module["$"] = $dollar;
        module["<<<"] = $less$less$less;
        module.id = id;
        module.flip = flip;
        module.categoryArr = categoryArr;
        module.functorFromApplicative = functorFromApplicative;
        module.boolLikeBoolean = boolLikeBoolean;
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
        module.Nothing = Nothing;
        module.Just = Just;
        module.maybe = maybe;
        return module;
    })();
    _ps.Data_BiTraversable = (function () {
        var module = {};
        function bitraverse(dict) {
            return dict.bitraverse;
        };
        module.bitraverse = bitraverse;
        return module;
    })();
    _ps.Data_BiFunctor = (function () {
        var module = {};
        function $less$dollar$dollar$greater(dict) {
            return dict.$less$dollar$dollar$greater;
        };
        module["<$$>"] = $less$dollar$dollar$greater;
        return module;
    })();
    _ps.Data_BiFoldable = (function () {
        var module = {};
        function bifoldr(dict) {
            return dict.bifoldr;
        };
        module.bifoldr = bifoldr;
        return module;
    })();
    _ps.Data_Array = (function () {
        var module = {};
        function concat(l1) {  return function (l2) {    return l1.concat(l2);  };};
        var $colon = function (a) {
            return concat([ a ]);
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
        module.zipWith = zipWith;
        module[":"] = $colon;
        module.concat = concat;
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
        module["<>"] = $less$greater;
        module.mempty = mempty;
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
        module.Tuple = Tuple;
        module.zip = zip;
        return module;
    })();
    _ps.Data_Foldable = (function () {
        var module = {};
        function foldr(dict) {
            return dict.foldr;
        };
        module.foldr = foldr;
        return module;
    })();
    _ps.Data_Traversable = (function () {
        var module = {};
        function traverse(dict) {
            return dict.traverse;
        };
        module.traverse = traverse;
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
        var REQ = {
            ctor: "Network.Inquire.REQ", 
            values: [  ]
        };
        var RNE = {
            ctor: "Network.Inquire.RNE", 
            values: [  ]
        };
        var RGT = {
            ctor: "Network.Inquire.RGT", 
            values: [  ]
        };
        var RGE = {
            ctor: "Network.Inquire.RGE", 
            values: [  ]
        };
        var RLT = {
            ctor: "Network.Inquire.RLT", 
            values: [  ]
        };
        var RLE = {
            ctor: "Network.Inquire.RLE", 
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
        var EmptyAnd = {
            ctor: "Network.Inquire.EmptyAnd", 
            values: [  ]
        };
        var EmptyOr = {
            ctor: "Network.Inquire.EmptyOr", 
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
        var traversableInquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
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
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    if (_2.ctor === "Network.Inquire.EmptyAnd") {
                        return _ps.Prelude.pure(__dict_Applicative_316)(EmptyAnd);
                    };
                    if (_2.ctor === "Network.Inquire.EmptyOr") {
                        return _ps.Prelude.pure(__dict_Applicative_316)(EmptyOr);
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                show: showWrapOp_show
            };
        };
        var showRel_show = function (_1) {
            if (_1.ctor === "Network.Inquire.REQ") {
                return "=";
            };
            if (_1.ctor === "Network.Inquire.RNE") {
                return "!=";
            };
            if (_1.ctor === "Network.Inquire.RGT") {
                return ">";
            };
            if (_1.ctor === "Network.Inquire.RGE") {
                return ">=";
            };
            if (_1.ctor === "Network.Inquire.RLT") {
                return "<";
            };
            if (_1.ctor === "Network.Inquire.RLE") {
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
            if (_1.ctor === "Network.Inquire.AND") {
                return "&";
            };
            if (_1.ctor === "Network.Inquire.OR") {
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
                rel: RNE, 
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
                if (_2.ctor === "Network.Inquire.EmptyAnd") {
                    return _1;
                };
                if (_1.ctor === "Network.Inquire.EmptyAnd") {
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
                rel: RLT, 
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
                rel: RLE, 
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
                rel: RGT, 
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
                rel: RGE, 
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
                if (_2.ctor === "Network.Inquire.EmptyAnd") {
                    return EmptyAnd;
                };
                if (_2.ctor === "Network.Inquire.EmptyOr") {
                    return EmptyOr;
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
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                foldr: foldableInquire_foldr, 
                foldl: foldableInquire_foldl, 
                foldMap: function (__dict_Monoid_325) {
                    return foldableInquire_foldMap(__dict_Monoid_325);
                }
            };
        };
        var foldableInquire_foldr = function (_1) {
            if (typeof _1 !== "function") {
                throw "function expected";
            };
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Network.Inquire.EmptyAnd") {
                        return _2;
                    };
                    if (_3.ctor === "Network.Inquire.EmptyOr") {
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
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (z) {
                return function (i) {
                    return _ps.Data_Foldable.foldr(foldableInquire({}))(_ps.Prelude.flip(f))(z)(i);
                };
            };
        };
        var foldableInquire_foldMap = function (__dict_Monoid_324) {
            return function (f) {
                if (typeof f !== "function") {
                    throw "function expected";
                };
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
                if (_1.ctor === "Network.Inquire.REQ") {
                    if (_2.ctor === "Network.Inquire.REQ") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.RNE") {
                    if (_2.ctor === "Network.Inquire.RNE") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.RGT") {
                    if (_2.ctor === "Network.Inquire.RGT") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.RGE") {
                    if (_2.ctor === "Network.Inquire.RGE") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.RLT") {
                    if (_2.ctor === "Network.Inquire.RLT") {
                        return true;
                    };
                };
                if (_1.ctor === "Network.Inquire.RLE") {
                    if (_2.ctor === "Network.Inquire.RLE") {
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
                rel: REQ, 
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
        var showInquire_show = function (__dict_Show_320) {
            return function (__dict_Show_321) {
                return function (_1) {
                    if (_1.ctor === "Network.Inquire.EmptyAnd") {
                        return "";
                    };
                    if (_1.ctor === "Network.Inquire.EmptyOr") {
                        return "";
                    };
                    if (_1.ctor === "Network.Inquire.Pred") {
                        return _ps.Prelude.show(__dict_Show_320)(_1.values[0]) + _ps.Prelude.show(showRel({}))(_1.values[1]) + _ps.Prelude.show(__dict_Show_321)(_1.values[2]);
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Network.Inquire.Pred") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Pred") {
                                return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]);
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Network.Inquire.Pred") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                                if (_ps.Prelude["=="](eqJuncOp({}))(_1.values[1])((_1.values[2]).values[1])) {
                                    return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]);
                                };
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Pred") {
                                if (_ps.Prelude["=="](eqJuncOp({}))((_1.values[0]).values[1])(_1.values[1])) {
                                    return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))((_1.values[0]).values[1]) + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]);
                                };
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Network.Inquire.Pred") {
                            return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]) + ")";
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[2]).ctor === "Network.Inquire.Pred") {
                            return "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]);
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                            if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                                if (_ps.Prelude["=="](eqJuncOp({}))((_1.values[0]).values[1])(_1.values[1]) && _ps.Prelude["=="](eqJuncOp({}))(_1.values[1])((_1.values[2]).values[1])) {
                                    return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))((_1.values[0]).values[1]) + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]);
                                };
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[0]).ctor === "Network.Inquire.Junc") {
                            if (_ps.Prelude["=="](eqJuncOp({}))((_1.values[0]).values[1])(_1.values[1])) {
                                return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + _ps.Prelude.show(showJuncOp({}))((_1.values[0]).values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]) + ")";
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                            if (_ps.Prelude["=="](eqJuncOp({}))(_1.values[1])((_1.values[2]).values[1])) {
                                return "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]);
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Junc") {
                        return "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[0]) + ")" + _ps.Prelude.show(showJuncOp({}))(_1.values[1]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[2]) + ")";
                    };
                    if (_1.ctor === "Network.Inquire.Wrap") {
                        if ((_1.values[0]).ctor === "Network.Inquire.NOBOOL") {
                            if ((_1.values[1]).ctor === "Network.Inquire.Wrap") {
                                return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[1]);
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Wrap") {
                        if ((_1.values[1]).ctor === "Network.Inquire.Wrap") {
                            if (((_1.values[1]).values[0]).ctor === "Network.Inquire.NOBOOL") {
                                return _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[1]);
                            };
                        };
                    };
                    if (_1.ctor === "Network.Inquire.Wrap") {
                        return _ps.Prelude.show(showWrapOp({}))(_1.values[0]) + "(" + _ps.Prelude.show(showInquire(__dict_Show_320)(__dict_Show_321))(_1.values[1]) + ")";
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
        var generate = function (__dict_Show_322) {
            return function (__dict_Show_323) {
                return function (i) {
                    return _ps.Global.encodeURIComponent(_ps.Prelude.show(showInquire(__dict_Show_322)(__dict_Show_323))(i));
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
        var eqInquire_$eq$eq = function (__dict_Eq_326) {
            return function (__dict_Eq_327) {
                return function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Network.Inquire.EmptyAnd") {
                            if (_2.ctor === "Network.Inquire.EmptyAnd") {
                                return true;
                            };
                        };
                        if (_1.ctor === "Network.Inquire.EmptyOr") {
                            if (_2.ctor === "Network.Inquire.EmptyOr") {
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
            if (_1.ctor === "Network.Inquire.EmptyAnd") {
                return EmptyOr;
            };
            if (_1.ctor === "Network.Inquire.EmptyOr") {
                return EmptyAnd;
            };
            return Wrap(NOT)(_1);
            throw "Failed pattern match";
        };
        var boolLikeInquire_$bar$bar = function (_1) {
            return function (_2) {
                if (_1.ctor === "Network.Inquire.EmptyAnd") {
                    return EmptyAnd;
                };
                if (_2.ctor === "Network.Inquire.EmptyAnd") {
                    return EmptyAnd;
                };
                if (_2.ctor === "Network.Inquire.EmptyOr") {
                    return _1;
                };
                if (_1.ctor === "Network.Inquire.EmptyOr") {
                    return _2;
                };
                return Junc(_1)(OR)(_2);
                throw "Failed pattern match";
            };
        };
        var boolLikeInquire_$amp$amp = function (_1) {
            return function (_2) {
                if (_1.ctor === "Network.Inquire.EmptyOr") {
                    return EmptyOr;
                };
                if (_2.ctor === "Network.Inquire.EmptyOr") {
                    return EmptyOr;
                };
                if (_2.ctor === "Network.Inquire.EmptyAnd") {
                    return _1;
                };
                if (_1.ctor === "Network.Inquire.EmptyAnd") {
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
                if (typeof _1 !== "function") {
                    throw "function expected";
                };
                return function (_2) {
                    if (typeof _2 !== "function") {
                        throw "function expected";
                    };
                    return function (_3) {
                        if (_3.ctor === "Network.Inquire.EmptyAnd") {
                            return _ps.Prelude.pure(__dict_Applicative_330)(EmptyAnd);
                        };
                        if (_3.ctor === "Network.Inquire.EmptyOr") {
                            return _ps.Prelude.pure(__dict_Applicative_330)(EmptyOr);
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
                    if (_3.ctor === "Network.Inquire.EmptyAnd") {
                        return EmptyAnd;
                    };
                    if (_3.ctor === "Network.Inquire.EmptyOr") {
                        return EmptyOr;
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
                        if (_4.ctor === "Network.Inquire.EmptyAnd") {
                            return _3;
                        };
                        if (_4.ctor === "Network.Inquire.EmptyOr") {
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
            if (typeof f !== "function") {
                throw "function expected";
            };
            return function (g) {
                if (typeof g !== "function") {
                    throw "function expected";
                };
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
        module.REQ = REQ;
        module.RNE = RNE;
        module.RGT = RGT;
        module.RGE = RGE;
        module.RLT = RLT;
        module.RLE = RLE;
        module.EmptyAnd = EmptyAnd;
        module.EmptyOr = EmptyOr;
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
        var toObj = function (i) {
            return (function (updateVals) {
                if (typeof updateVals !== "function") {
                    throw "function expected";
                };
                return (function (updateKeys) {
                    if (typeof updateKeys !== "function") {
                        throw "function expected";
                    };
                    return _ps.Data_BiFoldable.bifoldr(_ps.Network_Inquire.biFoldableInquire({}))(updateKeys)(updateVals)({
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
                    if (typeof _1 !== "function") {
                        throw "function expected";
                    };
                    return function (_2) {
                        return function (_3) {
                            if (_3.ctor === "Network.Inquire.Junc") {
                                return (function (r$prime) {
                                    return _1(_3.values[2])(r$prime) ? _ps.Network_Inquire.Junc(remove$prime(__dict_Eq_336)(__dict_Eq_337)(_1)(_2)(_3.values[0]))(_3.values[1])(_3.values[2]) : _ps.Network_Inquire.Junc(_3.values[0])(_3.values[1])(r$prime);
                                })(remove$prime(__dict_Eq_336)(__dict_Eq_337)(_1)(_2)(_3.values[2]));
                            };
                            if (_3.ctor === "Network.Inquire.Wrap") {
                                return _ps.Network_Inquire.Wrap(_3.values[0])(remove$prime(__dict_Eq_336)(__dict_Eq_337)(_1)(_2)(_3.values[1]));
                            };
                            if (_ps.Prelude["=="](_ps.Network_Inquire.eqInquire(__dict_Eq_336)(__dict_Eq_337))(_2)(_3)) {
                                return _ps.Network_Inquire.EmptyAnd;
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
                    throw "Failed pattern match";
                };
            };
        };
        var fromArrayPair = function (_1) {
            if (!Array.isArray(_1)) {
                throw "Array expected";
            };
            return (function (_2) {
                if (_2.length === 0) {
                    return _ps.Network_Inquire.EmptyAnd;
                };
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    if ((_2[0]).length === 2) {
                        return _ps.Network_Inquire.and(fromArrayPair(_4))(_ps.Network_Inquire.eq(_2[0][0])(_2[0][1]));
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
                    return _ps.Network_Inquire.EmptyAnd;
                };
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    return _ps.Network_Inquire.and(fromArrayObj(_4))(_ps.Network_Inquire.eq((_2[0]).key)((_2[0]).val));
                };
                throw "Failed pattern match";
            })(_1);
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
            if (typeof _1 !== "function") {
                throw "function expected";
            };
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
            if (typeof _1 !== "function") {
                throw "function expected";
            };
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
                            return _ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))(_ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[2]));
                        };
                    };
                };
            };
            if (_1.ctor === "Network.Inquire.Junc") {
                if ((_1.values[1]).ctor === "Network.Inquire.OR") {
                    if ((_1.values[2]).ctor === "Network.Inquire.Junc") {
                        if (((_1.values[2]).values[1]).ctor === "Network.Inquire.AND") {
                            return _ps.Prelude["||"](_ps.Network_Inquire.boolLikeInquire({}))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[0]))(_ps.Prelude["&&"](_ps.Network_Inquire.boolLikeInquire({}))(_1.values[0])((_1.values[2]).values[2]));
                        };
                    };
                };
            };
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
            throw "Failed pattern match";
        };
        var associate = function (_1) {
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
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());