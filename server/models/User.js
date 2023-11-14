const mongoose = require("mongoose");

const User = mongoose.model("User", {
    username: String,
    email: String,
    password: String,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = User;
