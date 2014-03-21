module Network.Inquire.Laws where

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
  rel = elements [IEQ, INE, IGT, IGE, ILT, ILE]
  jop :: forall eff. Eff (random :: Random | eff) JuncOp
  jop = elements [AND, OR]
  wop :: forall eff. Eff (random :: Random | eff) WrapOp
  wop = elements [NOBOOL, NOT]

  instance arbInquire :: (Arb k, Arb v) => Arb (Inquire k v) where
    arb = inq

  div :: Number -> Number -> Number
  div m n = floor (m / n)

  -- | Boolean algebra laws.
  law_bool_assoc :: Inquire String String -> Inquire String String -> Inquire String String -> Boolean
  law_bool_assoc p q r = (p && (q && r)) == associate ((p && q) && r)

  law_bool_commute :: Inquire String String -> Inquire String String -> Boolean
  law_bool_commute p q = (p && q) == commute (q && p)

  law_functor_id :: Inquire String String -> Boolean
  law_functor_id i = id <$> i == i

  -- law_functor_composition :: Inquire String String -> Fun String String -> Fun String String -> Boolean
  -- law_functor_composition i f g = (f <<< g) <$> i == ((<$>) f <<< (<$>) g) i

  main = do
    quickCheck law_bool_assoc
    quickCheck law_bool_commute
    quickCheck law_functor_id
    -- quickCheck law_functor_composition
