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

  instance Algebra.BooleanAlgebra (Inquire k v) where
    (|||) EmptyAnd p        = EmptyAnd
    (|||) p        EmptyAnd = EmptyAnd
    (|||) p        EmptyOr  = p
    (|||) EmptyOr  p        = p
    (|||) p        q        = Junc p Or q

    (|&|) EmptyOr  p        = EmptyOr
    (|&|) p        EmptyOr  = EmptyOr
    (|&|) p        EmptyAnd = p
    (|&|) EmptyAnd p        = p
    (|&|) p        q        = Junc p And q

  and :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  and i1 i2 = Junc i1 And i2

  or :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  or i1 i2 = Junc i1 Or i2

  -- These should all be part of BooleanAlgebra, but no bueno at this momento.

  associate :: forall k v. Inquire k v -> Inquire k v
  associate (Junc p And (Junc q And r)) = Junc (Junc p And q) And r
  associate (Junc p Or  (Junc q Or  r)) = Junc (Junc p Or  q) Or  r
  associate (Junc (Junc p And q) And r) = Junc p And (Junc q And r)
  associate (Junc (Junc p Or  q) Or  r) = Junc p Or  (Junc q Or  r)

  assocLeft :: forall k v. Inquire k v-> Inquire k v
  assocLeft (Junc p And (Junc q And r)) = Junc (Junc p And q) And r
  assocLeft (Junc p Or  (Junc q Or  r)) = Junc (Junc p Or  q) Or  r

  assocRight :: forall k v. Inquire k v-> Inquire k v
  assocRight (Junc (Junc p And q) And r) = Junc p And (Junc q And r)
  assocRight (Junc (Junc p Or  q) Or  r) = Junc p Or  (Junc q Or  r)

  commute :: forall k v. Inquire k v -> Inquire k v
  commute (Junc p And q) = Junc q And p
  commute (Junc p Or  q) = Junc q Or  p

  distribute :: forall k v. Inquire k v -> Inquire k v
  distribute (Junc p And (Junc q Or  r)) = Junc (Junc p Or  q) And (Junc p Or  r)
  distribute (Junc p Or  (Junc q And r)) = Junc (Junc p And q) Or  (Junc p And r)

  codistribute :: forall k v. Inquire k v -> Inquire k v
  codistribute (Junc (Junc p Or  q) And (Junc p Or  r)) = Junc p And (Junc q Or  r)
  codistribute (Junc (Junc p And q) Or  (Junc p And r)) = Junc p Or  (Junc q And r)
