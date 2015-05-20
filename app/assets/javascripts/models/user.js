HealthHunt.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  collections: function () {
    if (!this._collections) {
      this._collections = new HealthHunt.Collections.Collections();
    }

    return this._collections;
  },

  upvotedProducts: function () {
    if (!this._upvotedProducts) {
      this._upvotedProducts = new HealthHunt.Collections.Products();
    }

    return this._upvotedProducts;
  },

  products: function () {
    if (!this._products) {
      this._products = new HealthHunt.Collections.Products();
    }

    return this._products;
  },

  parse: function (response) {
    if (response.collections) {
      this.collections().set(response.collections, { parse: true });
      delete response.collections;
    }

    if (response.upvoted_products) {
      this.upvotedProducts().set(response.upvoted_products, { parse: true});
      delete response.upvoted_products;
    }

    if (response.products) {
      this.products().set(response.products, { parse: true });
      delete response.products;
    }

    return response;
  }
});
