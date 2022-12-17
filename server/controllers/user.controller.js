const Usuario = require("../models/user.model");
const jwt = require('jsonwebtoken');
const secret_key = "KEY"; 

const bcrypt = require('bcrypt');

module.exports.register = (req, res) => {
    const user = new Usuario(req.body);
    user.save()
        .then(usuario =>{
            
            const payload = {
                _id: usuario._id
            }

            const myJWT = jwt.sign(payload, secret_key);

            res.cookie("usertoken", myJWT, secret_key,{
                    httpOnly: true 
                }).json(usuario);
        })
        .catch(err => res.status(400).json(err));
}

module.exports.login = (req, res) => {
    Usuario.findOne({email: req.body.email})
        .then(user => {
            if(user === null) {
                res.json({error: true, message: "El correo electrónico es incorrecto."});
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if(passwordValid) {
                            const payload = {
                                _id: user._id
                            }
                        
                            const myJWT = jwt.sign(payload, secret_key);
                            if (Usuario.role=="lector"){
                                res
                                .cookie("usertoken", myJWT, secret_key, {
                                    httpOnly: true
                                })
                                .json({error: false, message: "Inicio de sesión correcto", user})
                            } else {
                                res
                                .cookie("admintoken", myJWT, secret_key, {
                                    httpOnly: true
                                })
                                .json({error: false, message: "Inicio de sesión correcto", user})
                            }
                            

                        } else {
                            res.json({error: true, message: "La contraseña es incorrecta."});
                        }
                    })
            }
        })
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.json({message: "Salimos de sesión!"});
}