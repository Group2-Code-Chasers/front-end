import React from 'react';
import './About.css';
import rajeh from './assets/rajeh.jpeg';
import mo from './assets/mohammed.jpeg';
import marwa from './assets/marwa.jpeg';
import nadeenA from './assets/nadeen-A.jpeg';
import nadeenM from './assets/nadeen-M.jpeg';


const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>ABOUT US</h1>
                    <p>Your ultimate destination for challenging quizzes!</p>
                </div>

            </div>

            <section className="who-we-are-section">
                <div className="section-content">
                    <h2 className="text-main">Who We Are</h2>
                    <p className="who-text">
                        We are the Code Chasers team. Our mission is to revolutionize the way you take online exams. With our innovative website, you have full control over your exam experience. Choose the exam type, set the number of questions, and even adjust the difficulty level to suit your preferences. But that's not all! We've also crafted an exciting game to make your time here truly unforgettable. Get ready to embark on a unique journey of learning and fun with Code Chasers!
                    </p>
                </div>
            </section>

            <section className="team-section">
                <div className="section-contents">
                    <h2 className="text-main">Our Team</h2>
                    <div className="team-members">


                        <div className="team-member-card">


                            <div className="card__img">
                                <img className="img-pro" src={nadeenA} alt="Team Member 1" />
                            </div>
                            <div className="card__descr-wrapper">
                                <p className="card__title">
                                    Nadeen Aleideh
                                </p>
                                <p className="card__descr">
                                    Strong problem-solving and leadership skills, and excellent coding abilities in both front and backend, As she's the leader, her skills will be so useful, and she will take on different tasks.

                                </p>
                                <div className="card__links">
                                    <div>
                                        <a className="link" target='_blank' href="https://www.linkedin.com/in/nadine-aleideh-1428b1252/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg"> <path d="M21.25 0h-18.5c-1.24 0-2.25 1-2.25 2.25v18.5c0 1.24 1 2.25 2.25 2.25h18.5c1.24 0 2.25-1 2.25-2.25v-18.5c0-1.24-1-2.25-2.25-2.25zM7.75 19.5h-3.5v-10h3.5v10zM6 8.44c-1.13 0-1.94-0.94-1.94-2.12s0.81-2.12 1.94-2.12c1.13 0 1.94 0.94 1.94 2.12s-0.81 2.12-1.94 2.12zM19.5 19.5h-3.5v-5.81c0-1.75-0.63-2.94-2.19-2.94-1.19 0-1.88 0.81-2.19 1.59v6.19h-3.5v-10h3.31v1.25h0.06c0.44-0.81 1.5-1.94 3.25-1.94 2.31 0 4.06 1.53 4.06 4.81v5.88z" /></svg></a>
                                    </div>
                                    <div>
                                        <a className="link" target='_blank' href="mailto:nadinealeideh75@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="svg"> <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"></path></svg></a>
                                    </div>

                                    <div>
                                        <a className="link" target='_blank' href="https://github.com/NadineAleideh"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="team-member-card">
                            <div className="card__img">
                                <img className="img-pro" src={nadeenM} alt="Team Member 2" />
                            </div>
                            <div className="card__descr-wrapper">
                                <p className="card__title">
                                    Nadeen al-Masri
                                </p>
                                <p className="card__descr">
                                    Very skilled in backend development especially with APIs requests, which we will need as our application idea is based on a quiz API</p>
                                <div className="card__links">
                                    <div>
                                        <a className="link" target='_blank' href="https://www.linkedin.com/in/nadine-almasri-31780b225/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg"> <path d="M21.25 0h-18.5c-1.24 0-2.25 1-2.25 2.25v18.5c0 1.24 1 2.25 2.25 2.25h18.5c1.24 0 2.25-1 2.25-2.25v-18.5c0-1.24-1-2.25-2.25-2.25zM7.75 19.5h-3.5v-10h3.5v10zM6 8.44c-1.13 0-1.94-0.94-1.94-2.12s0.81-2.12 1.94-2.12c1.13 0 1.94 0.94 1.94 2.12s-0.81 2.12-1.94 2.12zM19.5 19.5h-3.5v-5.81c0-1.75-0.63-2.94-2.19-2.94-1.19 0-1.88 0.81-2.19 1.59v6.19h-3.5v-10h3.31v1.25h0.06c0.44-0.81 1.5-1.94 3.25-1.94 2.31 0 4.06 1.53 4.06 4.81v5.88z" /></svg></a>
                                    </div>
                                    <div>
                                        <a className="link" target='_blank' href="mailto:nadinealmasri331994@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="svg"> <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"></path></svg></a>
                                    </div>

                                    <div>
                                        <a className="link" target='_blank' href="https://github.com/Nadine-ALmasri"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-member-card">
                            <div className="card__img">
                                <img className="img-pro" src={marwa} alt="Team Member 3" />
                            </div>
                            <div className="card__descr-wrapper">
                                <p className="card__title">
                                    Marwah Alahdab
                                </p>
                                <p className="card__descr">
                                    Creative thinker, and highly skilled in backend- development especially with databases, so she will take the schema and database functions part.</p>
                                <div className="card__links">
                                    <div>
                                        <a className="link" target='_blank' href="https://www.linkedin.com/in/marwah-alahdab-46790b262/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg"> <path d="M21.25 0h-18.5c-1.24 0-2.25 1-2.25 2.25v18.5c0 1.24 1 2.25 2.25 2.25h18.5c1.24 0 2.25-1 2.25-2.25v-18.5c0-1.24-1-2.25-2.25-2.25zM7.75 19.5h-3.5v-10h3.5v10zM6 8.44c-1.13 0-1.94-0.94-1.94-2.12s0.81-2.12 1.94-2.12c1.13 0 1.94 0.94 1.94 2.12s-0.81 2.12-1.94 2.12zM19.5 19.5h-3.5v-5.81c0-1.75-0.63-2.94-2.19-2.94-1.19 0-1.88 0.81-2.19 1.59v6.19h-3.5v-10h3.31v1.25h0.06c0.44-0.81 1.5-1.94 3.25-1.94 2.31 0 4.06 1.53 4.06 4.81v5.88z" /></svg></a>
                                    </div>
                                    <div>
                                        <a className="link" target='_blank' href="mailto:marwaalahdab14@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="svg"> <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"></path></svg></a>
                                    </div>

                                    <div>
                                        <a className="link" target='_blank' href="https://github.com/MarwahAlahdab"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="team-member-card">
                            <div className="card__img">
                                <img className="img-pro" src={mo} alt="Team Member 4" />

                            </div>
                            <div className="card__descr-wrapper">
                                <p className="card__title">
                                    Mohamad Masalmeh

                                </p>
                                <p className="card__descr">
                                    He has good skills in frontend with react, and also with styling. He will use his skills to build some of the react components.
                                </p>
                                <div className="card__links">
                                    <div>
                                        <a className="link" target='_blank' href="https://www.linkedin.com/in/mhamad-belal-al-msalma-359a82251/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg"> <path d="M21.25 0h-18.5c-1.24 0-2.25 1-2.25 2.25v18.5c0 1.24 1 2.25 2.25 2.25h18.5c1.24 0 2.25-1 2.25-2.25v-18.5c0-1.24-1-2.25-2.25-2.25zM7.75 19.5h-3.5v-10h3.5v10zM6 8.44c-1.13 0-1.94-0.94-1.94-2.12s0.81-2.12 1.94-2.12c1.13 0 1.94 0.94 1.94 2.12s-0.81 2.12-1.94 2.12zM19.5 19.5h-3.5v-5.81c0-1.75-0.63-2.94-2.19-2.94-1.19 0-1.88 0.81-2.19 1.59v6.19h-3.5v-10h3.31v1.25h0.06c0.44-0.81 1.5-1.94 3.25-1.94 2.31 0 4.06 1.53 4.06 4.81v5.88z" /></svg></a>
                                    </div>
                                    <div>
                                        <a className="link" target='_blank' href="mailto:blalabomalek2000@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="svg"> <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"></path></svg></a>
                                    </div>
                                    <div>
                                        <a className="link" target='_blank' href="https://github.com/MhamadBelal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-member-card">
                            <div className="card__img">
                                <img className="img-pro" src={rajeh} alt="Team Member 5" />
                            </div>
                            <div className="card__descr-wrapper">
                                <p className="card__title">
                                    Rajeh Dalbah
                                </p>
                                <p className="card__descr">
                                    Rajeh is good with front-end development using React, he's also been really helpful with the styling. He will use his skills to build some of the react components.</p>
                                <div className="card__links">
                                    <div>
                                        <a className="link" target='_blank' href="https://www.linkedin.com/in/rajeh-dalbah-37181b23a/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg"> <path d="M21.25 0h-18.5c-1.24 0-2.25 1-2.25 2.25v18.5c0 1.24 1 2.25 2.25 2.25h18.5c1.24 0 2.25-1 2.25-2.25v-18.5c0-1.24-1-2.25-2.25-2.25zM7.75 19.5h-3.5v-10h3.5v10zM6 8.44c-1.13 0-1.94-0.94-1.94-2.12s0.81-2.12 1.94-2.12c1.13 0 1.94 0.94 1.94 2.12s-0.81 2.12-1.94 2.12zM19.5 19.5h-3.5v-5.81c0-1.75-0.63-2.94-2.19-2.94-1.19 0-1.88 0.81-2.19 1.59v6.19h-3.5v-10h3.31v1.25h0.06c0.44-0.81 1.5-1.94 3.25-1.94 2.31 0 4.06 1.53 4.06 4.81v5.88z" /></svg></a>
                                    </div>
                                    <div>
                                        <a className="link" target='_blank' href="mailto:rajeh.dalbah@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="svg"> <path d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"></path></svg></a>
                                    </div>

                                    <div>
                                        <a className="link" target='_blank' href="https://github.com/Rajeh-Dalbah"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;