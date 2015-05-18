HealthHunt.Views.ProductShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.collection = this.model.comments();

    // Set up for composite views
    this.listenTo(this.collection, 'add', this.addCommentView);
    this.collection.each(this.addCommentView.bind(this));
    this.listenTo(this.collection, 'remove', this.removeCommentView);
  },

  events: {
    "click .new-comment": "createComment",
    "click .upvote": "toggleVote",
    "click .modal-blur": "closeModal"
  },

  template: JST['products/show'],

  render: function () {
    var content = this.template({
      product: this.model
    });
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
        this.collection.add(comment);
        this.$('form').each(function(){
          this.reset();
        });
      }.bind(this)
    });
  },

  toggleVote: function (event) {
    event.preventDefault();

    $.ajax({
      url: "api/products/vote",
      type: "POST",
      data: {
        product_id: this.model.id
      }, success: function () {
        this.model.fetch();
      }.bind(this)
    });
  },

  closeModal: function () {
    this.$el.empty();
    window.history.back();
  }
});
