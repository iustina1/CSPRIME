import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Home.css";
import HOME from "../Assets/HOME.png";
import Modules from '../Modules/Modules';

const Home = () => {
  const [showModules, setShowModules] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(
    location.state?.successMessage || ''
  );

  // Clear the router state so the message doesn't reappear on refresh
  useEffect(() => {
    if (location.state?.successMessage) {
      navigate('/', { replace: true, state: {} });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-dismiss the success message after 4 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  if (showModules) {
    return <Modules />;
  }

  return (
    <div className="home-container">
      {successMessage && (
        <div className="success-toast" role="alert">
          <span>✅ {successMessage}</span>
          <button className="toast-close" onClick={() => setSuccessMessage('')}>✕</button>
        </div>
      )}
      <div className="image-container">
        <div className="image-box">
          <img src={HOME} alt="CSPRIME Background" className="hero-image" />
        </div>
        <div className="text-container">
          <p className="hero-text">Welcome to CSPRIME</p>
          <p className="subtext">
            Your gateway to mastering Computer Science, from fundamentals to advanced topics.
          </p>
          <button className="cta-button" onClick={() => setShowModules(true)}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
