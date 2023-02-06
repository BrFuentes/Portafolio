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
            <div className="project-item project-item__wanders">
                <div className="project-img">
                    <a href="https://wanderersnutrition.com/" target="_blank" rel="noreferrer">
                        <img  className="project-img__marvel" src="./wanderesnutrition.png" alt="Ecommerce para la venta de sumplementos"></img>
                    </a>
                </div>
                <div className="project-text">
                    <h2>Wanderers Nutrition</h2>
                    <p>
                        Es una ecommerce sobre distintos suplementos, donde se realizaron diferentes ajustes sugeridos por el cliente, como vincular el cobro de impuestos, un diseño responsivo, entre otros. 
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export { ProjectsPage };