const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('ui_data.sqlite3');

// Use CORS middleware
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Example route to fetch users
app.get('/query_examples', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM query_examples').all();
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.get('/endpoints', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM endpoints').all();
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.get('/prefixes', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM query_examples').all();
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.get('/datasets', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM query_examples').all();
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
