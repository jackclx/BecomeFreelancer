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
    image: singerImage,
    path: "/Service/music-entertainment"
  },
  {
    title: "Photographers",
    description: "Wedding Photographers, Videographers...",
    image: photographerImage,
    path: "/Service/photographers"
  },
  {
    title: "Party Rental",
    description: "Buffet, Tents, Bounce Houses, Photo Booths...",
    image: djImage,
    path: "/Service/party-rental"
  },
  {
    title: "Performer",
    description: "Magician, Clown Balloon Maker, Comedian...",
    image: performerImage,
    path: "/Service/performers"
  },
  {
    title: "Official Speaking",
    description: "Wedding Emcee, Emcee, Motivational speaker...",
    image: speakerImage,
    path: "/Service/official-speaking"
  },
  {
    title: "Special Talents",
    description: "Lion Dancer, Clowns, Comedy ...",
    image: liondanceImage,
    path: "/Service/special-talents"
  },
];

function Categories() {
  return (
    <div className="categories">
      <h2>Explore Our Marketplace</h2>
      <p>Discover top talent and services for your events.</p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="category-card">
              <img src={category.image} alt={category.title} />
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;