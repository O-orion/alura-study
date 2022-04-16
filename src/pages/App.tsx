import React from 'react';
import Button from '../components/buttons';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import './style.scss'

function App() {
  return (
    <div className="AppStyle">
      <h1>JESUS CRISTO É O SENHOR !!</h1>
      <Formulario />
      <Lista />
    </div>
  );
}
//Colocando nosso class-componente, basta chamar como se fosse um elemento HTML
export default App;
