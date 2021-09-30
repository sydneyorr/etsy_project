# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Thing.create(name: "thing1")
# Thing.create(name: "thing2")
# Thing.create(name: "thing3")
Seller.destroy_all

require 'faker'


categories = [
  'Home',
  'Outdoors',
  'Jewelry',
  'Pets',
  'Kitchen',
  'Clothes',
]

100.times do
  s = Seller.create(
    email: Faker::Internet.email,
    name: Faker::Name.name
  )
  50.times do
    num_categories = rand(0..categories.length - 1)
    Buyer.create(
      name: Faker::Name.name,
      max_price: rand(10..100),
      desired_categories: categories.sample(num_categories),
      seller_id: s.id,
    )
  end

  50.times do
    stock = rand(10)
    p = Product.create(
      price: rand(10..100),
      description: "this is a very good product",
      seller_id: s.id,
      category: categories.sample,
      quantity_in_stock: stock,
      sold_out: (stock === 0 ? true : false)
    )
  end
end
