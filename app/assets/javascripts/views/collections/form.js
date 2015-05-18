HealthHunt.Views.CollectionForm = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  className: 'edit-collection',

  events: {
    "click .new-collection": "submit",
    "click .delete-collection": "deleteCollection"
  },

  template: JST['collections/form'],

  render: function () {
    var content = this.template({
      collection: this.model
    });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$('form').serializeJSON();

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
        HealthHunt.currentUser.collections().add(this.model);
        Backbone.history.navigate("#/collections", { trigger: true });
      }.bind(this)
    });
  },

  deleteCollection: function (event) {
    event.preventDefault();
    var ask = confirm("Are you sure you want to delete this collection?");

    if(ask){
      this.model.destroy({
        success: function () {
          Backbone.history.navigate("#/collections", { trigger: true });
        }
      });
     }
  }
});
