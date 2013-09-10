I = require \../lib/inquire.js
{equivalent, normalize} = require \../lib/utils.js

{data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
o = it

# Some helper functions.
id = -> it
wrap = -> "(#it)"
negate = -> "!(#it)"

describe \fantasy ->
  describe \Semigroup ->
    describe 'concat should be a magma operation' ->
      describe 'given two semigroups' ->
        o 'it should return another semigroup' (forAll(d.Str, d.Str, d.Str, d.Str)
          .satisfy (ak, av, bk, bv) ->
            a = I ak, av
            b = I bk, bv
            a instanceof I and b instanceof I and a.concat(b) instanceof I
          .asTest!)
        o 'it should still generate a string' (forAll(d.Str, d.Str, d.Str, d.Str)
          .satisfy (ak, av, bk, bv) ->
            a = I ak, av
            b = I bk, bv
            typeof! a.concat(b).generate! is \String
          .asTest!)
    describe 'concat should be associative' ->
      o 'it should hold for the definition of associativity' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I ak, av
          b = I bk, bv
          c = I ck, cv
          a.concat(b).concat(c) `equivalent` a.concat(b.concat(c))
        .asTest!)
      o 'it should hold for some more complicated structure' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I ak, av
          b = I bk, bv
          c = I ck, cv
          abbc = a.concat(b).concat(b).concat(c)
          a_b_b_c = a.concat(b.concat(b.concat(c)))
          abbc `equivalent` a_b_b_c
        .asTest!)
      o 'it should hold for some random structure' (forAll(d.Str, d.Str, d.Str, d.Str, d.Str, d.Str)
        .satisfy (ak, av, bk, bv, ck, cv) ->
          a = I ak, av
          b = I bk, bv
          c = I ck, cv
          abcabc = a.concat(b.concat(c.concat(a.concat(b.concat(c)))))
          a_b_cab_c = a.concat(b.concat((c.concat(a.concat(b))))).concat(c)
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
        o 'it should hold for identity' (forAll(d.AlphaStr, d.AlphaStr)
          .given (key, val) ->
            '' not in [key, val]
          .satisfy (key, val) ->
            a = I key, val
            a.map(id) `equivalent` a
          .asTest!)
        o 'it should hold for composition' (forAll(d.AlphaStr, d.AlphaStr)
          .given (key, val) ->
            '' not in [key, val]
          .satisfy (key, val) ->
            a = I key, val
            a.map(wrap).map(negate) `equivalent` a.map(wrap . negate)
          .asTest!)

  describe \Applicative ->
    describe \ap ->
      o 'it should still be an inquire' ->
        unless (I id .ap I!of {key: \val}) instanceof I then ...
    describe \of ->
      o 'it should return an inquire no matter what is passed in' ->
        unless (I!of {key: \val}) instanceof I then ...
    describe \laws ->
      o 'it should hold for identity' ->
        (I!of id .ap I {key: \val}) `equivalent` {key: \val}
      o 'it should hold for composition' ->
        u = I id
        v = I wrap
        w = I {key: \val}
        (I!of((f) -> (g) -> (x) -> f g x)ap u .ap v .ap w) `equivalent` u.ap v.ap w
      o 'it should hold for homomorphism' ->
        (I!of id .ap I!of {key: \val}) `equivalent` I!of id {key: \val}
      o 'it should hold for interchange' ->
        u = I id
        y = {key: \val}
        (u.ap I!of y) `equivalent` I!of (-> it y) .ap u

  describe \Chain ->
    chain-id = (I . id)
    chain-wrap = (I . wrap)
    chain-negate = (I . negate)
    describe \chain ->
      o 'it should still generate a string' ->
        if typeof! I \key, \val .chain chain-id .generate! isnt \String then ...
      o 'it should return an inquire' (forAll(d.AlphaStr, d.AlphaStr)
        .given (key, val) ->
          '' not in [key, val]
        .satisfy (key, val) ->
          m = I key, val
          m.chain(chain-id) instanceof I
        .asTest!)
    describe 'given two functions f and g' ->
      o 'it should hold for associativity' (forAll(d.AlphaStr, d.AlphaStr)
        .given (key, val) ->
          '' not in [key, val]
        .satisfy (key, val) ->
          m = I key, val
          m.chain(chain-wrap).chain(chain-negate) `equivalent` m.chain(-> chain-wrap(it).chain(chain-negate))
        .asTest!)

  describe \Monad ->
    describe \laws ->
      o 'it should hold for left identity' ->
        a = {key: \val}
        f = id
        (I!of a .chain f) `equivalent` f a
      o 'it should hold for right identity' ->
        (I!chain I!of) `equivalent` I!
      o 'it should hold for associativity' ->
        f = -> I it
        g = -> I "(#it)"
        (I!chain f .chain g) `equivalent` I!chain -> f it .chain g
