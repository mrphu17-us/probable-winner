const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let board = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    created_by: {
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
    collection: "boards"
});

board.pre('save', function (next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
})

module.exports = mongoose.model("board", board);