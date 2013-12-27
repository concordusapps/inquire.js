'use strict'

{id} = require \../utils.js

/* Traversable */

/* Applicative f => t a -> (a -> f b) -> f (t b) */
module.exports.for = (t, f) ->
  traverse f, t

/* Applicative f => t (f a) -> f (t a) */
module.exports.sequence-a = (t) ->
  t.traverse id

/* Applicative f => (a -> f b) -> t a -> f (t b) */
module.exports.traverse = (f, t) ->
  t.traverse f

/* BItraversable */

/* Applicative f => t a b -> (a -> f c) -> (b -> f d) -> f (t c d) */
module.exports.bifor = (t, f, g) ->
  bitraverse f, g, t

/* Applicative f => t (f a) (f b) -> f (t a b) */
module.exports.bisequence-a = (t) ->
  t.bitraverse id, id

/* Applicative f => (a -> f c) -> (b -> f d) -> t a b -> f (t c d) */
module.exports.bitraverse = (f, g, t) ->
  t.bitraverse f, g
