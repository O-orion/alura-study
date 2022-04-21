import React from 'react'
import Botao from '../buttons'
import style from './form.module.scss'
//Class components
class Formulario extends React.Component{
    //props como atributo preciso declara texto="Adicionar"
    state = {
        tarefa:"",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault(); //Evitando que a pagina venha atualizar
        console.log('state ' + this.state)
    }

    render() {
        //Bind(this) --> estamos indicando que queremos utilizar um scopo de fora, é esse escopo eo this
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input  
                    required 
                    type="text" 
                    id='tarefa' 
                    name='tarefa' 
                    value={this.state.tarefa}
                    placeholder='O que devemos estudar ?'
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                    required 
                    step="1" 
                    min="00:00:00" 
                    max="01:30:00" 
                    type="time" 
                    id='tempo' 
                    value={this.state.tempo}
                    onChange = {evento => this.setState({...this.setState, tempo: evento.target.value})}
                     />
                </div>
                
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario