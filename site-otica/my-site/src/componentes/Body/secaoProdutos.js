import React from 'react';

import './estilosecaoprodutos.css';

function SecaoProdutos (){
    return(
        <section className="secao-produtos">
            <div ClassName="Paragrafo">
                <h1>NOSSOS PRODUTOS</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil
                    Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado. </p>
            </div>
            <div className="Card-principal">
            <div className = "Card-OG">
              <h2>Óculos de Grau</h2>
              <img src="./assets/oculos01.png" alt="oculos-grau"/> 
              <p>R$ 500,00</p>
            </div>
            <div className = "Card-OT">
              <h2>Óculos Transition </h2>
              <img src="./assets/oculos02.png" alt="oculos-transition"/> 
              <p>R$ 750,00</p>
            </div>
            <div className = "Card-OS">
              <h2>Óculos de Sol </h2>
              <img src="./assets/oculos03.png" alt="oculos-sol"/> 
              <p>R$ 700,00</p>
            </div>
            <div className = "Card-IN">
              <h2>Óculos infantil </h2>
              <img src="./assets/oculos04.png" alt="oculos-infantil"/> 
              <p>R$ 500,00</p>
            </div>
        </div>
        <div className="lista-produtos">
            <p>Todos os nossos produtos incluem:</p>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventina</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </div>

        </section>

    );
} 

export default SecaoProdutos;