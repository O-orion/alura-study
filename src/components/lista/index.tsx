import React, { useState } from 'react';
import Item from './item/item';
import style from './lista.module.scss'
//Function components
function Lista(){
    let [tarefas, setTarefas] = useState(
        [{"nome":"TypeScript", "tempo":"02:00:00"},{"nome":"React", "tempo":"00:05:00"},{"nome":"Html","tempo":"00:10:09"}]
    ) //é um estado
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {"nome":"Biblia", "tempo":"10:50:00"}])
            }}>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((item,index) => (
                        <Item key={index}  {...item} />
                    ))
                }
            </ul>
        </aside>
    )
}

export default Lista;