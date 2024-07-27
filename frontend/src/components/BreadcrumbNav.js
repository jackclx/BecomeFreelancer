import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BreadcrumbNav = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Music Entertainment</Breadcrumb.Item>
            <Breadcrumb.Item active>Singer</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadcrumbNav;