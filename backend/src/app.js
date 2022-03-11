const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('express-async-errors');

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

app.use(require('./middlewares/errorMiddlewere'));

module.exports = app;