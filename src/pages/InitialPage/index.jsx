import React from "react";

import './styles.css';

function InitialPage(){
    return(
        <div>
            <div className="about-me">
                <p>
                Ingeniero Químico y Desarrollador Front-end
                </p>
                <img src='./me.png' alt="Foto de Brayan Fuentes Guiza"></img>
            </div>
            <div className="about-me-general">
                <p>
                Soy un profesional con habilidades técnicas en la aplicación de principios químicos y físicos para el diseño, desarrollo y optimización de procesos, asi como en lenguajes de programación para el desarrollo de páginas web. Destaco por ser un profesional versátil, disciplinado y capaz de trabajar y colaborar en diferentes entornos, desde la investigación y el desarrollo hasta la implementación y producción.
                </p>
                <div className="btn-cv">
                <a href="./CV Brayan Fuentes.pdf" download>Descargar Hoja de Vida</a>
                </div>
                
            </div>
        </div>
    )
}

export {InitialPage};