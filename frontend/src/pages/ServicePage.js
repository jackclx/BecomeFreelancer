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
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);

    const fetchFreelancers = useCallback(async () => {
        try {
            let url = `http://localhost:8000/api/freelancers?category=${subcategory}`;
            if (selectedSubcategories.length > 0) {
                const subcategoriesString = selectedSubcategories.join(',');
                url += `&subcategories=${subcategoriesString}`;
            }
            console.log(url);
            console.log(`Fetching freelancers for category: ${subcategory} and subcategories: ${selectedSubcategories}`);
            const response = await axios.get(url);
            console.log('Request Headers:', response.config.headers);
            console.log('Response:', response.data);
            setFreelancers(response.data);
        } catch (error) {
            console.error('Error fetching freelancers:', error);
        }
    }, [subcategory, selectedSubcategories]);

    useEffect(() => {
        fetchFreelancers();
    }, [fetchFreelancers]);

    const handleSubcategoryChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedSubcategories([...selectedSubcategories, value]);
        } else {
            setSelectedSubcategories(selectedSubcategories.filter(subcat => subcat !== value));
        }
    };

    return (
        <div className="service-page">
            <BreadcrumbNav category={subcategory} />
            <SortDropdown />
            <div className="subcategory-filter">
                <label>Filter by Subcategory:</label>
                {subcategories[subcategory]?.map((subcat) => (
                    <div key={subcat} className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                value={subcat}
                                checked={selectedSubcategories.includes(subcat)}
                                onChange={handleSubcategoryChange}
                            />
                            {subcat}
                        </label>
                    </div>
                ))}
            </div>
            <ServiceGrid freelancers={freelancers} />
        </div>
    );
}

export default ServicePage;