import React from 'react';
import reactLogo from '/RMLogo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="nav">
            <a href="/" className="site-title"><img src= {reactLogo} alt="business-Logo" /></a>
            <ul>
                <li><a href="/projects" className="menu-item">Projects</a></li>
                <li><a href="/contact" className="menu-item">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;