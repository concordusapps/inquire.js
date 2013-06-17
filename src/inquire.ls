'use strict'

{foldr1, is-type} = require \prelude-ls

class Inquire

  # Bound constructor allows us to call `Inquire()` rather than `new Inquire()`.
  (key, val) ~>
    # Check what we got here.
    # If it's an Inquire, just wrap it in parens.
    # Otherwise, if we've got a key and a val, assume they're strings
    # (or can be made into strings), and make an equality predicate.
    # Otherwise, just make the inquiry an empty string.
    @inquiry = match key
    | (instanceof Inquire)  => "(#{key.inquiry})"
    | is-type 'String'      => "#{key}=#{val}"
    | otherwise             => ''

  # Wrapper for relational operators.
  _relHelper: (key, val, op) ->
    @inquiry = "#{key}#{op}#{val}"
    this

  # Relational operators.
  eq: (key, val) -> @_relHelper key, val, '='
  neq: (key, val) -> @_relHelper key, val, '!='
  gt: (key, val) -> @_relHelper key, val, '>'
  gte: (key, val) -> @_relHelper key, val, '>='
  lt: (key, val) -> @_relHelper key, val, '<'
  lte: (key, val) -> @_relHelper key, val, '<='

  # Wrapper for and/or.
  _boolHelper: (key, val, op) ->
    # If we got an Inquire, just wrap it in parens and concat it with the op.
    # Otherwise, assume we got a key/val pair, and concat it with the op.
    @inquiry += match key
    | is-type 'Array'       => key.join op
    | (instanceof Inquire)  => "#{op}(#{key.inquiry})"
    | otherwise             => "#{op}#{key}=#{val}"
    this

  # Boolean predicates.
  and: (key, val) -> @_boolHelper key, val, '&'
  or: (key, val) -> @_boolHelper key, val, ';'

  # Negation.
  not: (I) ->
    # If we got an Inquire (which only makes sense), wrap it in parens.
    if I instanceof Inquire
      @inquiry = "!(#{I.inquiry})"
    # TODO: Should probably handle other cases here.
    this

  # Make our Inquire actually look like a query string.
  generate: -> "?#{@inquiry}"

  toString: -> @inquiry

# Static methods.
# We can do stuff like `Inquire.gt \a, 10` along with `Inquire!.gt \a, 10`.
Inquire.eq = (key, val) -> Inquire!.eq key, val
Inquire.neq = (key, val) -> Inquire!.neq key, val
Inquire.gt = (key, val) -> Inquire!.gt key, val
Inquire.gte = (key, val) -> Inquire!.gte key, val
Inquire.lt = (key, val) -> Inquire!.lt key, val
Inquire.lte = (key, val) -> Inquire!.lte key, val

module.exports = Inquire
