HealthHunt.Views.SubHeader = Backbone.View.extend({
  initialize: function () {
    $(window).on("load", function(event) {
        if (window.location.hash === "" || window.location.hash.match(/#\/products*/)) {
          this.productActive();
        } else if ( window.location.hash.match(/#\/collections*/)) {
          this.collectionActive();
        }
      }.bind(this));

    $(window).on("hashchange", function(event) {
        if (window.location.hash === "") {
          this.productActive();
        }
      }.bind(this));
  },

  template: JST["subheader"],

  events: {
    "click .prod-col a": "toggleActive",
    "click .new-product": "newProductView",
    "blur #query": "showLabel",
    "keydown": "search"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  toggleActive: function (event) {
    this.$("a").removeClass("active-subheader");
    $(event.currentTarget).addClass("active-subheader");
  },

  productActive: function (event) {
    this.$("a").removeClass("active-subheader");
    this.$(".prod-col h2:first-child a").addClass("active-subheader");
  },

  collectionActive: function (event) {
    this.$("a").removeClass("active-subheader");
    this.$(".prod-col h2:last-child a").addClass("active-subheader");
  },

  newProductView: function () {
    if (HealthHunt.currentUser && HealthHunt.currentUser.id) {
      var product = new HealthHunt.Models.Product();
      var formView = new HealthHunt.Views.ProductForm({
        collection: this.collection,
        model: product
      });

      $(".new-product-modal").html(formView.render().$el);
    } else {
      Backbone.history.navigate("#/session/new", { trigger: true });
    }
  },

  showLabel: function () {
    this.$("#query").val("");
    this.$(".search-bar label").css("display", "block");
  },

  search: function (event) {
    var key = event.keycode || event.which;
    this.$(".search-bar label").css("display", "none");
    if (key === 13) {
  		var query = this.$("#query").val();
      this.$("#query").val("");
      this.$("#query").blur();

  		Backbone.history.navigate('#/search/' + query, { trigger: true });
    }
	}
});
