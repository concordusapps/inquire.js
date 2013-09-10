I = require \../lib/inquire.js
{equivalent, normalize} = require \../lib/utils.js

{choice, data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
o = it

# Some helper functions.
id = -> it
wrap = -> "(#it)"
negate = -> "!(#it)"

Func = choice (-> id), (-> wrap), (-> negate)

describe \fantasy ->
  describe \Semigroup ->
    describe 'concat should be a magma operation' ->
      describe 'given two semigroups' ->
        o 'it should return another semigroup' (forAll(d.Str, d.Str, d.Str, d.Str)
          .satisfy (ak, av, bk, bv) ->
            a = I ak, av
            b = I bk, bv
            a instanceof I and b instanceof I and a ++ b instanceof I
          .asTest!)
        o 'it should still generate a string' (forAll(d.Str, d.Str, d.Str, d.Str)
          .satisfy (ak, av, bk, bv) ->
            a = I ak, av
            b = I bk, bv
            typeof! (a ++ b).generate! is \String
          .asTest!)
    describe 'concat should be associative' ->
      o 'it should hold for the definition of associativity' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I ak, av
          b = I bk, bv
          c = I ck, cv
          ((a ++ b) ++ c) `equivalent` (a ++ (b ++ c))
        .asTest!)
      o 'it should hold for some more complicated structure' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I ak, av
          b = I bk, bv
          c = I ck, cv
          (((a ++ b) ++ b) ++ c) `equivalent` (a ++ (b ++ (b ++ c)))
        .asTest!)
      o 'it should hold for some random structure' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I ak, av
          b = I bk, bv
          c = I ck, cv
          abcabc = a ++ (b ++ (c ++ (a ++ (b ++ c))))
          a_b_cab_c = (a ++ (b ++ ((c ++ (a ++ b))))) ++ c
          abcabc `equivalent` a_b_cab_c
        .asTest!)

  describe \Monoid ->
    describe \empty ->
      o 'it should still generate a string' ->
        if typeof! I!empty!generate! isnt \String then ...
      describe 'should be the identity' ->
        o 'it should hold for left identity' (forAll(d.Str, d.Str)
          .satisfy (key, val) ->
            a = I key, val
            a.empty().concat(a) `equivalent` a
          .asTest!)
        o 'it should hold for right identity' (forAll(d.Str, d.Str)
          .satisfy (key, val) ->
            a = I key, val
            a.concat(a.empty()) `equivalent` a
          .asTest!)

  describe \Functor ->
    describe \map ->
      o 'it should still generate a string' ->
        if typeof! I \key, \val .map id .generate! isnt \String then ...
      describe 'should unwrap the inquire apply the function to it, and rewrap it.' ->
        o 'it should hold for identity' (forAll(d.AlphaStr, d.AlphaStr, Func)
          .given (key, val, f) ->
            '' not in [key, val]
          .satisfy (key, val, f) ->
            a = I key, val
            a.map(f) `equivalent` a
          .asTest!)
        o 'it should hold for composition' (forAll(d.AlphaStr, d.AlphaStr, Func, Func)
          .given (key, val, f1, f2) ->
            '' not in [key, val]
          .satisfy (key, val, f1, f2) ->
            a = I key, val
            a.map(f1).map(f2) `equivalent` a.map(f1 . f2)
          .asTest!)

  describe \Applicative ->
    describe \ap ->
      o 'it should still be an inquire' ->
        unless (I id .ap I!of {key: \val}) instanceof I then ...
    describe \of ->
      o 'it should return an inquire no matter what is passed in' ->
        unless (I!of {key: \val}) instanceof I then ...
    describe \laws ->
      o 'it should hold for identity' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          v = I {key: val}
          I!of(f).ap(v) `equivalent` v
        .asTest!)
      o 'it should hold for composition' (forAll(d.AlphaStr, d.AlphaStr, Func, Func)
        .given (key, val, f1, f2) ->
          '' not in [key, val]
        .satisfy (key, val, f1, f2) ->
          u = I f1
          v = I f2
          w = I {key: val}
          I!of((f) -> (g) -> -> f g it)ap(u)ap(v)ap(w) `equivalent` u.ap v.ap w
        .asTest!)
      o 'it should hold for homomorphism' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          x = I {key: val}
          I!of(f)ap(I!of(x)) `equivalent` I!of f x
        .asTest!)
      o 'it should hold for interchange' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          u = I f
          y = I {key: val}
          u.ap(I!of(y)) `equivalent` I!of (-> it y) .ap u
        .asTest!)

  describe \Chain ->
    describe \chain ->
      o 'it should still generate a string' ->
        if typeof! I \key, \val .chain (I . id) .generate! isnt \String then ...
      o 'it should return an inquire' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, f) ->
          '' not in [key, val]
        .satisfy (key, val, f) ->
          m = I key, val
          cf = I . f
          m.chain(cf) instanceof I
        .asTest!)
    describe 'given two functions f and g' ->
      o 'it should hold for associativity' (forAll(d.AlphaStr, d.AlphaStr, Func, Func)
        .given (key, val, f1, f2) ->
          '' not in [key, val]
        .satisfy (key, val, f1, f2) ->
          m = I key, val
          f = I . f1
          g = I . f2
          m.chain(f).chain(g) `equivalent` m.chain -> f it .chain(g)
        .asTest!)

  describe \Monad ->
    describe \laws ->
      o 'it should hold for left identity' (forAll(d.AlphaStr, d.AlphaStr, Func)
        .given (key, val, func) ->
          '' not in [key, val]
        .satisfy (key, val, func) ->
          a = "#key=#val"
          f = I . func
          I!of(a).chain(f) `equivalent` f a
        .asTest!)
      o 'it should hold for right identity' (forAll(d.AlphaStr, d.AlphaStr)
        .given (key, val) ->
          '' not in [key, val]
        .satisfy (key, val) ->
          m = I {key: val}
          m.chain(m.of) `equivalent` m
        .asTest!)
