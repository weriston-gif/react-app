import React from 'react';
import Card2 from './componets/layout/Card2';
import Card from './componets/layout/Card';
import ReactDOM from 'react-dom';
import Task from './componets/basicos/First'
import Wrandom from './componets/basicos/aleatorio';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <div>
    <div>
      <Card titulo="Exemplo de card">
        <Wrandom min={5} max={100748}></Wrandom>
      </Card>
    </div>
    <div className="spaceX">
      <Card2>
        <Task></Task>
      </Card2>
    </div>

  </div>,
  document.getElementById('root'),
  reportWebVitals()
)

