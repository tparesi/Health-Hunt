HealthHunt.Views.ProductsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);

    this.listenTo(this.collection, 'remove', this.removeProductView);
  },

  template: JST['products'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(this.removeProductView.bind(this));

    var previousProduct = null;

    this.collection.each( function (product) {
      if (!previousProduct || !product.compareDateTruthy(previousProduct)) {
        this.$('.products').append("<div>" + product.date().toDateString() + "</div>");
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
  }
});
