import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Leaderboard from './components/Leaderboard/Leaderboard';



function App() {


  const [quizStarted, setQuizStarted] = useState(false);
  const [category, setCategory] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);


  const handleStartQuiz = (selectedCategory, selectedNumQuestions, selectedDifficulty) => {
    setQuizStarted(true);
    setCategory(selectedCategory);
    setNumQuestions(selectedNumQuestions);
    setDifficulty(selectedDifficulty);
    setQuizCompleted(false);
    setScore(0);
  };


  
  const handleQuizCompletion = (quizCompleted) => {
    setQuizCompleted(quizCompleted);
    // setScore(finalScore);
  };

  const handleRetryQuiz = () => {
    setQuizStarted(false);
    setCategory('');
    setNumQuestions(0);
    setDifficulty('');
    setQuizCompleted(false);
    setScore(0);
  };

  return (
    <>

      <Header />

      {!quizStarted && !quizCompleted &&(

        <Routes>
          <Route path='/' element={<Home onStartQuiz={handleStartQuiz} />}></Route>
        </Routes>


      )}

      {quizStarted && !quizCompleted && (
        <Quiz
          category={category}
          numQuestions={numQuestions}
          difficulty={difficulty}
          onQuizCompletion={handleQuizCompletion}
          score={score}


        />
      )}


      {quizCompleted && (
        <Leaderboard score={score} onRetryQuiz={handleRetryQuiz} />
      )}

      <Footer />

    </>
  );
}

export default App;
