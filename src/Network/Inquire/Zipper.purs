module Network.Inquire.Zipper
  ( InquireZ(..)
  , Movement()
  , toInquireZ
  , fromInquireZ
  , zipLeft
  , zipRight
  , zipDown
  , zipUp
  , zipMost
  , zipUpmost
  , zipLeftmost
  , zipRightmost
  , getHole
  , query
  , modify
  )
  where

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
  import Network.Inquire

  data Context k v = L JuncOp (Inquire k v)
                   | R JuncOp (Inquire k v)
                   | D WrapOp

  data InquireZ k v = Zip { hole    :: Inquire k v
                          , context :: [Context k v]
                          }

  type Movement k v = InquireZ k v -> Maybe (InquireZ k v)

  -- Injection and projection.

  toInquireZ :: forall k v. Inquire k v -> InquireZ k v
  toInquireZ i = Zip { hole: i, context: [] }

  fromInquireZ :: forall k v. InquireZ k v -> Inquire k v
  fromInquireZ = getHole <<< zipUpmost

  -- Basic movement.

  zipLeft :: forall k v. Movement k v
  zipLeft (Zip { hole = Junc l o r, context = p }) =
    Just $ Zip $ { hole: l, context: (L o r):p }
  zipLeft _ = Nothing

  zipRight :: forall k v. Movement k v
  zipRight (Zip { hole = Junc l o r, context = p }) =
    Just $ Zip $ { hole: r, context: (R o l):p }
  zipRight _ = Nothing

  -- Zip down into a `Wrap`, or go to the right of a `Junc`.
  zipDown :: forall k v. Movement k v
  zipDown (Zip { hole = Wrap o i, context = p }) =
    Just $ Zip $ { hole: i, context: (D o):p }
  zipDown iz@(Zip { hole = Junc l o r}) = zipRight iz
  zipDown _ = Nothing

  -- Zip up out of a `Wrap`, or out of a `Junc`.
  zipUp :: forall k v. Movement k v
  zipUp (Zip { hole = i, context = (D o):p }) =
    Just $ Zip $ { hole: Wrap o i, context: p }
  zipUp (Zip { hole = l, context = (L o r):p }) =
    Just $ Zip $ { hole: Junc l o r, context: p }
  zipUp (Zip { hole = r, context = (R o l):p }) =
    Just $ Zip $ { hole: Junc l o r, context: p }
  zipUp _ = Nothing

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
