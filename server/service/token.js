const jwt = require('jsonwebtoken')

const createTokens = (user) => {
    const token = jwt.sign(user,
        process.env.JWT_KEY,{
        expiresIn:"1h"
    })
    return token
}

module.exports = {createTokens}