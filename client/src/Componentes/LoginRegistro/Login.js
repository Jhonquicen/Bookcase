import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {

    //Para Formulario de Registro
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Para Formulario de Inicio de Sesión
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [errorRegistro, setErrorsRegistro] = useState({});
    const [errorLogin, setErrorLogin] = useState("");

    const history = useHistory();

    const registro = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register',{
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }, {withCredentials: true})
            .then(res => history.push('/'))
            .catch(err => setErrorsRegistro(err.response.data.errors));
    }

    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', {
            email: emailLogin,
            password: passwordLogin
        }, {withCredentials: true})
            .then(res => {
                if(res.data.error) {
                    setErrorLogin(res.data.message);
                } else {
                    if(res.data.user.role === 'lector'){
                        history.push('/lector')
                        }else if (res.data.user.role === 'admin'){
                            history.push('/admin')
                        }
                        //history.push('/lector');
                    }
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="container shadow my-5">
                <div className="row bg-light">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Bienvenido</h1>
                        <p className="lead text-center">Ingrese sus datos para iniciar sesión</p>
                        <h5 className="mb-4">Si no tienes una cuenta</h5>
                        <NavLink to="/LogReg" className="btn btn-outline-light rounded-pill pb-2 w-50">Registrate</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">Inicio de Sesion</h1>
                        <form onSubmit={login}>
                            <div class="mb-3">
                                <label for="emailLogin" class="form-label">Correo electronico</label>
                                <input 
                                type="email" 
                                name="emailLogin" 
                                id="emailLogin" 
                                className="form-control" 
                                value={emailLogin} 
                                onChange={e=>setEmailLogin(e.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <label for="passwordLogin" class="form-label">Contraseña</label>
                                <input 
                                type="password" 
                                name="passwordLogin" 
                                id="passwordLogin" 
                                className="form-control" 
                                value={passwordLogin} 
                                onChange={e=>setPasswordLogin(e.target.value)} />
                            </div>
                            <div>
                                {errorLogin !== "" ? <span className="text-danger">{errorLogin}</span> : null }
                            </div>
                            <button type="submit" class="btn btn-primary">Iniciar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Login;