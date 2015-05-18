json.extract! coll, :id, :owner_id, :title, :description

json.image_url asset_path(coll.image.url(:original))

json.product_number coll.products.length
