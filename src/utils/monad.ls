'use strict'

{chain, next} = require \./chain.js

/* Evaluate each action from left to right and collect the results. */
/* [m a] -> m [a] */
module.exports.sequence = (ms) ->
  k = (m, n) ->
    m `chain` (x) ->
      n `chain` (xs) ->
        [x] ++ xs
  ms.foldr k, @of []

/* Evaluate each action from left to right and ignore the results. */
/* [m a] -> m () */
module.exports.sequence_ = (ms) ->
  k = (m, n) -> m `next` n
  ms.foldr k, @of null

/* (a -> m b) -> [a] -> m [b] */
module.exports.map-m = (f, as) ->
  sequence as.map f

/* (a -> m b) -> [a] -> m () */
module.exports.map-m_ = (f, as) ->
  sequence_ as.map f

/* [a] -> (a -> m b) -> m [b] */
module.exports.for-m = (as, f) ->
  map-m f, as

/* [a] -> (a -> m b) -> m () */
module.exports.for-m_ = (as, f) ->
  map-m_ f, as

/* Bool -> m () -> m () */
module.exports.when = (b, m) ->
  if b then m else m.of null

/* Bool -> m () -> m () */
module.exports.unless = (b, m) ->
  if b then m.of null else m

/* (a -> b) -> m a -> m b */
module.exports.lift-m1 = (f, m) ->
  m `chain` (a) ->
    m.of f a

/* (a -> b -> c) -> m a -> m b -> m c */
module.exports.lift-m2 = (f, m, n) ->
  m `chain` (a) ->
    n `chain` (b) ->
      m.of f a, b

/* (a -> b -> c -> d) -> m a -> m b -> m c -> m d */
module.exports.lift-m3 = (f, m, n, o) ->
  m `chain` (a) ->
    n `chain` (b) ->
      o `chain` (c) ->
        m.of f a, b, c
