import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BreadcrumbNav = () => {
    const { subcategory } = useParams();

    // Function to capitalize each word
    const formatCategory = (category) => {
        return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const formattedCategory = subcategory ? formatCategory(subcategory) : '';

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {formattedCategory && <Breadcrumb.Item active>{formattedCategory}</Breadcrumb.Item>}
        </Breadcrumb>
    );
};

export default BreadcrumbNav;