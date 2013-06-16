class Inquire

  (key, val) ~>
    @query = if key and val then "#{key}=#{val}" else ''

  _eqHelper: (key, val, op) ->
    @query = "#{key}#{op}#{val}"
    this

  # Equality operators.
  eq: (key, val) -> @_eqHelper key, val, '='
  neq: (key, val) -> @_eqHelper key, val, '!='
  gt: (key, val) -> @_eqHelper key, val, '>'
  gte: (key, val) -> @_eqHelper key, val, '>='
  lt: (key, val) -> @_eqHelper key, val, '<'
  lte: (key, val) -> @_eqHelper key, val, '<='

  and: (key, val) ->
    @query = "#{@query}&#{key}=#{val}"
    this

  or: (key, val) ->
    @query = "#{@query};#{key}=#{val}"
    this

  not: (Q) ->
    if Q instanceof Inquire
      @query = "!(#{Q.query})"
    this

  toString: ->
    "?#{@query}"

module.exports = Inquire
