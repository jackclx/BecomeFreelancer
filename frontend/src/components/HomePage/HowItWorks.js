import React from 'react';
import '../../css/HowItWorks.css'; // Ensure this path is correct
import step1Image from '../../images/HowItWorks1.png'; // Ensure these paths are correct
import step2Image from '../../images/HowItWorks2.png';
import step3Image from '../../images/HowItWorks3.png';
import stepImage from '../../images/HowItWorks4.png';

function HowItWorks() {
    return (
        <div className="how-it-works">
            <h2>How It Works</h2>
            <p>3 easy steps to a perfect event, as simple as that!</p>
            <img src={stepImage} alt="Browse and Compare" className="stepImage" />

            {/* <div className="steps">
                <div className="step1">
                    <div className="step1-number">1</div>
                    <img src={step1Image} alt="Browse and Compare" />
                    <div className="step1-info">
                        <h3>Browse and Compare</h3>
                        <p>Compare rates of local entertainers and vendors</p>
                    </div>
                </div>
                <div className="step2">
                    <div className="step2-number">2</div>
                    <div className="step2-info">
                        <h3>Book Securely</h3>
                        <p>Secure booking with payment protection and easy refunds.</p>
                    </div>
                    <img src={step2Image} alt="Book Securely" />
                </div>
                <div className="step3">
                    <div className="step3-number">3</div>
                    <img src={step3Image} alt="Enjoy" />
                    <div className="step3-info">
                        <h3>Enjoy!</h3>
                        <p>Relax and enjoy your party, we will take care of the rest.</p>
                    </div>
                </div>

            </div> */}
            <button className="book-button">Book Now</button>
        </div>
    );
}

export default HowItWorks;