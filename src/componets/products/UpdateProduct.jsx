import React from 'react';

import productSer from '../../Serives/./ProductSer';
import { FormControl, Col,Container,InputGroup,Row,Button } from 'react-bootstrap';
const UpdateProduct = (props) => {

    const [name ,setName]=React.useState("");
    const [price ,setPrice]=React.useState(0);
    const [company ,setCompany]=React.useState("");
    return ( <>
    
    
<h1>Update Product</h1>
<Container>
<Row>
<Col sm={3}>
<>
<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default"  >Name</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={name}
      onChange={(e)=>{setName
        (e.target.value)}}
    />
  </InputGroup>
  
  <br />
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Price</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={price}
      onChange={(e)=>{setPrice(e.target.value)}}
    />

  </InputGroup>

  <br />
  <InputGroup className="sm-3">
    <InputGroup.Text id="inputGroup-sizing-default">company</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={company}
      onChange={(e)=>{setCompany(e.target.value)}}
    />
  </InputGroup>

  <br />
</>
</Col >
</Row>
</Container>
<Button variant="Submit" onClick={


(e)=>{

  productSer.addProduct({name,price,company})
    .then((data) => {
        console.log(data);
    
});
}}
>Update</Button>{' '}
    </> );
}
 
export default UpdateProduct ;