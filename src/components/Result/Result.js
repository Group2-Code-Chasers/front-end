import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Result.css'


const Result = (props) => {

  const [quizResult, setQuizResult] = useState({});

  const getQuizResult = () => {
    const serverURL = `${process.env.REACT_APP_serverURL}/getQuizResult`;

    axios
        .get(serverURL)
        .then(response => {
            console.log(response.data[0]);
            setQuizResult(response.data[0]);
        })
        .catch(error => {
            console.log(error);
        });
};



useEffect(() => {
  getQuizResult();
}, {});

  return (

    <>
    <div className='quizResultBody'>
      <div className='aboveRecontainer'>
   <div className="Recontainer fade-in">
 
         
            <h2 className='h2QuizResult'>{quizResult.name}</h2>
            <h4 className="h4QuizResult">
              Your score is{" "}
              <span className={quizResult.score > 40 ? "text-green-600" : "text-red-600"}>
                {quizResult.score}%
              </span>
            </h4>
            <p className={(quizResult.score >= 50) ? "py-2": "py-3"}>
              You got {quizResult.numcorrectanswers}/{quizResult.numquestions}
            </p>
            <p className='youhave'>you have {quizResult.numunanswered} unanswered question</p>
          
            {(quizResult.score >= 50) ? <p className="py-2 font-medium">Congrats!!!</p>:
            <p className="py-3 font-medium">Try to raise your score</p>
            }
            <button
              className="bg-yellow-600 py-2 px-7 rounded-xl mt-2 hover:bg-yellow-500"
              id='playAgianButton'
              onClick={props.onRetryQuiz}
            >
              Play Again
            </button>
</div>
</div>
</div>
    </>

  );
};

export default Result;