HealthHunt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;

    this.products = new HealthHunt.Collections.Products();
    this.collections = new HealthHunt.Collections.Collections();
    this.collections.fetch();
    this.users = new HealthHunt.Collections.Users();

    var subHeaderView = new HealthHunt.Views.SubHeader({
      collection: this.products
    });
    $("#subheader").html(subHeaderView.render().$el);
  },

  routes: {
    "": "index",
    "products/:id": "show",
    "products/:id/add_product": "collectionAddProduct",
    "collections": "collectionsIndex",
    "collections/new": "collectionNew",
    "collections/:id": "collectionShow",
    "profile/:id": "userProfile",
    "profile/:id/products": "userProducts",
    "profile/:id/collections": "userCollections"
  },

  index: function () {
    this.products.fetch();
    var indexView = new HealthHunt.Views.ProductsIndex({
      collection: this.products
    });
    this._swapView(indexView);
  },

  show: function (id) {
    if (!this._currentView) {
      this.index();
    }

    var product = this.products.getOrFetch(id);
    this.showView = new HealthHunt.Views.ProductShow({
      model: product,
      collection: this.products
    });
    $(".modal").html(this.showView.render().$el);
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

  userProfile: function (id) {
    var user = this.users.getOrFetch(id);
    var profileProductsView = new HealthHunt.Views.ProfileProducts({
      collection: user.upvotedProducts()
    });

    var userProfileView = new HealthHunt.Views.UserProfile({
      model: user,
      view: profileProductsView,
      selectedATag: 1
    });

    this._swapView(userProfileView);
  },

  userProducts: function (id) {
    var user = this.users.getOrFetch(id);
    var profileProductsView = new HealthHunt.Views.ProfileProducts({
      collection: user.products()
    });

    var userProductsView = new HealthHunt.Views.UserProfile({
      model: user,
      view: profileProductsView,
      selectedATag: 2
    });

    this._swapView(userProductsView);
  },

  userCollections: function (id) {
    var user = this.users.getOrFetch(id);
    var userCollectionsIndexView = new HealthHunt.Views.UserCollectionsIndex({
      collection: user.collections()
    });

    var userCollectionsView = new HealthHunt.Views.UserProfile({
      model: user,
      view: userCollectionsIndexView,
      selectedATag: 3
    });

    this._swapView(userCollectionsView);
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
