class RemoveImageUrlFromCollections < ActiveRecord::Migration
  def change
    remove_column :collections, :image_url
  end
end
