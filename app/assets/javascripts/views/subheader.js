HealthHunt.Views.SubHeader = Backbone.View.extend({
  initialize: function () {
    $(window).on("hashchange", function(event) {
        if (window.location.hash === "") {
          this.productActive();
        }
      }.bind(this));
  },

  template: JST["subheader"],

  events: {
    'click a': "toggleActive"
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  toggleActive: function (event) {
    this.$("a").removeClass("active-subheader");
    $(event.currentTarget).addClass("active-subheader");
  },

  productActive: function (event) {
    this.$("a").removeClass("active-subheader");
    this.$(".prod-col-header h2:first-child a").addClass("active-subheader");
  }
});
