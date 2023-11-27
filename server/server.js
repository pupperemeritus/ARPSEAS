const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
const { authRoute, verifyToken } = require("./routes/auth");
const searchRoute = require("./routes/search");
const registerRoute = require("./routes/register");
const itemRouter = require("./routes/item");
const groupRouter = require("./routes/group");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();
const options = {
    key: fs.readFileSync(process.env.SSL_KEY),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE),
};

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error(err);
    });

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/register", registerRoute);
app.use("/login", authRoute);
app.use("/search", searchRoute);
app.use("/item", itemRouter);
app.use("/group", groupRouter);

const PORT = process.env.NODE_PORT;
if (process.env.HTTPS_TRUE == true) {
    https.createServer(options, app).listen(PORT, () => {
        console.log(`HTTPS server is running on port ${PORT}`);
    });
} else {
    app.listen(PORT, () => {
        console.log(`HTTP server is running on port ${PORT}`);
    });
}
