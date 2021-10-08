import React from 'react'
import '../style/card.css'


export default function card(props) {
    return (
        <div className='body'>
            <div className='titulo'> Conteudo</div>
            <div className='content'> 
                 {props.children}
            </div>
        </div>
    )
}