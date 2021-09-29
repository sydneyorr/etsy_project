class AddQuantityInStockToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :quantity_in_stock, :integer
  end
end
