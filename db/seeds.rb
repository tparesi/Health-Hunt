u1 = User.create(email: 'tparesi@gmail.com', password: 'password')
u2 = User.create(email: 'chelsea.paresi@gmail.com', password: 'password')

p1 = u1.products.create(title: 'CrossFit', url: "www.crossfit.com", description: "Main CrossFit website")
p2 = u1.products.create(title: 'PaleOMG', url: "www.paleomg.com", description: "Paleo blog for recipes")
p3 = u2.products.create(title: 'CrossFit Bell', url: "www.crossfitbell.com", description: "CrossFit Gym in NYC")

# l1 = b1.lists.create(title: 'todo')
# l2 = b1.lists.create(title: 'doing')
# l3 = b1.lists.create(title: 'done')
#
# c1 = l3.cards.create(title: 'squats', description: 'feel the burn')
# c2 = l3.cards.create(title: 'pushups', description: 'ooh ouch')
# c3 = l3.cards.create(title: 'situps', description: 'ouchy')
#
# c4 = l1.cards.create(title: 'squats', description: 'feel the burn')
# c5 = l1.cards.create(title: 'pushups', description: 'ooh ouch')
# c6 = l1.cards.create(title: 'situps', description: 'ouchy')
#
# c7 = l2.cards.create(title: 'squats', description: 'feel the burn')
# c8 = l2.cards.create(title: 'pushups', description: 'ooh ouch')
# c9 = l2.cards.create(title: 'situps', description: 'ouchy')
#
# i1 = c1.items.create(done: false, title: 'mocha')
# i2 = c1.items.create(done: true, title: 'mocha')
# i3 = c1.items.create(done: true, title: 'cookie')
#
# b1.members = [u2]
# b1.save!
