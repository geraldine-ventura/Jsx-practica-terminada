import React, {Fragment, useState} from 'react'

const Formulario= ()=>{
     return (
      <Fragment>
        <h1>Formulario</h1>
         <form className='"row'>   
        <input 
        placeholder='"ingrese nombre'
        className= "form-control">
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
        </Fragment>
      );
}
 
export default Formulario;