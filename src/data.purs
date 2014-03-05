module Data.Foldable where

  class Foldable f where
    foldr :: forall a b. (a -> b -> b) -> b -> f a -> b

  class BiFoldable f where
    bifoldr :: forall a b c. (a -> c -> c) -> (b -> c -> c) -> c -> f a b -> c

module Data.Functor where

  class BiFunctor f where
    (<$$>) :: forall a b c d. (a -> c) -> (b -> d) -> f a b -> f c d
