import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { NavLink } from "react-router-dom";

const LoginRegistro = () => {

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
            <div className="row justify-content-end bg-light">
                <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                    <h1 className="display-4 fw-bolder">Registrate</h1>
                    <p className="lead text-center">Ingrese sus datos para registrarte</p>
                    <h5 className="mb-4">o</h5>
                    <NavLink to="/Login" className="btn btn-outline-light rounded-pill pb-2 w-50">Inicia Sesion</NavLink>
                </div>
                <div className="col-md-6 p-5">
                    <form onSubmit={registro}>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Nombre</label>
                            <input 
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control" 
                            value={firstName} 
                            onChange={e=> setFirstName(e.target.value)} 
                            />
                            {errorRegistro.firstName ? <span className="text-info">{errorRegistro.firstName.message}</span> : null}
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Apellido</label>
                            <input 
                            type="text"
                            name="lastName"
                            id="lastName" 
                            className="form-control"
                            value={lastName} 
                            onChange={e=> setLastName(e.target.value)}
                            />
                            {errorRegistro.lastName ? <span className="text-info">{errorRegistro.lastName.message}</span> : null}
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            value={email} 
                            onChange={e=> setEmail(e.target.value)}
                            aria-describedby="emailHelp" 
                            />
                            <div id="emailHelp" class= "form-text">
                                We'll never share your email with anyone else.
                            </div>
                            {errorRegistro.email ? <span className="text-info">{errorRegistro.email.message}</span> : null}
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input 
                            type="password" 
                            name="password" id="password" 
                            className="form-control" 
                            value={password} 
                            onChange={e=> setPassword(e.target.value)}/>
                            {errorRegistro.password ? <span className="text-info">{errorRegistro.password.message}</span> : null}
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirmar Password</label>
                            <input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword" 
                            className="form-control" 
                            value={confirmPassword} 
                            onChange={e=> setConfirmPassword(e.target.value)} />
                            {errorRegistro.confirmPassword ? <span className="text-info">{errorRegistro.confirmPassword.message}</span> : null}
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button> 
                    </form>
                </div>
            </div>
        </div>
    </div>

    )

}

export default LoginRegistro;