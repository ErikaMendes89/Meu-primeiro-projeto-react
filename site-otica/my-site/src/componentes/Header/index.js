import React from 'react';
import './estilo.css';

function Topo() {
    return(
        <header>
            <div>
                <img src="/assets/logo.png" alt="Logo"/>
                  
            <nav>
                <a href ="#produtos">PRODUTO</a>
                <a href ="#sobre">SOBRE</a>
                <a href ="#contatos">CONTATO</a>
            </nav>
            </div>
        </header>
    );
}

export default Topo;