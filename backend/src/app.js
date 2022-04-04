const express = require('express');
const settingsController = require('./controllers/settingsController');
const authController = require('./controllers/authController');
const authMidllewere = require('./middlewares/authMiddlewere');


require('express-async-errors');

const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

/* Login */

app.post('/login', authController.doLogin);

/* Navigation */

app.get('/settings', authMidllewere, settingsController.getSettings);

/* Logout */

app.post('/logout', authController.doLogout);

app.use('/', (req, res, next) => {

    res.send('Hello world');
});

app.use(require('./middlewares/errorMiddlewere'));

module.exports = app;