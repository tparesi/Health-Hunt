HealthHunt.Views.AddProduct = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    "click .prod-coll": "toggleProduct",
    "click .new-collection": "submit"
  },

  template: JST['collections/add_product'],

  render: function () {
    var content = this.template({
      product: this.model
    });
    this.$el.html(content);
    return this;
  },

  toggleProduct: function (event) {
    event.preventDefault();
    var collection_ids = this.$el.find("form").serializeJSON();
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
    var model = new HealthHunt.Models.Collection();

    model.set(attrs);
    model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
      }.bind(this)
    });
  }
});
