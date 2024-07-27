import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Categories.css';
import singerImage from '../../images/singer.png';
import photographerImage from '../../images/photographer.png';
import djImage from '../../images/dj.png';
import performerImage from '../../images/performer.png';
import speakerImage from '../../images/speaker.png';
import liondanceImage from '../../images/liondance.png';

// Dummy data for categories
const categories = [
    {
        title: "Music Entertainment",
        description: "Bands, Singer, Ensembles, Cultural Bands...",
        image: singerImage
    },
    {
        title: "Photographers",
        description: "Wedding Photographers, Videographers...",
        image: photographerImage
    },
    {
        title: "Party Rental",
        description: "Buffet, Tents, Bounce Houses, Photo Booths...",
        image: djImage
    },
    {
        title: "Performer",
        description: "Magician, Clown Balloon Maker, Comedian...",
        image: performerImage
    },
    {
        title: "Official Speaking",
        description: "Wedding Emcee, Emcee, Motivational speaker...",
        image: speakerImage
    },
    {
        title: "Special Talents",
        description: "Lion Dancer, Clowns, Comedy ...",
        image: liondanceImage
    },
];

function Categories() {
    return (
        <div className="categories">
            <h2>Explore Our Marketplace</h2>
            <p>Discover top talent and services for your events.</p>
            <a href="Service" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <Link to="/Service" style={{ textDecoration: 'none', color: 'inherit' }}> */}
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <div className="category-card" key={index}>
                            <img src={category.image} alt={category.title} />
                            <div className="category-content">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </a>
            {/* </Link> */}
        </div>
    );
}

export default Categories;