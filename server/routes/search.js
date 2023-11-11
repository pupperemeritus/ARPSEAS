const express = require("express");
const axios = require("axios");
const { parseString } = require("xml2js");
const { authRoute, verifyToken } = require("./auth");

const searchRoute = express.Router();

// Apply middleware to parse the request body as JSON
searchRoute.use(express.json());

searchRoute.post("/", verifyToken, async (req, res) => {
    const { query, parameters } = req.body;

    try {
        const response = await axios.get("http://export.arxiv.org/api/query", {
            params: {
                search_query: query,
                ...parameters, // You can pass additional search parameters
            },
        });

        // Parse the XML response into a JavaScript object
        let results;
        parseString(response.data, (err, result) => {
            if (err) {
                throw new Error("Failed to parse XML response");
            }
            results = result;
        });

        res.json({ results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "ArXiv search failed" });
    }
});

module.exports = searchRoute;
