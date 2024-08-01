import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbNav from '../components/BreadcrumbNav';
import SortDropdown from '../components/ServicePage/SortDropdown';
import ServiceGrid from '../components/ServicePage/ServiceGrid';
import '../css/Service.css';
import axios from 'axios';

const subcategories = {
    "music-entertainment": ["Singer", "Bands", "Ensembles", "Cultural Bands"],
    "photographers": ["Wedding Photographers", "Videographers"],
    "party-rental": ["Buffet", "Tents", "Bounce Houses", "Photo Booths"],
    "performer": ["Magician", "Clown Balloon Maker", "Comedian"],
    "official-speaking": ["Wedding Emcee", "Emcee", "Motivational Speaker"],
    "special-talents": ["Lion Dancer", "Clowns", "Comedy"]
};

function ServicePage() {
    const { subcategory } = useParams();
    const [freelancers, setFreelancers] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const fetchFreelancers = useCallback(async () => {
        try {
            let url = `http://localhost:8000/api/freelancers?category=${subcategory}`;
            if (selectedSubcategory) {
                url += `&subcategory=${selectedSubcategory}`;
            }
            console.log(url);
            console.log(`Fetching freelancers for category: ${subcategory} and subcategory: ${selectedSubcategory}`);
            const response = await axios.get(url);
            console.log('Request Headers:', response.config.headers);
            console.log('Response:', response.data);
            setFreelancers(response.data);
        } catch (error) {
            console.error('Error fetching freelancers:', error);
        }
    }, [subcategory, selectedSubcategory]);

    useEffect(() => {
        fetchFreelancers();
    }, [fetchFreelancers, selectedSubcategory]);

    return (
        <div className="service-page">
            <BreadcrumbNav category={subcategory} />
            <SortDropdown />
            <div className="subcategory-filter">
                <label htmlFor="subcategory">Filter by Subcategory:</label>
                <select
                    id="subcategory"
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                >
                    <option value="">All</option>
                    {subcategories[subcategory]?.map((subcat) => (
                        <option key={subcat} value={subcat}>{subcat}</option>
                    ))}
                </select>
            </div>
            <ServiceGrid freelancers={freelancers} />
        </div>
    );
}

export default ServicePage;