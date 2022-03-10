const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use('/Minotaur', (rep, res, next) => {
    res.send('Hello Minotaur!');
});

app.use('/', (req, res, next) => {

    res.send('Hello world');
});

module.exports = app;