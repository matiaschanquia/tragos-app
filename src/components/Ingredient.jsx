import React, { useState } from "react";

const Ingredient = () => {
    const [input, setInput] = useState("")
    const [ingrediente, setIngrediente] = useState({});
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!input) {
            alert("Debe escribir algo en la búsqueda");
            return;
        }
        setLoading(true);
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${input}`)
            .then(response => response.json())
            .then(data => {
                if(data.ingredients) {
                    setIngrediente(data.ingredients[0]);
                    setLoading(false);
                } else {
                    setLoading(false);
                    alert("No existen ingredientes con ese nombre");
                }
            });
    }

    return(
        <div className="container-ingredient">
            <h2 className="busqueda">Haga una búsqueda de un ingrediente:</h2>
            <form onSubmit={submitHandler} className="form-search">
                <input type="text" placeholder="Haga su búsqueda..." value={input} onChange={changeHandler}/>
                <button type="submit">Buscar</button>
            </form>
            {
                loading && <div className="loading"> <div className="circles"><span className="circle1"></span><span className="circle2"></span><span className="circle3"></span></div> </div>
            }
            {
                ingrediente.strIngredient && (
                    <div className="container-ingrediente">
                        <h3>{ingrediente.strIngredient}</h3>
                        {
                            ingrediente.strABV && <p>ABV: {ingrediente.strABV}</p>
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Ingredient;