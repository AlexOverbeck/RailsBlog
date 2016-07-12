ActiveRecord::Schema.define(version: 20160707190054) do

    create_table "articles", force: :cascade do |t|
        t.string   "title"
        t.text     "description"
        t.datetime "created_at"
        t.datetime "updated_at"
        t.integer  "user_id"
    end

    create_table "users", force: :cascade do |t|
        t.string   "username"
        t.string   "email"
        t.datetime "created_at",      null: false
        t.datetime "updated_at",      null: false
        t.string   "password_digest"
    end

end
