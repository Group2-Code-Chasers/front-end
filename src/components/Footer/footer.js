import "./footer.css"
import React from 'react';
import {
  MDBFooter,
  MDBContainer
} 
from 'mdb-react-ui-kit';
function Footer(){
    return(
        <div class="footer">
        <MDBFooter className='bg-dark text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
         
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright: 
          <a className='text-white' href='#/'>
             Quizzers.com
          </a>
        </div>
      </MDBFooter>    
      </div>
    //   hi
    )
}

export default Footer;