import React from 'react';
import logo from './Images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div className="footerContainer">
        <img className="logo" src={logo} alt="MS Logo"></img>
            <span className="itemsFooter">
                <ul>
                    <a href="/"><li>Acerca de Valve |</li></a>
                    <a href="/"><li>Steamworks |</li></a>
                    <a href="/"><li>Empleo |</li></a>
                    <a href="/"><li>Distribución de Steam |</li></a>
                    <a href="/"><li>Tarjetas regalo |</li></a>
                    <a href="/"><li>Steam |</li></a>
                    <a href="/"><li>@steam</li></a>
                </ul>
            </span>
        </div>
        </>
    )
}

export default Footer
