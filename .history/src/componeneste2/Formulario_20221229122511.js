import React, {Fragment, useState} from 'react'

const Formulario= ()=>{
  const [datos, setDatos]= useState({
    nombre:"",
    apellido: ""

  })
const handleInputChange= (event) =>{
console.log= (event.target.value)
setDatos({...datos,[event.target.nombre]: event.target.value})
}

     return (
      <Fragment>
        <h1>Formulario</h1>
         <form className='row' onSubmit={enviarDatos}>

         <div className='col-md-3'>

          <input 
            placeholder='ingrese nombre'
            className= "form-control"
            type= "texto"
            name="nombre" 
            onChange={handleInputChange}>
          </input>

         </div> 

         <div className='col-md-3'>

          <input
            placeholder='ingrese apellido'
            className= "form-control"
            type= "texto"
            name="apellido"
            onChange={handleInputChange}>
          </input>

         </div>

         <div className='col-md-3'>
          <button className="btn btn-primary" type='submit'>Enviar</button>
           </div>
        </form>
        <h3>{datos.nombre}- {datos.apellido}</h3>
        </Fragment>
      );
}
 
export default Formulario;