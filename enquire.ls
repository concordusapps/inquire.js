class Enquire

  (@query) ->

  eq: (key, val) ->
    @query = "#{key}=#{val}"

    this

  and: (key, val) ->
    @query = if @query
      "#{@query}&#{key}=#{val}"
    else
      "#{key}=#{val}"

    this

  or: (key, val) ->
    @query = if @query
      "#{@query};#{key}=#{val}"
    else
      "#{key}=#{val}"

    this

  not: (key, val) ->
    @query += "!#{key}=#{val}"
    this

  toString: ->
    @query

module.exports = Enquire
