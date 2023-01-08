import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-tragos.png";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <h1 className="logo"><img src={logo} alt="logo tragos app" />Tragos App</h1>
            </NavLink>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "linkActive" : ""}>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/random" className={({ isActive }) => isActive ? "linkActive" : ""}>
                            <span>Random</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ingredient" className={({ isActive }) => isActive ? "linkActive" : ""}>
                            <span>Ingrediente</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/filter" className={({ isActive }) => isActive ? "linkActive" : ""}>
                            <span>Filtrar</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;