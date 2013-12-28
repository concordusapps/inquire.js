'use strict'

{con, id} = require \../utils.js

/* m a -> (a -> m b) -> m b */
module.exports.chain = (m, f) ->
  m.chain f

/* m a -> m b -> m b */
module.exports.next = (m, n) ->
  m `chain` con n

  /* (a -> m b) -> m a -> m b */
module.exports.revchain = (f, m) ->
  m `chain` f

/* (a -> m b) -> (b -> m c) -> a -> m c */
module.exports.left-kleisli = (f, g, a) ->
  (f a) `chain` g

/* (b -> m c) -> (a -> m b) -> a -> m c */
module.exports.right-kleisli = (g, f, a) ->
  left-kleisli f, g, a

/* m (m a) -> m a */
module.exports.join = (mm) ->
  mm `chain` id
