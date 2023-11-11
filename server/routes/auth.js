const bcrypt = require("bcrypt");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const authRoute = express.Router();
const secretKey = process.env.SECRET_KEY;

authRoute.post("/", async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, secretKey);

    res.json({ token });
});
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
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
