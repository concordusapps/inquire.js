'use strict'

# a -> a
module.exports.id = -> it

# a -> b -> a
module.exports.con = (a, b) --> a
