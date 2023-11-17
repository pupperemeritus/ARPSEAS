const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

registerRoute = express.Router();

// User registration
registerRoute.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword });

    // Save the user in the database
    user.save()
        .then(() => res.json({ message: "User registered successfully" }))
        .catch((err) => {
            return res.status(500).json({ message: "Error registering user" });
        });
});

module.exports = registerRoute;
