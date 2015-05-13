u1 = User.create(email: 'tparesi@gmail.com', password: 'password')
u2 = User.create(email: 'chelsea.paresi@gmail.com', password: 'password')

p1 = u1.products.create(title: 'CrossFit', url: "http://www.crossfit.com", description: "Main CrossFit website")
p2 = u1.products.create(title: 'PaleOMG', url: "http://www.paleomg.com", description: "Paleo blog for recipes")
p3 = u2.products.create(title: 'CrossFit Bell', url: "http://www.crossfitbell.com", description: "CrossFit Gym in NYC")

c1 = u1.collections.create(title: 'CrossFit', description: "Collection of CrossFit Related Products")
c2 = u1.collections.create(title: 'Paleo', description: "Collection of Paleo Related Products")
c3 = u2.collections.create(title: 'Olympic Weightlifting', description: "Collection of Olympic Weighlifting Resources")

cp1 = c1.collectionings.create(product_id: 1)
cp2 = c1.collectionings.create(product_id: 3)
cp3 = c2.collectionings.create(product_id: 2)
