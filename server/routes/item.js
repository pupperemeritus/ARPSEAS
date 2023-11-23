const express = require("express");
const Item = require("../models/Item");
const { authRoute, verifyToken } = require("./auth");
const itemRouter = express.Router();

// Get all items
itemRouter.get("/", verifyToken, async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving items" });
    }
});

// Get a single item by ID
itemRouter.get("/:id", verifyToken, async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving item" });
    }
});

// Update an existing item
itemRouter.put("/:id", verifyToken, async (req, res) => {
    const { id } = req.params;
    const { title, description, content } = req.body;
    try {
        const item = await Item.findByIdAndUpdate(
            id,
            { title, description, content },
            { new: true }
        );
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating item" });
    }
});

// Delete an existing item
itemRouter.delete("/:id", verifyToken, async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json({ message: "Item deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting item" });
    }
});
// Save items
itemRouter.post("/", verifyToken, async (req, res) => {
    const itemToSave = req.body;
    console.log(itemToSave);

    try {
        const newItem = new Item({
            _id: request.id[0],
            updated: request.updated[0],
            published: request.published[0],
            title: request.title[0],
            summary: request.summary,
            author: request.author,
            comment: request["arxiv:comment"][0],
            link: request.link,
            primary_category: request["arxiv:primary_category"][0],
            category: request.category[0],
            abstract: request.abstract,
        });

        await newItem.save();

        res.json({ message: "Item saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving item" });
    }
});

module.exports = itemRouter;
