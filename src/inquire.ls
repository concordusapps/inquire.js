'use strict'

class Inquire

  inquiry: {}

  /*  Bound constructor allows us to call:
      LiveScript
      `Inquire!` rather than `new Inquire!`

      Javascript
      `Inquire()` rather than `new Inquire()`
  */
  (key, val) ~> @eq key, val, {arity: \2 op: \=}

  /*  Helper function to choose the correct string to create.
      `key` Determines the route to take depending on one of these types:
          `Inquire` -> Wrap it in parens and concat it to the previous inquire.
          `Array`   -> Join everything with the bool and concat to previous.
          `String`  -> Relate the key and val then concat to previous.
          `Object`  -> Relate each key/val, join with the bool and concat.
          Rest      -> For anything else, just throw it away.
      `val` Currently only used as the value for strings.
      `options` Additional information for constructing the inquire.
          `bool`  -> Boolean predicate to join with.
          `cat`   -> Boolean predicate to concat to the previous inquire with.
          `op`    -> Relational operator to relate keys with values.

      Returns this Allows for chaining of inquire's.
  */
  _analyze: (key, val, {arity=\2 op=\=} = {}) ->
    # Figure out our path, based on what the key is.
    match key
    | (instanceof Inquire)      => @_unary key, null, {arity: \1 op: ''}
    # | (is 'Array') . (typeof!)  => for k in key => @_unary k, null, {arity: \1 op: ''}
    | (is 'String') . (typeof!) => @_binary ...
    | (is 'Object') . (typeof!) => for k, v of key => @_analyze k, v
    this

  _binary: (key, val, options) ->
    if @_empty @inquiry
      @inquiry =
        arity: options.arity
        op: options.op
        left: key
        right: val
    else
      @inquiry =
        arity: options.arity
        op: options.op
        left: @inquiry
        right: @_analyze key

  # Helper to check if an object is empty.
  _empty: (object) ->
    for key of object
     return false
    true

  _unary: (val, _, options) ->
    if @_empty @inquiry
      @inquiry =
        arity: options.arity
        op: options.op
        value: val
    else
      @inquiry =
        arity: options.arity
        op: options.op
        value: @inquiry

  /*  Relational operators.
  */
  eq: (key, val) -> @_analyze key, val, {arity: \2 op: \=}
  neq: (key, val) -> @_analyze key, val, {arity: \2 op: \!=}
  gt: (key, val) -> @_analyze key, val, {arity: \2 op: \>}
  gte: (key, val) -> @_analyze key, val, {arity: \2 op: \>=}
  lt: (key, val) -> @_analyze key, val, {arity: \2 op: \<}
  lte: (key, val) -> @_analyze key, val, {arity: \2 op: \<=}

  /*  Boolean predicates.
  */
  and: (key, val) -> @_analyze key, val, {arity: \2 bool: \& cat: \&}
  or: (key, val) -> @_analyze key, val, {arity: \2 bool: \; cat: \;}
  not: (key) -> @_analyze key, null, {arity: \1 cat: \&!}

  /*  Make our Inquire actually look like a query string.
  */
  generate: -> "?#{@_genHelper @inquiry}"

  _genHelper: (I) ->
    if typeof! I is 'String'
      I
    else if @_empty I
      ''
    else match I.arity
    | \1 => "#{I.op}(#{@_genHelper I.value.inquiry})"
    | \2 => "#{@_genHelper I.left}#{I.op}#{@_genHelper I.right}"

  toString: -> @_genHelper @inquiry

/*  Static methods.
    We can do stuff like:
    LiveScript

    `Inquire.gt \a, 10` along with `Inquire!.gt \a, 10`.

    Javascript

    `Inquire.gt('a', 10)` along with `Inquire().gt('a', 10)`.
*/
Inquire.eq = (key, val) -> Inquire!.eq key, val
Inquire.neq = (key, val) -> Inquire!.neq key, val
Inquire.gt = (key, val) -> Inquire!.gt key, val
Inquire.gte = (key, val) -> Inquire!.gte key, val
Inquire.lt = (key, val) -> Inquire!.lt key, val
Inquire.lte = (key, val) -> Inquire!.lte key, val
Inquire.and = (key, val) -> Inquire!.and key, val
Inquire.or = (key, val) -> Inquire!.or key, val
Inquire.not = (key) -> Inquire!.not key

/*  Exporting inquire.  */
if module?exports
  module.exports = Inquire
else
  @Inquire = Inquire
if typeof define is 'function'
  define \Inquire [] -> Inquire
