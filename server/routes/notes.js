const express = require("express");
const Note = require("../models/Note");

const noteRouter = express.Router();

notesRouter.post("/", async (req, res) => {
    const { title, content } = req.body;
    try {
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating new note" });
    }
});

module.exports = noteRouter;
