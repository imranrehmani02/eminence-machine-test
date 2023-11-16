const jwt = require('jsonwebtoken');
const utility = require('../core/utility');

module.exports = (req, res, next) => {
    try {
        var token = req.headers.authorization.split(" ")[1];
        var decode = jwt.verify(token, utility.jwtSecret);
        req.userData = decode;
        next();
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: 'Authentication Failed',
            data: error
        })
    }
};
