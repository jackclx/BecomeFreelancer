import React from 'react';
import '../../css/BecomeFreelancer.css';
import rules from '../../images/rules.png';  // Adjust the path to your image file


const Rules = () => {
    return (
        <div className="rules">
            <div className="rules-content">
                <h2>Freelancer Rules & Regulations</h2>
                <p>
                    At GigSpace, we strive to maintain a professional and respectful community. Please adhere
                    to the following guidelines to ensure a positive experience for all users:
                </p>
                <ul>
                    <li>Professional Conduct: Maintain professionalism and clear, respectful communication with clients.</li>
                    <li>Quality of Service: Deliver high-quality work that meets or exceeds client expectations.</li>
                    <li>Punctuality: Adhere to agreed deadlines and timelines, communicating promptly about any delays.</li>
                    <li>Accurate Profiles: Keep your profile information, including skills and pricing, accurate and up-to-date.</li>
                </ul>
            </div>
            <div className="rules-images">
                <img src={rules} alt="Freelancer 1" />
            </div>
        </div>
    );
};

export default Rules;