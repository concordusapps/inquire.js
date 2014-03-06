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
    show (Junc p o q) = "(" ++ show p ++ ")" ++ show o ++ "(" ++ show q ++ ")"
    show (Wrap o i)   = show o ++ "(" ++ show i ++ ")"

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
    traverse f EmptyAnd = pure EmptyAnd
    traverse f EmptyOr  = pure EmptyOr
    traverse f (Pred k r v) = Pred k r <$> f v
    traverse f (Junc l o r) = Junc <$> (traverse f l) <*> pure o <*> (traverse f r)
    traverse f (Wrap o i)   = Wrap o <$> (traverse f i)

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

module Inquire.Combinators where

  import Prelude
  import Inquire
  import Data.Array ((:), zipWith)
  import Data.Foldable (foldr, bifoldr)
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
  -- toArray :: forall k v. Inquire k v -> [[k, v]]
  toArray i = zipWith (\x y -> [x,y]) (keys i) (vals i)

  -- The ideal type would be
  -- fromArray :: forall k v. [[k, v]] -> Inquire k v
  fromArray []         = EmptyAnd
  fromArray ([x,y]:zs) = (fromArray zs) `and` (x `eq` y)

  -- This should be implemented with a foldr or some such,
  -- but the kind wont work out.
  filterVals :: forall k v. (v -> Boolean) -> Inquire k v -> Inquire k v
  filterVals p (Pred k r v) = if p v then Pred k r v else mempty
  filterVals p (Junc l o r) = Junc (filterVals p l) o (filterVals p r)
  filterVals p (Wrap o i)   = Wrap o (filterVals p i)
  filterVals p i            = i

  -- This is a right based find.
  findI :: forall k v. (Eq v) => v -> Inquire k v -> Maybe (Inquire k v)
  findI v (Pred k r v') | v == v' = Just (Pred k r v)
  findI v (Pred k r v')           = Nothing
  findI v (Junc l _ r)            = maybe (findI v l) Just (findI v r)
  findI v (Wrap _ i)              = findI v i
  findI _ _                       = Nothing

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

  foreign import unsafeFind "function unsafeFind(v) {\
                      \  return function(i) {\
                      \    /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
                      \    return findI(_ps.Prelude.eqString({}))(v)(i);\
                      \  }\
                      \}" :: forall k v. v -> Inquire k v -> Maybe (Inquire k v)

  foreign import unsafeRemove "function unsafeRemove(i1) {\
                        \  return function(i2) {\
                        \    /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
                        \    return remove(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);\
                        \  }\
                        \}" :: forall k v. v -> Inquire k v -> Inquire k v -> Inquire k v

  foreign import unsafeRemoveAll "function unsafeRemoveAll(i1) {\
                           \  return function(i2) {\
                           \    /* We use String's eq typeclass because it uses `unsafeRefEq`*/\
                           \    return removeAll(_ps.Prelude.eqString({}))(_ps.Prelude.eqString({}))(i1)(i2);\
                           \  }\
                           \}" :: forall k v. v -> Inquire k v -> Inquire k v -> Inquire k v

module Inquire.Zipper where

  {-
    Since we don't have `syz` yet, we're going to roll our own zipper.

    We follow McBride and take the derivative of our type,
    taking some notational liberties.

    I = 2 + x + I^2 + I
    0 = 2 + x + I^2
    I' =  1 + 2I*I' + I'
    I' = -1/(2I)

    I(kv) = 1 + kv^2 + kv

    d(I(kv))/d(kv) = d(1 + kv^2 + kv)/d(kv)
    I'(kv) = 1 + 2kv

    So we want our zipper to be:
    data InquireZ k v = Hole k v
                      | Left k v
                      | Right k v
  -}

  import Prelude
  import Data.Maybe
  import Data.Traversable
  import Inquire

  data InquireZ t a = Top (t a)
                    | Zipper a (Maybe a -> InquireZ t a)

  data Cont r a = Cont { runCont :: (a -> r) -> r }

  instance monadCont :: Prelude.Monad (Cont r) where
    return x = Cont { runCont: \f -> f x }
    (>>=) (Cont {runCont = c}) f = Cont { runCont: \k -> c (\a -> let Cont {runCont = c'} = (f a) in c' k) }

  reset :: forall r. Cont r r -> r
  reset m = let Cont { runCont = m' } = m in m' id

  shift :: forall a r. ((a -> r) -> Cont r r) -> Cont r a
  shift e = Cont { runCont: \k -> reset (e k) }

  toInquireZ :: forall k v. Inquire k v -> InquireZ k v
  toInquireZ i =
    reset $ traverse (shift (\k -> return $ Zipper i (k <<< (maybe i id)))) >>= (return <<< Top)

