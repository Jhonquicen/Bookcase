import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

const NavBar = () => {

    const history = useHistory();

    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/'))
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/lector">Todas las reseñas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/new">Nueva Reseña</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Buscar</a>
                        </li>

                    </ul> 
                    <a className="navbar-brand fw-bolder fs-4 mx-auto" href="#">Bookcase</a>
                    <Link className="btn btn-outline-primary ms-auto px-4 rounded-pill" to='/Login'><i className="fa-sharp fa-solid fa-right-to-bracket"></i> Iniciar sesión</Link>
                    <Link className="btn btn-outline-primary ms-2 px-4 rounded-pill" to='/LogReg'><i className="fa fa-user-plus me-2"></i>Registrarse</Link>
                    <Link className="btn btn-outline-primary ms-auto px-4 rounded-pill" to='/Login'><i className="fa-sharp fa-solid fa-right-to-bracket" onClick={cerrarSesion}></i> Cerrar sesión</Link>
                    
                    </div>
                </div>
            </nav> 
        </div>  
    )
}

export default NavBar;