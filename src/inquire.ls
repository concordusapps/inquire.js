'use strict'

/*

  So it turns out that Inquires are 2 parameter things.
  The Key and the value are important for many things.

  TODO: This should probably be a zipper.

*/

id = -> it

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

  /*
    Extra algebra stuff.
  */
  # TODO: Need the rest of {Bi-}foldable.
  foldr: (f, z) -> @bifoldr ((_, c) -> c), f, z
  biof: (k, v) -> new Pred new Eq, k, v

  biap-atom: -> it

module.exports.Atom = class Atom extends Inquire

  to-string: -> ''

  bimap: (f, g) -> this

  bifoldr: (f, g, z) -> z

  biap: (i) -> i.biap-atom this

  biap-pred: (_, _) -> this

  biap-group: (_, _) -> this

  biap-wrap: (_) -> this

module.exports.Pred = class Pred extends Inquire

  to-string: -> "#{@key}#{@op}#{@val}"

  bimap: (f, g) -> new Pred @op, (f @key), g @val

  bifoldr: (f, g, z) -> f @key, g @val, z

  biap: (i) -> i.biap-pred @key, @val

  biap-pred: (f, g) -> new Pred @op, (f @key), g @val

  biap-group: (f, g) -> new Group @op, (f.biap this), g.biap this

module.exports.Group = class Group extends Inquire

  to-string: -> "(#{@key})#{@op}(#{@val})"

  bimap: (f, g) -> new Group @op, (@key.bimap f, g), @val.bimap f, g

  bifoldr: (f, g, z) -> @key.bifoldr f, g, @val.bifoldr f, g, z

  biap: (i) -> i.biap-group @key, @val

  biap-pred: (f, g) -> new Group @op, (@key.biap f, g), @val.biap f, g

  biap-group: (f, g) -> new Group @op, (f.biap this), g.biap this

module.exports.Wrap = class Wrap extends Inquire

  to-string: -> "#{@op}(#{@key})"

  bimap: (f, g) -> new Wrap @op, @key.bimap f, g

  bifoldr: (f, g, z) -> @key.bifoldr f, g, z

  biap: (i) -> i.biap-wrap @key

  biap-pred: (f, g) -> new Wrap @op, @key.biap f, g

  biap-group: (f, g) -> new Group @op, (f.biap this), g.biap this

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

# (a -> Bool) -> (b -> Bool) -> Inquire a b -> Bool
module.exports.biany = (f, g, inq) ->
  inq.bifoldr ((a, c) -> c or f a), ((b, c) -> c or g b), false

# (b -> Bool) -> Inquire a b -> Bool
module.exports.any = (f, inq) ->
  inq.bifoldr ((_, c) -> c), f, inq
