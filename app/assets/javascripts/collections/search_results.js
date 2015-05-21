HealthHunt.Collections.SearchResults = Backbone.Collection.extend({
  url: "/api/search",
  model: HealthHunt.Models.Product,

	initialize: function () {
		this.searchInfo = {};
	},

	parse: function (response) {
		this.searchInfo.totalPages = response.total_pages;

		return response.search_results;
	}
});
