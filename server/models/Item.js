const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Item = mongoose.model("Item", {
    id: String,
    title: String,
    description: String,
    content: String,
    abstract: {
        type: String,
        required: false,
    },
    summary: {
        type: String,
        required: false,
    },
    notes: {
        type: String,
        required: false,
    },
    published: String,
    updated: String,
    author: {
        name: String,
    },
    comment: String,
    journal_ref: String,
});

module.exports = Item;
