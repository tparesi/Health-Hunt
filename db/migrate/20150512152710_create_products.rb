class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :url, null: false
      t.string :description, null: false

      t.timestamps
    end

    add_index :products, :owner_id
  end
end
