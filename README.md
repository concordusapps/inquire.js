# Inquire

Inquire allows you to create advanced query strings.
Currently supports [armet][armet] syntax query strings.

### Predicates

##### eq(key, val)
    Creates a simple `key=val` predicate.

##### and(key, val)
    Conjoins the current query with a new `key=val` predicate.

##### or(key, val)
    Disjoins the current query with a new `key=val` predicate.

##### not(query)
    Negates the supplied query.

##### toString()
    Returns the entire querystring.


[armet]: https://github.com/armet
