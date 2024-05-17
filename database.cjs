const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'sqluser',
    password: 'password',
    database: 'CodeCoin',
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.post('/', (req, res) => {
    const { email, password } = req.body;

    const query = `SELECT * FROM accounts WHERE username = ? AND password = ?`;

    db.query(query, [email, password], (err, result) => {
        if (err) {
            console.error('Error executing login query:', err);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        } else {
            if (result.length > 0) {
                return res.json({ success: true, message: 'Login successful' });
            } else {
                return res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
