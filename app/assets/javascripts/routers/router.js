HealthHunt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    var subHeaderView = new HealthHunt.Views.SubHeader();
    $("#subheader").html(subHeaderView.render().$el);

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
    "products/:id/add_product": "collectionAddProduct",
    "collections": "collectionsIndex",
    "collections/new": "collectionNew",
    "collections/:id": "collectionShow"
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
    var product = this.products.getOrFetch(id);
    this.showView = new HealthHunt.Views.ProductShow({
      model: product
    });

    if (!this._currentView) {
      this.index();
    }

    $(".modal").html(this.showView.render().$el);
  },

  edit: function (id) {
    var product = this.products.getOrFetch(id);
    var formView = new HealthHunt.Views.ProductForm({
      collection: this.products,
      model: product
    });
    this._swapView(formView);
  },

  collectionAddProduct: function (id) {
    var product = this.products.getOrFetch(id);
    var collectionAddProductView = new HealthHunt.Views.AddProduct({
      model: product
    });
    this._swapView(collectionAddProductView);
  },

  collectionsIndex: function () {
    var collectionsIndexView = new HealthHunt.Views.CollectionsIndex({
      collection: this.collections
    });
    this._swapView(collectionsIndexView);
  },

  collectionShow: function (id) {
    var collection = this.collections.getOrFetch(id);
    var collectionShowView = new HealthHunt.Views.CollectionShow({
      collection: this.collections,
      model: collection
    });
    this._swapView(collectionShowView);
  },

  collectionNew: function () {
    var collection = new HealthHunt.Models.Collection();
    var collectionFormView = new HealthHunt.Views.CollectionForm({
      collection: this.collections,
      model: collection
    });
    this._swapView(collectionFormView);
  },

  _swapView: function (view) {
    if (this.showView) {
      this.showView.closeModal();
      this.showView = null;
    }
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
