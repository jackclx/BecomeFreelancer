import React from 'react';
import '../../css/BecomeFreelancer.css';
import story from '../../images/story.png'; // Adjust the path to your image file

const Story = () => {
    return (
        <div className="story">
            <div className="story-content">
                <h2>100+ Freelancer created their success story with GigSpace</h2>
                <p>
                    Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo, id commodo
                    ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.
                </p>
                <div className="quote">
                    <blockquote>
                        Nulla sed malesuada augue. Morbi interdum vulputate imperdiet. Pellentesque ullamcorper
                        auctor ante, egestas interdum quam facilisis commodo. Phasellus efficitur quis ex in
                        consectetur. Mauris tristique suscipit metus, a molestie dui dapibus vel.
                    </blockquote>
                    <div className="quote-controls">
                        <button className="prev-button">←</button>
                        <button className="next-button">→</button>
                    </div>
                </div>
            </div>
            <div className="story-image">
                <img src={story} alt="Freelancer Success Story" />
            </div>
        </div>
    );
};

export default Story;