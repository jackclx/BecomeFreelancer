import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SaxophoneImage from '../images/saxophone.png';
import Login1 from '../components/LoginPage/Login1';
import Login2 from '../components/LoginPage/Login2';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="saxophone-image">
                <img src={SaxophoneImage} alt="Saxophone" />
            </div>
            <Routes>
                <Route path="/" element={<Login1 />} />
                <Route path=":role" element={<Login2 />} />
            </Routes>
        </div>
    );
};

export default LoginPage;