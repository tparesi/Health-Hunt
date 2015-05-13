# Phase 1: User Authentication, Product, Comment Creation

## Rails
### Models
* User
* Session
* Product
* Comment

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::SessionsController (show)
* Api::ProductsController (create, index, show, update, destroy)
* Api::CommentsController (create, update, destroy)

### Views
* users/new.html.erb
* session/new.html.erb
* static_pages/root.html.erb

## Backbone
### Models
* Session
* Product (parses nested `comments` association)

### Collections
* Products
* Comments

### Views
* ProductForm
* ProductsIndex
* ProductShow (composite view, contains CommentsIndexItems subview)
* CommentsIndexItems
* CommentsForm

## Gems/Libraries
