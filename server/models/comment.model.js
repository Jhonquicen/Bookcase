const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defino la clase de atributo que voy a estar guardando
let EsquemaComentario = new Schema({
    comentario: {
        type: String,
        required: [true, "El comentario no debe estar vacio"],
        minLength: [5, "¡Debes ingresar al menos una palabra!"]
    },
    calificacion: {
        type: Number
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "BookCase"

    }
}, 
{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Comentario", EsquemaComentario);;

