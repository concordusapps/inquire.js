module Network.Inquire
  ( Inquire(..)
  , Rel(..)
  , JuncOp(..)
  , WrapOp(..)
  , generate
  , unsafeGenerate
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
  ) where

  import Prelude
  import Global
  import Data.Array
  import Data.BiFoldable
  import Data.BiFunctor
  import Data.BiTraversable
  import Data.Monoid
  import Data.Traversable

  import qualified Data.Foldable as F

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

  data JuncOp = AND
              | OR

  data WrapOp = NOBOOL
              | NOT

  instance eqRel :: Eq Rel where
    (==) IEQ IEQ = true
    (==) INE INE = true
    (==) IGT IGT = true
    (==) IGE IGE = true
    (==) ILT ILT = true
    (==) ILE ILE = true
    (==) _  _  = false

    (/=) r  r' = not (r == r')

  instance eqJuncOp :: Eq JuncOp where
    (==) AND AND = true
    (==) OR  OR  = true
    (==) _   _   = false

    (/=) r   r'  = not (r == r')

  instance eqWrapOp :: Eq WrapOp where
    (==) NOBOOL NOBOOL = true
    (==) NOT    NOT    = true
    (==) _      _      = false

    (/=) r      r'     = not (r == r')

  instance eqInquire :: (Eq k, Eq v) => Eq (Inquire k v) where
    (==) EmptyAnd     EmptyAnd        = true
    (==) EmptyOr      EmptyOr         = true
    (==) (Pred k r v) (Pred k' r' v') = k == k' && r == r' && v == v'
    (==) (Junc p o q) (Junc p' o' q') = p == p' && o == o' && q == q'
    (==) (Wrap o p)   (Wrap o' p')    = p == p' && o == o'
    (==) _            _               = false

    (/=) i  i' = not (i == i')

  instance showRel :: Show Rel where
    show IEQ = "="
    show INE = "!="
    show IGT = ">"
    show IGE = ">="
    show ILT = "<"
    show ILE = "<="

  instance showJuncOp :: Show JuncOp where
    show AND = "&"
    show OR  = ";"

  instance showWrapOp :: Show WrapOp where
    show NOBOOL = ""
    show NOT    = "!"

  instance showInquire :: (Show k, Show v) => Show (Inquire k v) where
    show EmptyAnd = "EmptyAnd"
    show EmptyOr = "EmptyOr"
    show (Pred k r v) = unsafeEncode k ++ show r ++ unsafeEncode v
    -- show (Junc EmptyAnd _ EmptyAnd) = "AA"
    -- show (Junc EmptyAnd _ EmptyOr)  = "AO"
    -- show (Junc EmptyAnd _ EmptyOr)  = "OA"
    -- show (Junc EmptyOr _ EmptyOr)   = "OO"
    -- show (Junc l _ EmptyOr)         = show l
    -- show (Junc l _ EmptyAnd)        = show l
    -- show (Junc EmptyAnd _ r)        = show r
    -- show (Junc EmptyOr _ r)         = show r
    show (Junc l@(Pred _ _ _) o r@(Pred _ _ _)) = show l ++ show o ++ show r
    show (Junc l@(Pred _ _ _) o r@(Junc _ o' _)) | o == o' = show l ++ show o ++ show r
    show (Junc l@(Junc _ o _) o' r@(Pred _ _ _)) | o == o' = show l ++ show o ++ show r
    show (Junc l@(Pred _ _ _) o r)              = show l ++ show o ++ "(" ++ show r ++ ")"
    show (Junc l o r@(Pred _ _ _))              = "(" ++ show l ++ ")" ++ show o ++ show r
    show (Junc l@(Junc _ o _) o' r@(Junc _ o'' _)) | o == o' && o' == o'' = show l ++ show o ++ show r
    show (Junc l@(Junc _ o _) o' r) | o == o'   = show l ++ show o ++ "(" ++ show r ++ ")"
    show (Junc l o r@(Junc _ o' _)) | o == o'   = "(" ++ show l ++ ")" ++ show o ++ show r
    show (Junc l o r)                           = "(" ++ show l ++ ")" ++ show o ++ "(" ++ show r ++ ")"
    show (Wrap NOBOOL i@(Wrap _ _)) = show i
    show (Wrap o i@(Wrap NOBOOL _))   = show i
    show (Wrap o i)                   = show o ++ "(" ++ show i ++ ")"

  instance functorInquire :: Functor (Inquire k) where
    (<$>) _ EmptyAnd        = EmptyAnd
    (<$>) _ EmptyOr         = EmptyOr
    (<$>) f (Pred k r v)    = Pred k r (f v)
    (<$>) f (Junc i1 op i2) = Junc (f <$> i1) op (f <$> i2)
    (<$>) f (Wrap op i)     = Wrap op (f <$> i)

  instance monoidInquire :: Monoid (Inquire k v) where
    mempty = EmptyAnd
    (<>) i EmptyAnd = i
    (<>) EmptyAnd i = i
    (<>) i1 i2 = Junc i1 AND i2

  instance biFunctorInquire :: BiFunctor Inquire where
    (<$$>) _ _ EmptyAnd        = EmptyAnd
    (<$$>) _ _ EmptyOr         = EmptyOr
    (<$$>) f g (Pred k r v)    = Pred (f k) r (g v)
    (<$$>) f g (Junc i1 op i2) = Junc ((<$$>) f g i1) op ((<$$>) f g i2)
    (<$$>) f g (Wrap op i)     = Wrap op ((<$$>) f g i)

  instance foldableInquire :: F.Foldable (Inquire k) where
    foldr _ z EmptyAnd     = z
    foldr _ z EmptyOr      = z
    foldr f z (Pred _ _ v) = v `f` z
    foldr f z (Junc l _ r) = F.foldr f (F.foldr f z r) l
    foldr f z (Wrap _ i)   = F.foldr f z i

    foldl f z i = F.foldr (flip f) z i

    foldMap f = F.foldr ((<>) <<< f) mempty

  instance biFoldableInquire :: BiFoldable Inquire where
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

    sequence = traverse id

  instance bitraversableInquire :: BiTraversable Inquire where
    bitraverse _ _ EmptyAnd = pure EmptyAnd
    bitraverse _ _ EmptyOr  = pure EmptyOr
    bitraverse f g (Pred k r v) = Pred <$> f k <*> pure r <*> g v
    bitraverse f g (Junc l o r) = Junc <$> bitraverse f g l <*> pure o <*> bitraverse f g r
    bitraverse f g (Wrap o i)   = Wrap o <$> bitraverse f g i

    bisequence = bitraverse id id

  instance boolLikeInquire :: BoolLike (Inquire k v) where
    -- (||) EmptyAnd p        = EmptyAnd
    -- (||) p        EmptyAnd = EmptyAnd
    -- (||) p        EmptyOr  = p
    -- (||) EmptyOr  p        = p
    (||) p        q        = Junc p OR q

    -- (&&) EmptyOr  p        = EmptyOr
    -- (&&) p        EmptyOr  = EmptyOr
    -- (&&) p        EmptyAnd = p
    -- (&&) EmptyAnd p        = p
    (&&) p        q        = Junc p AND q

    -- not EmptyAnd = EmptyOr
    -- not EmptyOr  = EmptyAnd
    not p        = Wrap NOT p

  -- FIXME
  -- There should be some better way to `generate` from js.
  -- This depends on compiler details, which is horribly fragile.
  foreign import unsafeGenerate
    "function unsafeGenerate(i) {\
    \  var showDict = {\
    \    show: function(k) {\
    \      if ({}.toString.call(k).slice(8, -1) === 'Function') {\
    \        return k().toString();\
    \      } else {\
    \        return k.toString();\
    \      }\
    \    }\
    \  };\
    \  return generate(showDict)(showDict)(i);\
    \}" :: forall k v. Inquire k v -> String

  foreign import unsafeEncode
    "function unsafeEncode(x) {\
    \  var show = function(k) {\
    \    if ({}.toString.call(k).slice(8, -1) === 'Function') {\
    \      return k().toString();\
    \    } else {\
    \      return k.toString();\
    \    }\
    \  };\
    \  if ({}.toString.call(x).slice(8, -1) === 'Array') {\
    \    return x.map(encodeURIComponent).join();\
    \  } else {\
    \    return encodeURIComponent(show(x));\
    \  }\
    \}" :: forall a. a -> String

  generate :: forall k v. (Show k, Show v) => Inquire k v -> String
  generate i = encodeURIComponent (show i)

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
  eqObj o = pred {key: o.key, rel: IEQ, val: o.val}
  neObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  neObj o = pred {key: o.key, rel: INE, val: o.val}
  gtObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  gtObj o = pred {key: o.key, rel: IGT, val: o.val}
  geObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  geObj o = pred {key: o.key, rel: IGE, val: o.val}
  ltObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  ltObj o = pred {key: o.key, rel: ILT, val: o.val}
  leObj :: forall k v. {key :: k, val :: v} -> Inquire k v
  leObj o = pred {key: o.key, rel: ILE, val: o.val}

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
