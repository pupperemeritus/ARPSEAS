const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    "_id": String,
    "updated": String,
    "published": String,
    "title": String,
    "summary": String,
    "userId": String,
    "author": [
        {
            name: [String],
        },
    ],
    "arxiv:doi": [
        {
            _: String,
        },
    ],
    "link": {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    "arxiv:comment": [
        {
            _: String,
        },
    ],
    "arxiv:primary_category": [
        {
            term: String,
            scheme: String,
        },
    ],
    "category": [
        {
            term: String,
            scheme: String,
        },
    ],
    "abstract": String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
