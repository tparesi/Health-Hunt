HealthHunt.Views.AddProduct = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(HealthHunt.currentUser, 'sync', this.render);
    this.listenTo(HealthHunt.currentUser.collections(), 'add remove', this.render);
  },

  events: {
    "click .prod-coll": "toggleProduct",
    "click .new-collection": "submit"
  },

  template: JST['collections/add_product'],

  render: function () {
    var content = this.template({
      product: this.model,
      formTemplate: JST['collections/form']
    });
    console.log('hello');
    this.$el.html(content);
    return this;
  },

  toggleProduct: function (event) {
    event && event.preventDefault();
    var collection_ids = this.$el.find(".update-coll").serializeJSON();
    var html = "#/products/" + this.model.id;

    this.model.set(collection_ids);
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate(html, { trigger: true });
      }
    });
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.find(".new-collection-form").serializeJSON();
    var newCollectionModel = new HealthHunt.Models.Collection();
    var html = "#/products/" + this.model.id;

    newCollectionModel.set(attrs);
    newCollectionModel.save({}, {
      success: function () {
        HealthHunt.currentUser.collections().add(newCollectionModel);
        this.model.addCollectionAndSave(newCollectionModel);
        Backbone.history.navigate(html, { trigger: true });
      }.bind(this)
    });
  }
});
