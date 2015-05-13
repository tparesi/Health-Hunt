json.extract! coll, :id, :owner_id, :title, :image_url, :description

json.products coll.products do |product|
  json.partial! 'api/products/product', product: product
end
