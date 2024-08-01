import React, { useState, useEffect } from 'react';
import SortDropdown from './SortDropdown'; // Import the SortDropdown component

const ServiceGrid = ({ freelancers = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedServices, setSortedServices] = useState([]);

    useEffect(() => {
        setSortedServices(freelancers);
    }, [freelancers]);

    const servicesPerPage = 8;
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = sortedServices.slice(indexOfFirstService, indexOfLastService);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSortChange = (sortKey) => {
        let sortedArray = [...freelancers];
        switch (sortKey) {
            case 'rating-desc':
                sortedArray.sort((a, b) => b.rating - a.rating);
                break;
            case 'price-asc':
                sortedArray.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sortedArray.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setSortedServices(sortedArray);
        setCurrentPage(1); // Reset to first page after sorting
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>{sortedServices.length} Results</div>
                <SortDropdown onSortChange={handleSortChange} />
            </div>
            <div className="list-grid">
                {currentServices.map(service => (
                    <div key={service._id} className="service-item">
                        <h3>{service.name}</h3>
                        <p>Email: {service.email}</p>
                        <p>Phone: {service.phone_number}</p>
                        <p>About: {service.about}</p>
                        <p>Title: {service.title}</p>
                        <p>Description: {service.description}</p>
                        <p>Service Category: {service.service_category}</p>
                        <p>Service Subcategories: {service.service_subcategory.join(', ')}</p>
                        <p>Tags: {service.tags.join(', ')}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {[...Array(Math.ceil(sortedServices.length / servicesPerPage)).keys()].map(number => (
                    <button key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ServiceGrid;