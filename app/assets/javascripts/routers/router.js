HealthHunt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new HealthHunt.Collections.Products();
    this.collection.fetch();
  },

  routes: {
    "": "index",
    "products/new": "new",
    "products/:id": "show",
    "products/:id/edit": "edit"
  },

  index: function () {
    var indexView = new HealthHunt.Views.ProductsIndex({
      collection: this.collection
    });
    this._swapView(indexView);
  },

  new: function () {

  },

  show: function (id) {
    var product = this.collection.getOrFetch(id);
    var showView = new HealthHunt.Views.ProductShow({
      model: product
    });
    this._swapView(showView);
  },

  edit: function (id) {

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
