json.array! @collections do |collection|
  json.partial! 'api/collections/collection', coll: collection
end
