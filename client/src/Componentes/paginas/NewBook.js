import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

//Para hacer una nueva reseña

const NewBook = () => {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [clasificación, setClasificación] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fecha, setFecha] = useState("");
    const [imagen, setImagen] = useState("");
    const [promedio, setPromedio] = useState(5);
    const [reseña, setReseña] = useState("");
    const [errors, setErrors] = useState({});

    const history = useHistory();

    const saveBook = e => {
        e.preventDefault();
        let data = {
            titulo,
            autor,
            imagen,
            clasificación,
            promedio,
            categoria,
            fecha,
            reseña,
        }
        axios.post("http://localhost:8000/api/bookcase", data, {withCredentials: true})
            .then(res => history.push("/lector"))
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors)
            }
                
                )
    }

    return(
        // <div className="container" style={{
        //     display: "flex",
        //     alignContent: "center",
        //     justifyContent: "space-evenly",
        //     backgroundColor: "#343434",
        //     color: "black",
        //     borderRadius: "2%",
        //     marginTop: "2%",
        //     marginBottom: "2%"
        // }}>
        //     <div className="card-body card " style={{
        //         margin: "3%"
        //     }}>
        //         <h4>Nueva reseña</h4>
        //         <form onSubmit = {saveBook}>
        //             <div className="form-group">
        //                 <label htmlFor="titulo">Titulo:</label>
        //                 <input type="text" id="titulo" name="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} className="form-control" />
        //                 {errors.titulo ? <span className="text-danger">{errors.titulo.message}</span>: null}
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="autor">Autor:</label>
        //                 <input type="text" id="autor" name="autor" value={autor} onChange={e => setAutor(e.target.value)} className="form-control" />
        //                 {errors.autor ? <span className="text-danger">{errors.autor.message}</span>: null}
        //             </div>
        //             <div className="form-group ">
        //                 <label htmlFor="imagen">Url imagen del libro:</label>
        //                 <div className="row">
        //                     <div className="col-6">
        //                         <input type="text" id="imagen" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)} className="form-control" />
        //                     </div>
        //                     <div className="col-6">
        //                         <img src={imagen} className="img-fluid" alt="Libro" />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="form-group">
        //                     <label htmlFor="clasificación">Clasificación </label>
        //                     <select className='form-select' id="Clasificación" name="Clasificación"  value={clasificación} onChange={(e) => setClasificación(e.target.value)}>
        //                         <option value=" "> </option>
        //                         <option value="Generalidades">Generalidades</option>
        //                         <option value="Filosofía y Psicología">Filosofía y Psicología</option>
        //                         <option value="Religión">Religión</option>
        //                         <option value="Lenguas">Lenguas</option>
        //                         <option value="Matemáticas y Ciencias Naturales">Matemáticas y Ciencias Naturales</option>
        //                         <option value="Tecnología y Ciencias Aplicadas">Tecnología y Ciencias Aplicadas</option>
        //                         <option value="Artes">Artes</option>
        //                         <option value="Literatura">Literatura</option>
        //                         <option value="Historia y Geografía">Historia y Geografía</option>
        //                     </select>
        //                     {errors.clasificación ? <span className="text-danger">{errors.clasificación.message}</span>: null}
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="categoria">Categoría:</label>
        //                 <input type="text" id="categoria" name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} className="form-control" />
        //                 {errors.categoria ? <span className="text-danger">{errors.categoria.message}</span>: null}
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="fecha">Fecha de publicación:</label>
        //                 <input type="date" id="fecha" name="fecha" value={fecha} onChange={e => setFecha(e.target.value)} className="form-control" />
        //                 {errors.fecha ? <span className="text-danger">{errors.fecha.message}</span>: null}
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="reseña">Reseña:</label>
        //                 <input type="text" id="reseña" name="reseña" value={reseña} onChange={e => setReseña(e.target.value)} className="form-control" />
        //                 {errors.reseña ? <span className="text-danger">{errors.reseña.message}</span>: null}
        //             </div>
        //             <input type="submit" className="btn btn-success" value="Guardar" />
        //         </form>
        //     </div>
        // </div>

///////////////////////////////////////
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end bg-light">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder text-center">Registre una reseña</h1>
                        <img src={imagen} className="img-fluid" alt="Libro" />
                        
                        <NavLink to="/" className="btn btn-outline-light rounded-pill pb-2 w-50">Regresar a Inicio </NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <form onSubmit = {saveBook}>
                            <div className="mb-3">
                                <label for="titulo" class="form-label">Titulo</label>
                                <input 
                                type="text" 
                                id="titulo" 
                                name="titulo" 
                                value={titulo} 
                                onChange={e => setTitulo(e.target.value)} 
                                className="form-control" 
                                />
                                {errors.titulo ? <span className="text-danger">{errors.titulo.message}</span>: null}
                            </div>
                            <div className="mb-3">
                                <label for="autor" className="form-label">Autor</label>
                                <input 
                                type="text" 
                                id="autor" 
                                name="autor" 
                                value={autor} 
                                onChange={e => setAutor(e.target.value)} 
                                className="form-control" 
                                />
                                {errors.autor ? <span className="text-danger">{errors.autor.message}</span>: null}
                            </div>
                            <div className="mb-3">
                                <label for="imagen" className="form-label">Url imagen del libro</label>
                                <input 
                                type="text" 
                                id="imagen" 
                                name="imagen" 
                                value={imagen} 
                                onChange={e => setImagen(e.target.value)} 
                                className="form-control" 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="clasificación" className="form-label">Clasificación</label>
                                <select className='form-select' id="Clasificación" name="Clasificación" value={clasificación} onChange={(e) => setClasificación(e.target.value)}>
                                    <option value=" "> </option>
                                    <option value="Generalidades">Generalidades</option>
                                    <option value="FilosofiayPsicologia">Filosofía y Psicología</option>
                                    <option value="Religión">Religión</option>
                                    <option value="Lenguas">Lenguas</option>
                                    <option value="MatemáticasyCienciasNaturales">Matemáticas y Ciencias Naturales</option>
                                    <option value="TecnologíayCienciasAplicadas">Tecnología y Ciencias Aplicadas</option>
                                    <option value="Artes">Artes</option>
                                    <option value="Literatura">Literatura</option>
                                    <option value="HistoriayGeografía">Historia y Geografía</option>
                                </select>
                                {errors.clasificación ? <span className="text-danger">{errors.clasificación.message}</span>: null}
                            </div>
                            <div className="mb-3">
                                <label for="categoria" className="form-label">Categoría:</label>
                                <input 
                                type="text" 
                                id="categoria" 
                                name="categoria" 
                                value={categoria} 
                                onChange={e => setCategoria(e.target.value)} 
                                className="form-control" 
                                />
                                {errors.categoria ? <span className="text-danger">{errors.categoria.message}</span>: null}
                            </div>
                            <div className="form-group">
                                <label for="fecha" className="form-label">Fecha de publicación:</label>
                                <input 
                                type="date" 
                                id="fecha" 
                                name="fecha" 
                                value={fecha}
                                onChange={e => setFecha(e.target.value)} 
                                className="form-control"
                                />
                                {errors.fecha ? <span className="text-danger">{errors.fecha.message}</span>: null}
                            </div>
                            <div className="form-group">
                                <label for="reseña" className="form-label">Reseña:</label>
                                <input 
                                type="text" 
                                id="reseña" 
                                name="reseña" 
                                value={reseña} 
                                onChange={e => setReseña(e.target.value)} 
                                className="form-control"
                                />
                                {errors.reseña ? <span className="text-danger">{errors.reseña.message}</span>: null}
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewBook;

