'use strict'

I = require \../lib/inquire.js

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

module.exports = {equivalent, normalize}
