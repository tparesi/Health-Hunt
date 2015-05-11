# Phase 2: Viewing Collections, Products, and Comments

## Rails
### Models

### Controllers
* Api::CollectionsController (create, destroy, index, show, update)
* Api::ProductsController (create, destroy, index, show, update)
* Api::CommentsController (create, destroy, index, show, update)

### Views
* collections/show.json.jbuilder
* products/show.json.jbuilder

## Backbone
### Models
* Collection
* Product (parses nested `comments` association)

### Collections
* Collections
* Products

### Views
* CollectionForm
* CollectionsIndex
* ProductForm
* ProductsIndex
* ProductShow (composite view, contains CommentsIndex subview)
* CommentsIndex (composite view, contains CommentsIndexItem subview)
* CommentsIndexItem

## Gems/Libraries
