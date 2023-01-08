import React from "react";

import './styles.css';

function ProjectsPage(){
    return(
        <div className="projects-container"> 
            <h1>Projects</h1>
            <div className="project-item  project-item__marvel">
                <div className="project-img">
                    <a href="https://marvel-city-team-alpha-brfuentes.vercel.app/" target="_blank" rel="noreferrer">
                        <img  className="project-img__marvel" src="./marvelCity.png" alt="Proyecto de marvel en Prospercity"></img>
                    </a>
                </div>
                <div className="project-text">
                    <h2>Marvel</h2>
                    <p>
                        Es una pagina sobre los personajes de Marvel, sus comics, entre otras cosas. Todo se realizo mediante peticiones a la API de Marvel y fue desarrollada en React, bajo la metodología de trabajo Scrum.
                    </p>
                </div>
                
            </div>
            <div className="project-item">
                <div className="project-img">
                    <a href="https://marvel-city-team-alpha-brfuentes.vercel.app/" target="_blank" rel="noreferrer">
                        <img  className="project-img__marvel" src="./orquideas.jfif" alt="Proyecto de una ecomerce para la venta de orquideas"></img>
                    </a>
                </div>
                <div className="project-text">
                    <h2>Orquidea.com</h2>
                    <p>
                        Es una página web que se encuentra en desarrollo, donde podra encontrar la gran variedad de orquídeas que ofrece Colombia
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export { ProjectsPage };