import React from "react";
import {Link, useHistory} from "react-router-dom";


const Descripcion = () => {
    return(
        <div className="bg-light">
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zRxeg-beEyQkDMy48FoJ4-w1dlLjZ_FRfA&usqp=CAU" alt="About" className="w-75 "/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">Acerca de la página</h3>
                            <h1 className="display-6 mb-2">Reseña de Libros</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">
                                La pagina web permite a diferentes usuarios compartir sus libros favoritos con la comunidad
                            </p>


                            <Link className="btn btn-primary rounded-pill px-4 py-2 ms-2" to={`/Login`}>Iniciar</Link>

                          
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Descripcion;