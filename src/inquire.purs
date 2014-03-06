module Inquire where

  import Prelude
  import Algebra ((|&|), (|||), BooleanAlgebra, (|~|), ComplementedLattice)
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

  instance complementedLatticeInquire :: Algebra.ComplementedLattice (Inquire k v) where
    (|~|) EmptyAnd = EmptyOr
    (|~|) EmptyOr  = EmptyAnd
    (|~|) p        = Wrap NOT p

  instance booleanAlgebraInquire :: Algebra.BooleanAlgebra (Inquire k v) where
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
  foreign import generate
    "function generate(i) {\
    \  var showDict = {\
    \    show: function(k) {\
    \      return k.toString();\
    \    }\
    \  };\
    \  return gen(showDict)(showDict)(i);\
    \}" :: forall k v. Inquire k v -> String

  -- FIXME
  -- Purescript is depending on an extends on the object.
  foreign import objExtend
    "function objExtend(oldO) {\
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

  xor :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
  xor p q = (p |&| (|~|) q) ||| ((|~|) p |&| q)

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

module Inquire.Combinators where

  import Prelude
  import Inquire
  import Data.Array ((:), zipWith)
  import Data.Foldable (Foldable, bifoldr)
  import Data.Functor (BiFunctor)
  import Data.Maybe
  import Data.Monoid
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
  -- toArrayPair :: forall k v. Inquire k v -> [[k, v]]
  toArrayPair i = zipWith (\x y -> [x,y]) (keys i) (vals i)

  toArrayObj :: forall k v. Inquire k v -> [{key :: k, val :: v}]
  toArrayObj i = zipWith (\x y -> {key: x, val: y}) (keys i) (vals i)

  -- The ideal type would be
  -- fromArrayPair :: forall k v. [[k, v]] -> Inquire k v
  fromArrayPair []         = EmptyAnd
  fromArrayPair ([x,y]:zs) = (fromArrayPair zs) `and` (x `eq` y)

  fromArrayObj :: forall k v. [{key :: k, val :: v}] -> Inquire k v
  fromArrayObj []                        = EmptyAnd
  fromArrayObj ({ key = x, val = y }:zs) = (fromArrayObj zs) `and` (x `eq` y)

  -- This should be implemented with a foldr or some such,
  -- but the kind wont work out.
  filterByVal :: forall k v. (v -> Boolean) -> Inquire k v -> Inquire k v
  filterByVal p (Pred k r v) = if p v then Pred k r v else mempty
  filterByVal p (Junc l o r) = Junc (filterByVal p l) o (filterByVal p r)
  filterByVal p (Wrap o i)   = Wrap o (filterByVal p i)
  filterByVal p i            = i

  filterByKey :: forall k v. (k -> Boolean) -> Inquire k v -> Inquire k v
  filterByKey p (Pred k r v) = if p k then Pred k r v else mempty
  filterByKey p (Junc l o r) = Junc (filterByKey p l) o (filterByKey p r)
  filterByKey p (Wrap o i)   = Wrap o (filterByKey p i)
  filterByKey p i            = i

  -- This is a right based find.
  findByVal :: forall k v. (Eq v) => v -> Inquire k v -> Maybe (Inquire k v)
  findByVal v (Pred k r v') | v == v' = Just (Pred k r v)
  findByVal v (Pred k r v')           = Nothing
  findByVal v (Junc l _ r)            = maybe (findByVal v l) Just (findByVal v r)
  findByVal v (Wrap _ i)              = findByVal v i
  findByVal _ _                       = Nothing

  findByKey :: forall k v. (Eq k) => k -> Inquire k v -> Maybe (Inquire k v)
  findByKey k (Pred k' r v) | k == k' = Just (Pred k r v)
  findByKey k (Pred k' r v)           = Nothing
  findByKey k (Junc l _ r)            = maybe (findByKey k l) Just (findByKey k r)
  findByKey k (Wrap _ i)              = findByKey k i
  findByKey _ _                       = Nothing

  remove' :: forall k v. (Eq k, Eq v) => (Inquire k v -> Inquire k v -> Boolean) -> Inquire k v -> Inquire k v -> Inquire k v
  remove' p i (Junc l o r) =
    let r' = remove' p i r in
    if p r r' then Junc (remove' p i l) o r else Junc l o r'
  remove' p i (Wrap o i')  = Wrap o (remove' p i i')
  remove' p i i' | i == i' = EmptyAnd
  remove' p i i'           = i'

  remove :: forall k v. (Eq k, Eq v) => Inquire k v -> Inquire k v -> Inquire k v
  remove = remove' (==)

  removeAll :: forall k v. (Eq k, Eq v) => Inquire k v -> Inquire k v -> Inquire k v
  removeAll = remove' (\x y -> true)

  replaceValByKey :: forall k v. (Eq k) => v -> k -> Inquire k v -> Inquire k v
  replaceValByKey v k (Pred k' r _) | k == k' = Pred k r v
  replaceValByKey v k (Junc l o r)            = Junc (replaceValByKey v k l) o (replaceValByKey v k r)
  replaceValByKey v k (Wrap o i)              = Wrap o (replaceValByKey v k i)
  replaceValByKey _ _ i                       = i

  replaceValByVal :: forall k v. (Eq v) => v -> v -> Inquire k v -> Inquire k v
  replaceValByVal v v' (Pred k r v'') | v' == v'' = Pred k r v
  replaceValByVal v v' (Junc l o r)               = Junc (replaceValByVal v v' l) o (replaceValByVal v v' r)
  replaceValByVal v v' (Wrap o i)                 = Wrap o (replaceValByVal v v' i)
  replaceValByVal _ _  i                          = i

  foreign import bimap
    "function bimap(f) {\
    \ return function(g) {\
    \    return function(x) {\
    \      return _ps.Data_Functor['<$$>'](_ps.Inquire.biFunctorInquire({}))(f)(g)(x);\
    \    }\
    \  }\
    \}" :: forall a b c d f. (BiFunctor f) => (a -> c) -> (b -> d) -> f a b -> f c d

  foreign import map
    "function map(f) {\
    \  return function(x) {\
    \    return _ps.Prelude['<$>'](_ps.Inquire.functorInquire({}))(f)(x);\
    \  }\
    \}" :: forall a b f. (Functor f) => (a -> b) -> f a -> f b

  foreign import unsafeFindByKey
    "function unsafeFindByKey(v) {\
    \  return function(i) {\
    \    /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
    \    return findByKey(_ps.Prelude.eqString({}))(v)(i);\
    \  }\
    \}" :: forall k v. v -> Inquire k v -> Maybe (Inquire k v)

  foreign import unsafeFindByVal
    "function unsafeFindByVal(v) {\
    \  return function(i) {\
    \    /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
    \    return findByVal(_ps.Prelude.eqString({}))(v)(i);\
    \  }\
    \}" :: forall k v. v -> Inquire k v -> Maybe (Inquire k v)

  foreign import unsafeRemove
    "function unsafeRemove(i1) {\
    \  return function(i2) {\
    \    /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
    \    return remove(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);\
    \  }\
    \}" :: forall k v. v -> Inquire k v -> Inquire k v -> Inquire k v

  foreign import unsafeRemoveAll
    "function unsafeRemoveAll(i1) {\
    \  return function(i2) {\
    \    /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
    \    return removeAll(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);\
    \  }\
    \}" :: forall k v. v -> Inquire k v -> Inquire k v -> Inquire k v

  foreign import unsafeReplaceValByKey
    "function unsafeReplaceValByKey(v) {\
    \  return function(k) {\
    \    return function(i) {\
    \      /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
    \      return replaceValByKey(_ps.Prelude.eqString({}))(v)(k)(i);\
    \    }\
    \  }\
    \}" :: forall k v. v -> k -> Inquire k v -> Inquire k v

  foreign import unsafeReplaceValByVal
    "function unsafeReplaceValByVal(v1) {\
    \  return function(v2) {\
    \    return function(i) {\
    \      /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
    \      return replaceValByVal(_ps.Prelude.eqString({}))(v1)(v2)(i);\
    \    }\
    \  }\
    \}" :: forall k v. v -> v -> Inquire k v -> Inquire k v

