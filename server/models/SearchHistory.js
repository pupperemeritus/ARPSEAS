const mongoose = require("mongoose");

const searchHistorySchema = new mongoose.Schema({
    query: {
        type: String,
        required: true,
    },
    results: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: String,
        ref: "User",
    },
});
const SearchHistory = mongoose.model("SearchHistory", searchHistorySchema);
module.exports = SearchHistory;
