import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbNav from '../components/BreadcrumbNav';
import SortDropdown from '../components/ServicePage/SortDropdown';
import ServiceGrid from '../components/ServicePage/ServiceGrid';
import '../css/Service.css';
import axios from 'axios';

function ServicePage() {
    const { subcategory } = useParams();
    const [freelancers, setFreelancers] = useState([]);

    const fetchFreelancers = useCallback(async () => {
        try {
            const url = `http://localhost:8000/api/freelancers?category=${subcategory}`; // Full URL to backend server
            console.log(url);
            console.log(`Fetching freelancers for category: ${subcategory}`);
            const response = await axios.get(url); // Use the full URL
            console.log('Request Headers:', response.config.headers);
            console.log('Response:', response.data);
            setFreelancers(response.data);
        } catch (error) {
            console.error('Error fetching freelancers:', error);
        }
    }, [subcategory]);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
        fetchFreelancers();
    }, [fetchFreelancers]);

    return (
        <div className="service-page">
            <BreadcrumbNav category={subcategory} />
            <SortDropdown />
            <ServiceGrid freelancers={freelancers} />
        </div>
    );
}

export default ServicePage;