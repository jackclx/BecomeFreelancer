import React from 'react';
import '../css/HowItWorks.css';

function HowItWorks() {
    return (
        <div className="how-it-works">
            <h2>How it works.</h2>
            <div className="how-it-works-steps">
                <div className="step">
                    <h3>Browse and compare.</h3>
                    <p>Compare rates and availability of local entertainers and vendors.</p>
                </div>
                <div className="step">
                    <h3>Book securely.</h3>
                    <p>Booking through GigSalad ensures payment protection, amazing service, and no-hassle refunds with our Worry-Free Guarantee.</p>
                </div>
                <div className="step">
                    <h3>Enjoy your event.</h3>
                    <p>Sit back, relax, and watch your party come to life.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;
