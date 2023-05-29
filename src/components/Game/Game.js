import React, { useState, useEffect, useRef } from 'react';
import FlippingCardsList from '../FlippingCardsList/FlippingCardsList';
import './Game.css';
import axios from 'axios';

import { RingLoader } from 'react-spinners';
function Game() {
    const [flashcards, setFlashcards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoadingflip, setIsLoadingflip] = useState(false);
    const categoryEl = useRef();
    const amountEl = useRef();
    const [loadingMessageFlip, setLoadingMessageFlip] = useState('')
////////////////////////////////

///////////////////////////////
    useEffect(() => {
        axios.get('http://localhost:3003/getAllCategories').then((res) => {
            setCategories(res.data);
        });
    }, []);

    function decodeString(str) {
        const textArea = document.createElement('textarea');
        textArea.innerHTML = str;
        return textArea.value;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const amount = amountEl.current.value;
        const category = categoryEl.current.value;
        setIsLoadingflip(true); // Set loading state to true before making the API request
      
    // Delay for 2 seconds
    setTimeout(() => {
        axios
            .get('http://localhost:3003/flipping', {
                params: {
                    amount,
                    category,
                },
            })
            .then((res) => {
                setFlashcards(
                    res.data.map((questionItem, index) => {
                        const answer = decodeString(questionItem.correct_answer);
                        const options = [
                            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
                            answer,
                        ];
                        return {
                            id: `${index}-${Date.now()}`,
                            question: decodeString(questionItem.question),
                            answer: answer,
                            options: options.sort(() => Math.random() - 0.5),
                        };
                    })
                );
              
            })
            .catch((error) => {
                console.error('Error fetching quiz questions:', error);
              })
              .finally(() => {
                setIsLoadingflip(false); // Set loading state to false after receiving the response
              });
          }, 2000);
        }

    return (
        <>
            <form className="headerformflipping" onSubmit={handleSubmit}>
                <div className="form-groupflipping">
                    <label htmlFor="category">Category</label>
                    <select id="category" ref={categoryEl} className="form-groupflipping-select">
                        {categories.map((category) => {
                            return (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-groupflipping">
                    <label htmlFor="amount">Number of Questions</label>
                    <input
                        type="number"
                        id="amount"
                        min="1"
                        step="1"
                        defaultValue={10}
                        ref={amountEl}
                    />
                </div>
                <div className="form-groupflipping">
                    <button className="btnGenerat">Generate</button>
                </div>
            </form>

            <div className="containergame">
            {isLoadingflip ? (
          <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
          <div class="wheel"></div>
          <div class="hamster">
              <div class="hamster__body">
                  <div class="hamster__head">
                      <div class="hamster__ear"></div>
                      <div class="hamster__eye"></div>
                      <div class="hamster__nose"></div>
                  </div>
                  <div class="hamster__limb hamster__limb--fr"></div>
                  <div class="hamster__limb hamster__limb--fl"></div>
                  <div class="hamster__limb hamster__limb--br"></div>
                  <div class="hamster__limb hamster__limb--bl"></div>
                  <div class="hamster__tail"></div>
              </div>
          </div>
          <div class="spoke"></div>
      </div>
          
        ) : (
                <FlippingCardsList flashcards={flashcards} />)}

            <div className="gamecontainer">
                <FlippingCardsList flashcards={flashcards} />

            </div>
        </>
    );
}


export default Game;