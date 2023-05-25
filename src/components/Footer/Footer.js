import "./Footer.css"
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  MDBFooter,
  MDBContainer
} 
from 'mdb-react-ui-kit';
function Footer(){
    return(
      
        <div className='footer'>
        <div className='div' >
          © 2023 Copyright: 
          <a  href='#'>
             Quizzers.com
          </a>
        </div>
      </div>    
   
   
    )
}

export default Footer;