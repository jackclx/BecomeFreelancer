import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbNav from '../components/BreadcrumbNav';
import SortDropdown from '../components/ServicePage/SortDropdown';
import ServiceGrid from '../components/ServicePage/ServiceGrid';
import '../css/Service.css';
import axios from 'axios';

function ServicePage() {
    const { subcategory } = useParams();
    const [freelancers, setFreelancers] = useState([]);

    useEffect(() => {
        // Set a small timeout to ensure the scroll position is set after the page loads
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
        fetchFreelancers();
    }, [subcategory]);

    const fetchFreelancers = async () => {
        try {
            const response = await axios.get('/api/freelancers', {
                params: { subcategory }
            });
            setFreelancers(response.data);
        } catch (error) {
            console.error('Error fetching freelancers:', error);
        }
    };

    return (
        <div className="service-page">
            <BreadcrumbNav />
            <SortDropdown />
            <ServiceGrid freelancers={freelancers} />
        </div>
    );
}

export default ServicePage;