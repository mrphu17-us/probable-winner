const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    user_avatar: {
        type: String
    },
    updated_by: {
        type: String
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
}, {
    collection: "users"
});

user.pre('save', function (next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
})

module.exports = mongoose.model("user", user);