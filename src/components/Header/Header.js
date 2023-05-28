import "./Header.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './QUIZZER__7_-removebg-preview1.png'
function NavBar() {
  return (
   <>
<Navbar sticky="top">
 
        <Container className="con">
          <Navbar.Brand href="/" className="brand" >
            <img 
              src={logo}
              className="logo"
              alt="React Bootstrap logo"
            />  </Navbar.Brand><Navbar.Brand  className="about"id ="navbar">
               <ul>
            <li><a href="/">Home</a></li>
           
            <li><a href="/Leaderboard">Leaderboard</a></li>
            <li><a href="/Flipping">Flipping Card</a></li>
            <li><a href="/About">About Us</a></li>
          </ul>
          
          </Navbar.Brand>
        </Container></Navbar>
        
</>
  

  );
}
export default NavBar;