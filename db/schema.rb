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

ActiveRecord::Schema.define(version: 20150523141539) do

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

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "products", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.string   "title",       null: false
    t.string   "url",         null: false
    t.string   "description", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "products", ["owner_id"], name: "index_products_on_owner_id", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "token",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sessions", ["token"], name: "index_sessions_on_token", using: :btree
  add_index "sessions", ["user_id"], name: "index_sessions_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["provider", "uid"], name: "index_users_on_provider_and_uid", unique: true, using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "product_id", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["product_id", "user_id"], name: "index_votes_on_product_id_and_user_id", unique: true, using: :btree

  add_foreign_key "sessions", "users"
end
