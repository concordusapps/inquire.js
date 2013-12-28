# I = require \../lib/inquire.js
# {choice, data: d, forAll} = require \claire
# # Livescript uses it for stuff, so save the mocha version outside any functions.
# o = it

# # Make a generator of the relations,
# Rel = choice ...<[ = != > >= < <= ]>
# # and a way to get back.
# rel-map = (rel) -> match rel
# | \=  => I.eq
# | \!= => I.neq
# | \>  => I.gt
# | \>= => I.gte
# | \<  => I.lt
# | \<= => I.lte

# # Make a generator for the bools,
# Bool = choice ...<[ & ; ]>
# # and a way to get back.
# bool-map = -> I[raw-bool it]
# raw-bool = (bool) -> match bool
# | \& => \and
# | \; => \or

# # Make a set amount of parens.
# SetParens = (query, num) --> "#{\( * num}#query#{\) * num}"

# # Wrap an inquire a set number of times.
# SetInquire = (inquire, num) --> match num
# | (> 0) => I SetInquire inquire, num - 1
# | _     => inquire

# describe \inquire ->
#   describe 'given an empty inquire' ->
#     o 'it should generate "?"' ->
#       unless I!generate! is \? then ...

#   describe 'given key, val strings' ->
#     o 'it should generate a "?<key>=<value>" query string' (forAll(d.AlphaNumStr, d.AlphaNumStr)
#       .given -> '' not in &
#       .satisfy (key, val) ->
#         query = I key, val
#         query.generate! is"?#key=#val"
#       .asTest!)

#     describe 'given different rel options' ->
#       describe 'given bool being ! or nothing' ->
#         o 'it should generate a ?<bool><key><rel><val>' (forAll(d.Bool, d.AlphaNumStr, Rel, d.AlphaNumStr)
#           .given -> '' not in &
#           .satisfy (b, key, rel, val) ->
#             if b
#               bool = \!
#               wrap = -> "(#it)"
#             else
#               bool = ''
#               wrap = -> "#it"
#             query = I key, val, {bool, rel}
#             query.generate! is "?#bool#{wrap "#key#rel#val"}"
#           .asTest!)

#   describe 'given an object of key, value pairs' ->
#     o 'it should conjoin them with a relation' (forAll(Rel, d.AlphaStr, d.AlphaStr, d.AlphaStr, d.AlphaStr)
#       .given -> '' not in &
#       .satisfy (rel, k1, v1, k2, v2) ->
#         rel-map(rel) {"#k1": v1, "#k2": v2} .generate! is "?#k1#rel#v1&#k2#rel#v2"
#       .asTest!)

#   describe 'given an object of boolean values' ->
#     o 'it should conjoin them with a relation' (forAll(Rel, d.Bool, d.Bool)
#       .satisfy (rel, b1, b2) ->
#         rel-map(rel) {key1: b1, key2: b2} .generate! is "?key1#rel#b1&key2#rel#b2"
#       .asTest!)

#   describe 'given different relational operators with an array of inquire' ->
#     o 'it should conjoin them' (forAll(Bool, Rel, d.AlphaStr, d.AlphaStr, Rel, d.AlphaStr, d.AlphaStr)
#       .given -> '' not in &
#       .satisfy (bool, r1, k1, v1, r2, k2, v2) ->
#         query = bool-map(bool) [rel-map(r1) k1, v1; rel-map(r2) k2, v2]
#         query.generate! is "?(#k1#r1#v1)#bool(#k2#r2#v2)"
#       .asTest!)

#   describe 'given a whole mess of nested stuffs' ->
#     o 'it should be smart about parens' (forAll(d.Positive)
#       .satisfy (n) ->
#         SetInquire (I \key \value), n .generate! is \?key=value
#       .asTest!)

# describe 'function tests' ->
#   describe \toString ->
#     describe 'given an empty inquire' ->
#       o 'it should generate ""' ->
#         unless I!toString! is '' then ...

#     describe 'given key, val strings' ->
#       o 'it should generate a "<key>=<value>" query string' (forAll(d.AlphaNumStr, d.AlphaNumStr)
#         .given -> '' not in &
#         .satisfy (key, val) ->
#           query = I key, val
#           query.toString! is"#key=#val"
#         .asTest!)

#       describe 'given different rel options' ->
#         describe 'given bool being ! or nothing' ->
#           o 'it should generate a <bool><key><rel><val>' (forAll(d.Bool, d.AlphaNumStr, Rel, d.AlphaNumStr)
#             .given -> '' not in &
#             .satisfy (b, key, rel, val) ->
#               if b
#                 bool = \!
#                 wrap = -> "(#it)"
#               else
#                 bool = ''
#                 wrap = -> "(#it)"
#               query = I key, val, {bool, rel}
#               query.toString! is "#bool#{wrap "#key#rel#val"}"
#             .asTest!)

#     describe 'given an object of key, value pairs' ->
#       o 'it should conjoin them with a relation' (forAll(Rel, d.AlphaStr, d.AlphaStr, d.AlphaStr, d.AlphaStr)
#         .given -> '' not in &
#         .satisfy (rel, k1, v1, k2, v2) ->
#           rel-map(rel) {"#k1": v1, "#k2": v2} .toString! is "(#k1#rel#v1&#k2#rel#v2)"
#         .asTest!)

#     describe 'given an object of boolean values' ->
#       o 'it should conjoin them with a relation' (forAll(Rel, d.Bool, d.Bool)
#         .satisfy (rel, b1, b2) ->
#           rel-map(rel) {key1: b1, key2: b2} .toString! is "(key1#rel#b1&key2#rel#b2)"
#         .asTest!)

#     describe 'given different relational operators with an array of inquire' ->
#       o 'it should conjoin them' (forAll(Bool, Rel, d.AlphaStr, d.AlphaStr, Rel, d.AlphaStr, d.AlphaStr)
#         .given -> '' not in &
#         .satisfy (bool, r1, k1, v1, r2, k2, v2) ->
#           query = bool-map(bool) [rel-map(r1) k1, v1; rel-map(r2) k2, v2]
#           query.toString! is "((#k1#r1#v1)#bool(#k2#r2#v2))"
#         .asTest!)

#     describe 'given a whole mess of nested stuffs' ->
#       o 'it should be smart about parens' (forAll(d.Positive)
#         .satisfy (n) ->
#           SetInquire (I \key \value), n .toString! is '(key=value)'
#         .asTest!)
