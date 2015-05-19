HealthHunt.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: HealthHunt.Models.User,

  getOrFetch: function (id) {
   var user = this.get(id);

   if (user) {
     user.fetch();
   } else {
     user = new HealthHunt.Models.User({ id: id });
     user.fetch({
       success: function () {
         this.add(user);
       }.bind(this)
     });
   }

   return user;
 }
});
