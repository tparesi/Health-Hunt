HealthHunt.Views.FollowButton = Backbone.View.extend({
  initialize: function () {
    this.listenTo(HealthHunt.currentUser.followings(), 'add remove', this.render);
  },

  template: JST["users/follow_button"],
  tagName: "button",

  events: {
    "click": "toggleFollow"
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  },

  toggleFollow: function (event) {
    event.preventDefault();

    $.ajax({
      url: "api/users/" + this.model.id + "/follow",
      type: "POST",
      success: function (attrs) {
        HealthHunt.currentUser.set(HealthHunt.currentUser.parse(attrs));
      }.bind(this)
    });
  }
});
