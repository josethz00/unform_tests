import React from 'react';
//import Header from './Header';
import './global.css';
import Routes from './routes';

//PROPRIEDADES - são como atributos, porém ao inves de serem passados para a tag html, são passados ao Componente React
//JSX = JAVASCRIPT XML
function App() {//title é uma propriedade  <Header title = "Semana Omnistack"/> 
  /*const [counter, setCounter] = useState(0);
  //ESTADO, toda vez  q algo for alterado, o componente será remontado, atualizado, ficará monitorando
  function increment(){
    
    setCounter(counter + 1);
    console.log(counter)
  }
  */

  return (
   /* <div> {/*Quando se tem 1 ou mais componentes, é necessario colocar uma tag por volta deles
          <Header>Contador : {counter}</Header>
          <button onClick={increment}>Incrementar</button> {/*Não passa como uma string igual no HTML ="increment()" 
    </div> 
    */
    <Routes />
  
  );
}

export default App;
