# Changelog

### 0.4.2
#### 03/09/14
- Encode predicates.
- Invoke functions when they're part of an Inquire.
- More pretty printing.
- Update README with examples and more documentation.

### 0.4.1
#### 03/08/14
- Export only what's necessary
- Use fixed record update syntax rather than rolling our own extend.
- Use Prelude.BoolLike instead of BooleanAlgebra.

### 0.4.0
#### 03/06/14
- Complete revamp in PureScript.
- No longer Fantasy Land compliant.
- Is now a {Bi,}{Foldable,Functor,Traversable} and a BooleanAlgebra
- Simplified dependencies.
- Increased capabilities immensely.
- Increased maintainability immensely.
- Increased documentation immensely.
- No coverage.
- No tests.

### 0.3.2
#### 09/10/13
- Added Fantasy Land algebra (Applicative, Monad).
- More tests.

### 0.3.1
#### 09/06/13
- Added Fantasy Land algebra (Monoid, Functor, Chain).
- Added Fantasy Land tests.
- Added devDependency `claire`.
- Added `testling` and badge.
- Added support for functions.
- Converted from `commonjs-everywhere` to `browserify`.
- Converted fantasy and parser tests from `chai` to `claire`.
- Fixed `map`.
- Updated grammar to follow official bnf.
- Updated grammar for groups.
- Using `waffle.io` for kanban.

### 0.3.0
#### 07/19/13
- First Fantasy Land algebra (Semigroup).
- Renamed repository to `inquire.js`.

### 0.2.1
#### 07/17/13
- Encode query strings.
- Updated dependency (`commonjs-everywhere`).

### 0.2.0
#### 07/15/13
- Parses strings to build an `inquire`.
- Optimizes the parens quite a bit.
- Minor bug fixes.
- More testing.

### 0.1.1
#### 06/23/13
- Added coveralls integration.

### 0.1.0
#### 06/23/13
- Re-implemented as an AST in preparation for parsing.
- Can pass `options` when building an inquire
- More tests for random cases.
- Added coverage utility.

### 0.0.6
#### 06/20/13
- `not` parsed the same as other functions.
- More tests.
- Fixed a bug where boolean operators were being prepended in some cases.

### 0.0.5
#### 06/19/13
- Massive cleanup.
- Exports for browser and node.

### 0.0.4
#### 06/19/13
- Removed dependency (`prelude-ls`).

### 0.0.3
#### 06/18/13
- Updated dependency (`prelude-ls`).

### 0.0.2
#### 06/18/13
- Added tests.
- Added more predicates (`neq`, `gt`, `gte`, `lt`, `lte`).
- Most predicates take `strings`, `objects`, `arrays` and `inquire`'s.
- More devDependencies (`livescript`, `mocha`, `chai`).

### 0.0.1
#### 06/16/13
- Initial release.
