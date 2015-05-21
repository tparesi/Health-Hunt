HealthHunt.Views.UserShow = Backbone.CompositeView.extend({
  template: JST["users/show"],
  tagName: "li",

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    if (!this.model.get("is_current_user")) {
      this.addFollowButton(this.model);
    }

    return this;
  },

  addFollowButton: function (user) {
    var subview = new HealthHunt.Views.FollowButton({
      model: user,
      className: "small-follow-button"
    });
    this.addSubview('.small-follow', subview);
  },

  removeFollowButton: function (user) {
    this.removeModelSubview('.small-follow', user);
  }
});
