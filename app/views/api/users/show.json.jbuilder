json.extract! @user, :id, :email

json.comments @user.products do |product|
  json.partial! 'api/products/product', product: product
end
