import React from 'react';
import '../../css/BecomeFreelancer.css';
import help from '../../images/help.png';  // Adjust the path to your image file


const Help = () => {
    return (
        <div className="help">
            <div className="help-images">
                <img src={help} alt="Help 1" />
            </div>
            <div className="help-content">
                <h2>Don’t worry we’re always here to help you</h2>
                <p>
                    At GigSpace, we’re committed to supporting you every step of the way. Whether you’re rebooting your career or trying a new profession, we’ve got you covered.
                </p>
                <ul>
                    <li>Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.</li>
                    <li>Those who are looking to reboot their work life and try a new profession that.</li>
                    <li>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
                    <li>Duis ornare enim ullamcorper congue.</li>
                </ul>
                <div className="help-contact">
                    <div className="help-email-icon">📧</div>
                    <div className="help-email">
                        <p>EMAIL US, ANYTIME ANYWHERE</p>
                        <p>help.eduguard@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;