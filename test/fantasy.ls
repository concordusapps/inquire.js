I = require \../src/inquire.ls

{assert} = require \chai
# Livescript uses it for stuff, so save the mocha version outside any functions.
test = it

# Test two inquire's for equivalent values.
equivalent = (first, second) ->
  # Two inquire's are equivalent if they return the same resource
  # from the server.
  # We don't want to set up a server,
  # so we just normalize the structure of the inquires,
  # and compare them that way.
  normalize first .toString! is normalize second .toString!

# Restructure our inquiries to be in a normal form.
# WARNING, this deals with the implementation,
# probably not the best place for this function.
normalize = ->
  # We got an actual inquire.
  if it instanceof I
    # Create a new one, clone the old one, and normalize it, then return it.
    new-i = I!
    new-i.inquiry = normalize {} <<< it.inquiry
    new-i
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
    new-i.left = normalize new-i.left
    new-i.right = normalize new-i.right
    new-i
  # We don't need to do anything with this part.
  else
    it

describe \fantasy ->
  describe \Semigroup ->
    test 'concat should be associative' ->
      a = I \keyA, \valA
      b = I \keyB, \valB
      c = I \keyC, \valC
      assert.isTrue a.concat(b).concat(c) `equivalent` a.concat(b.concat(c))
