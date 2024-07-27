import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventPlanners from '../../images/EventPlanners.png';
import Freelancers from '../../images/Freelancers.png';
import '../../css/Login.css';

const Login1 = () => {
    const [activeButton, setActiveButton] = useState('');
    const navigate = useNavigate();

    const handleNavigation = (role) => {
        setActiveButton(role);
        navigate(`/login/${role}`);
    };

    return (
        <div className="login-options">
            <h1>Welcome Back to GigSpace!</h1>
            <p>Log In to Continue as a Freelancer or Event Planner.</p>
            <div className="buttons">
                <button
                    className={`freelancer-btn ${activeButton === 'freelancer' ? 'active' : ''}`}
                    onClick={() => handleNavigation('freelancer')}
                >
                    <div className="button-text">
                        <p>I am a Freelancer</p>
                        <span>I want to offer services to others</span>
                    </div>
                    <img src={Freelancers} alt="Freelancers" className="button-image" />
                </button>
                <button
                    className={`eventplanner-btn ${activeButton === 'eventplanner' ? 'active' : ''}`}
                    onClick={() => handleNavigation('eventplanner')}
                >
                    <div className="button-text">
                        <p>I am an Event Planner</p>
                        <span>I am looking for talents and services</span>
                    </div>
                    <img src={EventPlanners} alt="Event Planners" className="button-image" />
                </button>
            </div>
        </div>
    );
};

export default Login1;