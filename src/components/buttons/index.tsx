import React from 'react';
import './style.scss'

class Button extends React.Component{
    //extendo de um componente, ou seja será um class-components

    render(){ // classe principal render
        return (
            <button className='botao'>Salvar</button>
        );
    }
}

export default Button