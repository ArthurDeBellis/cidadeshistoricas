import React from "react";
import { Link } from "react-router-dom";

import { AreaHeader } from './styled'

const Header = () => {
    function AbreMenu(){
       const nav = document.getElementById('nav');
       nav.classList.toggle('active') 
    }
    function FechaMenu(){
        const nav = document.getElementById('nav');
        nav.classList.remove('active') 
    }
    return(
        <AreaHeader>
            <div className='container'>
                <div className='logo'>
                    <Link to="/" onClick={FechaMenu}>Início</Link>
                </div>

                <nav id='nav'>
                    <button onClick={AbreMenu}>
                        Cidades
                        <span id='hamburger'></span>
                    </button>
                    
                    <ul onClick={AbreMenu}>
                        <li><Link to="/congonhas">Congonhas</Link></li>
                        <li><Link to="/diamantina">Diamantina</Link></li>
                        <li><Link to="/mariana">Mariana</Link></li>
                        <li><Link to="/ouro-preto">Ouro Preto</Link></li>
                        <li><Link to="/sabara">Sabará</Link></li>
                        <li><Link to="/sao-joao-delrei">São João del Rei</Link></li>

                    </ul>
                </nav>
            </div>

        </AreaHeader>
    );
}

export default Header;