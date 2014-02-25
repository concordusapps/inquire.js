{-
  This is based mostly on spire.
-}

module Algebra where

  import Prelude

  -- Set with an associative operation.
  class Semigroup a where
    (|+|) :: a -> a -> a

  -- Semigroup with an identity.
  class Monoid a where
    ident :: a

  -- Monoid with an inverse.
  class Group a where
    inverse :: a -> a

  -- Semigroup over |+| and |*|.
  class Semiring a where
    (|*|) :: a -> a -> a
    (|**|) :: a -> a -> a

  -- Group over |+| and Semigroup over |*|.
  class Rng a where
    (|-|) :: a -> a -> a
    -- zero :: a

  -- Monoid over |+| and |*|.
  class Rig a where
    zero :: a
    one :: a

  -- Group over |+| and monoid over |*|.
  class Ring a where

  -- Commutative Group over |+| and |*| with distributivity of |*| over |+|.
  class Field a where
    recip :: a -> a
    (|/|) :: a -> a -> a

  -- Commutative semigroup with idempotency.
  class Semilattice a where
    (|\/|) :: a -> a -> a

  -- Semilattice over meet and join with absorption.
  class Lattice a where

  -- Lattice with distributivity between both meet and join.
  class DistributiveLattice a where

  -- Lattice with a least element and a greatest element.
  class BoundedLattice a where
    top :: a
    bottom :: a

  -- BoundedLattice where every element has a complement.
  class ComplementedLattice a where
    (|~|) :: a -> a

  -- Complemented DistributiveLattice
  class BooleanAlgebra a where
    (|&|) :: a -> a -> a
    (|||) :: a -> a -> a
