module Inquire where

  import Prelude
  import Algebra

  data Inquire k v = EmptyAnd
                   | EmptyOr
                   | Pred k Rel v
                   | Junc (Inquire k v) JuncOp (Inquire k v)
                   | Wrap WrapOp (Inquire k v)

  data Rel = EQ
           | NE
           | GT
           | GE
           | LT
           | LE

  data JuncOp = And
              | Or

  data WrapOp = NoBool
              | Not

  instance Prelude.Show Rel where
    show EQ = "="
    show NE = "!="
    show GT = ">"
    show GE = ">="
    show LT = "<"
    show LE = "<="

  instance Prelude.Show JuncOp where
    show And = "&"
    show Or  = ";"

  instance Prelude.Show WrapOp where
    show NoBool = ""
    show Not    = "!"

  instance (Show k, Show v) => Prelude.Show (Inquire k v) where
    show EmptyAnd = ""
    show EmptyOr = ""
    show (Pred k r v) = show k ++ show r ++ show v
    show (Junc p o q) = "(" ++ show p ++ ")" ++ show o ++ "(" ++ show q ++ ")"
    show (Wrap o i)   = show o ++ "(" ++ show i ++ ")"

  instance Prelude.Functor (Inquire k) where
    (<$>) _ EmptyAnd = EmptyAnd
    (<$>) _ EmptyOr = EmptyOr
    (<$>) f (Pred k r v) = Pred k r (f v)
    (<$>) f (Junc i1 op i2) = Junc (f <$> i1) op (f <$> i2)
    (<$>) f (Wrap op i) = Wrap op (f <$> i)

  -- type Andquire k v = Inquire k v
  -- type Orquire  k v = Inquire k v

  -- instance Algebra.Semigroup (Andquire k v) where
  --   (|+|) EmptyAnd EmptyAnd = EmptyAnd
  --   (|+|) p EmptyAnd = p
  --   (|+|) EmptyAnd p = p
  --   (|+|) p q = Junc p And q

  -- instance Algebra.Semigroup (Orquire k v) where
  --   (|+|) EmptyOr EmptyOr = EmptyOr
  --   (|+|) p EmptyOr = p
  --   (|+|) EmptyOr p = p
  --   (|+|) p q = Junc p Or q

  -- instance Algebra.Monoid (Andquire k v) where
  --   ident = EmptyAnd

  and :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  and i1 i2 = Junc i1 And i2

  or :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  or i1 i2 = Junc i1 Or i2
