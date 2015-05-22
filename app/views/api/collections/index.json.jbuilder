json.array! @collections do |collection|
  json.partial! 'api/collections/index_collection', coll: collection
end
