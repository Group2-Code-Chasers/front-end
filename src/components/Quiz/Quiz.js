import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css';

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60); // Timer in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [numUnanswered, setNumUnanswered] = useState(0);

  // Fetch questions from the Open Trivia API based on category, numQuestions, and difficulty
  useEffect(() => {
    const fetchQuestions = async () => {
      const serverURL = `http://localhost:3003/choosequiz?categoryId=${props.category}&amount=${props.numQuestions}&difficulty=${props.difficulty}&type=multiple`;

      try {
        const response = await axios.get(serverURL);
        const fetchedQuestions = response.data.map((question) => {
          const options = [...question.incorrect_answers, question.correct_answer];
          const shuffledOptions = shuffle(options);
          return {
            ...question,
            options: shuffledOptions,
          };
        });
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [props.category, props.numQuestions, props.difficulty]);

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
  }, [timer]);

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
    if (quizCompleted || currentQuestionIndex >= questions.length || questions.length === 0) {
      return props.onQuizCompletion(quizCompleted); // Return null instead of displaying "Loading questions..."
    }

    const currentQuestion = questions[currentQuestionIndex];

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
  const shuffle = (array) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  };

  // Calculate the score as a percentage
  const calculateScorePercentage = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = questions.length - numUnanswered;
    const correctPercentage = (numCorrectAnswers / answeredQuestions) * 100;
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