import React from 'react';
import '../../css/BecomeFreelancer.css';
import step1 from '../../images/logo4.png';
import step2 from '../../images/logo4.png';
import step3 from '../../images/logo4.png';
import step4 from '../../images/logo4.png';

const How = () => {
    return (
        <div className="how">
            <h2>How you'll become successful freelancer</h2>
            <div className="how-container">
                <div className="how-item">
                    <div className="how-icon">
                        <img src={step1} alt="Step 1" />
                    </div>
                    <h3>1. Apply to become Freelancer.</h3>
                    <p>Begin your journey by submitting your application to join our network of talented freelancers.</p>
                </div>
                <div className="how-item">
                    <div className="how-icon">
                        <img src={step2} alt="Step 2" />
                    </div>
                    <h3>2. Setup & edit your profile.</h3>
                    <p>Create and customize your profile to showcase your skills and attract potential clients.</p>
                </div>
                <div className="how-item">
                    <div className="how-icon">
                        <img src={step3} alt="Step 3" />
                    </div>
                    <h3>3. List your service.</h3>
                    <p>Detail the services you offer, including pricing and availability, to start receiving bookings.</p>
                </div>
                <div className="how-item">
                    <div className="how-icon">
                        <img src={step4} alt="Step 4" />
                    </div>
                    <h3>4. Start working & earning.</h3>
                    <p>Begin accepting jobs, completing projects, and earning money.</p>
                </div>
            </div>
        </div>
    );
};

export default How;