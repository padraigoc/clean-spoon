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

ActiveRecord::Schema.define(version: 20190330012648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fav_recipes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_fav_recipes_on_recipe_id", using: :btree
    t.index ["user_id"], name: "index_fav_recipes_on_user_id", using: :btree
  end

  create_table "fridge_ingredients", force: :cascade do |t|
    t.string   "name"
    t.integer  "user_id"
    t.date     "expiry_date"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_fridge_ingredients_on_user_id", using: :btree
  end

  create_table "list_ingredients", force: :cascade do |t|
    t.string   "name"
    t.integer  "fav_recipe_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["fav_recipe_id"], name: "index_list_ingredients_on_fav_recipe_id", using: :btree
  end

  create_table "recipes", force: :cascade do |t|
    t.string "yummily_id"
    t.string "name"
    t.text   "instructions"
    t.text   "preparations"
    t.string "ingredients",  array: true
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.boolean  "vegan"
    t.boolean  "vegetarian"
    t.boolean  "gf"
    t.string   "allergies",               array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "fav_recipes", "recipes"
  add_foreign_key "fav_recipes", "users"
  add_foreign_key "fridge_ingredients", "users"
  add_foreign_key "list_ingredients", "fav_recipes"
end