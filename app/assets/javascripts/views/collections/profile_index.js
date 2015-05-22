HealthHunt.Views.UserCollectionsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync remove', this.render);
  },

  className: 'collections-index',
  template: JST['collections/profile_index'],

  render: function () {
    var content = this.template({
      collections: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
