HealthHunt.Views.CommentShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  tagName: 'li',
  template: JST['comments/show'],

  render: function () {
    var content = this.template({
      comment: this.model
    });
    this.$el.html(content);
    return this;
  }
});
