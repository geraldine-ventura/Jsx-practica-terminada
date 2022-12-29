import React from 'react'
import Formulario from './componeneste2/Formulario';
import Jsx from "./componetes/Jsx"
import Lista from './componetes/Lista';

function App() {
  return (
    <div className="App">
    <h2>Estoy en App.js</h2>
    <Jsx></Jsx>
    <Lista></Lista>
    <div className='container mt-5'>
    <Formulario></Formulario>
    </div>
    </div>
  );
}

export default App;


