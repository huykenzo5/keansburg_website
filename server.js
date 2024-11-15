const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'keansburg_park'
});

db.connect((err) => {
    if (err) {
        console.error('Kết nối thất bại: ', err.stack);
        return;
    }
    console.log('Kết nối thành công với MySQL');
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
});

// Gửi tệp index.html từ đường dẫn bên ngoài
app.get('/', (req, res) => {
    res.sendFile('C:\\xampp\\htdocs\\keansburgamusementpark\\index.html');
});
app.listen(PORT, () => {
    console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});