import React from "react";
import {Link, useHistory} from "react-router-dom";
import Calificacion2 from "../Calificacion/Calificacion2"

const Mosaico = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row text-center">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4">Algunas Libros Recomendados</h1>
                            <h3 className="fs-5 text-center text-secondary mb-0">Puedes visitar mas a detalle el funcionamiento de la API en el sigueinte enlace</h3>
                           <Link className="btn btn-outline-primary rounded-pill mt-2 px-4 py-2 ms-2 text-center" to={`/Login`}>Visitar sitio web API</Link>

                            <hr className="w-25 mx-auto"/>
                        </div>
                    </div>
                  <div className="row">
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                            <div className="cardB col-2" style={{ backgroundImage:`url()`,backgroundRepeat:"no-repeat"}}>
                                <div className="contentB">
                                    <h4 className="text-light pd-3" ></h4>
                                    <h6 className="text-light pd-3 margin2"></h6>
                                    <Calificacion2  calificacion2={5}/>
                                    <Link className="btn btn-outline-light btn-sm" to={``}>Leer màs</Link>
                                    <h10 className="text-light pd-3  margin1"></h10>

                                </div>
                            </div>
                  </div>
                </div>
            </section>
        </div>
    );
}

export default Mosaico;