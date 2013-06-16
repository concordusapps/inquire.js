class Enquire

  (key, val) ->
    @query = if key and val then "#{key}=#{val}" else ''

  eq: (key, val) ->
    @query = "#{key}=#{val}"
    this

  and: (key, val) ->
    @query = "#{@query}&#{key}=#{val}"
    this

  or: (key, val) ->
    @query = "#{@query};#{key}=#{val}"
    this

  not: ->
    @query = "!(#{@query})"
    this

  toString: ->
    "?#{@query}"

module.exports = Enquire
