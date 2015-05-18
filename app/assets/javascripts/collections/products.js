HealthHunt.Collections.Products = Backbone.Collection.extend({
  url: 'api/products',
  model: HealthHunt.Models.Product,

  sortByVotes: function (product) {
    this.comparator = this.compareByVotes;
  },

  compareByVotes: function (product) {
    return -product.get("votes");
  },

  comparator: function (product1, product2) {
    if (product1.compareDate(product2) === 0) {
      if (product1.get("votes") > product2.get("votes")) {
        return -1;
      } else if (product1.get("votes") === product2.get("votes")) {
        return 0;
      } else {
        return 1;
      }
    } else if (product1.compareDate(product2) === -1) {
      return -1;
    } else {
      return 1;
    }
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
