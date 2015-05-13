class CreateCollectionings < ActiveRecord::Migration
  def change
    create_table :collectionings do |t|
      t.integer :product_id, null: false
      t.integer :collection_id, null: false

      t.timestamps
    end

    add_index :collectionings, :product_id
    add_index :collectionings, :collection_id

  end
end
