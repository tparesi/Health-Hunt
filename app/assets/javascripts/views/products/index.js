HealthHunt.Views.ProductsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.render);
  },

  template: JST['products'],

  render: function () {
    var content = this.template({
      products: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
