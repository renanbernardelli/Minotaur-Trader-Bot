const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function doLogin(req, res, next) {

    const email = req.body.email;
    const password = req.body.password;

    if(email === 'test@test.com' && bcrypt.compareSync(password, '$2a$12$dHphDe1IlJTg0Ss2.LKfBO9vo4CSo/h4UiHYtDdJ4j0O27Qrn0Nry')) {

        const token = jwt.sign({id: 1}, process.env.JWT_SECRET, {expiresIn: parseInt(process.env.JWT_EXPIRES)});

        res.json({token});
    }
    else {
        
        res.sendStatus(401);
        res.json('Error!');
    }
}

function doLogout(req, res, next) {

    res.status(200);
}

module.exports = {
    doLogin,
    doLogout
}