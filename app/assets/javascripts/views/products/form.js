HealthHunt.Views.ProductForm = Backbone.View.extend({
  tagName: 'form',
  className: 'product-form',
  
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

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
        Backbone.history.navigate("", { trigger: true })
      }.bind(this)
    });
  }
});
