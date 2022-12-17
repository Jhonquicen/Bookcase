const mongoose = require('mongoose');
const bcrypt = require('bcrypt') 

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Nombre es obligatorio."]
    },
    lastName: {
        type: String,
        required: [true, "Apellido es obligatorio."]
    },
    email: {
        type: String,
        required: [true, "E-mail es obligatorio."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Ingrese un e-mail válido."
        },
        unique: true 
    },
    password: {
        type: String,
        required: [true, "Password es obligatorio."],
        minlength: [5, "Password debe de tener al menos 5 caracteres"]
    },
    role: {
        type: String,
        default: 'lector',
        required: [true, "Rol requerido"]
    }

}, {timestamps: true, versionKey: false})

UserSchema.virtual('confirmPassword')
    .get( ()=> this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if(this.password != this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas no coinciden');
    }

    next();
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 5) 
        .then(hash => {
            this.password = hash;
            next();
        });
});

const Usuario = mongoose.model("usuarios", UserSchema);
module.exports = Usuario;