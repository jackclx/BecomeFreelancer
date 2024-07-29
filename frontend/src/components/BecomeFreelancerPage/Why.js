import React from 'react';
import '../../css/BecomeFreelancer.css';
import gigSpaceImage from '../../images/gigSpace.png'; // Make sure to adjust the path to your image file

const Why = () => {
    return (
        <div className="why">
            <div className="why-image">
                <img src={gigSpaceImage} alt="GigSpace" />
            </div>
            <div className="why-content">
                <h2>Why You’ll Start Freelancing on GigSpace</h2>
                <p>
                    Join a global network of event planners seeking your unique talents. Connect and grow your
                    freelance business with ease.
                </p>
                <div className="why-benefits">
                    <div className="benefit-item">
                        <div className="benefit-icon">✅</div>
                        <div className="benefit-text">
                            <h3>Freelance on Your Terms</h3>
                            <p>Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">✅</div>
                        <div className="benefit-text">
                            <h3>Simplify Your Work Flow</h3>
                            <p>Manage your bookings, payments, and client communications all in one place for a seamless experience.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">✅</div>
                        <div className="benefit-text">
                            <h3>Fast Payment</h3>
                            <p>Manage your bookings, payments, and client communications all in one place for a seamless experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;