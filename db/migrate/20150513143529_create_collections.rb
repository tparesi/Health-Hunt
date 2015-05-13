class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :image_url, null: false
      t.string :description, null: false

      t.timestamps
    end

    add_index :collections, :owner_id
  end
end
