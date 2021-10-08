import React from 'react'
import '../style/card.css'


export default function card(props) {
    return (
        <div className='body-0'>
            <div className='titulo-0'> Conteudo</div>
            <div className='content-0'> 
                 {props.children},
                 {props.children}
            </div>
        </div>
    )
}