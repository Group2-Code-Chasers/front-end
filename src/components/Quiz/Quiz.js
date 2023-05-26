import { Container, Row, Col, Button } from 'react-bootstrap';

function Quiz(props) {
    return (
        <>
            <div className="mainContainer">
                <Container className="Container">
                    <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                        {props.quizQustions.map(item => (
                            <Col key={item.id}>
                                <div className="cardBox">
                                    <div className="card">
                                        <span className="text">{item.question}</span>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <Button className='primary'>Take another Quiz</Button>
        </>
    )
}

export default Quiz;