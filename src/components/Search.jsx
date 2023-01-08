import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Search = () => {
    const [tragos, setTragos] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        setInput("");
        e.preventDefault();
        if(!input) {
            alert("Debe escribir algo en la búsqueda");
            return;
        }
        setLoading(true);
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
            .then(response => response.json())
            .then(data => {
                if(data.drinks) {
                    setTragos(data.drinks);
                } else {
                    alert("No existen tragos con ese nombre");
                }
                setLoading(false);
            });
    }

    return(
        <div className="container-search">
            <h2 className="busqueda">Haga una búsqueda de tragos por su nombre:</h2>
            <form onSubmit={submitHandler} className="form-search">
                <input type="text" placeholder="Haga su búsqueda..." value={input} onChange={changeHandler}/>
                <button type="submit">Buscar</button>
            </form>
            {
                loading && <div className="loading"> <div className="circles"><span className="circle1"></span><span className="circle2"></span><span className="circle3"></span></div> </div>
            }
            <div className="container-tragos">
                {
                    tragos.map(item => (
                        <div key={item.idDrink} className="container-trago">
                            <figure>
                                <img src={item.strDrinkThumb} alt={item.strDrink} />
                            </figure>
                            <NavLink to={`/detail/${item.idDrink}`}>
                                <h3>{item.strDrink}</h3>
                            </NavLink>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;