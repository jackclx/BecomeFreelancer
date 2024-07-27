import React, { useEffect } from 'react';
import BreadcrumbNav from '../components/BreadcrumbNav';
import SortDropdown from '../components/ServicePage/SortDropdown';
import ServiceGrid from '../components/ServicePage/ServiceGrid';
import Service from '../css/Service.css';

function ServicePage() {
    useEffect(() => {
        // Set a small timeout to ensure the scroll position is set after the page loads
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, []);
    return (
        <div className="service-page" >
            <BreadcrumbNav />

            <ServiceGrid />
        </div>
    );
};

export default ServicePage;