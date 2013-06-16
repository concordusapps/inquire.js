class Inquire

  (key, val) ~>
    @query = if key instanceof Inquire
      Q = key
      "(#{Q.query})"
    else if key and val
      "#{key}=#{val}"
    else
      ''

  _relHelper: (key, val, op) ->
    @query = "#{key}#{op}#{val}"
    this

  # Relational operators.
  eq: (key, val) -> @_relHelper key, val, '='
  neq: (key, val) -> @_relHelper key, val, '!='
  gt: (key, val) -> @_relHelper key, val, '>'
  gte: (key, val) -> @_relHelper key, val, '>='
  lt: (key, val) -> @_relHelper key, val, '<'
  lte: (key, val) -> @_relHelper key, val, '<='

  _boolHelper: (key, val, op) ->
    if key instanceof Inquire
      Q = key
      @query = "#{@query}#{op}(#{Q.query})"
    else
      @query = "#{@query}#{op}#{key}=#{val}"
    this

  # Boolean predicates.
  and: (key, val) -> @_boolHelper key, val, '&'
  or: (key, val) -> @_boolHelper key, val, ';'

  # Negation.
  not: (Q) ->
    if Q instanceof Inquire
      @query = "!(#{Q.query})"
    # TODO: Should probably handle other cases here.
    this

  toString: -> "?#{@query}"

  # Static methods.
  Inquire.eq = (key, val) -> Inquire!.eq key, val
  Inquire.neq = (key, val) -> Inquire!.neq key, val
  Inquire.gt = (key, val) -> Inquire!.gt key, val
  Inquire.gte = (key, val) -> Inquire!.gte key, val
  Inquire.lt = (key, val) -> Inquire!.lt key, val
  Inquire.lte = (key, val) -> Inquire!.lte key, val

module.exports = Inquire
