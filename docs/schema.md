# Schema Information

## products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null
url         | string    | not null
description | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
product_id  | integer   | not null, foreign key (references products)
body        | string    | not null

## collectionings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
product_id    | integer   | not null, foreign key (references products)
collection_id | integer   | not null, foreign key (references collections)

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null
image_url   | string    |
description | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## followings
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
followee_id  | integer   | not null, foreign key (references users)
follower_id  | integer   | not null, foreign key (references users)

## up_votings (each product and user combo must be unique)
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
product_id   | integer   | not null, foreign key (references products)
user_id      | integer   | not null, foreign key (references users)
