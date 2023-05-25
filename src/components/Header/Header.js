import "./Header.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './QUIZZER__5_-removebg-preview1.png'
function NavBar() {
  return (
    <>

      <Navbar className="nav">
        <Container className="con">
          <Navbar.Brand href="#home" className="brand" >
            <img 
              src={logo}
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>

  );
}
export default NavBar;