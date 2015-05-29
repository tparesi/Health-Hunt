HealthHunt.Views.newSession = Backbone.View.extend({
  initialize: function () {
    $(".subheader").css("display", "none");
    $(".header").removeClass("orange");
  },

  template: JST['new_session'],

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content');
    var content = this.template({authToken: authToken});
    this.$el.html(content);
    return this;
  }
});
