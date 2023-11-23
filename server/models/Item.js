const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const itemSchema = new mongoose.Schema({
    "_id": { type: [String], required: true },
    "updated": { type: [String], required: true },
    "published": { type: [String], required: true },
    "title": { type: [String], required: true },
    "summary": { type: String, required: true },
    "author": [
        {
            name: { type: [String], required: true },
        },
    ],
    "arxiv:doi": [
        {
            _: { type: String, required: true },
            $: {
                "xmlns:arxiv": { type: String, required: true },
            },
        },
    ],
    "link": [
        {
            $: {
                title: { type: String, required: true },
                href: { type: String, required: true },
                rel: { type: String, required: true },
            },
        },
    ],
    "arxiv:comment": [
        {
            _: { type: String, required: true },
            $: {
                "xmlns:arxiv": { type: String, required: true },
            },
        },
    ],
    "arxiv:primary_category": [
        {
            $: {
                "xmlns:arxiv": { type: String, required: true },
                "term": { type: String, required: true },
                "scheme": { type: String, required: true },
            },
        },
    ],
    "category": [
        {
            $: {
                term: { type: String, required: true },
                scheme: { type: String, required: true },
            },
        },
    ],
    "abstract": { type: String, required: true },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
