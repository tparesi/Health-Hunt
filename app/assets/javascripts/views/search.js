HealthHunt.Views.Search = Backbone.View.extend({
	initialize: function (options) {
		this.query = options.query;
		this.collection = new HealthHunt.Collections.SearchResults();
		this.listenTo(this.collection, "sync", this.renderResults);
		this.search();
	},

	events: {
		"click .next-page": "nextPage",
	},

	template: JST["search"],

	render: function () {
		var content = this.template();
		this.$el.html(content);

		return this;
	},

	renderResults: function () {
		this.renderSearchInfo();
		var $container = this.$("#search-results");
		$container.empty();

    var view = new HealthHunt.Views.ProfileProducts({
      collection: this.collection
    });

		if (this.collection.length === 0) {
			$container.html("<div class='no-results'>No Products Found. Play this <a href='http://snake.tparesi.com'>game</a> while you pout.</div>");
		} else {
			$container.html(view.render().$el);
		}
	},

	nextPage: function () {
		this.collection.searchInfo.page++;
		this.collection.fetch({
			data: this.collection.searchInfo
		});
	},

	renderSearchInfo: function () {
		this.$("#pages").html(this.collection.searchInfo.totalPages);
	},

	search: function () {
		this.collection.searchInfo.query = this.query;
		this.collection.searchInfo.page = 1;

		var that = this;
		this.collection.fetch({
			data: this.collection.searchInfo,
		});
	}
});
