import React from 'react';
import './estiloSecaoSobre.css';
function SecaoSobre (){
    return(
        <section className="secao-sobre">
            <div>
                <h3>QUEM SOMOS NÓS</h3>
                <p>Fundada em 2001, em Nova Iguaçu- rio de Janeiro, a ótica vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
             <div className='box-cards'>
                 <img src="./assets/loja.png" alt="loja"/>

                 <div className='card'>
                      <h4>Nossas Filiais</h4>
                     <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                 </div>

                 <div className='card'>
                     <h4>Atendimento flexível</h4>
                     <p>Nossa equipe possui é treinada para te atender</p>
                 </div>

                 <img src="./assets/atendimento.png" alt="atendimento"/>

               </div>
           </div>
             
       </section>

    );
} 

export default SecaoSobre;