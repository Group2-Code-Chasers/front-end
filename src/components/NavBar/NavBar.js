import "./NavBar.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  return (
    <>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Quizzers
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
    // 222
  );
}
export default NavBar;