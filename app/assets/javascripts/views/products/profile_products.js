HealthHunt.Views.ProfileProducts = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.removeProductView);
  },

  template: JST['products'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(this.removeProductView.bind(this));
    this.collection.each(this.addProductView.bind(this));
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
