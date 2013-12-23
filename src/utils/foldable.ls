'use strict'

/* Foldable */

/* (b -> Bool) -> f a b -> Bool */
module.exports.any = (f, t) -->
  t.foldr f, false

/* Bifoldable */

/* (a -> Bool) -> (b -> Bool) -> f a b -> Bool */
module.exports.biany = (f, g, t) -->
  t.bifoldr ((a, c) -> c or f a), ((b, c) -> c or g b), false
