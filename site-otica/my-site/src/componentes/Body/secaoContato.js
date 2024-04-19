import React from 'react';
import './estilossecaocontato.css';

function SecaoContato (){
    return(
        <section className="secao-contato">
          <div>
        <h3>Fale conosco</h3>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

        <div>
          <div>
              <h4>Contato</h4>
              <div>
                  <img src="./assets/local.png"  alt="Pino de localização"/>
                  <span>Nova Iguaçu, RJ</span>
              </div>
              <div>
                  <img src="./assets/telefone.png"  alt="Ícone de um telefone"/>
                  <span>(21) 9999-9999</span>
              </div>
              <div>
                  <img src="./assets/email.png"  alt="Ícone de uma carta"/>
                  <span>contato@oticavida.com</span>
              </div>
          </div>
          <div>
              <h4>Nossas Redes Sociais</h4>
              <div>
                  <img src="./assets/fb.png"  alt="logo do facebook"/>
                  <span>/OticaVida</span>
              </div>
              <div>
                  <img src="./assets/ig.png"  alt="logo do instagram"/>
                  <span>@oticavidarj</span>
              </div>
              <div>
                  <img src="./assets/tt.png"  alt="logo do twitter"/>
                  <span>@oticavidarj</span>
              </div>
          </div>
        </div>
      </div>  

        </section>

    );
} 

export default SecaoContato;