import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src="/logo.png" alt="GigSpace Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="What kind of talent or service can we help you find?" />
                    <button>Search</button>
                </div>
                <div className="login-list-services">
                    <button>Log In</button>
                    <button className="list-services">List your services</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
