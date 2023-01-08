import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [state, setState] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => {
                setState(data.drinks[0]);
            });
        
    }, [id]);

    useEffect(()=> {
        if(state.idDrink) {
            state.ingredients = [];
            for(let i = 1; i <= 15; i++) {
                if(state[`strIngredient${i}`]) {
                    state.ingredients.push(state[`strIngredient${i}`]);
                } else {
                    break;
                }
            }
            setLoading(false);
        }
    }, [state])
    return(
        <div className="container-detail">
            {
                loading && <div className="loading"> <div className="circles"><span className="circle1"></span><span className="circle2"></span><span className="circle3"></span></div> </div>
            }
            {
                state.strDrink && (
                    <>
                        <figure>
                            <img src={state.strDrinkThumb} alt={state.strDrink}/>
                        </figure>
                        <div className="detail-info">
                            <h3>Nombre: {state.strDrink}</h3>
                            <p>Instrucciones: {state.strInstructions}</p>
                            <h4>Ingredientes:</h4>
                            <ul>
                                {
                                    state.ingredients && state.ingredients.map(item => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Detail;