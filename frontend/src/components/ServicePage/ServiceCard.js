import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import star from '../../images/star.png';
import LazyLoad from 'react-lazyload';
import placeholder from '../../images/placeholder-image.png.webp';
// import placeholder from '../../images/placeholder.png'; // Ensure you have a placeholder image

const ServiceCard = ({ service }) => {
    return (
        <Card style={{ width: '100%' }}>
            <a href="Profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                <LazyLoad height={200} offset={100} placeholder={<img src={placeholder} alt="placeholder" />}>
                    <Card.Img variant="top" src={service.image} alt={service.name} />
                </LazyLoad>
                <Card.Body>
                    <div className="card-title-container">
                        <Card.Title className="card-title">{service.name}</Card.Title>
                        <div className="rating-reviews">
                            <img src={star} alt="Star" style={{ width: '16px', height: '16px' }} />
                            <span>{service.rating}</span>
                            <span>({service.reviews})</span>
                        </div>
                    </div>
                    <Card.Text>
                        <p>I can sing for events, ample experiences in busking.</p>
                        <div>
                            {service.tags.map(tag => (
                                <span className="badge" style={{ marginRight: '0.5rem' }} key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div className="price">From ${service.price}</div>
                    </Card.Text>
                    <a href="Booking" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className="button-primary">Book</button>
                    </a>
                </Card.Body>
            </a>
            {/* </Link> */}
        </Card>
    );
};

export default ServiceCard;