const express = require("express");
const axios = require("axios");
const { verifyToken } = require("./auth");

const summarizeRouter = express.Router();

summarizeRouter.get("/", verifyToken, async (req, res) => {
    const { text } = req.body.text;

    try {
        const response = await axios.post(process.env.FASTAPI_URL, {
            text,
        });

        const summary = response.data;
        res.json({ summary });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch summary" });
    }
});

module.exports = summarizeRouter;
