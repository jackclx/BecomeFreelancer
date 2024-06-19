import React from 'react';
import '../css/Banner.css';
import backgroundImage from '../images/background.jpg';


function Banner() {
    return (
        <div className="banner">
            <img src={backgroundImage} alt="Background" />
            <h1>Book something <span>awesome</span> for your next event</h1>
            <p>From birthday parties to weddings, we’ll help you book the best talent for any occasion.</p>
        </div>
    );
}

export default Banner;
