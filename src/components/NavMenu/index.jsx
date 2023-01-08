import React from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineWhatsApp, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import './styles.css';

function NavMenu(){
    return(
            <nav className="nav-menu">
                <div className="menu-container">
                    <div className="menu-item">
                        <NavLink to="/" >
                            Home
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </div>
                </div>
                <div className="contacts-menu">
                    <a href="https://web.whatsapp.com/send?phone=573505915824" target="_blank" rel="noreferrer"><AiOutlineWhatsApp /> </a>
                    <a href="https://github.com/BrFuentes" target="_blank" rel="noreferrer">
                        <AiFillGithub /> 
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/brayan-stiven-fuentes-guiza-47a110203/" 
                        target="_blank"
                        rel="noreferrer">
                        <AiFillLinkedin /> 
                    </a>

                </div>
            </nav>
  );
}


export { NavMenu };