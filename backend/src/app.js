const express = require('express');
const authController = require('./controllers/authController');
const authMiddlewere = require('./middlewares/authMiddlewere');
const morgan = require('morgan');


require('express-async-errors');

const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors( { origin: process.env.CORS_ORIGIN}));

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

/* Login */

app.post('/login', authController.doLogin);

/* Navigation */

const settingsRouter = require('./routers/settingsRouter');
app.use('/settings', authMiddlewere, settingsRouter);

const symbolsRouter = require('./routers/symbolsRouter');
app.use('/symbols', authMiddlewere, symbolsRouter);

/* Logout */

app.post('/logout', authController.doLogout);

app.use('/', (req, res, next) => {

    res.send('Hello world');
});

app.use(require('./middlewares/errorMiddlewere'));

module.exports = app;