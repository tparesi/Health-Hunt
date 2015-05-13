json.extract! @comment, :id, :author_id, :product_id, :body

json.author @comment.author.email
