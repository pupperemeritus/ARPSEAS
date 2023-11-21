const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const { verifyToken } = require("./auth");

const summarizeRouter = express.Router();
summarizeRouter.use(bodyParser.json());
summarizeRouter.use(cors());
summarizeRouter.get("/", verifyToken, async (req, res) => {
    const { text } = req.body.text;

    try {
        const response = await axios.post(process.env.FASTAPI_URL, {
            text: text,
        });

        const summary = response.data;
        res.json({ summary });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch summary" });
    }
});

module.exports = summarizeRouter;
