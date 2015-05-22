HealthHunt.Views.ProductForm = Backbone.View.extend({
  events: {
    "click .new-product": "submit",
    "click .delete-product": "deleteProduct",
    "click .modal-screen": "closeModal",
    "click .close-modal": "closeModal"
  },

  template: JST['products/form'],

  render: function () {
    var content = this.template({
      product: this.model
    });
    $("body").addClass("modal-hide");
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$("form").serializeJSON();

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
        this.closeModal();
      }.bind(this),
      error: function (model, response) {
        response.responseJSON.forEach(function (error) {
          this.$(".new-product-errors").append(error + ".  ");
        }.bind(this));
      }.bind(this)
    });
  },

  deleteProduct: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: function () {
        this.closeModal();
        Backbone.history.navigate("#", { trigger: true });
      }.bind(this)
    });
  },

  closeModal: function () {
    event && event.preventDefault();
    this.remove();
    $("body").removeClass("modal-hide");
  }
});
