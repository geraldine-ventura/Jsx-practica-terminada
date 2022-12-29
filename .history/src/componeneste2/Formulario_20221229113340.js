import React, {Fragment, useState} from 'react'
const [datos, setDatos]= 
const Formulario= ()=>{
     return (
      <Fragment>
        <h1>Formulario</h1>
         <form className='row'>

         <div className='col-md-3'>
          <input 
            placeholder='ingrese nombre'
            className= "form-control">
          </input>
         </div> 

         <div className='col-md-3'>
          <input
            placeholder='ingrese apellido'
            className= "form-control">
          </input>
         </div>

         <div className='col-md-3'>
          <button className="btn btn-primary" type='submit'>Enviar</button>
           </div>
        </form>
        </Fragment>
      );
}
 
export default Formulario;