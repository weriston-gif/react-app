import React from 'react';


import '../style/css.css'
import ReactDOM from 'react-dom';

export default function random(props) {
    const min = props.min;
    const max = props.max;
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2 className="title"> Valor do random </h2>
            <p>
                Valor minimo passado por parametro: <strong>{min}</strong>
            </p>
            <p>
                Valor máximo passado por parametro: <strong>{max}</strong>
            </p>
            <p>
                Resultado: <strong>{result}</strong>
            </p>
        </div>
    )

}
