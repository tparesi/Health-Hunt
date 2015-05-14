HealthHunt.Views.ProductsIndexItem = Backbone.View.extend({
  tagName: "li",
  template: JST["products/index_item"],
  events: {
    "click .upvote": "toggleVote"
  },

  render: function () {
    var content = this.template({
      product: this.model
    });
    this.$el.html(content);
    return this;
  },

  toggleVote: function (event) {
    event.preventDefault();

    $.ajax({
      url: "",
      type: "POST",
      data: {
        product_id: this.model.id
      }, success: function () {
        console.log("success");
      }
    });
  }
});
