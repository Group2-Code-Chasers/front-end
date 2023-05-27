import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // Timer in seconds
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
    console.log(selectedOption)
    if( selectedOption===""){
        setNumUnanswered(numUnanswered+1)
        console.log(numUnanswered)
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
    setTimer(10);
  };

  // Check for quiz completion
  useEffect(() => {
    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true);
      
      console.log("quiz completion")
    }
  }, [currentQuestionIndex, questions.length]);

  // Timer countdown effect
  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);

// Render question and options
const renderQuestion = () => {
  if (quizCompleted || currentQuestionIndex >= questions.length) {
    return null; // Return null instead of displaying "Loading questions..."
    // props.onQuizCompletion(quizCompleted);

  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>Question {currentQuestionIndex + 1}</h3>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{ backgroundColor: selectedOption === option ? 'lightblue' : 'white' }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button disabled={!selectedOption} onClick={handleNextQuestion}>
        Next
      </button>
      <p>Timer: {timer}</p>
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
    const answeredQuestions = currentQuestionIndex;
    const correctPercentage = (numCorrectAnswers / answeredQuestions) * 100;
    return correctPercentage.toFixed(2);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {quizCompleted ? (
        <div>
          <p>Score: {calculateScorePercentage()}%</p>
          <p>Number of Correct Answers: {numCorrectAnswers}</p>
          <p>Number of Unanswered Questions: {numUnanswered}</p>
        </div>
      ) : (
        <p>Score: {score}</p>
      )}
      {renderQuestion()}
    </div>
  );
};

export default Quiz;
