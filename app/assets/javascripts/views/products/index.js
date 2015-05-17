HealthHunt.Views.ProductsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.removeProductView);
  },

  // events: {
  //   "click .product-link": "openProduct"
  // },

  template: JST['products'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(this.removeProductView.bind(this));

    var previousProduct = null;

    this.collection.each( function (product) {
      if (!previousProduct || !product.compareDateTruthy(previousProduct)) {
        this.$('.products').append("<div class='date'>" + product.date().toDateString() + "</div>");
      }
      this.addProductView(product);
      previousProduct = product;
    }.bind(this));
    return this;
  },

  addProductView: function (product) {
    var subview = new HealthHunt.Views.ProductsIndexItem({
      model: product,
      collection: this.collection
    });
    this.addSubview('.products', subview);
  },

  removeProductView: function (product) {
    this.removeModelSubview('.products', product);
  },

  // openProduct: function (event) {
  //   var productId = $(event.currentTarget).data("id");
  //   var product = this.collection.get(productId);
  //   var showView = new HealthHunt.Views.ProductShow({
  //     model: product
  //   });
  //   $(".modal").html(showView.render().$el);
  //   $(".modal").addClass("modal-open");
  //   $("body").addClass("modal-hide");
  //
  //   // Trying to figure out how to set url??
  //   // history.pushState(null, null, '#/products/' + productId);
  // }
});
