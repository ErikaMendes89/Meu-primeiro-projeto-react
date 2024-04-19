import React from 'react';
import './App.css';

import Topo from './componentes/Header';
import Conteudo from './componentes/Body/conteudo';
import Rodape from './componentes/Footer';

function App() {
  return (
    <div className="App">
    <Topo />
    <Conteudo />
    <Rodape/>
    </div>
  );
}

export default App;
