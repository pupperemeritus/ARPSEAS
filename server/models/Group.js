const mongoose = require("mongoose");
const Item = require("./Item");

const Group = mongoose.model("Group", {
    name: String,
    userId: String,
    items: [{ type: String, ref: "Item" }],
});

module.exports = Group;
