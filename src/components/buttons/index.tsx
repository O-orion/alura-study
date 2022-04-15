import React from 'react';

class Button extends React.Component{
    //extendo de um componente, ou seja será um class-components

    render(){ // classe principal render
        return (
            <button style={{
                backgroundColor: 'red',
                textAlign: 'center',
                padding: '15px',
                color: 'white',
                fontSize: '20px'
            }}>Salvar</button>
        );
    }
}

export default Button