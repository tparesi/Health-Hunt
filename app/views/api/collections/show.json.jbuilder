json.partial! 'api/collections/collection', coll: @collection

json.creator @collection.owner.email

json.products @collection.products.includes(:votes) do |product|
  json.partial! 'api/products/product', product: product
end
