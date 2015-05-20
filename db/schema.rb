# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150520151616) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collectionings", force: :cascade do |t|
    t.integer  "product_id",    null: false
    t.integer  "collection_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "collectionings", ["collection_id"], name: "index_collectionings_on_collection_id", using: :btree
  add_index "collectionings", ["product_id"], name: "index_collectionings_on_product_id", using: :btree

  create_table "collections", force: :cascade do |t|
    t.integer  "owner_id",           null: false
    t.string   "title",              null: false
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "collections", ["owner_id"], name: "index_collections_on_owner_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "product_id", null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["product_id"], name: "index_comments_on_product_id", using: :btree

  create_table "followings", force: :cascade do |t|
    t.integer  "following_id", null: false
    t.integer  "follower_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "followings", ["follower_id", "following_id"], name: "index_followings_on_follower_id_and_following_id", unique: true, using: :btree

  create_table "products", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.string   "title",       null: false
    t.string   "url",         null: false
    t.string   "description", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "products", ["owner_id"], name: "index_products_on_owner_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "product_id", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["product_id", "user_id"], name: "index_votes_on_product_id_and_user_id", unique: true, using: :btree

end
