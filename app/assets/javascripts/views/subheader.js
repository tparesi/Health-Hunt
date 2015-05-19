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
    "click .new-product": "newProductView"
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
    var product = new HealthHunt.Models.Product();
    var formView = new HealthHunt.Views.ProductForm({
      collection: this.collection,
      model: product
    });

    $(".new-product-modal").html(formView.render().$el);
  }
});
