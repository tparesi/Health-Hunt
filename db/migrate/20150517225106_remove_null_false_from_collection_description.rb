class RemoveNullFalseFromCollectionDescription < ActiveRecord::Migration
  change_column :collections, :description, :string, null: true
end
