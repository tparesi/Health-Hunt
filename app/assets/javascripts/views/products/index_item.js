HealthHunt.Views.ProductsIndexItem = Backbone.View.extend({
  tagName: "li",
  template: JST["products/index_item"],

  render: function () {
    var content = this.template({
      product: this.model
    });
    this.$el.html(content);
    return this;
  }
});
