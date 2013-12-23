'use strict'

# a -> a
module.exports.id = -> it

# a -> b -> a
module.exports.con = (a, b) --> a

# Some array polyfills.
if (!Array.of)
  Array.prototype.of = ->
    Array.prototype.slice.call arguments

if (!Array.ap)
  flatten = -> it.reduce (++)
  Array.prototype.ap = (a2) ->
    flatten @map (f) ->
      a2.map (a) -> f a
