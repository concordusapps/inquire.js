module Inquire where

  import Prelude
  import Algebra

  data Inquire k v = EmptyAnd
                   | EmptyOr
                   | Pred k Rel v
                   | Junc (Inquire k v) JuncOp (Inquire k v)
                   | Wrap WrapOp (Inquire k v)

  data Rel = IEQ
           | INE
           | IGT
           | IGE
           | ILT
           | ILE

  data JuncOp = IAnd
              | IOr

  data WrapOp = INoBool
              | INot

  instance Prelude.Show Rel where
    show IEQ = "="
    show INE = "!="
    show IGT = ">"
    show IGE = ">="
    show ILT = "<"
    show ILE = "<="

  instance (Show k, Show v) => Prelude.Show (Inquire k v) where
    show EmptyAnd = ""
    show EmptyOr = ""
    show (Pred k r v) = show k ++ show r ++ show v

  instance Prelude.Functor (Inquire k) where
    (<$>) _ EmptyAnd = EmptyAnd
    (<$>) _ EmptyOr = EmptyOr
    (<$>) f (Pred k r v) = Pred k r (f v)
    (<$>) f (Junc i1 op i2) = Junc (f <$> i1) op (f <$> i2)
    (<$>) f (Wrap op i) = Wrap op (f <$> i)

  instance Algebra.Semigroup (Inquire k v) where
    (|+|) EmptyAnd EmptyAnd = EmptyAnd
    (|+|) p EmptyAnd = p
    (|+|) EmptyAnd p = p
    (|+|) p q = Junc p IAnd q

  instance Algebra.Monoid (Inquire k v) where
    ident = EmptyAnd

  and :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  and = (|+|)

  or :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  or i1 i2 = Junc i1 IOr i2

  (<<$>>) :: forall k v v'. (v -> v') -> Inquire k v -> Inquire k v'
  (<<$>>) = (<$>)
