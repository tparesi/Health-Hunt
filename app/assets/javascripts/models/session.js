HealthHunt.Models.CurrentUser = Backbone.Model.extend({
  urlRoot: '/api/session',

  follows: function (userId) {
    var boolean = false;
    this.followings().each(function(following) {
      if (following.id === userId) {
        boolean = true;
      }
    });

    return boolean;
  },

  followings: function () {
    if (!this._followings) {
      this._followings = new HealthHunt.Collections.Users();
    }

    return this._followings;
  },

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

  parse: function (response) {
    if (response.collections) {
      this.collections().set(response.collections, { parse: true });
      delete response.collections;
    }

    if (response.products) {
      this.products().set(response.products, { parse: true });
      delete response.products;
    }

    if (response.followings) {
      this.followings().set(response.followings, { parse: true });
      delete response.followings;
    }

    return response;
  }
});
