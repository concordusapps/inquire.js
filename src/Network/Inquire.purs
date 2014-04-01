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
  import Data.Array
  import Data.BiFoldable
  import Data.BiFunctor
  import Data.BiTraversable
  import Data.Monoid
  import Data.Traversable

  import qualified Data.Foldable as F

  data Inquire k v = True
                   | False
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
    (==) True     True        = true
    (==) False      False         = true
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
    show True  = ""
    show False = ""
    show (Pred k r v) = unsafeEncode k ++ show r ++ unsafeEncode v
    show (Junc True _ True)   = ""
    show (Junc True _ False)  = ""
    show (Junc True _ False)  = ""
    show (Junc False _ False) = ""
    show (Junc l _ False)     = show l
    show (Junc l _ True)      = show l
    show (Junc True _ r)      = show r
    show (Junc False _ r)     = show r
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
    (<$>) _ True        = True
    (<$>) _ False         = False
    (<$>) f (Pred k r v)    = Pred k r (f v)
    (<$>) f (Junc i1 op i2) = Junc (f <$> i1) op (f <$> i2)
    (<$>) f (Wrap op i)     = Wrap op (f <$> i)

  instance monoidInquire :: Monoid (Inquire k v) where
    mempty = True
    (<>) i True = i
    (<>) True i = i
    (<>) i1 i2 = Junc i1 AND i2

  instance biFunctorInquire :: BiFunctor Inquire where
    (<$$>) _ _ True        = True
    (<$$>) _ _ False         = False
    (<$$>) f g (Pred k r v)    = Pred (f k) r (g v)
    (<$$>) f g (Junc i1 op i2) = Junc ((<$$>) f g i1) op ((<$$>) f g i2)
    (<$$>) f g (Wrap op i)     = Wrap op ((<$$>) f g i)

  instance foldableInquire :: F.Foldable (Inquire k) where
    foldr _ z True     = z
    foldr _ z False      = z
    foldr f z (Pred _ _ v) = v `f` z
    foldr f z (Junc l _ r) = F.foldr f (F.foldr f z r) l
    foldr f z (Wrap _ i)   = F.foldr f z i

    foldl f z i = F.foldr (flip f) z i

    foldMap f = F.foldr ((<>) <<< f) mempty

  instance biFoldableInquire :: BiFoldable Inquire where
    bifoldr _ _ z True     = z
    bifoldr _ _ z False      = z
    bifoldr f g z (Pred k _ v) = k `f` (v `g` z)
    bifoldr f g z (Junc l _ r) = bifoldr f g (bifoldr f g z r) l
    bifoldr f g z (Wrap _ i)   = bifoldr f g z i

    bifoldl f g z i = bifoldr (flip f) (flip g) z i

  instance traversableInquire :: Traversable (Inquire k) where
    traverse _ True = pure True
    traverse _ False  = pure False
    traverse f (Pred k r v) = Pred k r <$> f v
    traverse f (Junc l o r) = Junc <$> traverse f l <*> pure o <*> traverse f r
    traverse f (Wrap o i)   = Wrap o <$> traverse f i

    sequence = traverse id

  instance bitraversableInquire :: BiTraversable Inquire where
    bitraverse _ _ True = pure True
    bitraverse _ _ False  = pure False
    bitraverse f g (Pred k r v) = Pred <$> f k <*> pure r <*> g v
    bitraverse f g (Junc l o r) = Junc <$> bitraverse f g l <*> pure o <*> bitraverse f g r
    bitraverse f g (Wrap o i)   = Wrap o <$> bitraverse f g i

    bisequence = bitraverse id id

  instance boolLikeInquire :: BoolLike (Inquire k v) where
    (||) True p        = True
    (||) p        True = True
    (||) p        False  = p
    (||) False  p        = p
    (||) p        q        = Junc p OR q

    (&&) False  p        = False
    (&&) p        False  = False
    (&&) p        True = p
    (&&) True p        = p
    (&&) p        q        = Junc p AND q

    not True = False
    not False  = True
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

  foreign import encodeURIComponent :: String -> String

  generate :: forall k v. (Show k, Show v) => Inquire k v -> String
  generate i = show i

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
