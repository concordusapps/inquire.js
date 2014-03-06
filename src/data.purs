module Data.Foldable where

  import Prelude
  import Data.Monoid

  class Foldable f where
    foldr :: forall a b. (a -> b -> b) -> b -> f a -> b
    foldl :: forall a b. (b -> a -> b) -> b -> f a -> b

  class BiFoldable f where
    bifoldr :: forall a b c. (a -> c -> c) -> (b -> c -> c) -> c -> f a b -> c
    bifoldl :: forall a b c. (c -> a -> c) -> (c -> b -> c) -> c -> f a b -> c

  foldMap :: forall a f m. (Foldable f, Monoid m) => (a -> m) -> f a -> m
  foldMap f t = foldr ((<>) <<< f) mempty t

  -- filter :: forall a f t. (Applicative f, Foldable t, Monoid (f a)) => (a -> Boolean) -> t a -> f a
  -- filter p f = foldMap (\x -> if p x then pure x else mempty) f

module Data.Functor where

  class BiFunctor f where
    (<$$>) :: forall a b c d. (a -> c) -> (b -> d) -> f a b -> f c d

module Data.Traversable where

  import Prelude
  import Data.Foldable

  -- class (Data.Foldable.Foldable t, Data.Functor.Functor t) => Traversable t where
  class Traversable t where
    traverse :: forall a b f. (Applicative f) => (a -> f b) -> t a -> f (t b)

  sequence :: forall a f t. (Applicative f, Traversable t) => t (f a) -> f (t a)
  sequence t = traverse id t