module Inquire.Zipper where

  {-
    Since we don't have `syz` yet, we're going to roll our own zipper.

    We follow McBride and take the derivative of our type,
    taking some notational liberties.

    I = 2 + x + I^2 + I
    0 = 2 + x + I^2
    I' =  1 + 2I*I' + I'
    I' = -1/(2I)

    ^ That is our actual derivative,
    but it's not that easy to translate into a data type.

    Let's take some more liberties and use a simplified representation.

    I(kv) = 1 + kv^2 + kv

    d(I(kv))/d(kv) = d(1 + kv^2 + kv)/d(kv)
    I'(kv) = 1 + 2kv

    So we want our zipper to be similar to:
    data InquireZ k v = Hole k v
                      | Left k v
                      | Right k v
  -}

  import Prelude
  import Data.Array ((:))
  import Data.Either
  import Data.Maybe
  import Inquire

  data Context k v = L JuncOp (Inquire k v)
                   | R JuncOp (Inquire k v)
                   | D WrapOp

  data InquireZ k v = Zip { hole    :: Inquire k v
                          , context :: [Context k v]
                          }

  -- Injection and projection.

  toInquireZ :: forall k v. Inquire k v -> InquireZ k v
  toInquireZ i = Zip { hole: i, context: [] }

  fromInquireZ :: forall k v. InquireZ k v -> Inquire k v
  fromInquireZ (Zip { hole = i, context = [] }) = i
  fromInquireZ iz = maybe EmptyAnd fromInquireZ $ zipUp iz

  -- Basic movement.

  zipLeft :: forall k v. InquireZ k v -> Maybe (InquireZ k v)
  zipLeft (Zip { hole = Junc l o r, context = p }) =
    Just $ Zip $ { hole: l, context: (L o r):p }
  zipLeft _ = Nothing

  zipRight :: forall k v. InquireZ k v -> Maybe (InquireZ k v)
  zipRight (Zip { hole = Junc l o r, context = p }) =
    Just $ Zip $ { hole: r, context: (R o l):p }
  zipRight _ = Nothing

  -- Zip down into a `Wrap`, or go to the right of a `Junc`.
  zipDown :: forall k v. InquireZ k v -> Maybe (InquireZ k v)
  zipDown (Zip { hole = Wrap o i, context = p }) =
    Just $ Zip $ { hole: i, context: (D o):p }
  zipDown iz@(Zip { hole = Junc l o r}) = zipRight iz
  zipDown _ = Nothing

  -- Zip up out of a `Wrap`, or out of a `Junc`.
  zipUp :: forall k v. InquireZ k v -> Maybe (InquireZ k v)
  zipUp (Zip { hole = i, context = (D o):p }) =
    Just $ Zip $ { hole: Wrap o i, context: p }
  zipUp (Zip { hole = l, context = (L o r):p }) =
    Just $ Zip $ { hole: Junc l o r, context: p }
  zipUp (Zip { hole = r, context = (R o l):p }) =
    Just $ Zip $ { hole: Junc l o r, context: p }
  zipUp _ = Nothing

  type Movement k v = InquireZ k v -> Maybe (InquireZ k v)

  -- Advanced movement.

  zipMost :: forall k v. Movement k v -> InquireZ k v -> InquireZ k v
  zipMost f iz = maybe iz (zipMost f) $ f iz

  zipUpmost :: forall k v. InquireZ k v -> InquireZ k v
  zipUpmost = zipMost zipUp

  zipLeftmost :: forall k v. InquireZ k v -> InquireZ k v
  zipLeftmost = zipMost zipLeft

  zipRightmost :: forall k v. InquireZ k v -> InquireZ k v
  zipRightmost = zipMost zipRight

  -- Manipulation

  getHole :: forall k v. InquireZ k v -> Inquire k v
  getHole (Zip { hole = i }) = i

  query :: forall a k v. (Inquire k v -> a) -> InquireZ k v -> a
  query f = f <<< getHole

  -- This looks an awful lot like a functor.
  modify :: forall k v. (Inquire k v -> Inquire k v) -> InquireZ k v -> InquireZ k v
  modify f (Zip z@{ hole = i }) = Zip (z { hole = f i })
