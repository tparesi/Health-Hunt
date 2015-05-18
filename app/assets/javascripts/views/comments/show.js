HealthHunt.Views.CommentShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync remove', this.render);
  },

  events: {
    "click .delete-comment": "deleteComment"
  },

  tagName: 'li',
  className: 'comment-show',
  template: JST['comments/show'],

  render: function () {
    var content = this.template({
      comment: this.model
    });
    this.$el.html(content);
    return this;
  },

  deleteComment: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
});
