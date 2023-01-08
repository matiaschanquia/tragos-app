import React, { useEffect, useState } from "react";

const Filter = () => {
    const [select, setSelect] = useState("c");
    const [filter, setFilter] = useState([{}]);

    const changeHandler = (e) => {
        setSelect(e.target.value);
    };

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?${select}=list`)
            .then(response => response.json())
            .then(data => {
                setFilter(data.drinks);
            });
    }, [select]);

    return(
        <div className="container-filter">
            <h2 className="busqueda">Seleccione una lista</h2>
            <select onChange={changeHandler} value={select}>
                <option value="c">Categorías</option>
                <option value="g">Vasos</option>
                <option value="i">Ingredientes</option>
                <option value="a">Alcohol</option>
            </select>
            <div className="container-filtros">
                {
                    filter[0].strCategory && (
                        filter.map(item => (
                            <div className="container-filtro">
                                <h3>{item.strCategory}</h3>
                            </div>
                        ))
                    )
                }
                {
                    filter[0].strGlass && (
                        filter.map(item => (
                            <div className="container-filtro">
                                <h3>{item.strGlass}</h3>
                            </div>
                        ))
                    )
                }
                {
                    filter[0].strIngredient1 && (
                        filter.map(item => (
                            <div className="container-filtro">
                                <h3>{item.strIngredient1}</h3>
                            </div>
                        ))
                    )
                }
                {
                    filter[0].strAlcoholic && (
                        filter.map(item => (
                            <div className="container-filtro">
                                <h3>{item.strAlcoholic}</h3>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Filter;