const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('express-async-errors');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.post('/login', (req, res, next) => {

    const email =  req.body.email;
    const password = req.body.password;

    if(email === 'test@test.com' && password === '123') {

        res.status(200);
        res.json('OK! Está dentro!')
    }
    else {
        
        res.status(401);
        res.json('Error!');
    }
});

app.post('/logout', (req, res, next) => {

    res.status(200);
});

app.use('/', (req, res, next) => {

    res.send('Hello world');
});

app.use(require('./middlewares/errorMiddlewere'));

module.exports = app;