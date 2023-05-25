import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryModal from '../Modal/CategoryModal';

import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

function Home() {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [name, setName] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [showModal, setShowModal] = useState(false);




  const chooseQuiz = (categoryId, numQuestions, difficulty) => {
    const serverURL = `http://localhost:3000/choosequiz?categoryId=${categoryId}&amount=${numQuestions}&difficulty=${difficulty}`;
  
    axios
      .get(serverURL)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };






  const handleSubmit = event => {
    event.preventDefault();
    chooseQuiz(selectedCategoryId, numQuestions, difficulty);
  };


  const getallCategory = () => {
    const serverURL = `http://localhost:3000/getAllCategories`;

    axios
      .get(serverURL)
      .then(response => {
        console.log(response.data);
        setCategoryData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCardClick = categoryId => {
    setSelectedCategoryId(categoryId);
    setName('');
    setNumQuestions('');
    setDifficulty('easy');
    setShowModal(true);
  };

  useEffect(() => {
    getallCategory();
  }, []);

  return (
    <>
      <Container fluid className="hero">
        <Container>
          <h1 className="hero-title">Get Ready to Quiztify!</h1>
          <h2 className="hero-subtitle">Unleash Your Inner Quizzer</h2>
          <p className="hero-description">
            Prepare for mind-boggling questions and laugh-out-loud moments!
          </p>
        </Container>
      </Container>

      <div className="mainContainer">
        <Container className="Container">
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {categoryData.map(item => (
              <Col key={item.id}>
                <div className="cardBox">
                  <div className="card" onClick={() => handleCardClick(item.id)}>
                    <span className="text">{item.name}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="down"></div>
      </div>

      <CategoryModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        selectedCategoryId={selectedCategoryId}
        chooseQuiz={chooseQuiz}
      />
    </>
  );
}

export default Home;
