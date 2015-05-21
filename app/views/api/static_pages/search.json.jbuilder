json.total_pages @search_results.total_pages

json.search_results @search_results.map do |search_result|
  json.partial! 'api/products/product', product: search_result
end
