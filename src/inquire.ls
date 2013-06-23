'use strict'

class Inquire

  inquiry: {}

  /*  Bound constructor allows us to call:
      LiveScript
      `Inquire!` rather than `new Inquire!`

      Javascript
      `Inquire()` rather than `new Inquire()`
  */
  (key, val) ~> @eq key, val

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
          `rel`    -> Relational operator to relate keys with values.

      Returns this Allows for chaining of inquire's.
  */
  _analyze: (key, val, {arity=\2 bool=\& rel=\=}) ->
    options = {arity, bool, rel}
    # Figure out our path, based on what the key is.
    match key
    | (instanceof Inquire)      => @_handleInquire key, options
    | (is 'Array') . (typeof!)  => @_handleArray key, options
    | (is 'String') . (typeof!) => @_binary key, val, options
    | (is 'Object') . (typeof!) => @_handleObject key, options
    this

  _binary: (key, val, options) ->
    if @_empty @inquiry
      @inquiry =
        arity: options.arity
        rel: options.rel
        left: key
        right: val
    else
      rel = match options.bool
      | \!  => \&!
      | _   => options.bool
      @inquiry =
        arity: options.arity
        rel: rel
        left: @inquiry
        right: (new Inquire ...).inquiry

  _handleArray: (array, options) ->
    # Create a new inquire
    inquire = Inquire!
    # Set the operator
    boolean = match options.bool
    | \;  => \or
    | _   => \and
    # Stuff the inquires from the arry into it.
    for item in array
      inquire[boolean] item, null, options
    # Now put that inquire into our inquire.
    @_handleInquire inquire, {arity: \1, rel: options.rel, bool: options.bool}

  _handleInquire: (inquire, options) ->
    # We have our new inquire.
    # Put that into our inquire.
    if @_empty @inquiry
      bool = if options.bool is \! then options.bool else ''
      @_unary inquire, {arity: \1, bool: bool}
    else
      @_binary inquire, null, {arity: \2, bool: options.bool, rel: options.bool}

  _handleObject: (object, options) ->
    # Create a new inquire.
    inquire = Inquire!
    # Set the relational operator
    relation = match options.rel
    | \=  => \eq
    | \!= => \neq
    | \>  => \gt
    | \>= => \gte
    | \<  => \lt
    | \<= => \lte
    # Stuff the keys and values into it.
    for key, val of object
      inquire[relation] key, val, options
    # Now put that inquire into our inquire.
    @_handleInquire inquire, {arity: \1, rel: options.rel, bool: options.bool}

  # Helper to check if an object is empty.
  _empty: (object) ->
    for key of object
     return false
    true

  _unary: (val, options) ->
    if @_empty @inquiry
      @inquiry =
        arity: options.arity
        bool: options.bool
        value: val.inquiry
    else
      @inquiry =
        arity: options.arity
        bool: options.bool
        value: @inquiry

  /*  Relational operators.
  */
  eq: (key, val) -> @_analyze key, val, {arity: \2 rel: \=}
  neq: (key, val) -> @_analyze key, val, {arity: \2 rel: \!=}
  gt: (key, val) -> @_analyze key, val, {arity: \2 rel: \>}
  gte: (key, val) -> @_analyze key, val, {arity: \2 rel: \>=}
  lt: (key, val) -> @_analyze key, val, {arity: \2 rel: \<}
  lte: (key, val) -> @_analyze key, val, {arity: \2 rel: \<=}

  /*  Boolean predicates.
  */
  and: (key, val) -> @_analyze key, val, {arity: \2 bool: \&}
  or: (key, val) -> @_analyze key, val, {arity: \2 bool: \;}
  not: (key) -> @_analyze key, null, {arity: \1 bool: \!}

  /*  Make our Inquire actually look like a query string.
  */
  generate: -> "?#{@_genHelper @inquiry}"

  _genHelper: (I) ->
    if typeof! I is 'String'
      I
    else if @_empty I
      ''
    else match I.arity
    | \1 => "#{I.bool}(#{@_genHelper I.value})"
    | \2 => "#{@_genHelper I.left}#{I.rel}#{@_genHelper I.right}"

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
