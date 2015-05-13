HealthHunt.Models.CurrentUser = Backbone.Model.extend({
  urlRoot: '/api/session',

  collections: function () {
    if (!this._collections) {
      this._collections = new HealthHunt.Collections.Collections();
    }

    return this._collections;
  },

  products: function () {
    if (!this._products) {
      this._products = new HealthHunt.Collections.Products();
    }

    return this._products;
  },

  collectionProductIds: function () {
    if (!this._product_ids) {
      this._product_ids = new HealthHunt.Collections.Products();
    }

    return this._products;
  },

  parse: function (response) {
    if (response.collections) {
      this.collections().set(response.collections, { parse: true });
      delete response.collections;
    }

    if (response.products) {
      this.products().set(response.products, { parse: true });
      delete response.products;
    }

    return response;
  }
});
