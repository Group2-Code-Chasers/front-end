import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Quiz from '../Quiz/Quiz'

function CategoryModal(props) {
  const [name, setName] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  

  const handleSubmit = event => {
    event.preventDefault();
    if (name && numQuestions && difficulty) {
      props.chooseQuiz(props.selectedCategoryId, numQuestions, difficulty);
      props.setSubmitted(true);
    }
  };
  
  const handleClose = () => {
    props.closeModal();
  };

 




  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Choose Quiz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumQuestions">
            <Form.Label>Number Of Questions:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the number of questions"
              min={1}
              max={30}
              value={numQuestions}
              onChange={e => setNumQuestions(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDifficulty">
            <Form.Label>Difficulty</Form.Label>
            <Form.Select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryModal;
