class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :product_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :product_id
  end
end
