import React from 'react';
import {Navbar,Nav,NavDropdown,Carousel,Container,Form,FormControl,Button} from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';

const Nav1 = () => {
    return ( 

        <>
        <Navbar bg="light" expand="lg">
              <Container fluid>
    <Navbar.Brand href="#">Bavarages Agency</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2"> about</Nav.Link>
        <Nav.Link href="#action3"> Product
        </Nav.Link>
        <Nav.Link >Signup</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


</>
      
        
        
     );
}
 
export default Nav1;