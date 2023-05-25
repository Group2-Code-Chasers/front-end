import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css"
function Home() {

    const [CategoryData, setCategoryData] = useState([])


    const getallCategory = () => {
        const serverURL = `http://localhost:3000/getAllCategories`;

        axios.get(serverURL)
            .then(response => {
                console.log(response.data)
                setCategoryData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getallCategory()
    }, [])

    return (
        <>

            <Container fluid className="hero">
                <Container>
                    <h1 className="hero-title">Get Ready to Quiztify!</h1>
                    <h2 className="hero-subtitle">Unleash Your Inner Quizzer</h2>
                    <p className="hero-description">Prepare for mind-boggling questions and laugh-out-loud moments!</p>
                </Container>
            </Container>



            <div className='mainContainer'>
           
                <Container className='Container'>
                    <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                        {CategoryData.map(item => (
                            <Col key={item.id}>
                                <div class="cardBox">
                                    <div class="card">
                                        <span class="text">{item.name}</span>

                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    
                </Container>
                <div className='down'></div>
            </div>
           

        </>
    )
}

export default Home;