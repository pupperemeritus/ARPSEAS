const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

registerRoute = express.Router();
// User registration
registerRoute.post("/", async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        console.log(username);
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            _id: email,
            username: username,
            password: hashedPassword,
        });

        // Save the user in the database
        user.save()
            .then(() =>
                res
                    .status(200)
                    .json({ message: "User registered successfully" })
            )
            .catch((err) => {
                console.error(err);
                return res
                    .status(500)
                    .json({ message: "Error registering user", error: err });
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user" + error });
    }
});

module.exports = registerRoute;
