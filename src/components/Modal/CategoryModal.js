import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CategoryModal.css';

function CategoryModal(props) {
  const [name, setName] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [difficulty, setDifficulty] = useState('easy');



  const handleSubmit = event => {
    event.preventDefault();
    if (name && numQuestions && difficulty) {
      props.chooseQuiz(props.selectedCategoryId, numQuestions, difficulty, name);

    }
  };

  const handleClose = () => {
    props.closeModal();
  };


  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="crazy-title">Choose Quiz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label  className="crazy-label">Enter Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className=" input input-alt"
            />
          </Form.Group>
          <span class="input-border input-border-alt"></span>
          <Form.Group className="mb-3" controlId="formNumQuestions">
            <Form.Label  className="crazy-label">Number Of Questions:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the number of questions"
              min={1}
              max={30}
              value={numQuestions}
              onChange={e => setNumQuestions(e.target.value)}
              required
              className=" input input-alt"
            />
          </Form.Group>
          <span class="input-border input-border-alt"></span>
          <Form.Group className="mb-3 ss" controlId="formDifficulty">
            <Form.Label  className="crazy-label">Difficulty</Form.Label>
            <Form.Select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
              required
              className=" input input-alt custom-select"
            >
              <option value="easy" className='options'>Easy</option>
              <option value="medium" className='options'>Medium</option>
              <option value="hard" className='options'>Hard</option>
            </Form.Select>
            <span class="input-border input-border-alt"></span>
          </Form.Group>
          <div className="crazy-button-container">
            <Button variant="primary" type="submit" className='crazy-button'>
            Let's go
            </Button>
            <Button variant="secondary" onClick={handleClose} className='crazy-button'>
            <span class="text">Close</span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
}

export default CategoryModal;
