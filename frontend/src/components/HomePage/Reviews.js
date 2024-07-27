import React from 'react';
import '../../css/Reviews.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import lucas2 from '../../images/lucas2.png';

const Reviews = () => {
    return (
        <div className="reviews-container">
            <h2>Hear what our past client says about the performer</h2>
            <div className="reviews-content">
                <IoIosArrowBack className="arrow-icon" />
                <div className="review-card">
                    <FaQuoteLeft className="quote-icon" />
                    <br></br>
                    <div className="container1">
                        <p>We booked Lucas for our event. His soulful voice and guitar skills captivated everyone. Lucas’s performance was the highlight of the evening. Highly recommended!</p>
                        <img src={lucas2} alt="Client" className="client-photo" />
                    </div>
                    <div className="client-info">
                        <p>James Tan</p>
                    </div>
                </div>
                <IoIosArrowForward className="arrow-icon" />
            </div>
        </div>
    );
};

export default Reviews;