HealthHunt.Views.CollectionsIndex = Backbone.View.extend({
  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  className: 'collections-index',
  template: JST['collections'],

  render: function () {
    var content = this.template({
      collections: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
