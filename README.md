# Inquire
[![Build Status](https://travis-ci.org/concordusapps/inquire.js.png?branch=master)](https://travis-ci.org/concordusapps/inquire.js)
[![Coverage Status](https://coveralls.io/repos/concordusapps/inquire.js/badge.png?branch=master)](https://coveralls.io/r/concordusapps/inquire.js?branch=master)
[![devDependency Status](https://david-dm.org/concordusapps/inquire.js/dev-status.png)](https://david-dm.org/concordusapps/inquire.js#info=devDependencies)
[![Stories in Ready](https://badge.waffle.io/concordusapps/inquire.js.png)](http://waffle.io/concordusapps/inquire.js)

[![NPM](https://nodei.co/npm/inquire.png?compact=true)](https://nodei.co/npm/inquire/)


Inquire allows you to generate advanced query strings.
Currently supports [armet][armet] syntax query strings.

## Installation

Inquire is available on the npm registry: [inquire][inquire]

You can install it with npm.

    npm install inquire

## The Problem

Currently, query strings only conjoin predicates together with equality.
[Armet][armet] attempts to extend this in two ways:

* Allowing predicates to be conjoined, disjoined and negated.
* Allowing more than just equality, e.g. inequalities.

This ends up creating a problem.
We now have to generate these advanced query strings.
Generating these advanced query strings by hand gets unwieldy.

For example, let's say we are dealing with a REST api for shapes.
We can `GET` on `/api/shape` and return all of the shapes.

Now let's try to get more detailed in our result.
Let's say we want red shapes wider than 30 pixels or
we want all shapes with no more than 12 sides or
we want all of the squares that either aren't black or that were created by bob.
Our `GET` request becomes:

`/api/shape?(color=red&width>30);sides<=12;(shape=square&(color!=black;user=bob))`


## A Solution

We need a better way to generate query strings for [armet][armet]'s consumption.
Inquire allows you do the same query without trying to man-handle the string.

```purescript
import Inquire

query = (("color" `eq` "red") |&| ("width" `gt` "30")) ||| ("sides" `le` "12") ||| (("shape" `eq` "square") |&| (("color" `ne` "black") ||| ("user" `eq` "bob")))
url = "/api/shape?" ++ show query
-- url => "/api/shape?(color=red&width>30);sides<=12;(shape=square&(color!=black;user=bob))"
```

LiveScript:

```livescript
require! I: \inquire.Inquire
query = I.or(I.or(I.and(I.eq(\color)(\red))(I.gt(\width)(30)))(I.le(\sides)(12)))(I.and(I.eq(\shape)(\square))(I.or(I.ne(\color)(\black))(I.eq(\user)(\bob))))
url = "/api/shape?#{I.generate query}"
# url => '/api/shape?(color=red&width>30);sides<=12;(shape=square&(color!=black;user=bob))'
```

Javascript:

```javascript
var I = require('inquire').Inquire;
var query = I.or(I.or(I.and(I.eq('color')('red'))(I.gt('width')(30)))(I.le('sides')(12)))(I.and(I.eq('shape')('square'))(I.or(I.ne('color')('black'))(I.eq('user')('bob'))))
var url = '/api/shape?' + I.generate(query)
// url => '/api/shape?(color=red&width>30);sides<=12;(shape=square&(color!=black;user=bob))'
```

Note: Inquire removes as many parens as logically possible.

## Usage

The inquire class can be used to create a new predicate defaulting to equality.
There are multiple ways to create an `inquire`.

Passing just the key, value pair.

LiveScript:

```livescript
inquire \key, \value #=> key=value
```

Javascript:

```javascript
inquire('key', 'value'); //=> key=value
```

Passing in another `inquire`, which will end up wrapping it in parens.

LiveScript:

```livescript
inquire inquire \key, \value #=> (key=value)
```

Javascript:

```javascript
inquire(inquire('key', 'value')); //=> (key=value)
```
You can pass in an object, or an array of `inquire`'s.
Both of these conjoin their values by default and wrap in parens.

LiveScript:

```livescript
inquire {key1: \value1, key2: \value2} #=> (key1=value1&key2=value2)
inquire [inquire(\key1, \value1), inquire(\key2, \value2)] #=> ((key1=value1)&(key2=value2))
```

Javascript:

```javascript
inquire({key1: 'value1', key2: 'value2'}); //=> (key1=value1&key2=value2)
inquire([inquire('key1', 'value1'), inquire('key2', 'value2')]); //=> ((key1=value1)&(key2=value2))
```

You can change the default relation by calling a different operator.

LiveScript:

```livescript
inquire.gte \key, \value #=> key>=value
```

Javascript:

```javascript
inquire.gte('key', 'value'); //=> key>=value
```

The `and` and `or` predicates work in much the same way,
but require an already created `inquire`.

LiveScript:

```livescript
inquire \key1, \value1 .and \key2, \value2 #=> key1=value1&key2=value2
inquire \key1, \value1 .or \key2, \value2 #=> key1=value1;key2=value2
```

Javascript:

```javascript
inquire('key1', 'value1').and('key2', 'value2'); //=> key1=value1&key2=value2
inquire('key1', 'value1').or('key2', 'value2'); //=> key1=value1;key2=value2
```

`Inquire` supports three boolean operators `and`, `or`, and `not`.
These operators also take objects, arrays, and `inquire`'s.
In addition, `and` and `or` take `key`, `value` strings and construct the proper query.
The semantics for `and` and `or` are similar to the constructor taking these types,
and conjoining or disjoining it to the previous `inquire` with the proper operator.
For `not`, the argument is analyzed then wrapped in parens and negated.

__NOTE__: `not` doesn't take `key`, `value` strings.
Currently, this will produce a querystring, but it will not have the valid semantics.
Something like `!(key=undefined)`.


LiveScript:

```livescript
inquire.not inquire \key, \value #=> !(key=value)
```

Javascript:

```javascript
inquire.not(inquire('key', 'value')) //=> !(key=value)
```

### Functions

##### eq(key, val)
Creates a `key=val` predicate.

##### neq (key, val)
Creates a `key!=val` predicate.

##### gt (key, val)
Creates a `key>val` predicate.

##### gte (key, val)
Creates a `key>=val` predicate.

##### lt (key, val)
Creates a `key<val` predicate.

##### lte (key, val)
Creates a `key<=val` predicate.

##### and(key, val)
If `key` is an `inquire`, then it wraps the `inquire` in parens
and conjoins it with the current `inquire`.

Otherwise, assumes `key` is a string and `val` has a `toString` function,
then conjoins the current query with a new `key=val` predicate.

##### or(key, val)
If `key` is an `inquire` then it wraps the `inquire` in parens
and disjoins it with the current `inquire`.

Otherwise, assumes `key` is a string and `val` has a `toString` function,
then disjoins the current query with a new `key=val` predicate.

##### not(query)
Negates the supplied query.

##### generate()
Returns a formatted querystring.

##### parse(querystring)
Generates an inquire from the passed in query string.

### Fantasy Land Algebras

A bit of motivation is necessary.
Why go through all the trouble to define and use these algebras?
The driving factor is to provide a uniform interface that *should* be easier to reason about.
The fantasy land spec removes the notion of side effects from implementations, so certain things are easier.
This uniform interface allows anyone who knows the spec to pick up `inquire` and start working with it just by knowing which algebras it implements.
More importantly, it allows any library that operates on fantasy land algebras to abstract right over it.

#### Semigroup
Semigroups are algebras with an associative operation.  The associative operation gives a way to combine two items from this algebra.  In the case of Inquire, it allows you to `and` them together.  This isn't especially unique, but it is a good foundation for creating better or more interesting operations.

##### concat(inquire)
Takes an inquire and conjoins it to a copy of the current inquire with `and`.  This function is associative, meaning that no matter what kind of parens nesting you use to call `concat`, the result will always be the same.
For example, given some predicates `a`, `b`, `c` and `d` (each of the form `key=val`), `a.concat(b).concat(c.concat(d))` is equivalent to `a.concat(b.concat(c).concat(d))`.
To put it in more explicit terms, `(a&b)&(c&d)` is equivalent to `a&((b&c)&d)` is equivalent to `a&b&c&d`.

The point of this is that now it doesn't matter which order you add each predicate, or if it supported it, which order the predicates were resolved.
This gives us the ability to perform these operations concurrently (since it doesn't matter which order things happen in).
Of course with string predicates, it's trivial whether we do this sequentially or concurrently, but when things like promises or functions start happening it becomes important.

#### Monoid
Monoids are Semigroups with an identity element.  This means they also have an associative operation.  The identity element allows you to always have a place to start, or something to concat with that will give you back just what you started with.  This can come into play when traversing the inquire.

##### empty()
Returns an empty inquire.
Although it might seem useless, this has its place when being used with other structures.  Much like the identity function has its place for functions, the number 1 its place for multiplication, or the number 0 its place for addition.

#### Functor
Functors are algebras which allow some sort of morphism between values.  This means it can transform the data within the Inquire.  Currently, Inquire operates on strings only, but you should be able to traverse the entire tree, and manipulate the data.

##### map(function)
Takes the function and applies the inquire to it.  The inquire is first stringified then passed to the function, so the function should operate over strings.  The result of the function is then used to create a new inquire and returned.  The function can return whatever it wants, and inquire will try its best to make something of it, but realize that at this time only strings, arrays, objects, and other inquires are really supported.

#### Applicative
Applicatives are Functors which allow you to take the function which is already in your current inquire and apply it to a value within an inquire.  This may seem more restrictive, but it actually allows for more freedom.  With functors you can only take a single function, with applicatives you can string together a whole mess of functions.  There's definitely more stuff you can do with them though.

##### ap(inquire)
Takes an inquire and applies the function in the current inquire to it.  This requires the current inquire to have a function inside of it.  If there isn't, you'll get some sort of error.

##### of(anything)
Takes whatever you give it, and returns a new inquire.  This means you can pass in anything: strings, objects, functions, jQuery selectors, Bacon.js Eventstreams, whatever.  Currently, there's no guarantee that anything you pass in will generate a valid inquire, but there's clearly room for improvement.

#### Chain
Chains are algebras which give you a way to take a value into the algebra while also transforming it in the process.  It's sort of like having `of` and `map` rolled into one function.

##### chain(function)
Takes a function that takes something and returns a new inquire, and applies whatever is in the current inquire to the function, returning the new inquire.

#### Monad
Monads are Applicatives and Chains which give an interface for operating in the algebra.  What this means for inquire right now is nothing.  However, it may mean something better in the future.  This could be something like validation of data, or it may mean working with promises, jQuery, or other "popular" JS things.

[armet]: http://armet.github.io/
[inquire]: https://npmjs.org/package/inquire
