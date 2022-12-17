import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

//Vista de la lista de libros del admin

const AdminAllBooks = () => {

    const [bookcase, setBookcase] = useState([]);

    const history = useHistory();
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/bookcase", {withCredentials: true})
            .then(res => setBookcase(res.data))
            .catch(err => {
                if(err.response.status === 401) {
                    history.push('/');
                }
            });
                
    }, [history])

    const borrarBook = id => {
        axios.delete("http://localhost:8000/api/bookcase/"+id)
            .then(res => {
                let nuevaLista = bookcase.filter(book => book._id !== id);
                setBookcase(nuevaLista);
            })
    }

    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/'))
            .catch(err => console.log(err));
    }

    return (
        <div className="container w-90 p-1">
            <table className='table table-striped'>
                <thead style={{
                    backgroundColor: '#343434',
                    color: 'white'
                }}>
                    <tr>
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Clasificación</th>
                        <th><button className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesión</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookcase.map((book, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={book.imagen} alt="Libro" className="img-fluid my-3" width="150"/>
                                </td>
                                <td>{book.titulo}</td>
                                <td>{book.autor}</td>
                                <td>{book.clasificación}</td>
                                <td>
                                <Link className="btn btn-success" to={`/newAdmin/${book._id}`}>Ver</Link>
                                <Link className="btn btn-warning" to={`/bookcase/editar/${book._id}`}>Editar</Link>
                                <button className="btn btn-danger" onClick={() => borrarBook(book._id)} >Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default AdminAllBooks;