const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");
const { authRoute, verifyToken } = require("./routes/auth");
const searchRoute = require("./routes/search");
const registerRoute = require("./routes/register");
const summarizeRoute = require("./routes/summarize");
const itemRouter = require("./routes/item");
const groupRouter = require("./routes/group");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(bodyParser.json());

app.use("/login", authRoute());
app.use("/register", registerRoute());
app.use("/search", searchRoute());
app.use("/summarize");
const PORT = process.env.NODEJS_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
