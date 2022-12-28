import React from 'react'

const  Jsx= () => {
    //const saludo =" CONSTANTE PRUEBA"
    const temperatura=21;
    return (  
        //<h2>"Este es uno de los componentes  {saludo} de Jsx.js"</h2>
    <h2>Frio o Calor?</h2>
    <h4>
       {
        temperatura > 20 ? "calor" : "frio"
       } 
    </h4>
        );
}
 
export default Jsx;