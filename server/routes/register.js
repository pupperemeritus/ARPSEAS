const mongoose = require("mongoose");
const express = require("express");

registerRoute = express.Router();

// User registration
registerRoute.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword });

    // Save the user in the database
    user.save((err) => {
        if (err) {
            return res.status(500).json({ message: "Error registering user" });
        }
        res.json({ message: "User registered successfully" });
    });
});

module.exports = registerRoute;
