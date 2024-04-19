import React from 'react';

import SecaoCapa from './secaoCapa';
import SecaoProdutos from './secaoProdutos';
import SecaoSobre from './secaoSobre';
import SecaoContato from './secaoContato';

function Conteudo (){
    return(
        <div className="conteudo">
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />

        </div>

    );
} 

export default Conteudo;