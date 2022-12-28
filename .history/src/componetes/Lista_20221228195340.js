import React,{useState,Fragment} from 'react'
const  Lista= () => {

 const [arrayNumero, setNumero]= useState([6,2,3,5,6])

 const agregarElemento =() => {
    console.log ("click")
    setNumero([...arrayNumero,77])
}
    return ( 
        <Fragment>
          <h2> Lista</h2>
          <button onClick={agregarElemento}></button>
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