module Inquire where

import Prelude

data Inquire k v = Empty
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

instance Prelude.Functor (Inquire k) where
    (<$>) _ Empty = Empty
    (<$>) f (Pred k r v) = Pred k r (f v)
    (<$>) f (Group i1 op i2) = Group ((<$>) f i1) op ((<$>) f i2)
    (<$>) f (Wrap op i) = Wrap op ((<$>) f i)
