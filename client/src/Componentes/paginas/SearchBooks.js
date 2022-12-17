import React, {useState, useEffect} from 'react';
import axios from "axios";
import Select from 'react-select';
import {Link} from "react-router-dom";
import makeAnimated from 'react-select/animated';
import Calificacion2 from "../Calificacion/Calificacion2"

const SearchBooks = () => {
    const [books, setBooks] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [foundBooks, setFoundBooks] = useState([]);
    const animatedComponents = makeAnimated();

    
    const orderOptions = (values) => {
        return values
            .filter((v) => v.isFixed)
            .concat(values.filter((v) => !v.isFixed));
    };

    const onChange = (newValue, actionMeta) => {
        switch (actionMeta.action) {
            case 'remove-value':
            case 'pop-value':
            if (actionMeta.removedValue.isFixed) {
                return;
            }
            break;
            case 'clear':
            newValue = books.filter((v) => v.isFixed);
            break;
        }
        setSelectedValues(orderOptions(newValue));
    };

    const searchBook = e => {
        const search = selectedValues.map(item=> item.value)
        if (search.length>0)
        {
            axios.get(`http://localhost:8000/api/bookcases/${search.join(',')}`, {withCredentials: true})
            .then(res => {
                setFoundBooks(res.data);
            });
        }
        else
        {
            setFoundBooks([]);
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/bookcase", {withCredentials: true})
            .then(res => {
                const result= res.data.map(m=> {
                    return { value: m._id,label: m.titulo}
                });
                setBooks(result)
            });
    }, [])

    return (
        <>
            <div  className="select-search">

                <Select className='search'
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={books}
                    onChange={onChange}
                    />
                <div className="input-group-append">
                    <button className="btn btn-primary position" type="button" onClick={()=>searchBook()}>Search</button>
                </div>
            </div>
            {
                foundBooks.length === 0 ? <div className="info">No data</div>
                : <table className='table table-striped'>
    
                    <div className='container'>
                        <div className="row text-center">
                            
                            {
                                foundBooks.map((book, index) => {
                                    return(
                                        <div key={index}>
                                            <div className="cardB col-2" style={{ backgroundImage:`url(${book.imagen})`,backgroundRepeat:"no-repeat"}}>
                                                <div className="contentB">
                                                    <h4 className="text-light pd-3" >{book.titulo}</h4>
                                                    <h6 className="text-light pd-3 margin2">{book.autor}</h6>
                                                    <Calificacion2  calificacion2={book.promedio}/>
                                                    <Link className="btn btn-outline-light btn-sm" to={`/bookcase/${book._id}`}>Leer más</Link>
                                                    <h10 className="text-light pd-3  margin1">{book.clasificación}</h10>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    
                </table>   
            }
        </>
    )
}

export default SearchBooks;