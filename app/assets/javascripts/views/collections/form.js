HealthHunt.Views.CollectionForm = Backbone.View.extend({
  tagName: 'form',
  events: {
    "click .new-collection": "submit"
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
    var attrs = this.$el.serializeJSON();

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
        HealthHunt.currentUser.collections().add(this.model);
        Backbone.history.navigate("#/collections", { trigger: true });
      }.bind(this)
    });
  }
});
