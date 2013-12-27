'use strict'

{con} = require \../utils.js

/* m a -> (a -> m b) -> m b */
module.exports.chain: (m, f) ->
  m.chain f

/* m a -> m b -> m b */
module.exports.then: (m, n) ->
  m.chain con n

/* Evaluate each action from left to right and collect the results. */
/* [m a] -> m [a] */
module.exports.sequence: (ms) ->
  k = (m, n) ->
    m `chain` (x) ->
      n `chain` (xs) ->
        [x] ++ xs
  ms.foldr k, @of []

/* Evaluate each action from left to right and ignore the results. */
/* [m a] -> m () */
module.exports.sequence_: (ms) ->
  k = (m, n) -> m.then n
  ms.foldr k, @of null

/* (a -> m b) -> [a] -> m [b] */
module.exports.map-m: (f, as) ->
  sequence as.map f

/* (a -> m b) -> [a] -> m () */
module.exports.map-m_: (f, as) ->
  sequence_ as.map f

/* [a] -> (a -> m b) -> m [b] */
module.exports.for-m: (as, f) ->
  map-m f, as

/* [a] -> (a -> m b) -> m () */
module.exports.for-m_: (as, f) ->
  map-m_ f, as

/* (a -> m b) -> m a -> m b */
module.exports.revchain: (f, m) ->
  chain m, f

/* (a -> m b) -> (b -> m c) -> a -> m c */
module.exports.left-kleisli: (f, g, a) ->
  f a .chain (b) -> g b

/* (b -> m c) -> (a -> m b) -> a -> m c */
module.exports.right-kleisli: (g, f, a) ->
  left-kleisli f, g, a

/* (a -> b) -> m a -> m b */
module.exports.lift-m1: (f, m) ->
  m `chain` (a) -> m.of f a

/* (a -> b -> c) -> m a -> m b -> m c */
module.exports.lift-m2: (f, m, n) ->
  m `chain` (a) ->
    n `chain` (b) ->
      m.of f a, b

/* (a -> b -> c -> d) -> m a -> m b -> m c -> m d */
module.exports.lift-m3: (f, m, n, o) ->
  m `chain` (a) ->
    n `chain` (b) ->
      o `chain` (c) ->
        m.of f a, b, c
