HealthHunt.Views.UserFollowsIndex = Backbone.CompositeView.extend ({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addUserView);
    this.listenTo(this.collection, 'remove', this.removeUserView);
    this.collection.each(this.addUserView.bind(this));
  },

  template: JST['users'],
  className: "follow-users group",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addUserView: function (user) {
    var subview = new HealthHunt.Views.UserShow({
      model: user
    });
    this.addSubview('.follow-users-body', subview);
  },

  removeUserView: function (user) {
    this.removeModelSubview('.follow-users-body', user);
  },
});
