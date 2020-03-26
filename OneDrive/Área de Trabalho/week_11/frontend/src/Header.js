import React from 'react';
//props.children pega o conteudo dentro do componente, para o caso de nao ser passado via propriedade
export default function Header({children}){ //retorna as propriedades especificas, por desestruturação
            //function Header(props) //RETORNA TODAS
    return(  //as chaves sao pq é uma variavel javascript em meio ao HTML
       // <header><h1>{props.title}</h1></header> //pega o parametro e a propriedade passada em app.js
       <header>
           <h1> 
               {children} {/* ou props.children*/}
           </h1>
       </header>
    );
} 

