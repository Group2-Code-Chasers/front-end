import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="style">
      <div className="hero-image"></div>
      <h1 className="text-center">About Quizzer</h1>
      <p className="lead text-center">
      Quizzer is a versatile online web app that revolutionizes the way we assess knowledge and test our understanding. It offers a wide range of features that make it an ideal choice for conducting tests and quizzes. One of its prominent features is the ability to create customizable exams tailored to specific requirements. Users have the freedom to determine the difficulty level of the test, allowing them to challenge themselves or cater to a particular audience. Additionally, Quizzer enables the selection of the desired number of questions, ensuring flexibility in the assessment process.
      </p>
      <h1 className="text-center">About Us</h1>
      <Row>
        <Col md={4}>
          <Card className="member-card">
            <Card.Img variant="top" src="" alt="Member 1" />
            <Card.Body>
              <Card.Title>Nadeen Aleideh</Card.Title>
              <Card.Text>Nadeen Aleideh</Card.Text>
              <a href="https://github.com/NadineAleideh" target="_blank" rel="noopener noreferrer">View Profile in GitHub</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="member-card">
            <Card.Img variant="top" src="" alt="Member 2" />
            <Card.Body>
              <Card.Title>Nadeen Al-Masri</Card.Title>
              <Card.Text>Nadeen Al-Masri</Card.Text>
              <a href="https://github.com/Nadine-ALmasri" target="_blank" rel="noopener noreferrer">View Profile in GitHub</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="member-card">
            <Card.Img variant="top" src="" alt="Member 3" />
            <Card.Body>
              <Card.Title>Mohamad Masalmeh</Card.Title>
              <Card.Text>Mohamad Masalmeh</Card.Text>
              <a href="https://github.com/MhamadBelal" target="_blank" rel="noopener noreferrer">View Profile in GitHub</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="member-card">
            <Card.Img variant="top" src="" alt="Member 4" />
            <Card.Body>
              <Card.Title>Marwah Alahdab</Card.Title>
              <Card.Text>Marwah Alahdab</Card.Text>
              <a href="https://github.com/MarwahAlahdab" target="_blank" rel="noopener noreferrer">View Profile in GitHub</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="member-card">
            <Card.Img variant="top" src="" alt="Member 5" />
            <Card.Body>
              <Card.Title>Rajeh Dalbah</Card.Title>
              <Card.Text>Rajeh Dalbah</Card.Text>
                <a href="https://github.com/Rajeh-Dalbah" target="_blank" rel="noopener noreferrer">View Profile in GitHub</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  );
};

export default About;

