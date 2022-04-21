import React from 'react';
import Button from '../components/buttons';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './style..module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <h1>JESUS CRISTO É O SENHOR !!</h1>
      <Formulario />
      <Cronometro />
      <Lista />
    </div>
  );
}
//Colocando nosso class-componente, basta chamar como se fosse um elemento HTML
export default App;
