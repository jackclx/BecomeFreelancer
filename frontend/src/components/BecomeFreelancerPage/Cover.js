import React from 'react';
import '../../css/BecomeFreelancer.css';
import guitarPlayer from '../../images/banner.png'; // Make sure to adjust the path to your image file

const Cover = () => {
    return (
        <div className="cover">
            <div className="container1">
                <div className="cover-content">
                    <h1>Become a freelancer</h1>
                    <p>
                        Join GigSpace and start connecting with event planners today! Showcase your talents
                        alongside hundreds of certified freelancers. Create success stories with countless events,
                        grow your client base, and expand your reach.
                    </p>
                    <a href="../login/freelancer" className="get-started-btn">
                        Get Started
                    </a>
                </div>
                <div className="cover-image">
                    <img src={guitarPlayer} alt="Guitar Player" />
                </div>
            </div>

            <div className="cover-stats">
                <div className="stat-item">
                    <span className="stat-number">67.1k</span>
                    <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">26k</span>
                    <span className="stat-label">Certified Instructor</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">72</span>
                    <span className="stat-label">Country Language</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Success Rate</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">57</span>
                    <span className="stat-label">Trusted Companies</span>
                </div>
            </div>
        </div>
    );
};

export default Cover;