import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo3 from '../images/Logo3.png';

function Header({ onSearch }) {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(input);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <Link to="/">
                        <img src={logo3} alt="GigSpace Logo" />
                    </Link>
                </div>
                <div className="login-list-services">
                    <a href="/login"><button>Login</button></a>
                    <a href="/BecomeFreelancer">
                        <button className="list-services">Join as a Freelancer</button>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;