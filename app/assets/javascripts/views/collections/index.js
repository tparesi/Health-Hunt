HealthHunt.Views.CollectionsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync add remove', this.render);
  },

  template: JST['collections'],

  render: function () {
    var content = this.template({
      collections: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
