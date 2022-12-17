import React, {useEffect, useState} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Calificacion from "../Calificacion/Calificacion";
import Calificacion2 from "../Calificacion/Calificacion2";
//Para ver la información completa de un libro.

const ShowBook = () => {
    const {id} = useParams();
    const [book, setBook] = useState({comentarios:[]});

    const history = useHistory ();

    //comments
    const [comentario, setComentario] = useState("");
    const [errors, setErrors] = useState({});
    const [calificacion, setCalificacion] = useState(0);

    const [titulo, setTitulo] = useState(book.titulo);
    const [autor, setAutor] = useState(book.autor);
    const [clasificación, setClasificación] = useState(book.clasificación);
    const [categoria, setCategoria] = useState(book.categoria);
    const [fecha, setFecha] = useState(book.fecha);
    const [imagen, setImagen] = useState(book.imagen);
    const [promedio, setPromedio] = useState();
    const [reseña, setReseña] = useState(book.reseña);
    //showbook

    const saveComment = e => {
        e.preventDefault();
        let suma = 0;
        book.comentarios.map(item=>(
            suma = suma + item.calificacion

        ))
        //setpromedio1()
        setPromedio(suma/book.comentarios.length)
        let data = {
            comentario: comentario,
            calificacion: calificacion,
            owner:id
        }

        let data1= {
            titulo,
            autor,
            imagen,
            clasificación,
            promedio,
            categoria,
            fecha,
            reseña,
        }

        console.log("datos para el servidor",data1)
        axios.post("http://localhost:8000/api/comment/"+id, data, {withCredentials: true})
            
            .then(res => {
                console.log("nuevo comentario", res);
                let data = {
                    id: res.data._id
                }
                axios.put("http://localhost:8000/api/bookcase/add_comment/"+id, data, {withCredentials: true})
                .then(res => {
                    console.log(res)
                    axios.get("http://localhost:8000/api/bookcase/"+id, {withCredentials: true})
            .then(res => {
                console.log(res);
                setBook(res.data);
            })
        .catch(err => console.log(err));
                })
            })
            .catch(err => setErrors(err.response.data.errors))
        axios.put("http://localhost:8000/api/bookcase/"+id, data1,{withCredentials: true} )
        .then(res =>{
            console.log("succes envio de datos")
        })
        .catch(err => console.log("error promedio",err))
        setComentario("")
        
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/bookcase/"+id, {withCredentials: true})
            .then(res => {
                console.log(res);
                setBook(res.data);
            })
        .catch(err => console.log(err));
    }, [id]); 

    return(
        <div>
        <div className="container " style={{
            
            justifyContent: "space-evenly",
            backgroundColor: "#44494d",
            color: "white",
            marginTop: "2%",
            marginBottom: "2%",
            height: "60%"
            }}>

            <div className="row">
            <div className="col-3 text-center">
                <div className="cardB text-center" style={{ backgroundImage:`url(${book.imagen})`,backgroundRepeat:"no-repeat"}}>
                
                </div>
                <p ><Calificacion2 calificacion2={book.promedio}/></p>
                <p >Calificacion: {book.promedio}</p>
                <div className="mb-2">
                    <Link className="btn btn-outline-light text-center" to='/lector' style={{ marginTop: "10%"}}>Ver todas la reseñas</Link>
                </div>
            </div>

            <div className="col-7">
            <div className="card-body">
                <h1 className="card-title"><b>{book.titulo} </b></h1>
                <h2 className="card-text"><em>{book.autor} </em></h2>
                <p className="card-text"><b>Clasificación </b><em>{book.clasificación}</em></p>
                <p className="card-text"><b>Categoria </b><em>{book.categoria}</em></p>
                <p className="card-text"><b>Fecha de publicación </b><em>{book.fecha}</em></p>
                <p className="card-text"><b>Reseña </b><em>{book.reseña}</em></p>
                <div>
        
            
                    <form onSubmit={saveComment}>
                    <Calificacion calificacion={calificacion} setCalificacion={setCalificacion}/>
                        <div>
                            <label htmlFor="comentario"><b>Comentarios:</b></label>
                            <textarea type="text" id="comentario" name="comentario" value={comentario} onChange={e => setComentario(e.target.value)} className="form-control" />
                            {errors.comentario ? <span className="text-danger">{errors.comentario.message}</span>: null}
                        </div>
                        <input type="submit" className="btn btn-primary mt-3" value="Comentar" />
                    </form>
                    <div>
                        {
                            
                            book.comentarios.map((item, index) => 
                            <div className="row mt-4"> 
                                <div key={index}className="col"> 
                                <p >{item.comentario}</p>
                                </div>
                                <div className="col"> 
                                <p ><Calificacion2 calificacion2={item.calificacion}/></p>
                            
                                </div>   
                            </div>
                            
                            ) 
                        }
                    </div>

                </div>
            </div>
            </div>
            </div>

           
            



            <div>
        
        </div>
        
           
        </div>

    </div>
    )

}

export default ShowBook;

