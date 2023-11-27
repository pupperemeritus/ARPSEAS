const express = require("express");
const Item = require("../models/Item");
const { authRoute, verifyToken } = require("./auth");
const itemRouter = express.Router();

// Get all items
itemRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.body.userId;
        const items = await Item.find({ userId });
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

    try {
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json(updatedItem);
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
            "_id": itemToSave.id[0],
            "updated": itemToSave.updated[0],
            "published": itemToSave.published[0],
            "title": itemToSave.title[0],
            "summary": itemToSave.summary,
            "author": itemToSave.author,
            "arxiv:comment": itemToSave["arxiv:comment"],
            "link": itemToSave.link,
            "arxiv:primary_category": itemToSave["arxiv:primary_category"],
            "category": itemToSave.category,
            "abstract": itemToSave.abstract,
            "userId": itemToSave.userId,
        });

        await newItem.save();

        res.json({ message: "Item saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving item" });
    }
});

module.exports = itemRouter;
