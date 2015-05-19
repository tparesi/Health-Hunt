HealthHunt.Views.AddProduct = Backbone.View.extend({
  initialize: function () {
    HealthHunt.currentUser.collections().fetch();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(HealthHunt.currentUser, 'sync', this.render);
    this.listenTo(HealthHunt.currentUser.collections(), 'sync remove', this.render);
  },

  className: 'product-collection-form',

  events: {
    "click .prod-coll": "toggleProduct",
    "click .new-collection": "submit",
    "click .cancel-form": "cancelForm"
  },

  template: JST['collections/add_product'],

  render: function () {
    var content = this.template({
      product: this.model,
      formTemplate: JST['collections/form']
    });
    this.$el.html(content);
    return this;
  },

  toggleProduct: function (event) {
    event && event.preventDefault();
    var collection_ids = this.$el.find(".update-coll").serializeJSON();

    this.model.set(collection_ids);
    this.model.save({}, {
      success: function () {
        window.history.back();
      }
    });
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.find(".new-collection-form").serializeJSON();
    var newCollectionModel = new HealthHunt.Models.Collection();

    newCollectionModel.set(attrs);
    newCollectionModel.save({}, {
      success: function () {
        HealthHunt.currentUser.collections().add(newCollectionModel);
        this.model.addCollectionAndSave(newCollectionModel);
        window.history.back();
      }.bind(this)
    });
  },

  cancelForm: function (event) {
    event.preventDefault();
    window.history.back();
  }
});
