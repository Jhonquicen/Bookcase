import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

const ActualizarBook = () => {

    const {id} = useParams();

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [clasificación, setClasificación] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fecha, setFecha] = useState("");
    const [imagen, setImagen] = useState("");
    const [reseña, setReseña] = useState("");
    const [errors, setErrors] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/bookcase/"+id, {withCredentials: true})
            .then(res => {
                setTitulo(res.data.titulo);
                setAutor(res.data.autor);
                setClasificación(res.data.clasificación);
                setCategoria(res.data.categoria);
                setFecha(res.data.fecha);
                setImagen(res.data.imagen);
                setReseña(res.data.reseña);
                // setErrors(res.data.errors);
            })
            .catch(err => history.push('/error'));
    }, [id, history])

    const editarBook = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/bookcase/"+id, {
            titulo,
            autor,
            clasificación,
            categoria,
            fecha,
            imagen,
            reseña,
            // errors
        }, {withCredentials: true})
            .then(res => history.push('/Admin'))
            .catch(err => setErrors(err.response.data.errors));
    }

    return(
        <div className="container" style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-evenly",
            backgroundColor: "#343434",
            color: "black",
            borderRadius: "2%",
            marginTop: "2%",
            marginBottom: "2%"
        }}>
            <div className="card-body card " style={{
                margin: "3%"
            }}>
                <h4>Editar reseña</h4>
                <form onSubmit = {editarBook}>
                    <div className="form-group">
                        <label htmlFor="titulo">Titulo:</label>
                        <input type="text" id="titulo" name="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} className="form-control" />
                        {errors.titulo ? <span className="text-danger">{errors.titulo.message}</span>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="autor">Autor:</label>
                        <input type="text" id="autor" name="autor" value={autor} onChange={e => setAutor(e.target.value)} className="form-control" />
                        {errors.autor ? <span className="text-danger">{errors.autor.message}</span>: null}
                    </div>
                    <div className="form-group ">
                        <label htmlFor="imagen">Url imagen del libro:</label>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" id="imagen" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)} className="form-control" />
                            </div>
                            <div className="col-6">
                                <img src={imagen} className="img-fluid" alt="Libro" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                            <label htmlFor="clasificación">Clasificación </label>
                            <select className='form-select' id="Clasificación" name="Clasificación"  value={clasificación} onChange={(e) => setClasificación(e.target.value)}>
                                <option value=" "> </option>
                                <option value="Generalidades">Generalidades</option>
                                <option value="Filosofía y Psicología">Filosofía y Psicología</option>
                                <option value="Religión">Religión</option>
                                <option value="Lenguas">Lenguas</option>
                                <option value="Matemáticas y Ciencias Naturales">Matemáticas y Ciencias Naturales</option>
                                <option value="Tecnología y Ciencias Aplicadas">Tecnología y Ciencias Aplicadas</option>
                                <option value="Artes">Artes</option>
                                <option value="Literatura">Literatura</option>
                                <option value="Historia y Geografía">Historia y Geografía</option>
                            </select>
                            {errors.clasificación ? <span className="text-danger">{errors.clasificación.message}</span>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoría:</label>
                        <input type="text" id="categoria" name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} className="form-control" />
                        {errors.categoria ? <span className="text-danger">{errors.categoria.message}</span>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha de publicación:</label>
                        <input type="date" id="fecha" name="fecha" value={fecha} onChange={e => setFecha(e.target.value)} className="form-control" />
                        {errors.fecha ? <span className="text-danger">{errors.fecha.message}</span>: null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="reseña">Reseña:</label>
                        <input type="text" id="reseña" name="reseña" value={reseña} onChange={e => setReseña(e.target.value)} className="form-control" />
                        {errors.reseña ? <span className="text-danger">{errors.reseña.message}</span>: null}
                    </div>
                    <input type="submit" className="btn btn-success" value="Guardar" />
                </form>
            </div>
        </div>
    )

}

export default ActualizarBook;