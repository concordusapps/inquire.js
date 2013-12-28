'use strict'

### TODO: All of these `of-obj` calls need to be `of` calls

I = require \../lib/inquire.js
{equivalent} = require \../lib/utils.js

{choice, data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
o = it

# Some helper functions.
id = -> it
id-inq = -> I.of-obj {it}
wrap = -> "(#it)"
negate = -> "!(#it)"

Func = choice (-> id), (-> wrap), (-> negate)

describe \fantasy ->
  describe \Semigroup ->
    describe 'concat should be a magma operation' ->
      describe 'given two semigroups' ->
        o 'it should return another semigroup' (forAll(d.Str, d.Str, d.Str, d.Str)
          .satisfy (ak, av, bk, bv) ->
            a = I.eq ak, av
            b = I.eq bk, bv
            a instanceof I@@ and b instanceof I@@ and a ++ b instanceof I@@
          .asTest!)
        o 'it should still generate a string' (forAll(d.Str, d.Str, d.Str, d.Str)
          .satisfy (ak, av, bk, bv) ->
            a = I.eq ak, av
            b = I.eq bk, bv
            typeof! (a ++ b).to-string! is \String
          .asTest!)
    describe 'concat should be associative' ->
      o 'it should hold for the definition of associativity' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I.eq ak, av
          b = I.eq bk, bv
          c = I.eq ck, cv
          ((a ++ b) ++ c) `equivalent` (a ++ (b ++ c))
        .asTest!)
      o 'it should hold for some more complicated structure' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I.eq ak, av
          b = I.eq bk, bv
          c = I.eq ck, cv
          (((a ++ b) ++ b) ++ c) `equivalent` (a ++ (b ++ (b ++ c)))
        .asTest!)
      o 'it should hold for some random structure' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I.eq ak, av
          b = I.eq bk, bv
          c = I.eq ck, cv
          abcabc = a ++ (b ++ (c ++ (a ++ (b ++ c))))
          a_b_cab_c = (a ++ (b ++ ((c ++ (a ++ b))))) ++ c
          abcabc `equivalent` a_b_cab_c
        .asTest!)

  describe \Monoid ->
    describe \empty ->
      o 'it should still generate a string' ->
        if typeof! I.of-obj {false} .empty!to-string! isnt \String then ...
      describe 'should be the identity' ->
        o 'it should hold for left identity' (forAll(d.Str, d.Str)
          .satisfy (key, val) ->
            a = I.eq key, val
            (a.empty! ++ a) `equivalent` a
          .asTest!)
        o 'it should hold for right identity' (forAll(d.Str, d.Str)
          .satisfy (key, val) ->
            a = I.eq key, val
            (a ++ a.empty!) `equivalent` a
          .asTest!)

  describe \Functor ->
    describe \map ->
      o 'it should still generate a string' ->
        if typeof! I.eq \key, \val .map id .to-string! isnt \String then ...
      describe 'should unwrap the inquire apply the function to it, and rewrap it.' ->
        o 'it should hold for identity' (forAll(d.AlphaStr, d.AlphaStr, Func)
          .given (key, val, f) ->
            '' not in [key, val]
          .satisfy (key, val, f) ->
            a = I.eq key, val
            a.map(f) `equivalent` a
          .asTest!)
        o 'it should hold for composition' (forAll(d.AlphaStr, d.AlphaStr, Func, Func)
          .given (key, val, f1, f2) ->
            '' not in [key, val]
          .satisfy (key, val, f1, f2) ->
            a = I.eq key, val
            a.map(f1).map(f2) `equivalent` a.map(f1 . f2)
          .asTest!)

  describe \Applicative ->
    describe \ap ->
      o 'it should still be an inquire' ->
        unless (I.of-obj {id} .ap I.of-obj {key: \val}) instanceof I@@ then ...
    describe \of ->
      o 'it should return an inquire no matter what is passed in' ->
        unless (I.of-obj {key: \val}) instanceof I@@ then ...
    describe \laws ->
      o 'it should hold for identity' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          v = I.of-obj {key: val}
          I.of-obj {f} .ap(v) `equivalent` v
        .asTest!)
      o 'it should hold for composition' (forAll(d.AlphaStr, d.AlphaStr, Func, Func)
        .given (key, val, f1, f2) ->
          '' not in [key, val]
        .satisfy (key, val, f1, f2) ->
          u = I.of-obj {f1}
          v = I.of-obj {f2}
          w = I.of-obj {key: val}
          I.of-obj {fun: (f) -> (g) -> -> f g it} .ap(u)ap(v)ap(w) `equivalent` u.ap v.ap w
        .asTest!)
      o 'it should hold for homomorphism' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          x = I.of-obj {key: val}
          I.of-obj {f} .ap(I.of-obj {x}) `equivalent` I.of-obj {fun: f x}
        .asTest!)
      o 'it should hold for interchange' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          u = I.of-obj {f}
          y = I.of-obj {key: val}
          u.ap(I.of-obj {y}) `equivalent` I.of-obj {fun: -> it y} .ap u
        .asTest!)

  describe \Chain ->
    describe \chain ->
      o 'it should still generate a string' ->
        if typeof! I.eq \key, \val .chain (id-inq . id) .to-string! isnt \String then ...
      o 'it should return an inquire' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          m = I.eq key, val
          cf = id-inq . f
          m.chain(cf) instanceof I@@
        .asTest!)
    describe 'given two functions f and g' ->
      o 'it should hold for associativity' (forAll(d.AlphaStr, d.AlphaStr, Func, Func)
        .given (key, val, f1, f2) ->
          '' not in [key, val]
        .satisfy (key, val, f1, f2) ->
          m = I.eq key, val
          f = id-inq . f1
          g = id-inq . f2
          m.chain(f).chain(g) `equivalent` m.chain -> f it .chain(g)
        .asTest!)

  describe \Monad ->
    describe \laws ->
      o 'it should hold for left identity' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, func) ->
          '' not in [key, val]
        .satisfy (key, val, func) ->
          a = "#key=#val"
          f = id-inq . func
          I.of-obj {a} .chain(f) `equivalent` f a
        .asTest!)
      o 'it should hold for right identity' (forAll(d.AlphaStr, d.AlphaStr)
        .given (key, val) ->
          '' not in [key, val]
        .satisfy (key, val) ->
          obj = {key: val}
          m = I.of-obj obj
          m.chain(m.of-obj) `equivalent` m
        .asTest!)
