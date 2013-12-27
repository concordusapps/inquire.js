'use strict'

{lift-a2, lift-a3, bilift-a2, bilift-a3} = require \./utils/applicative.js
{id, con, flip-con} = require \./utils.js

/*

  So it turns out that Inquires are 2 parameter things.
  The Key and the value are important for many things.

  TODO: This should probably be a zipper.

*/

class Inquire

  (@op, @key, @val) ~>

  and: (i) -> new Group new And, this, i
  or:  (i) -> new Group new Or,  this, i
  not:     -> new Wrap  new Not, this

  /*
    There are a couple of conventions
      1.  All functions prefixed with `bi` operate on both parts of the inquire.
      2.  Type signatures have implicit first arguments
          which are the object being operated upon.
          E.g.  map :: Inquire a b -> (b -> c) -> Inquire a c
                means that you pass a function `f :: b -> c` to your Inquire
                I = new Pred new Ne, 'cat' 'dog'
                "#{I.map (.toLocaleUpperCase!)}"
                #=> 'cat!=DOG'
      3.  Ambiguous type variables don't actually mean anything.
          You can thank javascript for this.
          We have no way to enforce this easily either.
          E.g.  concat :: Inquire a b -> Inquire a b -> Inquire a b
                But we can concat any thing to an Inquire, unfortunately.
  */
  /*
    Fantasy land stuff.
  */
  /* Conjoin two Inquires together. */
  /* Inquire a b -> Inquire a b -> Inquire a b */
  concat: -> @and it
  /* Create an empty Inquire. */
  /* Inquire a b -> Inquire a b */
  empty: -> new Atom
  /* Apply a function to all the vals in an Inquire. */
  /* Inquire a b -> (b -> c) -> Inquire a c */
  map: -> @bimap id, it
  /* Shove a value into an Inquire. */
  /* Inquire a b -> c -> Inquire a c */
  # TODO: This needs to be some default value.
  of: -> @biof '*', it
  /* Apply a val in an Inquire to a function in an Inquire. */
  /* Inquire a (b -> c) -> Inquire a b -> Inquire a c */
  ap: -> @biap it
  /*
    Chain might not actually be right due to predicates.
    TODO: Prove some laws and do more maths.
  */
  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (b -> Inquire a c) -> Inquire a c*/
  chain: (f) -> @bichain (u, v) -> f v

  /*
    Should be in Fantasy Land
  */
  /* Foldable */
  /* Catamorph all the values into one. */
  /* Inquire a b -> (b -> c -> c) -> c -> c */
  # TODO: Need the rest of {Bi-}foldable.
  foldr: (f, z) -> @bifoldr ((_, c) -> c), f, z

  /* Biapplicative */
  /* Show a key and a value into an Inquire. */
  /* Inquire a b -> c -> d -> Inquire c d */
  biof: (k, v) -> new Pred new Eq, k, v

  /*
    Extra algebra stuff.
  */

  /* Functor */
  /* Map over the keys. */
  /* Inquire a b -> (a -> c) -> Inquire c b */
  map-first: -> @bimap it, id
  /* Map over the vals. */
  /* Inquire a b -> (b -> c) -> Inquire a c */
  map-second: -> @map it
  /* Replace all vals with the passed in value. */
  /* Inquire a b -> c -> Inquire a c */
  supplant: @map . con
  /* Replace all keys and vals with the passed in value. */
  /* Inquire a b -> c -> d -> Inquire c d */
  bisupplant: (u, v) -> @bimap (con u), (con v)

  /* Applicative */
  /* Pure of an object. */
  /* Inquire a b -> {c: d} -> Inquire c d */
  of-obj: (o) ~>
    # This naively assumes objects are only one level deep,
    # constructs a bunch of predicates, and conjoins them all.
    [@biof k, v for k, v of o].reduce-right (acc, x, i, a) -> x.and acc
  /* Sequence actions and drop the second. */
  /* Inquire a b -> Inquire c d -> Inquire a b */
  ap-first: (i) -> lift-a2 con, this, i
  /* Sequence actions and drop the first. */
  /* Inquire a b -> Inquire c d -> Inquire c d */
  ap-second: (i) -> lift-a2 (flip-con), this, i
  /* Sequence actions and drop the second. */
  /* Inquire a b -> Inquire c d -> Inquire a b */
  biap-first: (i) -> bilift-a2 con, con, this, i
  /* Sequence actions and drop the first. */
  /* Inquire a b -> Inquire c d -> Inquire c d */
  biap-second: (i) -> bilift-a2 (flip-con), (flip-con), this, i

  /* Alternative */
  /* For everything except Atom's just use ourself. */
  /* Inquire a b -> Inquire a b -> Inquire a b */
  alt: (i) -> @this

  /* Traversable */
  /* Traverse the keys. */
  /* Applicative f => Inquire a (f b) -> (b -> f c) -> f (Inquire a c) */
  traverse: (f) -> @bitraverse id, f
  /* Turn an Inquire of an applicative into an applicative of Inquire. */
  /* Applicative f => Inquire a (f b) -> f (Inquire a b) */
  sequence-a: -> @traverse id
  /* Turn an Inquire of an applicative into an applicative of Inquire. */
  /* Applicative f => Inquire (f a) (f b) -> f (Inquire a b) */
  bisequence-a: -> @bitraverse id, id

