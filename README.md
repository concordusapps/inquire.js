# Inquire

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

LiveScript:

```livescript
I = require \inquire
query = I(I \color, \red .and I.gt \width, 30)
  ..or I.lte \sides, 12
  ..or (I \shape, \square .and (I.neq \color, \black .or \user, \bob))
url = "/api/shape/#{query}"
# url => /api/shape?(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))
```

Javascript:

```javascript
I = require('inquire');
query = I(I('color', 'red').and(I.gt('width', 30)))
.or(I.lte('sides', 12))
.or(I('shape', 'square').and(I.neq('color', 'black').or('user', 'bob')));
url = "/api/shape/" + query;
// url => /api/shape?(color=red&(width>30));(sides<=12);(shape=square&(color!=black;user=bob))
```

Note: At this time, inquire does not optimize away parens.

## Usage

The inquire class can be used to create a new predicate defaulting to equality.
There are multiple ways to create an `inquire`.

Passing just the key, value pair.

LiveScript:

```livescript
I = require \inquire
I \key, \value #=> ?key=value
```

Javascript:

```javascript
I = require('inquire');
I('key', 'value'); //=> ?key=value
```

Passing an another `inquire`, which will end up wrapping it in parens.

LiveScript:

```livescript
I = require \inquire
I I \key, \value #=> ?(key=value)
```

Javascript:

```javascript
I = require('inquire');
I(I('key', 'value')); //=> ?(key=value)
```
You can pass in an object, or an array of `inquire`'s.
Both of these conjoin their values by default and wrap in parens.

LiveScript:

```livescript
I = require \inquire
I {key1: \value1, key2: \value2} #=> ?(key1=value1&key2=value2)
I [I(\key1, \value1), I(\key2, \value2)] #=> ?(key1=value1&key2=value2)
```

Javascript:

```javascript
I = require('inquire');
I({key1: 'value1', key2: 'value2'}); #=> ?(key1=value1&key2=value2)
I([I('key1', 'value1'), I('key2', 'value2')]); #=> ?(key1=value1&key2=value2)
```

You can change the default relation by calling a different operator.

LiveScript:

```livescript
I = require \inquire
I.gte \key, \value #=> key>=value
```

Javascript:

```javascript
I = require('inquire');
I.gte('key', 'value'); //=> key>=value
```

The `and` and `or` predicates work in much the same way,
but require an already created `inquire`.

LiveScript:

```livescript
I = require \inquire
I \key1, \value1 .and \key2, \value2 #=> ?key1=value1&(key2=value2)
I \key1, \value1 .or \key2, \value2 #=> ?key1=value1;(key2=value2)
```

Javascript:

```javascript
I = require('inquire');
I('key1', 'value1').and('key2', 'value2'); #=> ?key1=value1&(key2=value2)
I('key1', 'value1').or('key2', 'value2'); #=> ?key1=value1;(key2=value2)
```

`and` and `or` also take objects, arrays, and `inquire`'s.
The semantics is similar to the constructor taking these types,
and conjoining or disjoining it to the previous `inquire` with the proper operator.

The `not` predicate takes an `inquire` and negates the whole thing.

LiveScript:

```livescript
I = require \inquire
I!.not I \key, \value #=> ?!(key=value)
```

Javascript:

```javascript
I = require('inquire');
I().not(I('key', 'value')) #=> ?!(key=value)
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
If `key` is an `inquire` then it wraps the `inquire` in parens
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


[armet]: http://armet.github.io/
[inquire]: https://npmjs.org/package/inquire
