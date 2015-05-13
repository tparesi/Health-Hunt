class RemoveNullTrueFromImageUrl < ActiveRecord::Migration
  change_column :collections, :image_url, :string, null: true
end
