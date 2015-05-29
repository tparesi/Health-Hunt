# Health Hunt

[Live](http://www.healthhunt.us/)


## Description

Health Hunt is a daily product digest of fitness and health products curated by its users, inspired by Product Hunt. Health Hunt is built with a Backbone front-end consuming a RESTful Rails JSON API. I used custom AJAX requests to create product voting and user following. I also created custom modals and forms to improve UI/UX while browsing. The app fosters a community of users to curate interesting products and collections through daily posts and comments.

## Languages

* Ruby (Rails)
* JavaScript (jQuery, Backbone.js)
* SQL (PostgreSQL)
* HTML
* CSS

## Technologies, gems, and libraries

* AWS S3
* OmniAuth (Twitter)
* BCrypt
* Figaro
* PGSearch
* Kaminari
* Paperclip
* SerializeJSON
* CompositeView

## Code Design Choices

* Only users can add collections, products, and comments, but anyone can browse
* Users and products/collections are not dependent on each other - meaning products/collections persist if the user is deleted
* Comments and votes are dependent on users and do not persist if user is deleted
* Products are sorted differently depending on where they are being displayed - by date created, votes, or combination of both
* Collections are sorted by total products in collection (will not scale)
* Loading Spinner overlays content but not headers
* Form for adding product to collection closes when clicked off
* For now, allow any users to add products
* Limit collection creation when adding a collection for a particular product

### Future Features

- [ ] Pagination/infinite scroll
- [ ] Photo Crop for collection show background
- [ ] Add information features (such as comment totals on products)
- [ ] Continue to work on responsive design for mobile (Ongoing)
- [ ] Use Twitter API for avatars
- [ ] User Settings management (such as password resets)
