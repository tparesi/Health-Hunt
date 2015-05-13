HealthHunt.Collections.Collections = Backbone.Collection.extend({
  url: 'api/collections',
  model: HealthHunt.Models.Collection,

  getOrFetch: function (id) {
   var model = this.get(id);

   if (model) {
     model.fetch();
   } else {
     model = new HealthHunt.Models.Collection({ id: id });
     model.fetch({
       success: function () {
         this.add(model);
       }.bind(this)
     });
   }

   return model;
 }
});
