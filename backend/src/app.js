const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { doLogin, doLogout } = require('./controllers/authController');

const authController = require('./controllers/authController');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

/* Login */

app.post('/login', authController.doLogin);

/* Logout */

app.post('/logout', authController.doLogout);

app.use('/', (req, res, next) => {

    res.send('Hello world');
});

app.use(require('./middlewares/errorMiddlewere'));

module.exports = app;