import "./Header.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
function NavBar() {
  return (
    <>

      <Navbar className="nav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./assets/Q-removebg-preview.png"
            
              
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>

  );
}
export default NavBar;