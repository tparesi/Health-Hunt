HealthHunt.Collections.Products = Backbone.Collection.extend({
  url: 'api/products',
  model: HealthHunt.Models.Product,

  comparator: function (product) {
    return -product.get("votes");
  },

  getOrFetch: function (id) {
   var product = this.get(id);

   if (product) {
     product.fetch();
   } else {
     product = new HealthHunt.Models.Product({ id: id });
     product.fetch({
       success: function () {
         this.add(product);
       }.bind(this)
     });
   }

   return product;
 }
});
