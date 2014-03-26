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
  inq' n = oneof [ Pred <$> arb <*> rel <*> arb
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
  law_bool_assoc_and :: Inquire String String -> Inquire String String -> Inquire String String -> Boolean
  law_bool_assoc_and p q r = (p && (q && r)) == associate ((p && q) && r)

  law_bool_assoc_or :: Inquire String String -> Inquire String String -> Inquire String String -> Boolean
  law_bool_assoc_or p q r = (p || (q || r)) == associate ((p || q) || r)

  law_bool_commute_and :: Inquire String String -> Inquire String String -> Boolean
  law_bool_commute_and p q = (p && q) == commute (q && p)

  law_bool_commute_or :: Inquire String String -> Inquire String String -> Boolean
  law_bool_commute_or p q = (p || q) == commute (q || p)

  law_bool_distribute_and :: Inquire String String -> Inquire String String -> Inquire String String -> Boolean
  law_bool_distribute_and p q r = ((p && q) || (p && r)) == distribute (p && (q || r))

  law_bool_distribute_or :: Inquire String String -> Inquire String String -> Inquire String String -> Boolean
  law_bool_distribute_or p q r = ((p || q) && (p || r)) == distribute (p || (q && r))

  law_bool_and_identity :: Inquire String String -> Boolean
  law_bool_and_identity i = ((i && True) == i) && ((True && i) == i)

  law_bool_or_identity :: Inquire String String -> Boolean
  law_bool_or_identity i = ((i || False) == i) && ((False || i) == i)

  law_bool_and_annihilator :: Inquire String String -> Boolean
  law_bool_and_annihilator i = ((i && False) == False) && ((False && i) == False)

  law_bool_or_annihilator :: Inquire String String -> Boolean
  law_bool_or_annihilator i = ((i || True) == True) && ((True || i) == True)

  law_bool_and_idempotence :: Inquire String String -> Boolean
  law_bool_and_idempotence i = i == idempotent (i && i)

  law_bool_or_idempotence :: Inquire String String -> Boolean
  law_bool_or_idempotence i = i == idempotent (i || i)

  law_bool_and_absorbtion :: Inquire String String -> Inquire String String -> Boolean
  law_bool_and_absorbtion p q = p == absorb (p && (p || q))

  law_bool_or_absorbtion :: Inquire String String -> Inquire String String -> Boolean
  law_bool_or_absorbtion p q = p == absorb (p || (p && q))

  -- | Functor laws
  law_functor_id :: Inquire String String -> Boolean
  law_functor_id i = id <$> i == i

  -- law_functor_composition :: Inquire String String -> Fun String String -> Fun String String -> Boolean
  -- law_functor_composition i f g = (f <<< g) <$> i == ((<$>) f <<< (<$>) g) i

  main = do
    print "Boolean laws\n"
    print "checking and associativity"
    quickCheck law_bool_assoc_and
    print "checking or associativity"
    quickCheck law_bool_assoc_or
    print "checking and commutativity"
    quickCheck law_bool_commute_and
    print "checking or commutativity"
    quickCheck law_bool_commute_or
    print "checking distributativity and over or"
    quickCheck law_bool_distribute_and
    print "checking distributativity or over and"
    quickCheck law_bool_distribute_or
    print "checking and identity"
    quickCheck law_bool_and_identity
    print "checking or identity"
    quickCheck law_bool_or_identity
    print "checking and annihilator"
    quickCheck law_bool_and_annihilator
    print "checking or annihilator"
    quickCheck law_bool_or_annihilator
    print "checking and idempotence"
    quickCheck law_bool_and_idempotence
    print "checking or idempotence"
    quickCheck law_bool_or_idempotence
    print "checking and absorbtion"
    quickCheck law_bool_and_absorbtion
    print "checking or absorbtion"
    quickCheck law_bool_or_absorbtion

    print "\nFunctor laws\n"
    print "checking functor identity"
    quickCheck law_functor_id
    -- quickCheck law_functor_composition
