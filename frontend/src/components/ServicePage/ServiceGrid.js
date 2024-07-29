import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
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
            <div className="card-grid">
                {currentServices.map(service => (
                    <ServiceCard key={service._id} service={service} />
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