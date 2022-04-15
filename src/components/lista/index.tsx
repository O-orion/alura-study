import React from 'react';

//Function components
function Lista(){
    const minhasTarefas = [{"nome":"TypeScript", "tempo":"02:00:00"},{"nome":"React", "tempo":"00:05:00"},{"nome":"Html","tempo":"00:10:09"}]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    minhasTarefas.map((item,index) => (
                        <li key={index}>
                            <h3>{item.nome}</h3>
                            <span>{item.tempo}</span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default Lista;