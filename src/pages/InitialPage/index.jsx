import React from "react";

import './styles.css';

function InitialPage(){
    return(
        <div>
            <div className="about-me">
                <p>
                    Algo mamon
                </p>
                <img src='./me.png' alt="Foto de Brayan Fuentes Guiza"></img>
            </div>
            <div>
                <p>
                    Algo general sobre mi
                </p>
            </div>
        </div>
    )
}

export {InitialPage};