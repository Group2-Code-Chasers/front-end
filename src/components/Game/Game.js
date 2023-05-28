import React, { useState, useEffect, useRef } from 'react';
import FlippingCardsList from '../FlippingCardsList/FlippingCardsList';
import './Game.css';
import axios from 'axios';


function Game() {
    const [flashcards, setFlashcards] = useState([]);
    const [categories, setCategories] = useState([]);

    const categoryEl = useRef();
    const amountEl = useRef();

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
            });
    }

    return (
        <>
            <form className="headerformflipping" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" ref={categoryEl}>
                        {categories.map((category) => {
                            return (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group">
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
                <div className="form-group">
                    <button className="btnGenerat">Generate</button>
                </div>
            </form>
            <div className="container">
                <FlippingCardsList flashcards={flashcards} />
            </div>
        </>
    );
}


export default Game;