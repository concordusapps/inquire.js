'use strict'

{con, id} = require \../utils.js

/* Functor */

/* (a -> b) -> f a -> f b */
module.exports.map = (t, f) ->
  f.map t

/* a -> f b -> f a */
module.exports.supplant = (a, f) ->
  f.map (con a)

/* Bifunctor */

/* (a -> b) -> f a c -> f b c */
module.exports.map-first = (t, f) ->
  f.bimap t, id

/* (a -> b) -> f c a -> f c b */
module.exports.map-second = (t, f) ->
  f.bimap id, t

/* (a -> b) -> (c -> d) -> f a c -> f b d */
module.exports.bimap = (t, u, f) ->
  f.bimap t, u
