window.HealthHunt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    new HealthHunt.Routers.Router({
      $rootEl: $("#main")
    });
    Backbone.history.start();

    this.currentUser = new HealthHunt.Models.CurrentUser();
    this.currentUser.fetch();
  }
};
