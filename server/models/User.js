const mongoose = require("mongoose");

const User = mongoose.model("User", {
    _id: String,
    username: String,
    password: String,
    groups: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Group", require: false },
    ],
    items: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Item", require: false },
    ],
});

module.exports = User;
