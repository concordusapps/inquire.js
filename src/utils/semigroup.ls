'use strict'

/* a -> a -> a */
module.exports.concat = (a, b) ->
  a ++ b

/* Nat -> a -> a */
module.exports.times1p = (n, a) ->
  if n < 1 then a else a ++ ((n - 1) `times1p` a)
