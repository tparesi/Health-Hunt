HealthHunt.Views.UserFollowsIndex = Backbone.View.extend ({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['users'],
  className: "follow-users",

  render: function () {
    var content = this.template({
      users: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
