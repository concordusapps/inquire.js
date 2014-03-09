module Inquire
  ( Inquire(..)
  , Rel(..)
  , JuncOp(..)
  , WrapOp(..)
  , gen
  , generate
  , eq
  , ne
  , gt
  , ge
  , lt
  , le
  , eqObj
  , neObj
  , gtObj
  , geObj
  , ltObj
  , leObj
  , and
  , or
  , neg
  , implies
  , equiv
  , xor
  , absorb
  , associate
  , assocLeft
  , assocRight
  , commute
  , distribute
  , codistribute
  , idempotent
  ) where

  import Prelude
  import Data.Foldable
  import Data.Functor
  import Data.Monoid
  import Data.Traversable

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

  data JuncOp = AND
              | OR

  data WrapOp = NOBOOL
              | NOT

  instance eqRel :: Prelude.Eq Rel where
    (==) EQ EQ = true
    (==) NE NE = true
    (==) GT GT = true
    (==) GE GE = true
    (==) LT LT = true
    (==) LE LE = true
    (==) _  _  = false

    (/=) r  r' = not (r == r')

  instance eqJuncOp :: Prelude.Eq JuncOp where
    (==) AND AND = true
    (==) OR  OR  = true
    (==) _   _   = false

    (/=) r   r'  = not (r == r')

  instance eqWrapOp :: Prelude.Eq WrapOp where
    (==) NOBOOL NOBOOL = true
    (==) NOT    NOT    = true
    (==) _      _      = false

    (/=) r      r'     = not (r == r')

  instance eqInquire :: (Prelude.Eq k, Prelude.Eq v) => Prelude.Eq (Inquire k v) where
    (==) EmptyAnd     EmptyAnd        = true
    (==) EmptyOr      EmptyOr         = true
    (==) (Pred k r v) (Pred k' r' v') = k == k' && r == r' && v == v'
    (==) (Junc p o q) (Junc p' o' q') = p == p' && o == o' && q == q'
    (==) (Wrap o p)   (Wrap o' p')    = p == p' && o == o'
    (==) _            _               = false

    (/=) i  i' = not (i == i')

  instance showRel :: Prelude.Show Rel where
    show EQ = "="
    show NE = "!="
    show GT = ">"
    show GE = ">="
    show LT = "<"
    show LE = "<="

  instance showJuncOp :: Prelude.Show JuncOp where
    show AND = "&"
    show OR  = ";"

  instance showWrapOp :: Prelude.Show WrapOp where
    show NOBOOL = ""
    show NOT    = "!"

  instance showInquire :: (Prelude.Show k, Prelude.Show v) => Prelude.Show (Inquire k v) where
    show EmptyAnd = ""
    show EmptyOr = ""
    show (Pred k r v) = show k ++ show r ++ show v
    show (Junc l@(Pred _ _ _) o r@(Pred _ _ _)) = show l ++ show o ++ show r
    show (Junc l@(Pred _ _ _) o r)              = show l ++ show o ++ "(" ++ show r ++ ")"
    show (Junc l o r@(Pred _ _ _))              = "(" ++ show l ++ ")" ++ show o ++ show r
    show (Junc l@(Junc _ o _) o' r@(Junc _ o'' _)) | o == o' && o' == o'' = show l ++ show o ++ show r
    show (Junc l@(Junc _ o _) o' r) | o == o'   = show l ++ show o ++ "(" ++ show r ++ ")"
    show (Junc l o r@(Junc _ o' _)) | o == o'   = "(" ++ show l ++ ")" ++ show o ++ show r
    show (Junc l o r)                           = "(" ++ show l ++ ")" ++ show o ++ "(" ++ show r ++ ")"
    show (Wrap NOBOOL i@(Wrap _ _)) = show i
    show (Wrap o i@(Wrap NOBOOL _))   = show i
    show (Wrap o i)                   = show o ++ "(" ++ show i ++ ")"

  instance functorInquire :: Prelude.Functor (Inquire k) where
    (<$>) _ EmptyAnd        = EmptyAnd
    (<$>) _ EmptyOr         = EmptyOr
    (<$>) f (Pred k r v)    = Pred k r (f v)
    (<$>) f (Junc i1 op i2) = Junc (f <$> i1) op (f <$> i2)
    (<$>) f (Wrap op i)     = Wrap op (f <$> i)

  instance monoidInquire :: Data.Monoid.Monoid (Inquire k v) where
    mempty = EmptyAnd
    (<>) i EmptyAnd = i
    (<>) EmptyAnd i = i
    (<>) i1 i2 = Junc i1 AND i2

  instance biFunctorInquire :: Data.Functor.BiFunctor Inquire where
    (<$$>) _ _ EmptyAnd        = EmptyAnd
    (<$$>) _ _ EmptyOr         = EmptyOr
    (<$$>) f g (Pred k r v)    = Pred (f k) r (g v)
    (<$$>) f g (Junc i1 op i2) = Junc ((<$$>) f g i1) op ((<$$>) f g i2)
    (<$$>) f g (Wrap op i)     = Wrap op ((<$$>) f g i)

  instance foldableInquire :: Data.Foldable.Foldable (Inquire k) where
    foldr _ z EmptyAnd     = z
    foldr _ z EmptyOr      = z
    foldr f z (Pred _ _ v) = v `f` z
    foldr f z (Junc l _ r) = foldr f (foldr f z r) l
    foldr f z (Wrap _ i)   = foldr f z i

    foldl f z i = foldr (flip f) z i

  instance biFoldableInquire :: Data.Foldable.BiFoldable Inquire where
    bifoldr _ _ z EmptyAnd     = z
    bifoldr _ _ z EmptyOr      = z
    bifoldr f g z (Pred k _ v) = k `f` (v `g` z)
    bifoldr f g z (Junc l _ r) = bifoldr f g (bifoldr f g z r) l
    bifoldr f g z (Wrap _ i)   = bifoldr f g z i

    bifoldl f g z i = bifoldr (flip f) (flip g) z i

  instance traversableInquire :: Traversable (Inquire k) where
    traverse _ EmptyAnd = pure EmptyAnd
    traverse _ EmptyOr  = pure EmptyOr
    traverse f (Pred k r v) = Pred k r <$> f v
    traverse f (Junc l o r) = Junc <$> traverse f l <*> pure o <*> traverse f r
    traverse f (Wrap o i)   = Wrap o <$> traverse f i

  instance bitraversableInquire :: BiTraversable Inquire where
    bitraverse _ _ EmptyAnd = pure EmptyAnd
    bitraverse _ _ EmptyOr  = pure EmptyOr
    bitraverse f g (Pred k r v) = Pred <$> f k <*> pure r <*> g v
    bitraverse f g (Junc l o r) = Junc <$> bitraverse f g l <*> pure o <*> bitraverse f g r
    bitraverse f g (Wrap o i)   = Wrap o <$> bitraverse f g i

  instance boolLikeInquire :: BoolLike (Inquire k v) where
    (||) EmptyAnd p        = EmptyAnd
    (||) p        EmptyAnd = EmptyAnd
    (||) p        EmptyOr  = p
    (||) EmptyOr  p        = p
    (||) p        q        = Junc p OR q

    (&&) EmptyOr  p        = EmptyOr
    (&&) p        EmptyOr  = EmptyOr
    (&&) p        EmptyAnd = p
    (&&) EmptyAnd p        = p
    (&&) p        q        = Junc p AND q

    not EmptyAnd = EmptyOr
    not EmptyOr  = EmptyAnd
    not p        = Wrap NOT p

  -- FIXME
  -- There should be some better way to `generate` from js.
  -- This depends on compiler details, which is horribly fragile.
  foreign import generate
    "function generate(i) {\
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

  eq :: forall k v. k -> v -> Inquire k v
  eq k v = eqObj {key: k, val: v}
  ne :: forall k v. k -> v -> Inquire k v
  ne k v = neObj {key: k, val: v}
  gt :: forall k v. k -> v -> Inquire k v
  gt k v = gtObj {key: k, val: v}
  ge :: forall k v. k -> v -> Inquire k v
  ge k v = geObj {key: k, val: v}
  lt :: forall k v. k -> v -> Inquire k v
  lt k v = ltObj {key: k, val: v}
  le :: forall k v. k -> v -> Inquire k v
  le k v = leObj {key: k, val: v}

  eqObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  eqObj o = pred {key: o.key, rel: EQ, val: o.val}
  neObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  neObj o = pred {key: o.key, rel: NE, val: o.val}
  gtObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  gtObj o = pred {key: o.key, rel: GT, val: o.val}
  geObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  geObj o = pred {key: o.key, rel: GE, val: o.val}
  ltObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  ltObj o = pred {key: o.key, rel: LT, val: o.val}
  leObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  leObj o = pred {key: o.key, rel: LE, val: o.val}

  and :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  and i1 i2 = i1 && i2

  or :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  or i1 i2 = i1 || i2

  neg :: forall k v. Inquire k v -> Inquire k v
  neg i = not i

  implies :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  implies p q = not p || q

  equiv :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  equiv p q = (p && q) || (not p && not q)

  xor :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  xor p q = (p && not q) || (not p && q)

  -- These should all be part of BooleanAlgebra, but no bueno at this momento.

  absorb :: forall k v. (Eq k, Eq v) => Inquire k v -> Inquire k v
  absorb (Junc p AND (Junc p' OR  _)) | p == p' = p
  absorb (Junc p OR  (Junc p' AND _)) | p == p' = p

  associate :: forall k v. Inquire k v -> Inquire k v
  associate (Junc p AND (Junc q AND r)) = (p && q) && r
  associate (Junc p OR  (Junc q OR  r)) = (p || q) || r
  associate (Junc (Junc p AND q) AND r) = p && (q && r)
  associate (Junc (Junc p OR  q) OR  r) = p || (q || r)

  assocLeft :: forall k v. Inquire k v-> Inquire k v
  assocLeft (Junc p AND (Junc q AND r)) = (p && q) && r
  assocLeft (Junc p OR  (Junc q OR  r)) = (p || q) || r

  assocRight :: forall k v. Inquire k v-> Inquire k v
  assocRight (Junc (Junc p AND q) AND r) = p && (q && r)
  assocRight (Junc (Junc p OR  q) OR  r) = p || (q || r)

  commute :: forall k v. Inquire k v -> Inquire k v
  commute (Junc p AND q) = q && p
  commute (Junc p OR  q) = q || p

  distribute :: forall k v. Inquire k v -> Inquire k v
  distribute (Junc p AND (Junc q OR  r)) = (p || q) && (p || r)
  distribute (Junc p OR  (Junc q AND r)) = (p && q) || (p && r)

  codistribute :: forall k v. Inquire k v -> Inquire k v
  codistribute (Junc (Junc p OR  q) AND (Junc p OR  r)) = p && (q || r)
  codistribute (Junc (Junc p AND q) OR  (Junc p AND r)) = p || (q && r)

  idempotent :: forall k v. (Eq k, Eq v) => Inquire k v -> Inquire k v
  idempotent (Junc p AND p') | p == p' = p
  idempotent (Junc p OR  p') | p == p' = p
