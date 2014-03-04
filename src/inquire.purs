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

  instance Prelude.Eq Rel where
    (==) EQ EQ = true
    (==) NE NE = true
    (==) GT GT = true
    (==) GE GE = true
    (==) LT LT = true
    (==) LE LE = true
    (==) _  _  = false

    (/=) r  r' = not (r == r')

  instance Prelude.Eq JuncOp where
    (==) And And = true
    (==) Or  Or  = true
    (==) _   _   = false

    (/=) r   r'  = not (r == r')

  instance Prelude.Eq WrapOp where
    (==) NoBool NoBool = true
    (==) Not    Not    = true
    (==) _      _      = false

    (/=) r      r'     = not (r == r')

  instance (Eq k, Eq v) => Prelude.Eq (Inquire k v) where
    (==) EmptyAnd     EmptyAnd        = true
    (==) EmptyOr      EmptyOr         = true
    (==) (Pred k r v) (Pred k' r' v') = k == k' && r == r' && v == v'
    (==) (Junc p o q) (Junc p' o' q') = p == p' && o == o' && q == q'
    (==) (Wrap o p)   (Wrap o' p')    = p == p' && o == o'
    (==) _            _               = false

    (/=) i  i' = not (i == i')

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

  instance Algebra.ComplementedLattice (Inquire k v) where
    (|~|) EmptyAnd = EmptyOr
    (|~|) EmptyOr  = EmptyAnd
    (|~|) p        = Wrap Not p

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

  -- FIXME
  -- There should be some better way to `generate` from js.
  -- This depends on compiler details, which is horribly fragile.
  foreign import generate "function generate(i) {\
                          \  var showDict = {\
                          \    show: function(k) {\
                          \      return k.toString();\
                          \    }\
                          \  };\
                          \  return gen(showDict)(showDict)(i);\
                          \}" :: forall k v. Inquire k v -> String

  gen :: forall k v. (Show k, Show v) => Inquire k v -> String
  gen i = show i

  pred :: forall k v. {key :: k, val :: v, rel :: Rel} -> Inquire k v
  pred o = Pred o.key o.rel o.val

  eq :: forall k v. {key :: k, val :: v} -> Inquire k v
  eq o = pred {key: o.key, rel: EQ, val: o.val}
  ne :: forall k v. {key :: k, val :: v} -> Inquire k v
  ne o = pred {key: o.key, rel: NE, val: o.val}
  gt :: forall k v. {key :: k, val :: v} -> Inquire k v
  gt o = pred {key: o.key, rel: GT, val: o.val}
  ge :: forall k v. {key :: k, val :: v} -> Inquire k v
  ge o = pred {key: o.key, rel: GE, val: o.val}
  lt :: forall k v. {key :: k, val :: v} -> Inquire k v
  lt o = pred {key: o.key, rel: LT, val: o.val}
  le :: forall k v. {key :: k, val :: v} -> Inquire k v
  le o = pred {key: o.key, rel: LE, val: o.val}

  and :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  and i1 i2 = i1 |&| i2

  or :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  or i1 i2 = i1 ||| i2

  neg :: forall k v. Inquire k v -> Inquire k v
  neg p = (|~|) p

  implies :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  implies p q = (|~|) p ||| q

  equiv :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  equiv p q = (p |&| q) ||| ((|~|) p |&| (|~|) q)

  -- These should all be part of BooleanAlgebra, but no bueno at this momento.

  absorb :: forall k v. (Eq k, Eq v) => Inquire k v -> Inquire k v
  absorb (Junc p And (Junc p' Or  _)) | p == p' = p
  absorb (Junc p Or  (Junc p' And _)) | p == p' = p

  associate :: forall k v. Inquire k v -> Inquire k v
  associate (Junc p And (Junc q And r)) = (p |&| q) |&| r
  associate (Junc p Or  (Junc q Or  r)) = (p ||| q) ||| r
  associate (Junc (Junc p And q) And r) = p |&| (q |&| r)
  associate (Junc (Junc p Or  q) Or  r) = p ||| (q ||| r)

  assocLeft :: forall k v. Inquire k v-> Inquire k v
  assocLeft (Junc p And (Junc q And r)) = (p |&| q) |&| r
  assocLeft (Junc p Or  (Junc q Or  r)) = (p ||| q) ||| r

  assocRight :: forall k v. Inquire k v-> Inquire k v
  assocRight (Junc (Junc p And q) And r) = p |&| (q |&| r)
  assocRight (Junc (Junc p Or  q) Or  r) = p ||| (q ||| r)

  commute :: forall k v. Inquire k v -> Inquire k v
  commute (Junc p And q) = q |&| p
  commute (Junc p Or  q) = q ||| p

  distribute :: forall k v. Inquire k v -> Inquire k v
  distribute (Junc p And (Junc q Or  r)) = (p ||| q) |&| (p ||| r)
  distribute (Junc p Or  (Junc q And r)) = (p |&| q) ||| (p |&| r)

  codistribute :: forall k v. Inquire k v -> Inquire k v
  codistribute (Junc (Junc p Or  q) And (Junc p Or  r)) = p |&| (q ||| r)
  codistribute (Junc (Junc p And q) Or  (Junc p And r)) = p ||| (q |&| r)

  idempotent :: forall k v. (Eq k, Eq v) => Inquire k v -> Inquire k v
  idempotent (Junc p And p') | p == p' = p
  idempotent (Junc p Or  p') | p == p' = p
