json.extract! product, :id, :owner_id, :title, :url, :description, :created_at

json.votes product.vote_count

json.creator product.owner.email

json.collections product.collections do |collection|
  json.partial! 'api/collections/collection_for_product', coll: collection
end
