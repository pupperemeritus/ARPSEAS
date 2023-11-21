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
itemRouter.post("/save", verifyToken, async (req, res) => {
    const { itemsToSave } = req.body;

    try {
        for (const item of itemsToSave) {
            const newItem = new Item({
                id: item.id,
                title: item.title,
                description: item.description,
                content: item.content,
                abstract: item.abstract,
                summary: item.summary,
                notes: item.notes,
                published: item.published,
                updated: item.updated,
                author: {
                    name: item.author.name,
                },
                comment: item.comment,
                journal_ref: item.journal_ref,
            });

            await newItem.save();
        }

        res.json({ message: "Items saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving items" });
    }
});

module.exports = itemRouter;
