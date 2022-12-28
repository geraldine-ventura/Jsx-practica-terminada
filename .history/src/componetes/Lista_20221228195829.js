import React,{useState,Fragment} from 'react'
const  Lista= () => {

 const [arrayNumero, setNumero]= useState([1,2,3,5,6])

const[numero, setNumero]= useState([])

 const agregarElemento =() => {

    setNumero(numero + 1)
   // console.log ("click")
    setNumero([...arrayNumero,77])
}
    return ( 
        <Fragment>
          <h2> Lista</h2>
          <button onClick={agregarElemento}>agregar</button>
          {
            arrayNumero.map((item,index )=>
                <p key ={index}>
                  {item} - {index}
                </p>
            )
          }
        </Fragment>
     );
}
 
export default Lista;