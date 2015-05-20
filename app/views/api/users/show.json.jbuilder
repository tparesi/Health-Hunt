json.extract! @user, :id, :email

json.upvoted_products @user.upvoted_products.includes(:votes) do |product|
  json.partial! 'api/products/product', product: product
end

json.products @user.products.includes(:votes) do |product|
  json.partial! 'api/products/product', product: product
end

json.collections @user.collections do |collection|
  json.partial! 'api/collections/collection', coll: collection
end
