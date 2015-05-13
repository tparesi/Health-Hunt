HealthHunt.Collections.Comments = Backbone.Collection.extend({
  url: "api/comments",

  model: HealthHunt.Models.Comment,

  getOrFetch: function (id) {
   var comment = this.get(id);

   if (comment) {
     comment.fetch();
   } else {
     comment = new HealthHunt.Models.Comment({
       id: id
     });
     comment.fetch({
       success: function () {
         this.add(comment)
       }.bind(this)
     });
   }

   return comment;
 }
});
