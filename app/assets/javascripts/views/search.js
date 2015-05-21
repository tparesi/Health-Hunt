HealthHunt.Views.Search = Backbone.View.extend({

	initialize: function () {
		this.collection = new HealthHunt.Collections.SearchResults();
		this.listenTo(this.collection, "sync", this.renderResults);
	},

	events: {
		"click button": "search",
		"click .next-page": "nextPage"
	},

	template: JST["search"],

	render: function () {
		var content = this.template();
		this.$el.html(content);

		return this;
	},

	search: function (event) {
		event.preventDefault();
		var $input = this.$("#query");
		this.collection.searchInfo.query = $input.val();
		this.collection.searchInfo.page = 1;

		var that = this;
		this.collection.fetch({
			data: this.collection.searchInfo,
		});
	},

	renderResults: function () {
		this.renderSearchInfo();
		var $container = this.$("#search-results");
		$container.empty();

    var view = new HealthHunt.Views.ProductsIndex({
      collection: this.collection
    });

		$container.append(view.render().$el);
	},

	nextPage: function () {
		this.collection.searchInfo.page++;
		this.collection.fetch({
			data: this.collection.searchInfo
		});
	},

	renderSearchInfo: function () {
		this.$("#pages").html(this.collection.searchInfo.totalPages);
	}

});
