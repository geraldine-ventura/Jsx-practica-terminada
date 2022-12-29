import React, {Fragment, useState} from 'react'

const Formulario= ()=>{
     return (
      <fragment>
        <h1>Formulario</h1>
         <form className='"row'>   
        <input 
        placeholder='"ingrese nombre'>
       </input>
         <div>
          <input
          placeholder='ingrese apellido'>
          </input>
         </div>
         <div className='col-md-3'>
          <button> Enviar</button>

           </div>
        </form>
        </fragment>
      );
}
 
export default Formulario;