HealthHunt.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.view = options.view;
    this.selectedATag = options.selectedATag;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(HealthHunt.currentUser, 'change', this.render);
  },

  events: {
    "click .follow-button": "toggleFollow",
    "click .small-follow-button": "targetedToggleFollow"
  },

  template: JST["users/show"],

  render: function () {
    var content = this.template({
      user: this.model
    });

    this.$el.html(content);
    this._swapView(this.view);

    this.$(".profile-header-nav a:nth-of-type(" + this.selectedATag + ")").attr("id", "profile-header-nav-active");
    return this;
  },

  toggleFollow: function (event) {
    event.preventDefault();

    $.ajax({
      url: "api/users/" + this.model.id + "/follow",
      type: "POST",
      success: function (attrs) {
        HealthHunt.currentUser.set(HealthHunt.currentUser.parse(attrs));
      }
    });
  },

  targetedToggleFollow: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("id");

    $.ajax({
      url: "api/users/" + id + "/follow",
      type: "POST",
      success: function (attrs) {
        HealthHunt.currentUser.set(HealthHunt.currentUser.parse(attrs));
      }
    });
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$(".profile-body").html(view.render().$el);
  }
});
