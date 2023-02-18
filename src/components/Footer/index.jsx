import React from "react";
import './styles.css';
import {AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai'

function Footer(){
    return(
        <div className="footer-container">
            <h1>"Todo fluye, nada permanece" Heráclito</h1>
            <div className="contacts-footer">
                    <a 
                    href="https://web.whatsapp.com/send?phone=573135456943" 
                    target="_blank"
                    rel="noreferrer">
                        <AiOutlineWhatsApp />
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/brayan-stiven-fuentes-guiza-47a110203/" 
                    target="_blank"
                    rel="noreferrer">
                        <AiFillLinkedin /> 
                    </a>

                </div>
        </div>
    )
}

export { Footer };