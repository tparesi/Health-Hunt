json.extract! @user, :id, :email

json.products @user.products do |product|
  json.partial! 'api/products/product', product: product
end
