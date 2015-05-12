window.HealthHunt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new HealthHunt.Routers.Router({
      $rootEl: $("#main")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  HealthHunt.initialize();
});
