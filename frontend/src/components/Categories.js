import React from 'react';
import '../css/Categories.css';
import bandsImage from '../images/bands.jpg';
// import ensemblesImage from '../images/ensembles.jpg';
// import singersImage from '../images/singers.jpg';
// import soloMusiciansImage from '../images/soloMusicians.jpg';
import childrenEntertainmentImage from '../images/childrenEntertainment.jpg';
// import comediansImage from '../images/comedians.jpg';

function Categories() {
    return (
        <div className="categories">
            <h2>Whatever you’re planning, make it extraordinary.</h2>
            <div className="categories-content">
                <div className="category">
                    <img src={bandsImage} alt="Bands & Groups" />
                    <h3>Bands & Groups</h3>
                    <p>Blues Bands, Mariachis, Wedding Bands...</p>
                </div>
                <div className="category">
                    <img src={bandsImage} alt="Ensembles" />
                    <h3>Ensembles</h3>
                    <p>Chamber Orchestras, Classical Ensembles, String Trios...</p>
                </div>
                <div className="category">
                    <img src={bandsImage} alt="Singers" />
                    <h3>Singers</h3>
                    <p>Country Singers, Singing Guitarists, Rappers...</p>
                </div>
                <div className="category">
                    <img src={bandsImage} alt="Solo Musicians" />
                    <h3>Solo Musicians</h3>
                    <p>Bagpipers, Guitarists, Pianists, Violinists...</p>
                </div>
                <div className="category">
                    <img src={childrenEntertainmentImage} alt="Children’s Entertainment" />
                    <h3>Children’s Entertainment</h3>
                    <p>Clowns, Magicians, Balloon Twisters...</p>
                </div>
                <div className="category">
                    <img src={bandsImage} alt="Comedians" />
                    <h3>Comedians</h3>
                    <p>Stand-up Comedians, Improv Troupes, Comedy Writers...</p>
                </div>
            </div>
        </div>
    );
}

export default Categories;
