json.partial! 'api/collections/collection', collection: @collection

json.creator @collection.owner.email

json.products @collection.products do |product|
  json.partial! 'api/products/product', product: product
end
