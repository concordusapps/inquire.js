I = require \../src/inquire.ls

{data: d, forAll} =  require \claire
# Livescript uses it for stuff, so save the mocha version outside any functions.
o = it

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
    describe 'empty should be the identity' ->
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
    id = -> it
    wrap = -> "(#it)"
    negate = -> "!(#it)"
    describe 'map should unwrap the inquire apply the function to it, and rewrap it.' ->
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
          a.map(wrap).map(negate) `equivalent` a.map(-> wrap negate it)
        .asTest!)
