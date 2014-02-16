module Inquire where

    import Prelude
    import Monoid

    data Inquire k v = EmptyAnd
                     | EmptyOr
                     | Pred k Rel v
                     | Group (Inquire k v) GroupOp (Inquire k v)
                     | Wrap WrapOp (Inquire k v)

    data Rel = IEQ
             | INE
             | IGT
             | IGE
             | ILT
             | ILE

    data GroupOp = IAnd
                 | IOr

    data WrapOp = INoBool
                | INot

    instance Prelude.Show Rel where
        show IEQ = "="
        show INE = "!="
        show IGT = ">"
        show IGE = ">="
        show ILT = "<"
        show ILE = "<="

    instance (Show k, Show v) => Prelude.Show (Inquire k v) where
        show EmptyAnd = ""
        show EmptyOr = ""
        show (Pred k r v) = show k ++ show r ++ show v

    instance Prelude.Functor (Inquire k) where
        (<$>) _ EmptyAnd = EmptyAnd
        (<$>) _ EmptyOr = EmptyOr
        (<$>) f (Pred k r v) = Pred k r (f v)
        (<$>) f (Group i1 op i2) = Group ((<$>) f i1) op ((<$>) f i2)
        (<$>) f (Wrap op i) = Wrap op ((<$>) f i)

    instance Monoid.Monoid (Inquire k v) where
        mempty = EmptyAnd
        (<>) EmptyAnd EmptyAnd = EmptyAnd

    and :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
    and i1 i2 = Group i1 IAnd i2

    or :: forall k v. Inquire k v -> Inquire k v -> Inquire k v
    or i1 i2 = Group i1 IOr i2
