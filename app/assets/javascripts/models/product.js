HealthHunt.Models.Product = Backbone.Model.extend({
  urlRoot: '/api/products',

  comments: function () {
    if (!this._comments) {
      this._comments = new HealthHunt.Collections.Comments([], { product: this });
    }

    return this._comments;
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    return response;
  }
});
