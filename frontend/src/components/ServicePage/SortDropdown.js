import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SortDropdown = ({ onSortChange }) => {
    const handleSelect = (eventKey) => {
        onSortChange(eventKey);
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <span style={{ fontSize: '20px', color: 'grey' }}>
                Sort By:
            </span>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="custom-dropdown-toggle">
                Best Reviewed
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="rating-desc">Best Reviewed</Dropdown.Item>
                <Dropdown.Item eventKey="price-asc">Price: Low to High</Dropdown.Item>
                <Dropdown.Item eventKey="price-desc">Price: High to Low</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortDropdown;
