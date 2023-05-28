import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';


import About from "./components/About/About"





function App() {


  const [quizStarted, setQuizStarted] = useState(false);
  const [category, setCategory] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [name, setName] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  


  const handleStartQuiz = (selectedCategory, selectedNumQuestions, selectedDifficulty, name) => {
    setQuizStarted(true);
    setCategory(selectedCategory);
    setNumQuestions(selectedNumQuestions);
    setDifficulty(selectedDifficulty);
    setName(name);
    setQuizCompleted(false);
   
  };


  
  const handleQuizCompletion = (quizCompleted ) => {
    setQuizCompleted(quizCompleted);
  };

  const handleRetryQuiz = () => {
    setQuizStarted(false);
    setCategory('');
    setNumQuestions(0);
    setDifficulty('');
    setQuizCompleted(false);
  
  };

  return (
    <>

      <Header />

      {!quizStarted && !quizCompleted &&(

        <Routes>
          <Route path='/' element={<Home onStartQuiz={handleStartQuiz} />}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
//////////////////////////////////////

      )}

      {quizStarted && !quizCompleted && (
        <Quiz
          category={category}
          numQuestions={numQuestions}
          difficulty={difficulty}
          onQuizCompletion={handleQuizCompletion}


          name={name}


        />
      )}


      {quizCompleted && (
        <Result  onRetryQuiz={handleRetryQuiz} />
      )}

      <Footer />

    </>
  );
}

export default App;