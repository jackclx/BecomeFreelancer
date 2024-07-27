import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lucas3 from '../../images/lucas3.png';
import lucas2 from '../../images/lucas2.png';
import lucasVid from '../../videos/lucasVid.MOV';
import star from '../../images/star.png';
import left from '../../images/left.png';
import right from '../../images/right.png';

function ProfileInfo() {
    const [currentMedia, setCurrentMedia] = useState('video'); // Initialize state to show video first
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);


    const handleSwitchMedia = () => {
        setCurrentMedia((prevMedia) => (prevMedia === 'video' ? 'image' : 'video'));
    };

    useEffect(() => {
        const videoElement = videoRef.current;

        const handlePlay = () => {
            setIsVideoPlaying(true);
        };

        const handlePause = () => {
            setIsVideoPlaying(false);
        };

        if (videoElement) {
            videoElement.addEventListener('play', handlePlay);
            videoElement.addEventListener('pause', handlePause);
            videoElement.addEventListener('ended', handlePause);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('play', handlePlay);
                videoElement.removeEventListener('pause', handlePause);
                videoElement.removeEventListener('ended', handlePause);
            }
        };
    }, []);

    return (
        <div id="Profile" className="profile-info-container">
            <div className="profile-image-container">
                <div className="media-wrapper">
                    {currentMedia === 'video' ? (
                        <video
                            ref={videoRef}
                            src={lucasVid}
                            className="large-profile-picture"
                            controls={true}
                            autoPlay={false}
                        />
                    ) : (
                        <img src={lucas2} alt="Lucas Wang Performance" className="large-profile-picture" />
                    )}
                    {!isVideoPlaying && (
                        <>
                            <button className="media-button left-button" onClick={handleSwitchMedia}>
                                <img src={left} alt="Left" />
                            </button>
                            <button className="media-button right-button" onClick={handleSwitchMedia}>
                                <img src={right} alt="Right" />
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="profile-info">
                <div className="profile-header flex-container">
                    <img src={lucas3} alt="Lucas Wang" className="profile-picture" />
                    <div className="profile-details">
                        <h1 style={{ fontWeight: 'bold' }}>LUCAS WANG</h1>
                        <p className="rating">
                            <img src={star} alt="Star" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                            4.7 (43)
                        </p>
                    </div>
                </div>
                <p className="bio">
                    Lucas is a gifted singer and guitarist, known for his soulful voice and captivating performances. His passion and skill make every show unforgettable.
                </p>
                <div className="tags">
                    <span className="tag">singer</span>
                    <span className="tag">songwriter</span>
                    <span className="tag">drummer</span>
                    <span className="tag">bassist</span>
                    <span className="tag">vocalist</span>
                    <span className="tag">musician</span>
                    <span className="tag">artist</span>
                    <span className="tag">composer</span>
                    <span className="tag">keyboardist</span>
                    <span className="tag">producer</span>
                    <span className="tag">conductor</span>
                    <span className="tag">sound engineer</span>
                    <span className="tag">lyricist</span>
                </div>
                <div className="booking-section">
                    <Link to="/booking">
                        <button className="book-button">Book</button>
                    </Link>
                    <p className="price">From $200</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;