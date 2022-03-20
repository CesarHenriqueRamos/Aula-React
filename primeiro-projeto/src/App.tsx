import React from "react";

//componentes
import Header from './components/Heade';


function App(){
  let name:string = "Cesar Henrique Ramos"
  function somar(n1:number,n2:number):number{
    return n1 + n2;
  }
  return(
   <div>
     <Header title="Meu Titulo" />
    <div>Hello {name}, {somar(3,15)}</div>
  </div> 
  ); 
}
export default App;