const bcrypt = require("bcrypt");
const express = require("express");
const dotenv = require("dotenv");
const User = require("../models/User");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
dotenv.config();
const cookieParser = require("cookie-parser");

const authRoute = express.Router();
const secretKey = process.env.SECRET_KEY;
authRoute.use(express.json());
authRoute.use(cookieParser());
authRoute.post("/", async (req, res) => {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ _id: email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, secretKey);

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });

    res.send("Logged in successfully");
});

function verifyToken(req, res, next) {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: "Forbidden" });
        }
        req.user = user;
        next();
    });
}

module.exports = {
    authRoute: authRoute,
    verifyToken: verifyToken,
};
