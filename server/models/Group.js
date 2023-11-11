const mongoose = require("mongoose");
const Item = require("./Item");

const Group = mongoose.model("Group", {
    name: String,
    userId: String,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = Group;
