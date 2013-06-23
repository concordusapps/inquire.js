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
          `arity`   -> Specifies if the predicate is unary or binary currently.
          `bool`    -> Boolean predicate to join with.
          `rel`     -> Relational operator to relate keys with values.

      Returns this Allows for chaining of inquire's.
  */
  _analyze: (key, val, {arity=\2 bool=\& rel=\=}) ->
    # We need to provide some defaults for the options and also name it.
    options = {arity, bool, rel}
    # Figure out our path, based on what the key is.
    match key
    | (instanceof Inquire)      => @_handleInquire key, options
    | (is 'Array') . (typeof!)  => @_handleArray key, options
    | (is 'String') . (typeof!) => @_handleString key, val, options
    | (is 'Object') . (typeof!) => @_handleObject key, options
    this

  # Append whatever it is to us with a relation.
  _binary: (key, val, options) ->
    # If it's empty, pretty much it can only be a string.
    if @_empty @inquiry
      @inquiry =
        arity: options.arity
        rel: options.rel
        left: key
        right: val
    # There's something else here.
    # Put the old inquire as the left side and the new thing as the right.
    else
      # We need to do some special-ness for `not`.
      # If we're `not`-ing something and there's already a `not` child,
      # replace the `rel` with '&!' and the `bool` with ''.
      [rel, bool] = match options.bool, options.rel
      | \!, \!  => <[ \&! '' ]>
      | _, _    => [options.bool, options.rel]
      @inquiry =
        arity: options.arity
        rel: rel
        left: @inquiry
        right: (Inquire!._analyze key, val,
          arity: options.arity
          bool: bool
          rel: options.rel).inquiry

  # Wrap the inquiry in parens, basically.
  _unary: (val, options) ->
    @inquiry =
      arity: options.arity
      bool: options.bool
      value: val.inquiry

  # Helper to check if an object is empty.
  _empty: (object) ->
    for _ of object => return false
    true

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
      # The only time we want a `bool` value is when it's negation.
      bool = if options.bool is \! then options.bool else ''
      @_unary inquire, {arity: \1, bool: bool}
    else
      # We have to make the rel into the `bool` because of `not`.
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
      inquire._analyze key, val, {arity: \2, rel: options.rel}
    # Now put that inquire into our inquire.
    @_handleInquire inquire, {arity: \1, rel: options.rel, bool: options.bool}

  # At this point, just dish off to `_binary`
  _handleString: (key, val, options) -> @_binary key, val, options

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

  # Recurse down our tree, and print out the good stuff.
  _genHelper: (I) ->
    if typeof! I in <[ Array Number String ]>
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
