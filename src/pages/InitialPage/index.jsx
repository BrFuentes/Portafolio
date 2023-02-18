import React from "react";

import './styles.css';

function InitialPage(){
    return(
        <div>
            <div className="about-me">
                <p>
                Ingeniero Forestal
                </p>
                <img src='./fer.jpeg' alt="Foto de Fernando Guiza Pardo"></img>
            </div>
            <div className="about-me-general">
                <p>
                Profesional forestal, con conocimientos avanzados y experiencia en sistemas de información
                geográfica, herramientas office (Excel, Word), levantamiento de inventarios y ejecución de
                aprovechamientos forestales, elaboración de EIA y ejecución de PMA, manejo de fauna silvestre y
                especies en veda, conocimientos de la legislación ambiental vigente
                </p>
                <div className="btn-cv">
                <a href="./CV Fernando Guiza.pdf" download>Descargar Hoja de Vida</a>
                </div>
                
            </div>
        </div>
    )
}

export {InitialPage};