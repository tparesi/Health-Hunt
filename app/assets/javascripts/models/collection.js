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
  },

  toJSON: function(){
    var json = { collection: _.clone(this.attributes) };

    if (this._image) {
      json.collection.image = this._image;
    }

    return json;
  }
});
