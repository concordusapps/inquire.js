'use strict'

/* Applicative */

/* t a -> t (a -> b) -> t b */
module.exports.ap = (u, t) ->
  t.ap u

/* (a -> b) -> t a -> t b */
module.exports.lift-a1 = (t, u) ->
  u.map t

/* (a -> b -> c) -> t a -> t b -> t c */
module.exports.lift-a2 = (t, u, v) ->
  u.map (a) -> (b) -> t a, b
  .ap v

/* (a -> b -> c -> d) -> t a -> t b -> t c -> t d */
module.exports.lift-a3 = (t, u, v, w) ->
  u.map (a) -> (b) -> (c) -> t a, b, c
  .ap v
  .ap w

/* Biapplicative */

/* t a c -> t (a -> b) (c -> d) -> t b d */
module.exports.biap = (u, t) ->
  t.biap u

/* (a -> b) -> (c -> d) -> t a c -> t b d */
module.exports.bilift-a1 = (s, t, u) ->
  u.bimap s, t

/* (a -> b -> c) -> (d -> e -> f) -> t a d -> t b e -> t c f */
module.exports.bilift-a2 = (s, t, u, v) ->
  u.bimap ((a) -> (b) -> s a, b), ((d) -> (e) -> t d, e)
  .biap v

/*
  (a -> b -> c -> d) -> (e -> f -> g -> h) -> t a e -> t b f -> t c g -> t d h
*/
module.exports.bilift-a3 = (s, t, u, v, w) ->
  u.map ((a) -> (b) -> (c) -> s a, b, c), ((e) -> (f) -> (g) -> t e, f, g)
  .biap v
  .biap w
