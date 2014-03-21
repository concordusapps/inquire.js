# Inquire
[![Build Status](https://travis-ci.org/concordusapps/inquire.js.png?branch=master)](https://travis-ci.org/concordusapps/inquire.js)
[![devDependency Status](https://david-dm.org/concordusapps/inquire.js/dev-status.png)](https://david-dm.org/concordusapps/inquire.js#info=devDependencies)
[![Stories in Ready](https://badge.waffle.io/concordusapps/inquire.js.png)](http://waffle.io/concordusapps/inquire.js)

[![NPM](https://nodei.co/npm/inquire.png?compact=true)](https://nodei.co/npm/inquire/)


Inquire allows you to generate advanced query strings.
Currently supports [armet][armet] syntax query strings.

**Table of Contents**

* [Installation](#installation)
* [The Problem](#the-problem)
* [A Solution](#a-solution)
* [Background](#background)
    * [Basics](#basics)
    * [Deeper](#deeper)
* [Usage](#usage)
    * [Predicate combinators](#predicate-combinators)
        * [eq](#eq)
        * [ne](#ne)
        * [gt](#gt)
        * [ge](#ge)
        * [lt](#lt)
        * [le](#le)
    * [Junction combinators](#junction-combinators)
        * [and](#and)
        * [or](#or)
    * [Wrap combinator](#wrap-combinator)
        * [not](#not)
    * [Derived combinators](#derived-combinators)
        * [implies](#implies)
        * [equiv](#equiv)
        * [xor](#xor)
        * [absorb](#absorb)
        * [associate](#associate)
        * [assocLeft](#assocleft)
        * [assocRight](#assocright)
        * [commute](#commute)
        * [distribute](#distribute)
        * [codistribute](#codistribute)
        * [idempotent](#idempotent)
    * [Construction](#construction)
        * [fromArrayPair](#fromarraypair)
        * [fromArrayObj](#fromarrayobj)
    * [Modification](#modification)
        * [foldr](#foldr)
        * [foldl](#foldl)
        * [map](#map)
        * [filterByKey](#filterbykey)
        * [filterByVal](#filterbyval)
        * [findByKey](#findbykey)
        * [findByVal](#findbyval)
        * [remove](#remove)
        * [remove](#remove)
        * [removeAll](#removeall)
        * [replaceValByKey](#replacevalbykey)
        * [replaceValByVal](#replacevalbyval)
        * [unsafeFindByKey](#unsafefindbykey)
        * [unsafeFindByVal](#unsafefindbyval)
        * [unsafeFromObj](#unsafefromobj)
        * [unsafeRemove](#unsaferemove)
        * [unsafeRemoveAll](#unsaferemoveall)
        * [unsafeReplaceValByKey](#unsafereplacevalbykey)
        * [unsafeReplaceValByVal](#unsafereplacevalbyval)
* [Examples](#examples)

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

Of course this still looks horrible to have to deal with because it's all on one line.
So, as with most software issues,
it's better to decompose this into smaller pieces and then rejoin the pieces at the end.

## Background

N.B. Please report any misinformation, pull requests are welcome!

#### Basics

At its core Inquire is a Boolean Algebra.
This means that all of the properties of other boolean algebras can be applied to Inquire.
This includes things like:

* Associativity
* Commutativity
* Idempotence
* DeMorgan's Laws
* Implication
* Equivalence

Because of this, we can optimize our queries.
In some cases, we can optimize away the entire query!

The basic building block of Inquire is a predicate.
Each Predicate has a key, a relational operator and a value.
The supported relational operators are `==`, `!=`, `<`, `<=`, `>`, and `>=`.
A key or a value can be any thing.

N.B. Currently in JS, only the basic JS types are supported (Boolean, Number, String).

We can construct more complex queries by joining our predicates together.

There are two binary combinators and a unary combinator: `and`, `or` and `not`, respectively.

#### Deeper

Also, since Boolean Algebras are Complemented Distributive Lattices,
we get all of the properties of those for free as well!

The complemented part means that every query has a complement.
We construct the complement for an entire query by wrapping it in a negation.
This is the lazy way, and not actually true to the definition.
The way to actually get the complement is to take each predicate and change its relational operator.

|      |     |      |
| ---- | --- | ---- |
| `==` | <=> | `!=` |
| `>`  | <=> | `<=` |
| `<`  | <=> | `>=` |

The distributive part means that our binary combinators can be distributed over each other.
This is similar to how multiplication can distribute over addition in Semirings like the Natural numbers with 0, or Integers or the reals, etc.
The difference is, each operation can distribute over the other.

So the following are equivalent: `p AND (q OR r)`, `(p OR q) AND (p OR r)`

As well as: `p OR (q AND r)`, `(p AND q) OR (p AND r)`

The lattice part has two equivalent interpretations.
One states that there is a poset nestled underneath our structure.
The other states that we have some of the axioms mentioned above.

## Usage

Inquire has a few basic combinators on which most of everything else is built.
Since Inquire is tied closely to [armet][armet],
most of this is about filtering responses based on model attributes.
However, the fundamentals are the same for any purpose.

#### Predicate combinators

###### eq
###### k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `==`.
Will return results where the `key` on the model equals the supplied `val`

###### ne
###### k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `!=`
Will return results where the `key` on the model does not equal the supplied `val`

###### gt
###### k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `>`
Will return results where the `key` on the model is greater than the supplied `val`

###### ge
###### k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `>=`
Will return results where the `key` on the model is greater than or equal to the supplied `val`

###### lt
###### k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `<`
Will return results where the `key` on the model is less than the supplied `val`

###### le
###### k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `<=`
Will return results where the `key` on the model is less than or equal to the supplied `val`

#### Junction combinators

###### and
###### Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires with the conjunction `&`
Will return results where both `left` and `right` subqueries are true.

###### or
###### Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires with the disjunction `;`
Will return results where either one, or both, `left` and `right` subqueries are true.

#### Wrap combinator

###### not
###### Inquire k v -> Inquire k v

Constructs an Inquire from one Inquire with the negation `!`
Will return results where subquery is false.

#### Derived combinators

From these simple combinators, we can create more complex ideas:

###### implies
###### Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires.
This is the direct definition of implication, namely `(NOT p) OR q`.

###### equiv
###### Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires.
This is the direct definition of equivalence, namely `(p AND q) OR ((NOT p) AND (NOT q))`.

###### xor
###### Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires.
This is the direct definition of exclusive or, namely `(p AND (NOT q)) OR ((NOT p) AND q)`.

###### absorb
###### Inquire k v -> Inquire k v

Simplifies specific Inquires.

`p AND (p OR q)` => `p`

`p OR (p AND q)` => `p`

###### associate
###### Inquire k v -> Inquire k v

Reorders parens from what they are now to the other possible way.

`p AND (q AND r)` => `(p AND q) AND r`

`(p AND q) AND r` => `p AND (q AND r)`

`p OR (q OR r)` => `(p OR q) OR r`

`(p OR q) OR r` => `p OR (q OR r)`

###### assocLeft
###### Inquire k v-> Inquire k v

Reorders parens to the left.

`p AND (q AND r)` => `(p AND q) AND r`

`p OR (q OR r)` => `(p OR q) OR r`

###### assocRight
###### Inquire k v-> Inquire k v

Reorders parens to the right.

`(p AND q) AND r` => `p AND (q AND r)`

`(p OR q) OR r` => `p OR (q OR r)`

###### commute
###### Inquire k v -> Inquire k v

Reorders queries.

`p AND q` => `q AND p`

`p OR q` => `q OR p`

###### distribute
###### Inquire k v -> Inquire k v

Distributes one query over its dual.

`p AND (q OR r)` => `(p OR q) AND (p OR r)`

`p OR (q AND r)` => `(p AND q) OR (p AND r)`

###### codistribute
###### Inquire k v -> Inquire k v

Performs the opposite of distribution.

`(p OR q) AND (p OR r)` => `p AND (q OR r)`

`(p AND q) OR (p AND r)` => `p OR (q AND r)`

###### idempotent
###### Inquire k v -> Inquire k v

Simplifies the Inquire with the Idempotency rule.

`p AND p` => `p`

`p OR p` => `p`

#### Construction

Creating new Inquires is done with either single `key` `val` arguments,
an array of `[key, val]` pairs,
or an array of `{key: k, val: v}` objects.

The [predicate combinators](#predicate-combinators) above correspond to the single `key`, `val` option.

###### fromArrayPair
###### [[k, v]] -> Inquire k v

This constructs an Inquire with the default relation of `==` for all predicates,
and the default junction of `&` for all combinations of predicates.

###### fromArrayObj
###### [{key: k, val: v}] -> Inquire k v

This constructs an Inquire with the default relation of `==` for all predicates,
and the default junction of `&` for all combinations of predicates.
This expects each object to have two entries: `key` and `val`.
These should correspond to the intended predicate `key` and `val`.

This constructs an Inquire with the default relation of `==` for all predicates,
and the default junction of `&` for all combinations of predicates.

#### Modification

Since Inquire is also a `Foldable` and `Functor`,
it provides the ability to `fold` and `map` over all of `val`s, respectively.
These operations are similar to the native `reduce` and `map` for javascript arrays,
the [fantasy land](fantasy land) specification,
or something you might get from a library like underscore.
So, if you can use `Array.map`, `_.reduceRight` or similar,
you already know how to use these functions.

###### foldr
###### (v -> v' -> v') -> v' -> Inquire k v -> v'

This is a right associative "catamorphism".
What that means is that it takes each value and joins it to the next given the supplied function.

The first argument is a binary function.
The second argument is the initial value.
The last argument is the Inquire.

###### foldl
###### (v' -> v -> v') -> v' -> Inquire k v -> v'

This is a left associative "catamorphism".
What that means is that it takes each value and joins it to the next given the supplied function.

The first argument is a binary function.
The second argument is the initial value.
The last argument is the Inquire.

###### map
###### (v -> v') -> Inquire k v -> Inquire k v'

This will modify every value in the Inquire with the given function.

There are a few modification combinators available.

###### filterByKey
###### (k -> Boolean) -> Inquire k v -> Inquire k v

Removes all predicates that fail the supplied boolean test.
The first argument must be a function that tests a `key` and returns a boolean.

###### filterByVal
###### (v -> Boolean) -> Inquire k v -> Inquire k v

Removes all predicates that fail the supplied boolean test.
The first argument must be a function that tests a `val` and returns a boolean.

###### findByKey
###### k -> Inquire k v -> Maybe (Inquire k v)

Searches for the first element which has the specified `key`.
If successful, will return a `Just predicate`.
If unsuccessful, will return a `Nothing`.

This is biased to the right.

###### findByVal
###### v -> Inquire k v -> Maybe (Inquire k v)

Searches for the first element which has the specified `val`.
If successful, will return a `Just predicate`.
If unsuccessful, will return a `Nothing`.

This is biased to the right.

###### remo
###### :: (Inquire k v -> Inquire k v -> Boolean) -> Inquire k v -> Inquire k v -> Inquire k v

Helper function for `remove` and `removeAll`.
Requires a binary function that takes two inquires and returns a boolean indicating whether the to continue removal.

###### remove
###### Inquire k v -> Inquire k v -> Inquire k v

Removes the rightmost instance of the first Inquire from the second Inquire.

###### removeAll
###### Inquire k v -> Inquire k v -> Inquire k v

Removes every instance of the first Inquire from the second Inquire.

###### replaceValByKey
###### v -> k -> Inquire k v -> Inquire k v

Replaces each Inquire that has the specified `key` with the given `val`.
The first argument is the `val` to replace with.
The second argument is the `key` to test with.

###### replaceValByVal
###### v -> v -> Inquire k v -> Inquire k v

Replaces each Inquire that has the specified `val` with the given `val`.
The first argument is the `val` to replace with.
The second argument is the `val` to test with.

###### unsafeFindByKey
###### k -> Inquire k v -> Maybe (Inquire k v)

Unsafe version of [findByKey](#findByKey).
This is unsafe in the sense that it uses `Prelude.unsafeRefEq` for equality testing.
AKA `===` in javascript.

So it could fail depending on what the values are.
Use with caution!

However, it provides a nice wrapper around the safe version.
i.e. you don't have to pass a two typeclass dictionary references to the safe version.

###### unsafeFindByVal
###### v -> Inquire k v -> Maybe (Inquire k v)

Unsafe version of [findByVal](#findByVal).
This is unsafe in the sense that it uses `Prelude.unsafeRefEq` for equality testing.
AKA `===` in javascript.

So it could fail depending on what the values are.
Use with caution!

However, it provides a nice wrapper around the safe version.
i.e. you don't have to pass a two typeclass dictionary references to the safe version.

###### unsafeFromObj
###### { | a } -> Inquire k v

Unsafe way to drop an object into an Inquire.

This just iterates through the object and tries to take all the top level keys and vals as arguments to the Inquire.

Conjoins everything with the relation equals.

Note, there's no telling what will happen if you put in something that's not a simple key val object.

###### unsafeRemove
###### Inquire k v -> Inquire k v -> Inquire k v

Unsafe version of [remove](#remove).
This is unsafe in the sense that it uses `Prelude.unsafeRefEq` for equality testing.
AKA `===` in javascript.

So it could fail depending on what the values are.
Use with caution!

However, it provides a nice wrapper around the safe version.
i.e. you don't have to pass a two typeclass dictionary references to the safe version.

###### unsafeRemoveAll
###### Inquire k v -> Inquire k v -> Inquire k v

Unsafe version of [removeAll](#removeAll).
This is unsafe in the sense that it uses `Prelude.unsafeRefEq` for equality testing.
AKA `===` in javascript.

So it could fail depending on what the values are.
Use with caution!

However, it provides a nice wrapper around the safe version.
i.e. you don't have to pass a two typeclass dictionary references to the safe version.

###### unsafeReplaceValByKey
###### v -> k -> Inquire k v -> Inquire k v

Unsafe version of [replaceValByKey](#replaceValByKey).
This is unsafe in the sense that it uses `Prelude.unsafeRefEq` for equality testing.
AKA `===` in javascript.

So it could fail depending on what the values are.
Use with caution!

However, it provides a nice wrapper around the safe version.
i.e. you don't have to pass a two typeclass dictionary references to the safe version.

###### unsafeReplaceValByVal
###### v -> v -> Inquire k v -> Inquire k v

Unsafe version of [replaceValByVal](#replaceValByVal).
This is unsafe in the sense that it uses `Prelude.unsafeRefEq` for equality testing.
AKA `===` in javascript.

So it could fail depending on what the values are.
Use with caution!

However, it provides a nice wrapper around the safe version.
i.e. you don't have to pass a two typeclass dictionary references to the safe version.

#### Zipper

The Zipper is a purely functional data structure for manipulating other data structures.
An immense amount of information can be found on Zippers.
It was first written about as a [Functional Pearl][the zipper] by [Gérard Huet][huet].
The basic idea is that you create a `hole` in a data structure that you want to modify,
and keep track of the `context` to that `hole`.
Once you modify the `hole`, you can then use the `context` to find your way back to the top of the structure.

In our case, the `hole` will be an Inquire, and the `context` the path to the top of the Inquire.
We can move in the four cardinal directions: Up, Down, Left, Right.
This allows us to go to any position in our Inquire,
modify that Predicate, Junction, or Wrap, and return the new structure easily.

###### toInquireZ
###### Inquire k v -> InquireZ k v

Creates a new Zipper from an Inquire.
This is how we can start to manipulate our Inquire.

###### fromInquireZ
###### InquireZ k v -> Inquire k v

Returns our modified Inquire from a Zipper.

###### zipLeft
###### InquireZ k v -> Maybe (InquireZ k v)

Moves to the left of the current `hole`, if possible, or does nothing.

###### zipRight
###### InquireZ k v -> Maybe (InquireZ k v)

Moves to the right of the current `hole`, if possible, or does nothing.

###### zipDown
###### InquireZ k v -> Maybe (InquireZ k v)

Moves down or to the right of the current `hole`, if possible, or does nothing.

###### zipUp
###### InquireZ k v -> Maybe (InquireZ k v)

Moves up of the current `hole`, if possible, or does nothing.

###### zipUpmost
###### InquireZ k v -> InquireZ k v

Moves to the top of the Zipper.

###### zipLeftmost
###### InquireZ k v -> InquireZ k v

Moves as far to the left of the Zipper as possible.

###### zipRightmost
###### InquireZ k v -> InquireZ k v

Moves as far to the right of the Zipper as possible.

###### getHole
###### InquireZ k v -> Inquire k v

Peeks into the Zipper and returns the current Inquire in the `hole`.

###### query
###### (Inquire k v -> a) -> InquireZ k v -> a

Applies a function to the current Inquire in the `hole` and returns the result.

###### modify
###### (Inquire k v -> Inquire k v) -> InquireZ k v -> InquireZ k v

Applies a function to the current Inquire in the `hole`.


## Examples

So let's say we've got a Todo list available at some endpoint.
We'd like to retrieve all of the items in the list that are due after tax day 2014.
We'll use moment to make things a bit easier.

```javascript
> inquire = require('inquire')
> I = inquire.Inquire
> moment = require('moment')
> query0 = I.gt('due')(moment('Apr 15, 2014'))
> I.generate(query0)
'due>Tue%20Apr%2015%202014%2000%3A00%3A00%20GMT-0700'
```

Later on if you decide to change the date value,
there are combinators that make it much easier than doing this by hand:

```javascript
> IC = inquire.Inquire_Combinators
> query1 = IC.unsafeReplaceValByKey('tonight')('due')(query0)
> I.generate(query1)
'due>tonight'
```

Maybe instead you want to move the cut-off point a month sooner, so March 15, 2014.
This can be done using the fact that Inquire is a Functor.

```javascript
> prevMonth = function(x) { return moment(x).subtract('month', 1); }
> query2 = IC.map(prevMonth)(query0)
> I.generate(query2)
'due>Sat%20Mar%2015%202014%2000%3A00%3A00%20GMT-0700'
```

Of course, this will fail miserably if you have more values that aren't moments.
The more robust way currently is to use the Zipper.
Let's start by making our query a bit bigger and seeing it fail.

```javascript
> query3 = I.and(query0)(IC.fromArrayPair([['user', 'Joe'], ['subject', 'bills']]))
> I.generate(query3)
'due>Tue%20Apr%2015%202014%2000%3A00%3A00%20GMT-0700&subject=bills&user=Joe'
> query4 = IC.map(prevMonth)(query3)
> I.generate(query4)
'due>Sat%20Mar%2015%202014%2000%3A00%3A00%20GMT-0700&subject=Invalid%20date&user=Invalid%20date'
```

So as we can see, it failed because the function was expecting to operate on moments.

N.B. This wouldn't be a problem in a language like purescript, as the line wouldn't have even compile.
This is only a concern in javascript because it does not respect types.

So let's use our zipper to find that specific date, and change it.
We know it's the leftmost predicate in our query, so let's go there, and modify that.

The basic idea with the Zipper is that it allows you to traverse a data structure,
modify some part of it, and then return the new modified structure.

```javascript
> IZ = inquire.Inquire_Zipper
> zip0 = IZ.toInquireZ(query3)
> zip1 = IZ.zipLeftmost(zip0)
> zip2 = IZ.modify(IC.map(prevMonth))(zip1)
> query5 = IZ.fromInquireZ(zip2)
> I.generate(query5)
'due>Sat%20Mar%2015%202014%2000%3A00%3A00%20GMT-0700&subject=bills&user=Joe'
```

Wonderful! We see that the Zipper made it so our logic was expressed almost verbatim in the code.
It was composable and reusable.

[armet]: http://armet.github.io/
[inquire]: https://npmjs.org/package/inquire
[fantasy land]: https://github.com/fantasyland/fantasy-land
[the zipper]: http://www.st.cs.uni-saarland.de/edu/seminare/2005/advanced-fp/docs/huet-zipper.pdf
[huet]: http://pauillac.inria.fr/~huet/
