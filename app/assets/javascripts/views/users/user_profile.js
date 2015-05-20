HealthHunt.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.view = options.view;
    this.selectedATag = options.selectedATag;
    this.listenTo(this.model, 'sync', this.render);
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

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$(".profile-body").html(view.render().$el);
  }
});
