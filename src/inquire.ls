'use strict'

/*

  So it turns out that Inquires are 2 parameter things.
  The Key and the value are important for many things.

  TODO: This should probably be a zipper.

*/

# Some array polyfills.
if (!Array.of)
  Array.prototype.of = ->
    Array.prototype.slice.call arguments

if (!Array.ap)
  flatten = -> it.reduce (++)
  Array.prototype.ap = (a2) ->
    flatten @map (f) ->
      a2.map (a) -> f a

class Inquire

  (@op, @key, @val) ~>

  and: (i) -> new Group new And, this, i
  or:  (i) -> new Group new Or,  this, i
  not:     -> new Wrap  new Not, this

  /*
    Fantasy land stuff.
  */
  concat: @and
  empty: -> new Atom
  map: -> @bimap id, it
  # TODO: This needs to be some default value.
  of: -> @biof '*', it
  ap: @biap

  /*
    Extra algebra stuff.
  */
  # TODO: Need the rest of {Bi-}foldable.
  foldr: (f, z) -> @bifoldr ((_, c) -> c), f, z
  biof: (k, v) -> new Pred new Eq, k, v

module.exports.Atom = class Atom extends Inquire

  to-string: -> ''

  bimap: (f, g) -> this

  bifoldr: (f, g, z) -> z

  biap:      (i) -> this
  biap-pred: (i) -> this

  /*
    We don't have any type information,
    so we pray that whatever these functions are,
    they return something for an Atom.

    Then we call the `of` method on whatever was returned,
    this injects our Atom into their context.
  */
  bitraverse: (f, g) ->
    g-val = g this
    if g-val.of or g-val.@@.of then that this else ...

module.exports.Pred = class Pred extends Inquire

  to-string: -> "#{@key}#{@op}#{@val}"

  /* Predicates have to shove an identity through the first func for biap. */
  ap: (i) -> (new Pred @op, id, @val).biap i

  bimap: (f, g) -> new Pred @op, (f @key), g @val

  bifoldr: (f, g, z) -> f @key, g @val, z

  /* We can use double dispatch to avoid worrying about what we're ap-ing to. */
  biap:      (i) -> i.biap-pred this
  biap-pred: (i) -> new Pred @op, (i.key @key), i.val @val

  bitraverse: (f, g) ->
    f-key = f @key
    g-val = g @val
    /*
      We need the context of the applicative we're traversing.
      Assume g-val because we might be doing a `traverse`.
    */
    if g-val.of or g-val.@@.of or g-val::of
      lift-a3 ((op, key, val) ->
        new Pred op, key, val), (that @op), f-key, g-val
    else ...

module.exports.Group = class Group extends Inquire

  to-string: -> "(#{@key})#{@op}(#{@val})"

  bimap: (f, g) -> new Group @op, (@key.bimap f, g), @val.bimap f, g

  bifoldr: (f, g, z) -> @key.bifoldr f, g, @val.bifoldr f, g, z

  biap:      (i) -> new Group @op, (@key.biap i), @val.biap i
  biap-pred: (i) -> new Group @op, (i.biap @key), i.biap @val

  bitraverse: (f, g) ->
    f-key = @key.bitraverse f, g
    g-val = @val.bitraverse f, g
    /*
      We need the context of the applicative we're traversing.
      Assume g-val because we might be doing a `traverse`.
    */
    if g-val.of or g-val.@@.of or g-val::of
      lift-a3 ((op, key, val) ->
        new Group op, key, val), (that @op), f-key, g-val
    else ...

module.exports.Wrap = class Wrap extends Inquire

  to-string: -> "#{@op}(#{@key})"

  bimap: (f, g) -> new Wrap @op, @key.bimap f, g

  bifoldr: (f, g, z) -> @key.bifoldr f, g, z

  biap:      (i) -> new Wrap @op, @key.biap i
  biap-pred: (i) -> new Wrap @op, i.biap @key

  bitraverse: (f, g) ->
    f-key = @key.bitraverse f, g
    /* We need the context of the applicative we're traversing. */
    if f-key.of or f-key.@@.of
      lift-a2 ((op, key) -> new Wrap op, key), (that @op), f-key
    else ...

class Relation

class GroupBool

class WrapBool

module.exports.Eq = class Eq extends Relation

  to-string: -> '='

module.exports.Ne = class Ne extends Relation

  to-string: -> '!='

module.exports.Gt = class Gt extends Relation

  to-string: -> '>'

module.exports.Ge = class Ge extends Relation

  to-string: -> '>='

module.exports.Lt = class Lt extends Relation

  to-string: -> '<'

module.exports.Le = class Le extends Relation

  to-string: -> '<='

module.exports.And = class And extends GroupBool

  to-string: -> '&'

module.exports.Or = class Or extends GroupBool

  to-string: -> ';'

module.exports.NoBool = class NoBool extends WrapBool

  to-string: -> ''

module.exports.Not = class Not extends WrapBool

  to-string: -> '!'

# a -> a
id = -> it

# (a -> Bool) -> (b -> Bool) -> Inquire a b -> Bool
module.exports.biany = (f, g, inq) ->
  inq.bifoldr ((a, c) -> c or f a), ((b, c) -> c or g b), false

# (b -> Bool) -> Inquire a b -> Bool
module.exports.any = (f, inq) ->
  inq.bifoldr ((_, c) -> c), f, inq

# (a -> b) -> f a -> f b
module.exports.lift-a1 = lift-a1 = (f, u) ->
  u.map (a) -> f a

# (a -> b -> c) -> f a -> f b -> f c
module.exports.lift-a2 = lift-a2 = (f, u, v) ->
  u.map (a) -> (b) -> f a, b
  .ap v

# (a -> b -> c -> d) -> f a -> f b -> f c -> f d
module.exports.lift-a3 = lift-a3 = (f, u, v, w) ->
  u.map (a) -> (b) -> (c) -> f a, b, c
  .ap v
  .ap w
