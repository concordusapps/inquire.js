'use strict'

class Inquire

  inquiry: ''

  /*  Bound constructor allows us to call:
      LiveScript
      `Inquire!` rather than `new Inquire!`

      Javascript
      `Inquire()` rather than `new Inquire()`
  */
  (key, val) ~> @_analyze key, val

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
  _analyze: (key, val, { bool= \&, cat= '', op= \= } = {}) ->
    # Check what we got here.
    #
    @inquiry += match key
    | (instanceof Inquire)      => "#{cat}(#{key})"
    | (is 'Array') . (typeof!)  => "#{cat}(#{key.join bool})"
    | (is 'String') . (typeof!) => "#{cat}#{key}#{op}#{val}"
    | (is 'Object') . (typeof!) => "#{cat}(#{[k+op+v for k, v of key].join bool})"
    | otherwise                 => ''
    this

  /*  Relational operators.
  */
  eq: (key, val) -> @_analyze key, val, { op: \= }
  neq: (key, val) -> @_analyze key, val, { op: \!= }
  gt: (key, val) -> @_analyze key, val, { op: \> }
  gte: (key, val) -> @_analyze key, val, { op: \>= }
  lt: (key, val) -> @_analyze key, val, { op: \< }
  lte: (key, val) -> @_analyze key, val, { op: \<= }

  /*  Boolean predicates.
  */
  and: (key, val) -> @_analyze key, val, { cat: \&, bool: \& }
  or: (key, val) -> @_analyze key, val, { cat: \;, bool: \; }

  /*  Negation.
  */
  not: (I) ->
    # If we got an Inquire (which only makes sense), wrap it in parens.
    if I instanceof Inquire
      @inquiry = "!(#{I.inquiry})"
    # TODO: Should probably handle other cases here.
    #       Should be able to take all the same inputs as the others,
    #       and just wrap them in parens.
    this

  /*  Make our Inquire actually look like a query string.
  */
  generate: -> "?#{@inquiry}"

  toString: -> @inquiry

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

module.exports = Inquire
