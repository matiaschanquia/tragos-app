import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Random = () => {
    const [trago, setTrago] = useState({});

    const clickHandler = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then(data => {
                setTrago(data.drinks[0]);
            });
    };

    return(
        <div className="container-random">
            <button onClick={clickHandler}>Trago al azar</button>
            {
                trago.strDrink && (
                    <div className="container-trago margin-auto">
                        <figure>
                            <img src={trago.strDrinkThumb} alt={trago.strDrink} />
                        </figure>
                        <NavLink to={`/detail/${trago.idDrink}`}>
                            <h3>{trago.strDrink}</h3>
                        </NavLink>
                    </div>)
            }
        </div>
    );
}

export default Random;