HealthHunt.Views.ProductForm = Backbone.View.extend({
  tagName: 'form',
  events: {
    "click .new-product": "submit"
  },

  template: JST['products/form'],

  render: function () {
    var content = this.template({
      product: this.model
    });
    this.$el.html(content);
    return this;
  },

  submit: {

  }
});
