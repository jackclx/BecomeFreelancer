import React from 'react';
import '../css/Footer.css';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import logo5 from '../images/logo5.png'; // Assuming this is the logo image file name

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <div className="logo-section">
                        <img src={logo5} alt="GigSpace Logo" className="logo-image" />
                    </div>
                    <div className="link-column">
                        <h3>Company</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h3>Freelancers</h3>
                        <ul>
                            <li>Listing</li>
                            <li>Testimonials</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h3>Event Planners</h3>
                        <ul>
                            <li>Case Studies</li>
                            <li>Party Ideas</li>
                            <li>Quote</li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h3>Let's Connect</h3>
                        <div className="social-icons">
                            <img src={facebook} alt="Facebook" className="social-icon" />
                            <img src={linkedin} alt="LinkedIn" className="social-icon" />
                            <img src={instagram} alt="Instagram" className="social-icon" />
                        </div>
                        <p>© 2024 GigSpace. All rights reserved.</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;