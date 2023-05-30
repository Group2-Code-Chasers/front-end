import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryModal from '../Modal/CategoryModal';
import ArrowDownIcon from './ArrowDownIcon';
import photohome from './Levels 3.png';
import 'typeface-josefin-sans';

import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

function Home(props) {
    const [categoryData, setCategoryData] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [name, setName] = useState('');
    const [numQuestions, setNumQuestions] = useState(5);
    const [difficulty, setDifficulty] = useState('easy');
    const [showModal, setShowModal] = useState(false);




    const chooseQuiz = (categoryId, numQuestions, difficulty, name) => {

        props.onStartQuiz(categoryId, numQuestions, difficulty, name);
    };

//const serverURL = `${process.env.REACT_APP_serverURL}/getAllCategories`;

    const getallCategory = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getAllCategories`;

        axios
            .get(serverURL)
            .then(response => {
                console.log(response.data);
                setCategoryData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleCardClick = categoryId => {
        setSelectedCategoryId(categoryId);
        setName('');
        setNumQuestions('');
        setDifficulty('easy');
        setShowModal(true);
    };



    useEffect(() => {
        getallCategory();
    }, []);




    return (
        <>

            <div className="hero">
                <div className='sub-hero'>
                    <div className='herotextdiv'>
                        <h1 className="hero-title">Welcome to <span className='quizzer'><strong>Quizzer!</strong></span></h1>
                        <h2 className="hero-subtitle">where knowledge meets excitement!</h2>
                        <p className="hero-description">
                            Challenge yourself with our engaging quizzes and put your skills to the test.
                        </p>
                    </div >

                    <div className='herophotodiv'>
                        <img src={photohome} alt="photohome" className='photohome' />
                    </div>

                </div>

                <div className='divArrowDownIcon' >
                    <ArrowDownIcon />
                </div>
            </div>

            <div className="mainContainerCategory">
                <div className="containerCategory">
                    <div className="gridContainer">
                        {categoryData.map(item => (
                            <div key={item.id}>
                                <div className="cardBox">
                                    <div className="card" onClick={() => handleCardClick(item.id)}>
                                        <span className="text">{item.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CategoryModal
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                selectedCategoryId={selectedCategoryId}
                chooseQuiz={chooseQuiz}
            />

        </>
    );
}

export default Home;
