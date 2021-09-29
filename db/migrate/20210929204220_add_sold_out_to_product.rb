class AddSoldOutToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :sold_out, :boolean
  end
end
