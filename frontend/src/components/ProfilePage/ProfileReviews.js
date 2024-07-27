import React from 'react';
import lucas6 from '../../images/lucas6.png';
import lucas8 from '../../images/lucas8.png';
import rating from '../../images/rating.png';

function ProfileReviews() {
    return (
        <div id="ProfileReviews" className="profile-reviews">
            <h2>Reviews (43)</h2>
            <div className="rating-summary">
                <div className="rating-container">
                    <p className="rating-value">4.7</p>
                    <p className="rating-scale">out of 5</p>
                </div>
                <div className="rating-bars">
                    <div className="rating-bar"><span className="rating-stars">★ ★ ★ ★ ★</span> <span className="rating-count">35</span></div>
                    <div className="rating-bar"><span className="rating-stars">  ★ ★ ★ ★</span> <span className="rating-count">5</span></div>
                    <div className="rating-bar"><span className="rating-stars">    ★ ★ ★</span> <span className="rating-count">2</span></div>
                    <div className="rating-bar"><span className="rating-stars">      ★ ★</span> <span className="rating-count">1</span></div>
                    <div className="rating-bar"><span className="rating-stars">        ★</span> <span className="rating-count">0</span></div>
                </div>
                <div>
                    <img src={rating} alt="ratingBar" className="ratingBar" />
                </div>
            </div>
            <div className="review">
                <div className="review-text">
                    <p><strong>Phenomenal performance, highly recommended!</strong></p>
                    <p>
                        <span className="rating-stars">★★★★★</span> May 20, 2024
                    </p>
                    <p>We booked Lucas for our event, and he was phenomenal! His soulful voice and guitar skills captivated everyone. Lucas’s performance was the highlight of the evening, leaving our guests thoroughly impressed. Highly recommended!</p>
                </div>
                <img src={lucas6} alt="Lucas" className="review-image" />
            </div>
            <div className="review">
                <div className="review-text">
                    <p><strong>Fun and Engaging</strong></p>
                    <p>
                        <span className="rating-stars">★★★★</span> Jan 15, 2024
                    </p>
                    <p>Fun and Engaging!!!</p>
                </div>
                <img src={lucas8} alt="Lucas" className="review-image" />
            </div>
            <div className="review">
                <div className="review-text">
                    <p><strong>Highly recommend!</strong></p>
                    <p>
                        <span className="rating-stars">★★★★★</span> Jan 7, 2024
                    </p>
                    <p>We were thrilled to have Lucas perform at our event, and he exceeded all our expectations! His soulful voice and masterful guitar skills created a mesmerizing atmosphere that captivated everyone from start to finish. Lucas's performance was undoubtedly the highlight of the evening, enchanting our guests with his talent and passion. He effortlessly engaged the audience, leaving them thoroughly impressed and wanting more. The ambiance he created was simply magical, making the event truly unforgettable. We highly recommend Lucas for any occasion and look forward to having him back in the future!</p>
                </div>
                {/* <img src={lucas6} alt="Lucas" className="review-image" /> */}
            </div>
        </div>
    );
}

export default ProfileReviews;