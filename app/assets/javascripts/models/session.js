HealthHunt.Models.CurrentUser = Backbone.Model.extend({
  urlRoot: '/api/session',

  collections: function () {
    if (!this._collections) {
      this._collections = new HealthHunt.Collections.Collections([], { owner: this });
    }

    return this._collections;
  },

  parse: function (response) {
    if (response.collections) {
      this.collections().set(response.collections, { parse: true });
      delete response.collections;
    }

    return response;
  }
});
