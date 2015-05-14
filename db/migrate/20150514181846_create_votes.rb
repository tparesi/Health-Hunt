class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :product_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :votes, [:product_id, :user_id], unique: true
  end
end
