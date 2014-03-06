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
        * [assocLeft](#assocLeft)
        * [assocRight](#assocRight)
        * [commute](#commute)
        * [distribute](#distribute)
        * [codistribute](#codistribute)
        * [idempotent](#idempotent)

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
We the actual complement is to take each predicate and change its relational operator.

| `==` | `!=` |
| `>`  | `<=` |
| `<`  | `>=` |

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

###### eq :: k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `==`.
Will return results where the `key` on the model equals the supplied `val`

###### ne :: k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `!=`
Will return results where the `key` on the model does not equal the supplied `val`

###### gt :: k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `>`
Will return results where the `key` on the model is greater than the supplied `val`

###### ge :: k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `>=`
Will return results where the `key` on the model is greater than or equal to the supplied `val`

###### lt :: k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `<`
Will return results where the `key` on the model is less than the supplied `val`

###### le :: k -> v -> Inquire k v

Constructs an Inquire from two values with the relation `<=`
Will return results where the `key` on the model is less than or equal to the supplied `val`

#### Junction combinators

###### and :: Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires with the conjunction `&`
Will return results where both `left` and `right` subqueries are true.

###### or :: Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires with the disjunction `;`
Will return results where either one, or both, `left` and `right` subqueries are true.

#### Wrap combinator

###### not :: Inquire k v -> Inquire k v

Constructs an Inquire from one Inquire with the negation `!`
Will return results where subquery is false.

#### Derived combinators

From these simple combinators, we can create more complex ideas:

###### implies :: Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires.
This is the direct definition of implication, namely `(NOT p) OR q`.

###### equiv :: Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires.
This is the direct definition of equivalence, namely `(p AND q) OR ((NOT p) AND (NOT q))`.

###### xor :: Inquire k v -> Inquire k v -> Inquire k v

Constructs an Inquire from two Inquires.
This is the direct definition of exclusive or, namely `(p AND (NOT q)) OR ((NOT p) AND q)`.

###### absorb :: Inquire k v -> Inquire k v

Simplifies specific Inquires.

`p AND (p OR q)` => `p`

`p OR (p AND q)` => `p`

###### associate :: Inquire k v -> Inquire k v

Reorders parens from what they are now to the other possible way.

`p AND (q AND r)` => `(p AND q) AND r`

`(p AND q) AND r` => `p AND (q AND r)`

`p OR (q OR r)` => `(p OR q) OR r`

`(p OR q) OR r` => `p OR (q OR r)`

###### assocLeft :: Inquire k v-> Inquire k v

Reorders parens to the left.

`p AND (q AND r)` => `(p AND q) AND r`

`p OR (q OR r)` => `(p OR q) OR r`

###### assocRight :: Inquire k v-> Inquire k v

Reorders parens to the right.

`(p AND q) AND r` => `p AND (q AND r)`

`(p OR q) OR r` => `p OR (q OR r)`

###### commute :: Inquire k v -> Inquire k v

Reorders queries.

`p AND q` => `q AND p`

`p OR q` => `q OR p`

###### distribute :: Inquire k v -> Inquire k v

Distributes one query over its dual.

`p AND (q OR r)` => `(p OR q) AND (p OR r)`

`p OR (q AND r)` => `(p AND q) OR (p AND r)`

###### codistribute :: Inquire k v -> Inquire k v

Performs the opposite of distribution.

`(p OR q) AND (p OR r)` => `p AND (q OR r)`

`(p AND q) OR (p AND r)` => `p OR (q AND r)`

###### idempotent :: Inquire k v -> Inquire k v

Simplifies the Inquire with the Idempotency rule.

`p AND p` => `p`

`p OR p` => `p`



[armet]: http://armet.github.io/
[inquire]: https://npmjs.org/package/inquire
