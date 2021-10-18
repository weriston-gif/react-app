import React from 'react';
import Card from './componets/layout/Card';
import ReactDOM from 'react-dom';
import Task from './componets/basicos/First'
import Wrandom from './componets/basicos/aleatorio';
import reportWebVitals from './reportWebVitals';
import Family from "./componets/basicos/family"

ReactDOM.render(
  <div className="App">
    <Card titulo="Random" color="red">
      <Wrandom min={5} max={100748}></Wrandom>
    </Card>
    <Card titulo="Family" color="green">
      <Family sobrenome="Pereira"></Family>
    </Card>
    <Card titulo="Taks" color="yellow">
      <Task></Task>
    </Card>
  </div>,
  document.getElementById('root'),
  reportWebVitals()
)

