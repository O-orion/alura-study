import React from 'react'
import Botao from '../buttons'

//Class components
class Formulario extends React.Component{
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input  required type="text" id='tarefa' name='tarefa' placeholder='O que devemos estudar ?' />
                </div>
                    <label htmlFor="tempo">Tempo</label>
                    <input required type="time" id='tempo' />
                <div>

                </div>
                <Botao></Botao>
            </form>
        )
    }
}

export default Formulario