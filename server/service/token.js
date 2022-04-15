const jwt = require('jsonwebtoken')

const createTokens = (user) => {
    const token = jwt.sign(user,
        process.env.JWT_KEY,{
        expiresIn:"1h"
    })
    return token
}

const checkToken = (accessToken) => {
    const validToken = jwt.verify(accessToken,process.env.JWT_KEY)
    return validToken
}

module.exports = {createTokens,checkToken}

