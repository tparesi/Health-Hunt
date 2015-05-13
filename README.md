# Health Hunt

[Heroku link][heroku]

[heroku]: https://producthuntclone.herokuapp.com/

## Minimum Viable Product
Health Hunt is a clone of Product Hunt built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create products
- [ ] Create product comments
- [ ] Create collections of products
- [ ] View products and comments
- [ ] View owned collections
- [ ] Upvote products
- [ ] Browse each days most upvoted products
- [ ] Browse popular public collections
- [ ] Search for products by title
- [ ] Search for products by description
- [ ] Follow users

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Product, Comment Creation (~1.5 days)
I will implement user authentication in Rails based on the practices
learned at App Academy. By the end of this phase, users will be able to
log in and create products and comments through Backbone using a Rails
API. They will also be able to view the products index and show page
with comments.

[Details][phase-one]

### Phase 2: Collections creation (~1 day)
I will build the Rails and Backbone for Collections and its join table.
I will add a collections index view tab to the root page. After this
phase, a user will be able to create collections and browse all collections.

[Details][phase-two]

### Phase 3: Up Voting Products (~2 days)
I will add the ability to upvote products and sort the products on the
root page based on a product's votes. I will also implement a daily
reset to have each day be a new set of products to view and vote on.

[Details][phase-three]

### Phase 4:User Profile (~2 days)
I want to add a profile page for the user where they can see their upvoted
products, created products, collections, followers, and followees.

[Details][phase-four]

### Phase 5: Fancy Edit and Creation of Collections and Comments (~1 day)
I plan to use third-party libraries to add functionality to the
'CollectionForm' and `CommentForm` views in this phase.
First I'll need to add a Markdown editor to the `CommentForm`. Then, I
plan to integrate Filepicker for file uploads so users can add images to
collections.

[Details][phase-five]

### Phase 6: Prettify the app (~1.5 days)
Afte the app is fully functional, I will work to implement additional JS, HTML, and CSS to increase the UI/UX features of the app.

### Bonus Features (TBD)
- [ ] Pagination/infinite scroll
- [ ] Multiple sessions/session management
- [ ] Log In API (Twitter/Facebook/Google)
- [ ] User avatars
- [ ] Product Search
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
