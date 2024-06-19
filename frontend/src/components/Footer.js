import React from 'react';
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="trusted-brands">
                <h2>Millions trust GigSpace to electrify their events.</h2>
                <div className="brands">
                    <img src="/brand1.png" alt="Brand 1" />
                    <img src="/brand2.png" alt="Brand 2" />
                    <img src="/brand3.png" alt="Brand 3" />
                    <img src="/brand4.png" alt="Brand 4" />
                    <img src="/brand5.png" alt="Brand 5" />
                </div>
            </div>
            <div className="footer-links">
                <div className="link-column">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className="link-column">
                    <h3>Event Planners</h3>
                    <ul>
                        <li>How It Works</li>
                        <li>Party Ideas</li>
                        <li>Quick Quote</li>
                    </ul>
                </div>
                <div className="link-column">
                    <h3>Vendors</h3>
                    <ul>
                        <li>List your services</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className="link-column">
                    <h3>Support</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Log In</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© GigSpace 2024 ❤ Peace, Love & Gigs ®</p>
            </div>
        </footer>
    );
}

export default Footer;
