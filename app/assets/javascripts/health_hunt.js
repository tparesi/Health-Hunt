window.HealthHunt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUser = new HealthHunt.Models.User({ id: options.userId })
    new HealthHunt.Routers.Router({
      $rootEl: $("#main")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  HealthHunt.initialize();
});
