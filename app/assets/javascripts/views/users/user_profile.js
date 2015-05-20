HealthHunt.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST["users/show"],

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);

    var indexView = new HealthHunt.Views.ProductsIndex({
      collection: this.model.upvotedProducts()
    });
    this.$(".profile-body").html(indexView.render().$el);
    return this;
  }
});
