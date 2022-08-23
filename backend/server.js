const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'UnstableUnicorns'
});

connection.connect();

const app = express();
app.use(cors());
const port = 8080;

app.get('/cards', (req, res) => {
    connection.query('select * from cards', (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            res.send('Could not load card data');
            console.error(error);
        }
    });
});

app.listen(port, () => {
    console.log(`Unstable Unicorns Online backend started on port ${port}...`);
});