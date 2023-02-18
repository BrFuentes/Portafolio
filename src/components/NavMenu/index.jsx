import React from "react";
import { NavLink } from "react-router-dom";

import './styles.css';

function NavMenu(){
    return(
        <header>
            <NavLink className="header-name" to="/" >
                Fernando Guiza Pardo
            </NavLink>
            <nav className="nav-menu">
                <NavLink className={"nav-menu__item item1"} to="/" >
                    Home
                </NavLink>

                <NavLink className={"nav-menu__item"}to="/experience">
                    Experience
                </NavLink>
            </nav>
        </header>
  );
}


export { NavMenu };