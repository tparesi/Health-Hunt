HealthHunt.Models.Collection = Backbone.Model.extend({
  urlRoot: '/api/collections',

  products: function () {
    if (!this._products) {
      this._products = new HealthHunt.Collections.Products([], { collection: this });
    }

    return this._products;
  },

  parse: function (response) {
    if (response.products) {
      this.products().set(response.products, { parse: true });
      delete response.products;
    }

    return response;
  }
});
