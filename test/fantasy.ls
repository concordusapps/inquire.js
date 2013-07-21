I = require \../src/inquire.ls

{assert} = require \chai
{data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
test = it

# Test two inquire's for equivalent values.
equivalent = (first, second) ->
  # Two inquire's are equivalent if they return the same resource
  # from the server.
  # We don't want to set up a server,
  # so we just normalize the structure of the inquires,
  # and compare them that way.
  obj = JSON.stringify(normalize first) is JSON.stringify(normalize second)
  str = "#{normalize first}" is "#{normalize second}"
  obj or str

# Restructure our inquiries to be in a normal form.
# WARNING, this deals with the implementation,
# probably not the best place for this function.
normalize = ->
  # We got an actual inquire.
  if it instanceof I
    # Clone the old one, normalize it, unwrap it, then return it.
    I!._unwrap normalize {} <<< it.inquiry
  # We should be normalizing things here.
  else if it.bool is \concat and it.left.bool is \concat
    # Make the structure be akin to (((a*b)*c)*...)
    new-i =
      arity: \2
      bool: \concat
      left: it.left.left
      right:
        arity: \2
        bool: \concat
        left: it.left.right
        right: it.right
    # Normalize both sides of what we just made.
    new-i.left = normalize new-i.left
    new-i.right = normalize new-i.right
    # Normalize what we just made.
    normalize new-i
  else if it.arity is \2 and it.left.bool is \empty
    it.right
  else if it.arity is \2 and it.right.bool is \empty
    it.left
  # We don't need to do anything with this part.
  else
    it

describe \fantasy-claire ->
  describe \Semigroup ->
    describe 'concat should be a magma operation' ->
      describe 'given two semigroups' ->
        test 'it should return another semigroup' ->
          forAll(d.Str, d.Str, d.Str, d.Str)
          .satisfy (ak, av, bk, bv) ->
            a = I ak, av
            b = I bk, bv
            a instanceof I and b instanceof I and a.concat(b) instanceof I
          .asTest({+verbose, times: 1000})!

describe \fantasy ->
  a = I \keyA, \valA
  b = I \keyB, \valB
  c = I \keyC, \valC
  d = I \keyD, \valD
  e = I \keyE, \valE
  f = I \keyF, \valF
  describe \Semigroup ->
    describe 'concat should be a magma operation' ->
      describe 'given two semigroups' ->
        test 'it should return another semigroup' ->
          assert.instanceOf a, I
          assert.instanceOf b, I
          assert.instanceOf a.concat(b), I
    describe 'concat should be associative' ->
      test 'it should hold for the definition of associativity' ->
        assert.isTrue a.concat(b).concat(c) `equivalent` a.concat(b.concat(c))
      test 'it should hold for some more complicated structure' ->
        abbc = a.concat(b).concat(b).concat(c)
        a_b_b_c = a.concat(b.concat(b.concat(c)))
        assert.isTrue abbc `equivalent` a_b_b_c
      test 'it should hold for some random structure' ->
        abcdef = a.concat(b.concat(c.concat(d.concat(e.concat(f)))))
        a_b_cde_f = a.concat(b.concat((c.concat(d.concat(e))))).concat(f)
        assert.isTrue abcdef `equivalent` a_b_cde_f

  describe \Monoid ->
    describe 'empty should be the identity' ->
      test 'it should hold for left identity' ->
        assert.isTrue a.empty().concat(a) `equivalent` a
      test 'it should hold for right identity' ->
        assert.isTrue a.concat(a.empty()) `equivalent` a

  describe \Functor ->
    id = -> it
    wrap = -> "(#it)"
    negate = -> "!(#it)"
    describe 'map should unwrap the inquire apply the function to it, and rewrap it.' ->
      test 'it should hold for identity' ->
        assert.isTrue a.map(id) `equivalent` a
      test 'it should hold for composition' ->
        assert.isTrue a.map(wrap).map(negate) `equivalent` a.map(-> wrap negate it)
