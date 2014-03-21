module Network.Inquire.Properties where

  import Prelude

  import Control.Monad.Eff
  import Control.Monad.Eff.Random

  import Data.String

  import Math

  import Network.Inquire
  import Network.Inquire.Combinators

  import Test.QuickCheck

  inq :: forall eff k v. (Arb k, Arb v) => Eff (random :: Random | eff) (Inquire k v)
  inq = sized inq'

  inq' :: forall eff k v. (Arb k, Arb v) => Number -> Eff (random :: Random | eff) (Inquire k v)
  inq' 0 = oneof [ return EmptyAnd
                 , return EmptyOr
                 ]
  inq' 1 = Pred <$> arb <*> rel <*> arb
  inq' n = oneof [ return EmptyAnd
                 , return EmptyOr
                 , Pred <$> arb <*> rel <*> arb
                 , Junc <$> inq' (n `div` 2) <*> jop <*> inq' (n `div` 2)
                 , Wrap <$> wop <*> inq' (n `div` 2)
                 ]

  rel :: forall eff. Eff (random :: Random | eff) Rel
  rel = elements [REQ, RNE, RGT, RGE, RLT, RLE]
  jop :: forall eff. Eff (random :: Random | eff) JuncOp
  jop = elements [AND, OR]
  wop :: forall eff. Eff (random :: Random | eff) WrapOp
  wop = elements [NOBOOL, NOT]

  instance arbInquire :: (Arb k, Arb v) => Arb (Inquire k v) where
    arb = inq

  div :: Number -> Number -> Number
  div m n = floor (m / n)

  prop_commute :: Inquire Number Number -> Inquire Number Number -> Boolean
  prop_commute p q = (p && q) == (commute (q && p))

  prop_commuteS :: Inquire String String -> Inquire String String -> Boolean
  prop_commuteS p q = (p && q) == (commute (q && p))

  prop_functor_id :: Inquire Number Number -> Boolean
  prop_functor_id i = id <$> i == i

  prop_functor_idS :: Inquire String String -> Boolean
  prop_functor_idS i = id <$> i == i

  prop_string :: String -> String -> Boolean
  prop_string s1 s2 = if lengthS s1 > 3 && 3 < lengthS s2 then s1 == s2 else true

  main = do
    quickCheck prop_commute
    quickCheck prop_functor_id
    quickCheck prop_commuteS
    quickCheck prop_functor_idS
    quickCheck prop_string
