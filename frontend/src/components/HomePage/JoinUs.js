import React from 'react';
import '../../css/JoinUs.css';
import EventPlanners from '../../images/EventPlanners.png';
import Freelancers from '../../images/Freelancers.png';

const JoinUs = () => {
    return (
        <div className="join-us-container">
            <h1>Join Us</h1>
            <p>Join us for free, as a freelancer or as an event planner.</p>
            <div className="join-us-options">
                <div className="option">
                    <img src={Freelancers} alt="For Freelancers" className="option-image" />
                    <div className="option-content">
                        <h2>For Freelancers</h2>
                        <p>
                            Register now to get leads, send quotes, and collect payments - all in one place.
                        </p>
                        <button className="join-button">Register</button>
                    </div>
                </div>
                <div className="option">
                    <img src={EventPlanners} alt="For Event Planners" className="option-image" />
                    <div className="option-content">
                        <h2>For Event Planners</h2>
                        <p>
                            Book now to get performers! We connect you with local professionals.
                        </p>
                        <button className="join-button">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;