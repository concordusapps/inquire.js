'use strict'

# (a -> b) -> f a -> f b
module.exports.lift-a1 = (f, u) ->
  u.map (a) -> f a

# (a -> b -> c) -> f a -> f b -> f c
module.exports.lift-a2 = (f, u, v) ->
  u.map (a) -> (b) -> f a, b
  .ap v

# (a -> b -> c -> d) -> f a -> f b -> f c -> f d
module.exports.lift-a3 = (f, u, v, w) ->
  u.map (a) -> (b) -> (c) -> f a, b, c
  .ap v
  .ap w
