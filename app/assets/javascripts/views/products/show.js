HealthHunt.Views.ProductShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.comments = this.model.comments();

    // Set up for composite views
    this.listenTo(this.comments, 'add', this.addCommentView);
    this.comments.each(this.addCommentView.bind(this));
    this.listenTo(this.comments, 'remove', this.removeCommentView);
  },

  events: {
    "click .new-comment": "createComment",
    "click .big-upvote": "toggleVote",
    "click .modal-blur": "close",
    "click .prod-coll-link-prod-show": "collectionAddProduct",
    "click .edit-product": "editProductView"
  },

  template: JST['products/show'],
  prodCollTemplate: JST['collections/add_product'],

  render: function () {
    var content = this.template({
      product: this.model
    });
    $("body").addClass("modal-hide");
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addCommentView: function (comment) {
    var subview = new HealthHunt.Views.CommentShow({ model: comment });
    this.addSubview('.comments', subview);
  },

  removeCommentView: function (comment) {
    this.removeModelSubview('.comments', comment);
  },

  createComment: function (event) {
    event.preventDefault();
    var attrs = this.$("form").serializeJSON();
    var comment = new HealthHunt.Models.Comment();

    comment.set(attrs);
    comment.save({}, {
      success: function() {
        this.comments.add(comment);
        this.$('form').each(function(){
          this.reset();
        });
      }.bind(this)
    });
  },

  toggleVote: function (event) {
    event.preventDefault();

    $.ajax({
      url: "api/products/" + this.model.id + "/vote",
      type: "POST",
      success: function (attrs) {
        this.model.fetch({
          success: function () {
            $("body").removeClass("loading");
          }
        });
        this.model.set(this.model.parse(attrs));
        this.collection.add(this.model, { merge: true });
      }.bind(this)
    });
  },

  closeModal: function () {
    this.remove();
    $("body").removeClass("modal-hide");
  },

  close: function () {
    this.closeModal();
    window.history.back();
  },

  collectionAddProduct: function () {
    var collectionAddProductView = new HealthHunt.Views.AddProduct({
      model: this.model
    });
    this.$("#product-collection-product-show").html(collectionAddProductView.render().$el);
  },

  editProductView: function () {
    var formView = new HealthHunt.Views.ProductForm({
      collection: this.collection,
      model: this.model
    });

    $(".new-product-modal").html(formView.render().$el);
  }
});
