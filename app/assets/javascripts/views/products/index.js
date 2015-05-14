HealthHunt.Views.ProductsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);

    // Set up for composite views
    this.listenTo(this.collection, 'add', this.addProductView);
    this.collection.each(this.addProductView.bind(this));
    this.listenTo(this.collection, 'remove', this.removeProductView);
  },

  template: JST['products'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
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
