(function (_ps) {
    "use strict";
    _ps.Prelude = (function (module) {
        function show(dict) {
            return dict.show;
        };
        module.show = show;
        function $less$dollar$greater(dict) {
            return dict.$less$dollar$greater;
        };
        module["<$>"] = $less$dollar$greater;
        function $plus$plus(s1) {  return function(s2) {    return s1 + s2;  };};
        module["++"] = $plus$plus;
        return module;
    })(_ps.Prelude || {});
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
        var or = function (_1) {
            return function (_2) {
                return Group(_1)(IOr)(_2);
                throw "Failed pattern match";
            };
        };
        module.or = or;
        var and = function (_1) {
            return function (_2) {
                return Group(_1)(IAnd)(_2);
                throw "Failed pattern match";
            };
        };
        module.and = and;
        var __Prelude_Show_Inquire_Rel_show = function (_1) {
            if (_1.ctor === "Inquire.IEQ") {
                return "=";
            };
            if (_1.ctor === "Inquire.INE") {
                return "!=";
            };
            if (_1.ctor === "Inquire.IGT") {
                return ">";
            };
            if (_1.ctor === "Inquire.IGE") {
                return ">=";
            };
            if (_1.ctor === "Inquire.ILT") {
                return "<";
            };
            if (_1.ctor === "Inquire.ILE") {
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
        var __Prelude_Show_Inquire_Inquire_show = function (__dict_Show_19) {
            return function (__dict_Show_20) {
                return function (_1) {
                    if (_1.ctor === "Inquire.EmptyAnd") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.EmptyOr") {
                        return "";
                    };
                    if (_1.ctor === "Inquire.Pred") {
                        return _ps.Prelude.show(__dict_Show_19)(_1.values[0]) + _ps.Prelude.show(__Prelude_Show_Inquire_Rel({}))(_1.values[1]) + _ps.Prelude.show(__dict_Show_20)(_1.values[2]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        module.__Prelude_Show_Inquire_Inquire_show = __Prelude_Show_Inquire_Inquire_show;
        var __Prelude_Show_Inquire_Inquire = function (_1) {
            return function (_2) {
                return {
                    show: __Prelude_Show_Inquire_Inquire_show(_1)(_2)
                };
            };
        };
        module.__Prelude_Show_Inquire_Inquire = __Prelude_Show_Inquire_Inquire;
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
        var __Monoid_Monoid_Inquire_Inquire_mempty = EmptyAnd;
        module.__Monoid_Monoid_Inquire_Inquire_mempty = __Monoid_Monoid_Inquire_Inquire_mempty;
        var __Monoid_Monoid_Inquire_Inquire_$less$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Inquire.EmptyAnd") {
                    if (_2.ctor === "Inquire.EmptyAnd") {
                        return EmptyAnd;
                    };
                };
                throw "Failed pattern match";
            };
        };
        module.__Monoid_Monoid_Inquire_Inquire_$less$greater = __Monoid_Monoid_Inquire_Inquire_$less$greater;
        var __Monoid_Monoid_Inquire_Inquire = function (_1) {
            if (typeof _1 !== "object") {
                throw "object expected";
            };
            return {
                mempty: __Monoid_Monoid_Inquire_Inquire_mempty, 
                $less$greater: __Monoid_Monoid_Inquire_Inquire_$less$greater
            };
        };
        module.__Monoid_Monoid_Inquire_Inquire = __Monoid_Monoid_Inquire_Inquire;
        return module;
    })(_ps.Inquire || {});
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.wut = window.wut || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());