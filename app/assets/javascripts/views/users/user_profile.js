HealthHunt.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.view = options.view;
    this.selectedATag = options.selectedATag;
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST["users/profile"],

  render: function () {
    var content = this.template({
      user: this.model
    });

    this.$el.html(content);
    this._swapView(this.view);
    if (!this.model.get("is_current_user")) {
      this.addFollowButton(this.model);
    }

    this.$(".profile-header-nav a:nth-of-type(" + this.selectedATag + ")").attr("id", "profile-header-nav-active");
    return this;
  },

  addFollowButton: function (user) {
    var subview = new HealthHunt.Views.FollowButton({
      model: user,
      className: "follow-button"
    });
    this.addSubview('.follow', subview);
  },

  removeFollowButton: function (user) {
    this.removeModelSubview('.follow', user);
  },

  _swapView: function (view) {
    this.addSubview(".profile-body", view);
  }
});
