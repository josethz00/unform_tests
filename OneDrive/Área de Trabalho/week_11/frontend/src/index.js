import React from 'react';
import ReactDOM from 'react-dom'; //React integrado co, o navegador e a arvore de elementos
import App from './App';
//Componentes devem ter a primeira letra maiúscula
//Componentes são funções REACT que retornam HTML, e que contém metodos javascript
ReactDOM.render(<App />,document.getElementById('root')); //coloca o componente dentro da div q tiver id root