class Atom extends Inquire

  to-string: -> ''

  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  bimap: (f, g) -> thisraverse

  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  bifoldr: (f, g, z) -> z

  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  biap:      (i) -> this
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  biap-pred: (i) -> this

  /* The only alternative to an Atom is to use the other thing. */
  alt: (i) -> i

  /*
    We don't have any type information,
    so we pray that whatever these functions are,
    they return something for an Atom.

    Then we call the `of` method on whatever was returned,
    this injects our Atom into their context.
  */
  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
  bitraverse: (f, g) ->
    g-val = g this
    if g-val.of or g-val.@@.of or g-val::of then that this else ...

  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  bichain: (f) -> this

class Pred extends Inquire

  to-string: -> "#{@key}#{@op}#{@val}"

  /* Predicates have to shove an identity through the first func for biap. */
  ap: (i) -> (new Pred @op, id, @val).biap i

  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  bimap: (f, g) -> new Pred @op, (f @key), g @val

  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  bifoldr: (f, g, z) -> f @key, g @val, z

  /* We can use double dispatch to avoid worrying about what we're ap-ing to. */
  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  biap:      (i) -> i.biap-pred this
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  biap-pred: (i) -> new Pred @op, (i.key @key), i.val @val

  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
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

  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  bichain: (f) -> f @key, @val

class Group extends Inquire

  to-string: -> "(#{@key})#{@op}(#{@val})"

  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  bimap: (f, g) -> new Group @op, (@key.bimap f, g), @val.bimap f, g

  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  bifoldr: (f, g, z) -> @key.bifoldr f, g, @val.bifoldr f, g, z

  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  biap:      (i) -> new Group @op, (@key.biap i), @val.biap i
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  biap-pred: (i) -> new Group @op, (i.biap @key), i.biap @val

  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
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

  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  bichain: (f) -> new Group @op, (@key.bichain f), @val.bichain f

class Wrap extends Inquire

  to-string: -> "#{@op}(#{@key})"

  /* Apply a function `f` to the keys, and `g` to the vals. */
  /* Inquire a b -> (a -> c) -> (b -> d) -> Inquire c d */
  bimap: (f, g) -> new Wrap @op, @key.bimap f, g

  /* Catamorph both sides into a single value. */
  /* Inquire a b -> (a -> c -> c) -> (b -> c -> c) -> c -> c */
  bifoldr: (f, g, z) -> @key.bifoldr f, g, z

  /* Apply a key and a value in an Inquire to two functions in an Inquire. */
  /* Inquire (a -> c) (b -> d) -> Inquire a b -> Inquire c d */
  biap:      (i) -> new Wrap @op, @key.biap i
  /* The result of the double dispatch from Pred. */
  /* Inquire a b -> Inquire (a -> c) (b -> d) -> Inquire c d*/
  biap-pred: (i) -> new Wrap @op, i.biap @key

  /*
    Apply a function to the keys and a function to the values,
    then swap the applicatives.
  */
  /*
    Applicative f => Inquire a b -> (a -> f c) -> (b -> f d) -> f (Inquire c d)
  */
  bitraverse: (f, g) ->
    f-key = @key.bitraverse f, g
    /* We need the context of the applicative we're traversing. */
    if f-key.of or f-key.@@.of or f-key::of
      lift-a2 ((op, key) -> new Wrap op, key), (that @op), f-key
    else ...

  /* Combine a function that returns an Inquire with an Inquire. */
  /* Inquire a b -> (a -> b -> Inquire c d) -> Inquire c d */
  bichain: (f) -> new Wrap @op, @key.bichain f

class Relation

class GroupBool

class WrapBool

class Eq extends Relation

  to-string: -> '='

class Ne extends Relation

  to-string: -> '!='

class Gt extends Relation

  to-string: -> '>'

class Ge extends Relation

  to-string: -> '>='

class Lt extends Relation

  to-string: -> '<'

class Le extends Relation

  to-string: -> '<='

class And extends GroupBool

  to-string: -> '&'

class Or extends GroupBool

  to-string: -> ';'

class NoBool extends WrapBool

  to-string: -> ''

class Not extends WrapBool

  to-string: -> '!'

module.exports =
  of-obj: Inquire!of-obj
  eq: (k, v) -> new Pred new Eq, k, v
  ne: (k, v) -> new Pred new Ne, k, v
  gt: (k, v) -> new Pred new Gt, k, v
  ge: (k, v) -> new Pred new Ge, k, v
  lt: (k, v) -> new Pred new Lt, k, v
  le: (k, v) -> new Pred new Le, k, v
  and: (l, r) -> new Group new And, l, r
  or:  (l, r) -> new Group new Or,  l, r
  not: (i) -> new Wrap new Not, i
