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
    const { itemToSave } = req.body;

    try {
        const newItem = new Item({
            id: itemToSave.id,
            title: itemToSave.title,
            description: itemToSave.description,
            content: itemToSave.content,
            abstract: itemToSave.abstract,
            summary: itemToSave.summary,
            notes: itemToSave.notes,
            published: itemToSave.published,
            updated: itemToSave.updated,
            author: {
                name: itemToSave.author.name,
            },
            comment: itemToSave.comment,
            journal_ref: itemToSave.journal_ref,
            // Additional fields
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await newItem.save();

        res.json({ message: "Item saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving item" });
    }
});

module.exports = itemRouter;
