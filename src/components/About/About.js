import React from 'react';
import './About.css';
import cube from './cube-removebg-preview.png';
import gh from './assets/gh.png';
import linked from './assets/linked.png';
import test from './assets/test.jpg';


const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Quizzer</h1>
                    <p>Your ultimate destination for challenging quizzes!</p>
                </div>
                <img
                    src={cube} // Replace with your own hero image
                    alt="Quizzer Hero"
                    className="rotate"
                />

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
                <div className="section-content">
                    <h2 className="text-main">Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img
                                src="/images/member1.jpg" // Replace with team member's photo
                                alt="Team Member 1"
                            />
                            <h3>Nadeen Aleideh</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" /> 
                                    <img className="icon-img"
                                        src={linked}
                                        alt="GitHub"
                                    />
                                </a>
                                <a href="https://github.com/NadineAleideh" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github" /> 
                                    <img className="icon-img"
                                        src={gh}
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="team-member">
                            <img
                                src="/images/member2.jpg" // Replace with team member's photo
                                alt="Team Member 2"
                            />
                            <h3>Nadeen al-Masri</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" /> 
                                    <img className="icon-img"
                                        src={linked}
                                        alt="GitHub"
                                    />
                                </a>
                                <a href="https://github.com/Nadine-ALmasri" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github" /> 
                                    <img className="icon-img"
                                        src={gh}
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>


                        <div className="team-member">
                            <img
                                src="/images/member2.jpg" // Replace with team member's photo
                                alt="Team Member 3"
                            />
                            <h3>Mohamad Masalmeh</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" /> 
                                    <img className="icon-img"
                                        src={linked}
                                        alt="GitHub"
                                    />
                                </a>
                                <a href="https://github.com/MhamadBelal" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github" /> 
                                    <img className="icon-img"
                                        src={gh}
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>


                        <div className="team-member">
                            <img
                                src="/images/member2.jpg" // Replace with team member's photo
                                alt="Team Member 4"
                            />
                            <h3>Marwah Alahdab</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" /> 
                                    <img className="icon-img"
                                        src={linked}
                                        alt="GitHub"
                                    />
                                </a>
                                <a href="https://github.com/MarwahAlahdab" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github" /> 
                                    <img className="icon-img"
                                        src={gh}
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>


                        <div className="team-member">
                            <img
                                src={test}
                                alt="Team Member 5"
                            />
                            <h3>Rajeh Dalbah</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" /> 
                                    <img className="icon-img"
                                        src={linked}
                                        alt="GitHub"
                                    />
                                </a>
                                <a href="https://github.com/Rajeh-Dalbah" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github" /> 
                                    <img className="icon-img"
                                        src={gh}
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>
                
                
                
                        {/* Add more team members with their photos and social links */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;