json.partial! 'api/collections/collection', coll: @collection

json.creator @collection.owner.email
