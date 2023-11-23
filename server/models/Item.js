const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Item = mongoose.model("Item", {
    id: {
        type: String,
        required: true,
    },
    updated: {
        type: String,
        required: true,
    },
    published: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    author: {
        name: {
            type: String,
            required: true,
        },
        affiliation: {
            type: String,
            required: true,
        },
    },
    comment: {
        type: String,
        required: true,
    },
    link: {
        href: {
            type: String,
            required: true,
        },
        rel: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false,
        },
    },
    primary_category: {
        term: {
            type: String,
            required: true,
        },
        scheme: {
            type: String,
            required: true,
        },
    },
    category: {
        term: {
            type: String,
            required: true,
        },
        scheme: {
            type: String,
            required: true,
        },
    },
    // Additional fields
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Item;
