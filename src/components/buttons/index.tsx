import React from 'react';
import style from './button.module.scss'
//<{texto: string}> recebendo o texto, props por atributo
class Button extends React.Component<{texto?: string}>{
    //extendo de um componente, ou seja será um class-components
    //com this.props.children é acessando direto sem atributo busca pelo nó

    render(){ // classe principal render
        return (
            <button className={style.botao}>{this.props.children}</button>
        );
    }
}

export default Button