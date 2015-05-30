HealthHunt.Views.FollowButton = Backbone.View.extend({
  initialize: function () {
    if (HealthHunt.currentUser) {
      this.listenTo(HealthHunt.currentUser.followings(), 'add remove', this.render);
    }
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

    if (HealthHunt.currentUser.id && (HealthHunt.currentUser && HealthHunt.currentUser.id)) {
      $.ajax({
        url: "api/users/" + this.model.id + "/follow",
        type: "POST",
        success: function (attrs) {
          HealthHunt.currentUser.set(HealthHunt.currentUser.parse(attrs));
        }.bind(this)
      });
    } else {
      $(".log-in-modal").addClass("open-modal");
      $(".modal-screen").one("click", this.closeLoginModal);
    }
  },

  closeLoginModal: function () {
    $(".log-in-modal").removeClass("open-modal");
  }
});
