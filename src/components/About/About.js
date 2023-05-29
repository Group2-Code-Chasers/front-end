import React from 'react';
import './About.css';
import cube from './cube-removebg-preview.png';

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
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus odio et sem semper facilisis. Sed pellentesque facilisis
            consequat. Nulla facilisi. Aliquam nec libero velit. Proin dapibus
            metus eget interdum sagittis. Nulla nec eleifend urna.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="section-content">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="/images/member1.jpg" // Replace with team member's photo
                alt="Team Member 1"
              />
              <h3>John Doe</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" /> {/* Replace with actual LinkedIn icon */}
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" /> {/* Replace with actual GitHub icon */}
                </a>
              </div>
            </div>

            <div className="team-member">
              <img
                src="/images/member2.jpg" // Replace with team member's photo
                alt="Team Member 2"
              />
              <h3>Jane Smith</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" /> {/* Replace with actual LinkedIn icon */}
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" /> {/* Replace with actual GitHub icon */}
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