import "./Header.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './QUIZZER__7_-removebg-preview1.png'
import { useState } from 'react'
function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <>
      <Navbar sticky="top" className="navbar">

        <Container className="con">
          <Navbar.Brand href="/" className="logo" >
            <img
              src={logo}
              className="logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="about" id="navbar">
          <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="https://th.bing.com/th?id=OIP.wChP8J8dXlHvZcEYpTsFEgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="img"/>
        </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Game">Flipping Card</a></li>
              <li><a href="/About">About Us</a></li>
            </ul></div>
          </Navbar.Brand>
        </Container></Navbar>

    </>


  );
}
export default NavBar;