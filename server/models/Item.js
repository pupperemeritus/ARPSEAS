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
    published: String, // Add the published field
    updated: String, // Add the updated field
    author: {
        name: String, // Add the name field inside the author object
    },
    comment: String, // Add the comment field
    journal_ref: String, // Add the journal_ref field
});

module.exports = Item;
