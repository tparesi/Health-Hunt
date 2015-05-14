HealthHunt.Models.Product = Backbone.Model.extend({
  urlRoot: '/api/products',

  comments: function () {
    if (!this._comments) {
      this._comments = new HealthHunt.Collections.Comments([], { product: this });
    }

    return this._comments;
  },

  collections: function () {
    if (!this._collections) {
      this._collections = new HealthHunt.Collections.Collections();
    }

    return this._collections;
  },

  toJSON: function () {
    return {product: _.clone(this.attributes)};
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    if (response.collections) {
      this.collections().set(response.collections, { parse: true });
      delete response.collections;
    }

    return response;
  },

  collectionIds: function () {
    return this.collections().map(function(collection) {
      return collection.id;
    });
  },

  containsCollectionId: function (id) {
    var boolean = false;

    this.collections().each(function(collection) {
      if (collection.id === id) {
        boolean = true;
      }
    });

    return boolean;
  },

  addCollectionAndSave: function (collectionModel) {
    this.collections().add(collectionModel);

    var collectionIds = this.collectionIds();
    collectionIds.push(collectionModel.id);
    this.save({collection_ids: collectionIds});
  }
});
