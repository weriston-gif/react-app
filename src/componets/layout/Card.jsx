import React from 'react'
import '../style/card.css'


export default function card(props) {
    const estilo = {
        backgroundColor: props.color,
        margin: 'auto'
    }

    return (
        <div className='body-0' style={estilo}>
            <div className='titulo-0'> Conteudo</div>
            <div className='content-0'>
                {props.children}
            </div>
        </div>
    )
}