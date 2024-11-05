const express = require('express');
const users = require('./users');
const cors = require('cors');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.get('/users', (req, res) => {
    const dbUsers = users;

    res.status(200).send(dbUsers);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

