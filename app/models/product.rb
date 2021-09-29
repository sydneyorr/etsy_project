class Product < ApplicationRecord
  belongs_to :seller

# SELECT p.id, p.price, p.description, p.category, s.name AS seller_name, s.id AS seller_id, s.email FROM products AS p
# INNER JOIN sellers AS s ON s.id = p.seller_id
# ORDER BY seller_name

  def self.available
    select('p.id, p.price, p.description, p.category, p.quantity_in_stock, s.name AS seller_name, s.id AS seller_id, s.email')
    .from('products AS p')
    .joins('INNER JOIN sellers AS s ON s.id = p.seller_id')
    .where('p.sold_out IS NOT true')
    .order('seller_name')
  end
end
