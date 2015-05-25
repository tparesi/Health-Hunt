# Health Hunt

[Heroku link][heroku]

[heroku]: https://producthuntclone.herokuapp.com/

## Minimum Viable Product
Health Hunt is a clone of Product Hunt built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create products
- [x] Create product comments
- [x] Create collections of products
- [x] View products and comments
- [x] View profile with owned collections, products, etc
- [x] Upvote products
- [x] Browse each days most upvoted products
- [x] Browse popular public collections
- [x] Follow users

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

### Phase 3: Up Voting Products (~1.5 days)
I will add the ability to upvote products and sort the products on the
root page based on a product's votes. I will also implement a daily
collection of products on the main page, that is reset each day.

[Details][phase-three]

### Phase 4:User Profile (~2 days)
I want to add a profile page for the user where they can see their upvoted
products, created products, collections, followers, and followees. I will first create User Profiles that display just the products and collections for each user. After that, I will add in the functionality of following users, and then display those users on profile pages as well.

[Details][phase-four]

### Phase 5: Fancy Edit of Collections and Modal Views (~1 day)
I plan to integrate Filepicker for file uploads so users can add images
to collections. I will also add modals for all the form views.

[Details][phase-five]

### Phase 6: "Prettify" the app (~1.5 days)
After the app is fully functional, I will work to implement additional
JS, HTML, and CSS to increase the UI/UX features of the app.

### Bonus Features (TBD)
- [ ] Pagination/infinite scroll
- [x] Multiple sessions/session management
- [x] Log In API (Twitter/Facebook/Google)
- [x] Product Search
- [ ] Photo Crop for collection show background
- [ ] Add information features (such as comment totals on products)
- [1/2] Continue work on responsive design for mobile (Ongoing)
- [ ] Use Twitter API for avatars
- [ ] User Settings management (such as password resets)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
