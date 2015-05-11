# Health Hunt

[Heroku link][heroku]

[heroku]: https://producthuntclone.herokuapp.com/

## Minimum Viable Product
Health Hunt is a clone of Product Hunt built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create products
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

### Phase 1: User Authentication, Collection, Product, Comment Creation (~1.5 days)
I will implement user authentication in Rails based on the practices
learned at App Academy. By the end of this phase, users will be able to
log in and create products, comments, and collections using a simple
text form in a Rails View.

[Details][phase-one]

### Phase 2: Viewing Collections, Products, and Comments (~3 days)
I will add API routes to serve product data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of
this phase, users will be able to create and view collections, comments,
and products, all inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing and Displaying Collections, Products, and Comments (~2 days)
I plan to use third-party libraries to add functionality to the
'CollectionForm' and `CommentForm` views in this phase.
First I'll need to add a Markdown editor to the `CommentForm`. Then, I
plan to integrate Filepicker for file uploads so users can add images to
collections.

[Details][phase-three]

### Phase 4: User Profile (~2 days)
I want to add a profile page for the user where they can see their upvoted
products, created products, collections, followers, and followees.

[Details][phase-four]

### Phase 5: Searching for Products (~1 day)
I'll need to add a `search` route to products. On the
Backbone side, there will be a `SearchIndex.`

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Pagination/infinite scroll
- [ ] Multiple sessions/session management
- [ ] Log In API (Twitter/Facebook/Google)
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
