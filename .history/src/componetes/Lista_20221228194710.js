import React,{useState,Fragment} from 'react'
const  Lista= () => {

 const [arrayNumero, setNumero]= useState([6,2,3,5,6])
const agregarElemento =() => {
    console.log ("click")
}
    return ( 
        <Fragment>
          <h2> Lista</h2>
          <button onClick={}></button>
          {
            arrayNumero.map((item,index )=>
                <p key ={index}> {item}- {index}</p>
            )
          }
        </Fragment>
     );
}
 
export default Lista;