import React from 'react';
import './About.css';
import CSPRIME from '../Assets/CSPRIME.png';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="about-wrapper">
            {/* Logo Section */}
            <div className="about-logo">
                <img src={CSPRIME} alt="CS Prime Logo" className="about-logo-image" />
            </div>

            {/* Content Box */}
            <div className="about-content">
                {/* Main Title */}
                <h1 className="about-main-title">Welcome to CSPRIME</h1>

                <h3>Your Educational Compass</h3>
                <p>
                    At CS Prime, our mission is to illuminate the path through the Computer Science degree, 
                    highlighting the crucial role of first-year topics in shaping the entire academic journey. 
                    This platform was developed using modern technology stacks to address two core challenges: 
                    illustrating how these foundational topics "seed" the entirety of the Computer Science degree, 
                    and demonstrating their continuous influence throughout the curriculum.
                </p>

                <h3>Features Tailored for Your Success</h3>
                <ul>
                    <li><strong>User Authentication:</strong> Secure access.</li>
                    <li><strong>Foundational Topic Insights:</strong> Interactive visualizations that trace the impact 
                        of first-year CS topics across the degree, underscoring their foundational role in subsequent learning.</li>
                    <li><strong>Topic-Based Navigation:</strong> A user-friendly way to explore the progression and 
                        integration of specific topics throughout the Computer Science curriculum, from the first year to advanced modules.</li>
                    <li><strong>Analytics at Your Fingertips:</strong> Visual analytics provide insights into the curriculum's 
                        structure, offering a clear picture of your academic progression.</li>
                    <li><strong>Guidance for First-Year Students:</strong> A FAQ section designed by a senior, offering tips and 
                        answers to common questions.</li>
                </ul>

                <h3>Embark on Your CS Prime Journey</h3>
                <p>
                    CS Prime is not just a tool; it's your partner in education. By clarifying the path through your 
                    degree and beyond, we ensure you're always on track.  
                    <br /><br />
                    <strong>Ready to begin?</strong> Register today and experience a new way to navigate the CSSE Degree.
                </p>

                {/* Login and Sign Up Buttons */}
                <div className="about-buttons">
                    <button className="about-button" onClick={() => navigate('/auth')}>Login</button>
                    <button className="about-button about-signup" onClick={() => navigate('/auth')}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;