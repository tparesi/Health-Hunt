HealthHunt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.products = new HealthHunt.Collections.Products();
    this.products.fetch();
    this.collections = new HealthHunt.Collections.Collections();
    this.collections.fetch();
  },

  routes: {
    "": "index",
    "products/new": "new",
    "products/:id": "show",
    "products/:id/edit": "edit",
    "collections": "collectionsIndex"
  },

  index: function () {
    var indexView = new HealthHunt.Views.ProductsIndex({
      collection: this.products
    });
    this._swapView(indexView);
  },

  new: function () {
    var product = new HealthHunt.Models.Product();
    var formView = new HealthHunt.Views.ProductForm({
      collection: this.products,
      model: product
    });
    this._swapView(formView);
  },

  show: function (id) {
    var product = this.collection.getOrFetch(id);
    var showView = new HealthHunt.Views.ProductShow({
      model: product
    });
    this._swapView(showView);
  },

  edit: function (id) {
    var product = this.collection.getOrFetch(id);
    var formView = new HealthHunt.Views.ProductForm({
      collection: this.products,
      model: product
    });
    this._swapView(formView);
  },

  collectionsIndex: function () {
    var collectionsIndexView = new HealthHunt.Views.CollectionsIndex({
      collection: this.collections
    });
    this._swapView(collectionsIndexView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
