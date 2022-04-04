function getSettings(req, res, next) {

    res.json({

        email: 'test@test.com'
    });
};

module.exports = {getSettings};