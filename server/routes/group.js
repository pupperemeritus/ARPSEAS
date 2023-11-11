const express = require("express");
const groupRouter = express.Router();
const Group = require("../models/Group");
const { authRoute, verifyToken } = require("./auth");
// Get all groups
groupRouter.get("/", verifyToken, async (req, res) => {
    try {
        const groups = await Group.find().populate("items");
        res.json(groups);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving groups" });
    }
});

groupRouter.post("/", verifyToken, async (req, res) => {
    try {
        const { name, userId, items } = req.body;

        const newGroup = new Group({ name, userId, items });
        await newGroup.save();

        res.status(201).json(newGroup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating new group" });
    }
});

// Update an existing group
groupRouter.put("/:id", verifyToken, async (req, res) => {
    const { id } = req.params;
    const { name, userId, items } = req.body;

    try {
        const group = await Group.findByIdAndUpdate(
            id,
            { name, userId, items },
            { new: true }
        );

        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }

        res.json(group);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating group" });
    }
});

// Delete an existing group
groupRouter.delete("/:id", verifyToken, async (req, res) => {
    const { id } = req.params;

    try {
        const group = await Group.findByIdAndDelete(id);

        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }

        res.json({ message: "Group deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting group" });
    }
});

module.exports = groupRouter;
