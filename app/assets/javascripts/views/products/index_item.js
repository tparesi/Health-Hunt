HealthHunt.Views.ProductsIndexItem = Backbone.View.extend({
  initialize: function (options) {
    this.currentCollection = options.currentCollection;
    this.listenTo(this.model, 'change', this.render);
  },

  tagName: "li",
  className: "product group",

  template: JST["products/index_item"],

  events: {
    "click .upvote": "toggleVote",
    "click .prod-coll-link": "collectionAddProduct",
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

    if (HealthHunt.currentUser && HealthHunt.currentUser.id) {
      $.ajax({
        url: "api/products/" + this.model.id + "/vote",
        type: "POST",
        success: function (attrs) {
          this.model.set(this.model.parse(attrs));
          this.collection.add(this.model, { merge: true });
        }.bind(this)
      });
    } else {
      $(".log-in-modal").addClass("open-modal");
      $(".modal-screen").one("click", this.closeLoginModal);
    }
  },

  collectionAddProduct: function () {
    if (HealthHunt.currentUser && HealthHunt.currentUser.id) {
      var collectionAddProductView = new HealthHunt.Views.AddProduct({
        model: this.model,
        currentCollection: this.currentCollection,
        collection: this.collection
      });
      this.$("#product-collection-show-index").html(collectionAddProductView.render().$el);
    } else {
      $(".log-in-modal").addClass("open-modal");
      $(".modal-screen").one("click", this.closeLoginModal);
    }
  },

  closeLoginModal: function () {
    $(".log-in-modal").removeClass("open-modal");
  }
});
