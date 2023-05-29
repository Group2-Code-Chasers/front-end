import "./Footer.css"
import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
 

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
function Footer(){
    return(
      <>
    
      


 
      
        <div className='footer'>
    <MDBFooter className='text-center' color='white' bgColor='#021430'>
      <MDBContainer className='p-4'>
     

        <section className='sign'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our new Quizes</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>  </MDBContainer>
 
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © Copyright  2023
        <a className='website' href='https://mdbootstrap.com/'>
        Quizzers.com
        </a>
      <div className="icons">
        <a href="https://github.com/Group2-Code-Chasers"><img src="https://th.bing.com/th?id=OIP.JYwmMMfA5LXAwRXCK-9ZAQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"className="icon"/></a>
        <a href="#"><img src="https://th.bing.com/th/id/OIP.DsdcyF-VPwmw7A63DaTSxgHaHc?w=187&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"className="icon"/></a>
        <a href="#"><img src="https://th.bing.com/th/id/OIP.-gy4asXS5iNNlbkymuq53gHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"className="icon"/></a>
  
        </div>
        </div>
    </MDBFooter>
       
         

      </div>    
   
   </>
    )
}

export default Footer;