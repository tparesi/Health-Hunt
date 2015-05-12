HealthHunt.Views.ProductShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['products/show'],

  render: function () {
    var content = this.template({
      product: this.model
    });
    this.$el.html(content);
    return this;
  }
});
