json.partial! 'api/products/product', product: @product

json.creator @product.owner.email

json.comments @product.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
