HealthHunt.Collections.Products = Backbone.Views.extend({
  url: 'api_products',
  model: HealthHunt.Models.Product,

  getOrFetch: function (id) {
   var product = this.get(id);

   if (product) {
     product.fetch();
   } else {
     product = new HealthHunt.Models.Product({
       id: id
     });
     product.fetch();
   }

   return product;
 }
});
