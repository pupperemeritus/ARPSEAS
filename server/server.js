const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();

const secretKey = 'yourSecretKey';

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
});

app.use(express.json());

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'yourSecretKey', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}
// User registration
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, email, password: hashedPassword });

    // Save the user in the database
    user.save((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error registering user' });
        }
        res.json({ message: 'User registered successfully' });
    });
});

// User login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, 'yourSecretKey');

    res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/search-arxiv', verifyToken, async (req, res) => {
    const { query, parameters } = req.query;

    try {
        const response = await axios.get('https://api.arxiv.org/search', {
            params: {
                q: query,
                ...parameters, // You can pass additional search parameters
            },
        });

        const results = response.data;
        res.json({ results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'ArXiv search failed' });
    }
});

const Group = mongoose.model('Group', {
    name: String,
    userId: String,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

const Item = mongoose.model('Item', {
    title: String,
    description: String,
    content: String,
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
});

// Create a new group and add an item to it
app.post('/create-group', verifyToken, async (req, res) => {
    const { name, userId, itemData } = req.body;

    const group = new Group({ name, userId });
    const item = new Item(itemData);
    item.group = group;

    await item.save();
    group.items.push(item);

    await group.save();

    res.json({ message: 'Group created and item added' });
});

