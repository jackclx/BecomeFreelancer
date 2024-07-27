import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import SortDropdown from './SortDropdown'; // Import the SortDropdown component

const servicesData = [
    { id: 1, name: 'LUCAS WANG', rating: 4.7, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/lucas2.png" },
    { id: 2, name: 'SOPHIE LUO', rating: 5.0, reviews: 10, price: 150, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/sophie1.png" },
    { id: 3, name: 'LIAM ANDERSON', rating: 5.0, reviews: 43, price: 300, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer3.png" },
    { id: 4, name: 'SOPHIA MARTINEZ', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer4.png" },
    { id: 5, name: 'ETHAN THOMPSON', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer5.png" },
    { id: 6, name: 'MASON WILSON', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer6.png" },
    { id: 7, name: 'AVA TAYLOR', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer7.png" },
    { id: 8, name: 'OLIVIA BROWN', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer8.png" },
    { id: 9, name: 'LUCAS WANG', rating: 4.7, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer3.png" },
    { id: 10, name: 'SOPHIE LUO', rating: 5.0, reviews: 10, price: 150, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer4.png" },
    { id: 11, name: 'LIAM ANDERSON', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer3.png" },
    { id: 12, name: 'SOPHIA MARTINEZ', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/singer4.png" },
    { id: 13, name: 'ETHAN THOMPSON', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/sophie1.png" },
    { id: 14, name: 'MASON WILSON', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/lucas2.png" },
    { id: 15, name: 'AVA TAYLOR', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/sophie1.png" },
    { id: 16, name: 'OLIVIA BROWN', rating: 5.0, reviews: 43, price: 200, tags: ['guitarist', 'soloist', 'wedding singer'], image: "https://storage.cloud.google.com/gigspace/images/lucas2.png" },
];

const ServiceGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedServices, setSortedServices] = useState(servicesData);
    const servicesPerPage = 8;

    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = sortedServices.slice(indexOfFirstService, indexOfLastService);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSortChange = (sortKey) => {
        let sortedArray = [...servicesData];
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
                    <ServiceCard key={service.id} service={service} />
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



