json.extract! @product, :id, :owner_id, :title, :url, :description

json.comments @product.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end
