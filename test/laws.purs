module Network.Inquire.Laws where

  import Debug.Trace

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
  inq' 0 = oneof [ return True
                 , return False
                 ]
  inq' 1 = Pred <$> arb <*> rel <*> arb
  inq' n = oneof [ return True
                 , return False
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

  law_bool_distribute :: Inquire String String -> Inquire String String -> Inquire String String -> Boolean
  law_bool_distribute p q r = ((p && q) || (p && r)) == distribute (p && (q || r))

  -- law_bool_and_identity :: Inquire String String -> Boolean
  -- law_bool_and_identity i =

  -- | Functor laws
  law_functor_id :: Inquire String String -> Boolean
  law_functor_id i = id <$> i == i

  -- law_functor_composition :: Inquire String String -> Fun String String -> Fun String String -> Boolean
  -- law_functor_composition i f g = (f <<< g) <$> i == ((<$>) f <<< (<$>) g) i

  main = do
    print "checking associativity"
    quickCheck law_bool_assoc
    print "checking commutativity"
    quickCheck law_bool_commute
    print "checking distributativity"
    quickCheck law_bool_distribute
    print "checking functor identity"
    quickCheck law_functor_id
    -- quickCheck law_functor_composition
