const jwt = require('jsonwebtoken');
const secret_key = "KEY";

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret_key, (err) => {
        if(err) {
            jwt.verify(req.cookies.admintoken, secret_key, (err) => {
                if(err) {
                    res.status(401).json({message: "Para ver la información, inicia sesión!"})
                } else {
                    next();
                }
            })
        } else {
            next();
        }
    })
}
module.exports.authenticate_admin = (req, res, next) => {
    jwt.verify(req.cookies.admintoken, secret_key, (err) => {
        if(err) {
            res.status(401).json({message: "Para ver la información, inicia sesión!"})
        } else {
            next();
        }
    })
}
module.exports.authenticate_lector = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, secret_key, (err) => {
        if(err) {
            res.status(401).json({message: "Para ver la información, inicia sesión!"})
        } else {
            next();
        }
    })
}