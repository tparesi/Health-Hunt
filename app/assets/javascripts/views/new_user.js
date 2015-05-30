HealthHunt.Views.newUser = Backbone.View.extend({
  initialize: function () {
    $(".subheader").css("display", "none");
    $(".header").removeClass("orange");
    $(".log-in-modal").removeClass("open-modal");
  },

  template: JST['new_user'],

  render: function () {
    var authToken = $('meta[name=csrf-token]').attr('content');
    var content = this.template({authToken: authToken});
    this.$el.html(content);

    $(window).on("hashchange", function(event) {
      if (!window.location.hash.match(/#\/session*/)) {
        $(".header").addClass("orange");
        $(".subheader").css("display", "block");
        this.remove();
      }
    }.bind(this));

    return this;
  }
});
