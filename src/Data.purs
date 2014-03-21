-- This entire module should be in prelude.

module Data.BiFoldable where

  class BiFoldable f where
    bifoldr :: forall a b c. (a -> c -> c) -> (b -> c -> c) -> c -> f a b -> c
    bifoldl :: forall a b c. (c -> a -> c) -> (c -> b -> c) -> c -> f a b -> c

module Data.BiFunctor where

  import Prelude

  class BiFunctor f where
    (<$$>) :: forall a b c d. (a -> c) -> (b -> d) -> f a b -> f c d

  bimap :: forall a b c d f. (BiFunctor f) => (a -> c) -> (b -> d) -> f a b -> f c d
  bimap = (<$$>)

  first :: forall a b c f. (BiFunctor f) => (a -> b) -> f a c -> f b c
  first f = f <$$> id

  second :: forall a b c f. (BiFunctor f) => (a -> c) -> f b a -> f b c
  second f = id <$$> f

module Data.BiTraversable where

  import Prelude

  class BiTraversable t where
    bitraverse :: forall a b c d f. (Applicative f) => (a -> f c) -> (b -> f d) -> t a b -> f (t c d)
    bisequence :: forall a b f. (Applicative f) => t (f a) (f b) -> f (t a b)
