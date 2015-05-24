HealthHunt.Views.CollectionShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.products = this.model.products();

    // Set up for composite views
    this.listenTo(this.products, 'sync', this.render);
    this.listenTo(this.products, 'remove', this.removeProductView);
  },

  events: {
    "click .edit-collection-button": "renderEditCollectionForm",
    "submit": "submit",
    "click .delete-collection": "deleteCollection",
    "click .cancel-form-grey": "cancelForm",
    "click .upload-button": "clickChooseFile",
    "change #input-collection-image": "fileInputChange"
  },

  template: JST['collections/show'],
  editFormTemplate: JST['collections/form'],

  render: function () {
    var content = this.template({
      collection: this.model
    });

    this.$el.html(content);

    this.products.sortByVotes();
    this.products.each(this.addProductView.bind(this));
    return this;
  },

  addProductView: function (product) {
    var subview = new HealthHunt.Views.ProductsIndexItem({
      model: product
    });
    this.addSubview('.products', subview);
  },

  removeProductView: function (product) {
    this.removeModelSubview('.products', product);
  },

  renderEditCollectionForm: function () {
    this.$(".edit-collection").html(this.editFormTemplate({
      collection: this.model
    }));
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$('form').serializeJSON();

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, { merge: true });
        HealthHunt.currentUser.collections().add(this.model, { merge: true });
      }.bind(this)
    });
  },

  cancelForm: function (event) {
    event.preventDefault();
    this.$(".edit-collection").empty();
    this.$("img").attr("src", this.model.get("image_url"));
  },

  clickChooseFile: function (event) {
    event.preventDefault();
    this.$("#input-collection-image").click();
  },

  fileInputChange: function(event){
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
      that.model._image = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
      delete that.model._image;
    }
  },

  _updatePreview: function(src){
    this.$("img").attr("src", src);
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
