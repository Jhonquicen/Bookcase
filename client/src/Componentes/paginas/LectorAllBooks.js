import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Calificacion2 from "../Calificacion/Calificacion2"

//Vista de la lista de libros para el usuario

const LectorAllBooks = () => {

    const [bookcase, setBookcase] = useState([]);

    const history = useHistory();
    
    const [clasificación, setClasificación] = useState("todas");

    useEffect(() => {
        axios.get("http://localhost:8000/api/bookcase", {withCredentials: true})
            .then(res => {setBookcase(res.data)
                console.log(bookcase[1].imagen)
            })
            .catch(err => {
                if(err.response.status === 401) {
                    history.push('/');
                }
            });
                
    }, [history])

    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/'))
            .catch(err => console.log(err))
            history.push('/all')
    }

    return (
        <div >
            <div className="colorbarra">
                <section >
                    <div className="container my-5 py-5">
                        <div className="row">
                            <div className="col">
                                <h3 className="fs-5 mb-0 text-light" >Lista de libros agregados</h3>
                            </div>
                            <select className='form-select col dropdown' id="floatingSelectGrid" onChange={(e) => setClasificación(e.target.value)} value={clasificación}>

                                <option value="todas">Clasificación</option>
                                <option value="Generalidades">Generalidades</option>
                                <option value="FilosofiayPsicologia">Filosofia y psicología</option>
                                <option value="Religión">Religión</option>
                                <option value="Lenguas">Lenguas</option>
                                <option value="MatemáticasyCienciasNaturales">Matemáticas y ciencias naturales</option>
                                <option value="TecnologíayCienciasAplicadas ">Tecnología y ciencias aplicadas</option>
                                <option value="Artes">Artes</option>
                                <option value="Literatura">Literatura</option>
                                <option value="HistoriayGeografía">Historia y geografía</option>
                            </select>
                        </div>
                        
                    </div>
                </section>
            </div>
            <div className="container">
                
                <div className="row text-center">
                {
                    bookcase.map((book, index) => {
                        if (book.clasificación.toLowerCase() === clasificación.toLowerCase() || clasificación === "todas") {
                            return(
                            <div className="cardB col-2" style={{ backgroundImage:`url(${book.imagen})`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" >{book.titulo}</h4>
                                    <h6 className="text-light pd-3 margin2">{book.autor}</h6>
                                    <Calificacion2  calificacion2={book.promedio}/>
                                    <Link className="btn btn-outline-light btn-sm" to={`/bookcase/${book._id}`}>Leer más</Link>
                                    <h10 className="text-light pd-3  margin1">{book.clasificación}</h10>

                                </div>
                            </div>
                            )
                        }
                        
                        
                    })
                }
                </div>
            </div>
            
        </div>
    )

}

export default LectorAllBooks;