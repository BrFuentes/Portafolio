import React from "react";
import { Slideshow} from "../../components/Slideshow/index.js";
import './styles.css';

function ExperiencePage(){
    return(
        <div className="experience-container"> 
            <div className="experince-item">
                <h2>Silvicultura y diseños</h2>
                <p className="date-text">Jul - Sep 2019</p>
                <div className="experience-info">
                    <div className="slider-father">
                        <div className="slider">
                        <Slideshow autoplay={true} velocidad="1000" intervalo="3000">                
                                <img src="./img-experience/img1.jpg"alt=""/>
                    
                                <img src="./img-experience/img2.jpg"alt=""/>
                        
                                <img src="./img-experience/img3.jpg"alt=""/>
                        
                                <img src="./img-experience/img4.jpg"alt=""/>
                        </Slideshow>
                        </div>
                    </div>
                    <div className="experience-text">
                        <p>
                            Ingeniero forestal residente encargado de coordinar y
                            ejecutar el aprovechamiento forestal en un área de 65
                            Hec. en el proyecto minero CI. Prodeco S.A. Mina
                            Calenturitas y Carbones de la Jagua.
                        </p>
                    </div>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export { ExperiencePage };