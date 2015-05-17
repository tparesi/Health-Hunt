json.extract! product, :id, :owner_id, :title, :url, :description, :created_at

json.votes product.vote_count

json.creator product.owner.email
