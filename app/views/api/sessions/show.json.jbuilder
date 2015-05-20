json.extract! @user, :id, :email

json.products @user.products.includes(:votes) do |product|
  json.partial! 'api/products/product', product: product
end

json.collections @user.collections do |collection|
  json.partial! 'api/collections/collection', coll: collection
end

json.followers @user.followers do |follower|
  json.partial! 'api/users/user', user: follower
end

json.followings @user.followings do |following|
  json.partial! 'api/users/user', user: following
end
