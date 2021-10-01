class Seller < ApplicationRecord
  has_many :buyers, dependent: :destroy
  has_many :products, dependent: :destroy

# SELECT s.id, s.name, p.category, p.id AS product_id, p.sold_out FROM sellers s
# INNER JOIN products p ON s.id = p.seller_id
# WHERE p.sold_out <> TRUE
# GROUP BY s.id, s.name, p.category, product_id, p.sold_out
# ORDER BY s.name

def self.with_category
  select('DISTINCT s.id, s.name, p.category, p.id AS product_id, p.sold_out')
  .from('sellers s')
  .joins('INNER JOIN products p ON s.id = p.seller_id')
  .where('p.sold_out <> TRUE')
  .group('s.id, s.name, p.category, product_id, p.sold_out')
  .order('s.name')
end
end
