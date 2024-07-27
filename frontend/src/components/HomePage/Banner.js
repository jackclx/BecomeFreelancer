import React, { useState, useEffect } from 'react';
import '../../css/Banner.css';
import bannerImage from '../../images/banner.png'; // Ensure this path is correct

function Banner() {
    const words = ['Singers?', 'Magicians?', 'Photographers?', 'Lion Dancers?', 'Emcees?'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Trigger fade out
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade(true); // Trigger fade in
            }, 500); // Duration of fade-out effect
        }, 2500); // Total duration including fade effect

        return () => clearInterval(interval);
    }, [words.length]);


    return (
        <div className="banner">
            <div className="banner-content">
                <h1>
                    Looking for{' '}
                    <br></br>
                    <span
                        className={`changing-word ${fade ? 'fade-in' : 'fade-out'}`}
                    >
                        {words[currentWordIndex]}
                    </span>
                    <br />
                    Gigspace has you covered.
                </h1>
                <div className="search-bar2">
                    <input type="text" placeholder="Find Services" />
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <p>
                    Welcome to Gigspace – Asia's largest gig community. Connect with top talent and discover endless opportunities. Join us and discover a world of possibilities today!
                </p>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="Singer" />
            </div>
        </div >
    );
}

export default Banner;