const jwt = require('jsonwebtoken');
const utility = require('./utility');
exports.generateToken = function (username){
    return jwt.sign(
        {
            username: username
        },
        utility.jwtSecret,
        {
            expiresIn: utility.tokenTime
        }
    )
}
