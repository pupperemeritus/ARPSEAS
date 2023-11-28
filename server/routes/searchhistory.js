const express = require("express");
const mongoose = require("mongoose");
const SearchHistory = require("../models/SearchHistory");
const searchHistoryRouter = express.Router();

// Get all search history
searchHistoryRouter.get("/", async (req, res) => {
    try {
        const searchHistory = await SearchHistory.find({
            userId: req.body.userId,
        });
        res.json(searchHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving search history" });
    }
});

// Delete all search history
searchHistoryRouter.delete("/", async (req, res) => {
    try {
        const searchHistory = await SearchHistory.deleteMany({
            userId: req.body.userId,
        });
        res.json(searchHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting search history" });
    }
});

// Delete a single search history
searchHistoryRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const searchHistory = await SearchHistory.findByIdAndDelete(id);
        if (!searchHistory) {
            return res
                .status(404)
                .json({ message: "Search history not found" });
        }
        res.json({ message: "Search history deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting search history" });
    }
});

// Save search history
searchHistoryRouter.post("/", async (req, res) => {
    try {
        const searchHistory = new SearchHistory(req.body);
        await searchHistory.save();
        res.status(201).json(searchHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving search history" });
    }
});

module.exports = searchHistoryRouter;
