const express = require("express");
const cors = require("cors");
const app = express();

const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.use( express.json(), express.urlencoded({ extended: true }) );

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true //obligar a iniciar sesion
    }),
);

require("./server/config/mongoose.config");

const misRutas = require("./server/routes/book.routes");
misRutas(app);

app.listen(8000, ()=>console.log("Servidor listo !"));


