import React from 'react'
import Botao from '../buttons'
import './style.scss'
//Class components
class Formulario extends React.Component{
    render() {
        return (
            <form className='novaTarefa'>
                <div className='inputContainer'>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input  required type="text" id='tarefa' name='tarefa' placeholder='O que devemos estudar ?' />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="tempo">Tempo</label>
                    <input required type="time" id='tempo' />
                </div>
                <Botao></Botao>
            </form>
        )
    }
}

export default Formulario