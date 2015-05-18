HealthHunt.Views.CollectionForm = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  className: 'edit-collection',

  events: {
    "submit": "submit",
    "click .delete-collection": "deleteCollection",
    "change #input-collection-image": "fileInputChange"
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

  fileInputChange: function(event){
    console.log(event.currentTarget.files[0]);

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that.model._image = reader.result;
      console.log(that.model);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      delete that.model._image;
      console.log(that.model);
    }
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
