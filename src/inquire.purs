module Inquire where

  import Prelude
  import Algebra
  import Data.Foldable
  import Data.Functor

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
    (==) AND AND = true
    (==) OR  OR  = true
    (==) _   _   = false

    (/=) r   r'  = not (r == r')

  instance Prelude.Eq WrapOp where
    (==) NOBOOL NOBOOL = true
    (==) NOT    NOT    = true
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
    show AND = "&"
    show OR  = ";"

  instance Prelude.Show WrapOp where
    show NOBOOL = ""
    show NOT    = "!"

  instance (Show k, Show v) => Prelude.Show (Inquire k v) where
    show EmptyAnd = ""
    show EmptyOr = ""
    show (Pred k r v) = show k ++ show r ++ show v
    show (Junc p o q) = "(" ++ show p ++ ")" ++ show o ++ "(" ++ show q ++ ")"
    show (Wrap o i)   = show o ++ "(" ++ show i ++ ")"

  instance Prelude.Functor (Inquire k) where
    (<$>) _ EmptyAnd        = EmptyAnd
    (<$>) _ EmptyOr         = EmptyOr
    (<$>) f (Pred k r v)    = Pred k r (f v)
    (<$>) f (Junc i1 op i2) = Junc (f <$> i1) op (f <$> i2)
    (<$>) f (Wrap op i)     = Wrap op (f <$> i)

  instance Data.Functor.BiFunctor Inquire where
    (<$$>) _ _ EmptyAnd        = EmptyAnd
    (<$$>) _ _ EmptyOr         = EmptyOr
    (<$$>) f g (Pred k r v)    = Pred (f k) r (g v)
    (<$$>) f g (Junc i1 op i2) = Junc ((<$$>) f g i1) op ((<$$>) f g i2)
    (<$$>) f g (Wrap op i)     = Wrap op ((<$$>) f g i)

  instance Data.Foldable.Foldable (Inquire k) where
    foldr _ z EmptyAnd     = z
    foldr _ z EmptyOr      = z
    foldr f z (Pred _ _ v) = v `f` z
    foldr f z (Junc l _ r) = foldr f (foldr f z r) l
    foldr f z (Wrap _ i)   = foldr f z i

  instance Data.Foldable.BiFoldable Inquire where
    bifoldr _ _ z EmptyAnd     = z
    bifoldr _ _ z EmptyOr      = z
    bifoldr f g z (Pred k _ v) = k `f` (v `g` z)
    bifoldr f g z (Junc l _ r) = bifoldr f g (bifoldr f g z r) l
    bifoldr f g z (Wrap _ i)   = bifoldr f g z i

  instance Algebra.ComplementedLattice (Inquire k v) where
    (|~|) EmptyAnd = EmptyOr
    (|~|) EmptyOr  = EmptyAnd
    (|~|) p        = Wrap NOT p

  instance Algebra.BooleanAlgebra (Inquire k v) where
    (|||) EmptyAnd p        = EmptyAnd
    (|||) p        EmptyAnd = EmptyAnd
    (|||) p        EmptyOr  = p
    (|||) EmptyOr  p        = p
    (|||) p        q        = Junc p OR q

    (|&|) EmptyOr  p        = EmptyOr
    (|&|) p        EmptyOr  = EmptyOr
    (|&|) p        EmptyAnd = p
    (|&|) EmptyAnd p        = p
    (|&|) p        q        = Junc p AND q

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

  -- FIXME
  -- Purescript is depending on an extends on the object.
  foreign import objExtend "function objExtend(oldO) {\
                           \  return function(newO) {\
                           \    var obj = {};\
                           \    for (var k in oldO) {\
                           \      obj[k] = oldO[k];\
                           \    }\
                           \    for (var k in newO) {\
                           \      obj[k] = newO[k];\
                           \    }\
                           \    return obj;\
                           \  }\
                           \}" :: forall r r' r''. { | r} -> { | r'} -> { | r''}

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
  absorb (Junc p AND (Junc p' OR  _)) | p == p' = p
  absorb (Junc p OR  (Junc p' AND _)) | p == p' = p

  associate :: forall k v. Inquire k v -> Inquire k v
  associate (Junc p AND (Junc q AND r)) = (p |&| q) |&| r
  associate (Junc p OR  (Junc q OR  r)) = (p ||| q) ||| r
  associate (Junc (Junc p AND q) AND r) = p |&| (q |&| r)
  associate (Junc (Junc p OR  q) OR  r) = p ||| (q ||| r)

  assocLeft :: forall k v. Inquire k v-> Inquire k v
  assocLeft (Junc p AND (Junc q AND r)) = (p |&| q) |&| r
  assocLeft (Junc p OR  (Junc q OR  r)) = (p ||| q) ||| r

  assocRight :: forall k v. Inquire k v-> Inquire k v
  assocRight (Junc (Junc p AND q) AND r) = p |&| (q |&| r)
  assocRight (Junc (Junc p OR  q) OR  r) = p ||| (q ||| r)

  commute :: forall k v. Inquire k v -> Inquire k v
  commute (Junc p AND q) = q |&| p
  commute (Junc p OR  q) = q ||| p

  distribute :: forall k v. Inquire k v -> Inquire k v
  distribute (Junc p AND (Junc q OR  r)) = (p ||| q) |&| (p ||| r)
  distribute (Junc p OR  (Junc q AND r)) = (p |&| q) ||| (p |&| r)

  codistribute :: forall k v. Inquire k v -> Inquire k v
  codistribute (Junc (Junc p OR  q) AND (Junc p OR  r)) = p |&| (q ||| r)
  codistribute (Junc (Junc p AND q) OR  (Junc p AND r)) = p ||| (q |&| r)

  idempotent :: forall k v. (Eq k, Eq v) => Inquire k v -> Inquire k v
  idempotent (Junc p AND p') | p == p' = p
  idempotent (Junc p OR  p') | p == p' = p

module Inquire.Utils where

  import Inquire
  import Data.Array ((:), zipWith)
  import Data.Foldable
  import Data.Tuple

  -- Utilities for working with Inquire.
  toObj :: forall k v. Inquire k v -> {keys :: [k], vals :: [v]}
  toObj i =
    let updateVals = (\v o -> objExtend o {vals: v : o.vals}) in
    let updateKeys = (\k o -> objExtend o {keys: k : o.keys}) in
    bifoldr updateKeys updateVals {keys: [], vals: []} i

  keys :: forall k v. Inquire k v -> [k]
  keys i = (toObj i).keys

  vals :: forall k v. Inquire k v -> [v]
  vals i = (toObj i).vals

  toTuple :: forall k v. Inquire k v -> [Tuple k v]
  toTuple i = zip (keys i) (vals i)

  -- The ideal type would be
  -- toArray :: forall k v. Inquire k v -> [[k, v]]
  toArray i = zipWith (\x y -> [x,y]) (keys i) (vals i)

  -- The ideal type would be
  -- fromArray :: forall k v. [[k, v]] -> Inquire k v
  fromArray []         = EmptyAnd
  fromArray ([x,y]:zs) = (fromArray zs) `and` (x `eq` y)
