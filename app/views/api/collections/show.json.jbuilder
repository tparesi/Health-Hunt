json.extract! @collection, :owner_id, :title, :image_url, :description

json.creator @collection.owner.email

json.products @collection.products do |product|
  json.partial! 'api/products/product', product: product
end
