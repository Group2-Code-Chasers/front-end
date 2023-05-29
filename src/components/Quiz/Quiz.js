import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60); // Timer in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [numUnanswered, setNumUnanswered] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [isQuestionRendered, setIsQuestionRendered] = useState(false);

 
  // Fetch questions from the Open Trivia API based on category, numQuestions, and difficulty

  useEffect(() => {
    const fetchQuestions = async () => {
      const serverURL = `http://localhost:3003/choosequiz?categoryId=${props.category}&amount=${props.numQuestions}&difficulty=${props.difficulty}&type=multiple`;

      try {
        const response = await axios.get(serverURL);
        const fetchedQuestions = response.data.map((question) => {
          const options = [...question.incorrect_answers, question.correct_answer];
          const shuffledOptions = options.sort(() => Math.random() - .5)
          return {
            ...question,
            question: decodeString(question.question), // Apply decodeString function on the question
            options: shuffledOptions,
          };
        });
        setTimeout(() => {
          setQuestions(fetchedQuestions);
          setIsLoading(false);
          setIsQuestionRendered(true); // Set isQuestionRendered to true after rendering the questions
        }, 2000);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setIsLoading(false); 
      }
    };
 
  
    fetchQuestions();
  }, []);

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str ;
    return textArea.value;
  };

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Handle next question
  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if ((selectedOption === "") && !(currentQuestionIndex >= questions.length && questions.length > 0)) {
      setNumUnanswered(numUnanswered + 1);
      console.log(numUnanswered);
    }

    if (!currentQuestion) {
      // console.error('Current question is undefined');
      return;
    }

    const isCorrectAnswer = selectedOption === currentQuestion.correct_answer;

    if (isCorrectAnswer) {
      setScore(score + 1);
      setNumCorrectAnswers(numCorrectAnswers + 1);
    }

    setSelectedOption('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setTimer(60);
  };

  // Check for quiz completion
  useEffect(() => {
    if (currentQuestionIndex >= questions.length && questions.length > 0) {
      setQuizCompleted(true);
      if (currentQuestionIndex === questions.length) {
        // Call function to push data to the database
        handleQuizSubmission();
      }
      console.log("quiz completion");
    }
  }, [currentQuestionIndex, questions.length]);




  // Timer countdown effect
  useEffect(() => {
    if (isQuestionRendered) { // Start the timer only when the questions are rendered
      if (timer === 0 && currentQuestionIndex === questions.length - 1) {
        handleQuizSubmission();
      } else if (timer === 0) {
        handleNextQuestion();
      }

      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [timer, currentQuestionIndex, questions.length, isQuestionRendered]);

  const handleQuizSubmission = async () => {
    try {
      const serverURL = 'http://localhost:3003/savequiz';
      const quizData = {
        name: props.name,
        numQuestions: questions.length,
        numCorrectAnswers,
        numUnanswered,
        score: calculateScorePercentage(),
      };

      await axios.post(serverURL, quizData);
      setQuizCompleted(true);
      props.onQuizCompletion(quizCompleted);
    } catch (error) {
      console.error('Error saving quiz:', error);
    }
  };

  // Render question and options
  const renderQuestion = () => { 
    if (isLoading) {//to render the loader 


      
      const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    return (
      <div>
      <svg class="loader" viewBox="0 0 48 30" width="48px" height="30px">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
        <g transform="translate(9.5,19)">
          <circle class="loader_tire" r="9" stroke-dasharray="56.549 56.549"></circle>
          <g class="loader_spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
            <circle class="loader_spokes" r="5"></circle>
            <circle class="loader_spokes" r="5" transform="rotate(180,0,0)"></circle>
          </g>
        </g>
        <g transform="translate(24,19)">
          <g class="loader_pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
            <circle class="loader_pedals" r="4"></circle>
            <circle class="loader_pedals" r="4" transform="rotate(180,0,0)"></circle>
          </g>
        </g>
        <g transform="translate(38.5,19)">
          <circle class="loader_tire" r="9" stroke-dasharray="56.549 56.549"></circle>
          <g class="loader_spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
            <circle class="loader_spokes" r="5"></circle>
            <circle class="loader_spokes" r="5" transform="rotate(180,0,0)"></circle>
          </g>
        </g>
        <polyline class="loader_seat" points="14 3,18 3" stroke-dasharray="5 5"></polyline>
        <polyline class="loader_body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79"></polyline>
        <path class="loader_handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10"></path>
        <polyline class="loader_front" points="32.5 2,38.5 19" stroke-dasharray="19 19"></polyline>
      </g>
    </svg>
    <p className='theWords'>On Our Way Your Quiz...</p>
    
    </div>
    );
    }
    
    if (quizCompleted || currentQuestionIndex >= questions.length || questions.length === 0) {
      return props.onQuizCompletion(quizCompleted); // Return null instead of displaying "Loading questions..."
    }

    const currentQuestion = questions[currentQuestionIndex];
    //////////////////////
    return (

      <div>
        <h3 id="heading2">Question {currentQuestionIndex + 1}</h3>
        <p id="heading2">{currentQuestion.question}</p>

        <ul className='list'>

          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className="options"
              style={{
                backgroundColor: selectedOption === option ? '#333' : '#484848',
                color: selectedOption === option ? '#fff' : '#fff',
              }}

            // style={{ backgroundColor: selectedOption === option ? 'lightblue' : 'white' }}
            >
              {option}
            </li>
          ))}
        </ul>

        {currentQuestionIndex >= questions.length - 1 ? (
          <button disabled={!selectedOption} onClick={handleQuizSubmission} className="button1">
            Submit
          </button>
        ) : (
          <button disabled={!selectedOption} onClick={handleNextQuestion} className="button1">
            Next
          </button>
        )}

      </div>
    );
  };

  // Utility function to shuffle an array
  // const shuffle = (array) => {
  //   const shuffledArray = [...array];

  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  //   }

  //   return shuffledArray;
  // };



  // Calculate the score as a percentage
  const calculateScorePercentage = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = questions.length - numUnanswered;
    const correctPercentage = (numCorrectAnswers /totalQuestions) * 100;
    return correctPercentage.toFixed(2);
  };

  return (
    
    <div className="quiz-container">
      <h2 className="quiz-title" id="heading">
        Quiz
      </h2>
      <p id="heading2">Timer: {timer}</p>
      {quizCompleted ? (
        <div className="completion-container">
          <p className="score">Score: {calculateScorePercentage()}%</p>
          <p>Number of Correct Answers: {numCorrectAnswers}</p>
          <p>Number of Unanswered Questions: {numUnanswered}</p>
        </div>
      ) : (
        <p className="score" id="heading2">
          Score: {score}
        </p>

      )}
      {renderQuestion()}
    </div>
  );
};

export default Quiz;