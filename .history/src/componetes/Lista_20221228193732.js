import React,{useState,Fragment} from 'react'
const  Lista= () => {

 const [arrayNumero, setNumero]= useState([6,2,3,5,6])

    return ( 
        <Fragment>
          <h2> Lista</h2>
          {
            arrayNumero.map((item,index )=>
                <p key ={index}> {item}- {index}</p>
            )
          }
        </Fragment>
     );
}
 
export default Lista;