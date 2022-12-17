const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defino la clase de atributo que voy a estar guardando
const BookCaseSchema = new Schema({
    titulo: {
        type: String,
        required: [true, "Debes indicar el título del libro"],
        minLength: [2, "El título del libro debe tener al menos 2 caracteres"]
    },
    autor: {
        type: String,
        required: [true, "Debes indicar el nombre del autor"],
        minLength: [3, "El nombre del autor debe tener al menos 3 caracteres"]
    },
    clasificación: {
        type: String,
        required: [true, "Debes indicar la clasificación del libro"]
    },
    categoria: {
        type: String,
        required: [true, "Debes asignar una categoria"],
    },
    promedio :{
        type: Number
    },
    fecha: {
        type: Date,
        required: [true, "Debes ingresar la fecha de publicación"]
    },
    imagen: {
        type: String,
        required: [true, "Comparte una imagen relacionada con el libro"]
    },
    reseña: {
        type: String,
        required: [true, "Debes dejar una reseña sobre el libro"],
        minLength: [10, "¡Cuéntanos un poco más sobre el libro!"]
    },
    comentarios: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comentario"
        }
    ]
}, {timestamps: true, versionKey: false})


module.exports = mongoose.model("BookCase", BookCaseSchema);



