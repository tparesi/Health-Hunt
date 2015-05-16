HealthHunt.Views.CollectionShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.products = this.model.products();

    // Set up for composite views
    this.listenTo(this.products, 'sync', this.addProductView);
    this.listenTo(this.products, 'remove', this.removeProductView);
  },

  events: {
    "click .delete-collection": "deleteCollection"
  },

  template: JST['collections/show'],

  render: function () {
    var content = this.template({
      collection: this.model
    });
    this.$el.html(content);
    this.products.each(this.addProductView.bind(this));
    return this;
  },

  addProductView: function (product) {
    var subview = new HealthHunt.Views.ProductsIndexItem({
      model: product,
      collection: this.products
    });
    this.addSubview('.products', subview);
  },

  removeProductView: function (product) {
    this.removeModelSubview('.products', product);
  },

  deleteCollection: function (event) {
    event.preventDefault();
    var ask = confirm("Are you sure you want to delete this collection?");

    if(ask){
      this.model.destroy({
        success: function () {
          Backbone.history.navigate("#/collections", { trigger: true });
        }
      });
     }
  }
});
