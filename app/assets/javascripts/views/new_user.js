HealthHunt.Views.newUser = Backbone.View.extend({
  initialize: function () {
    $(document).find(".subheader").css("display", "none");
    $(".header").removeClass("orange");
  },

  template: JST['new_user'],

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content');
    var content = this.template({authToken: authToken});
    this.$el.html(content);
    return this;
  }
});
