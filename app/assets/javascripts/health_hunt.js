window.HealthHunt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUser = new HealthHunt.Models.CurrentUser();
    this.currentUser.fetch();

    new HealthHunt.Routers.Router({
      $rootEl: $("#main")
    });
    Backbone.history.start();
  }
};
