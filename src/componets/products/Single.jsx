import React from 'react';
import productSer from '../../Serives/./ProductSer';
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';
const Single = (props) => {
    const {product , onDelete}=props
    return ( 

        <>
        <h2>{product.name} <Button variant="success" onClick={e=>{
            


        }}  >edit</Button>{' '}
  <Button variant="danger" onClick={(e)  =>{

  productSer.deleteProduct(product._id)
    .then((data) => {
        console.log(data)
        onDelete();
        
    
})

.catch((err)=>{

    console.log(err);

})
}}>delte
  
  </Button></h2>
        <p>{product.price}</p>
        <p>{product.company}</p>
        <hr />
       
    </>
     );
}
 
export default Single;