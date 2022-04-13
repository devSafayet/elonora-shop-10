import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {

    return (
        <div className='d-flex justify-content-center mt-3 mb-5'>


            <nav className='nav-section '>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/review">Review</Link>
                <Link className='link' to="/blogs">Blogs</Link>
                <Link className='link' to="/dashboard">Dashboard</Link>
                <Link className='link' to="/about">About</Link>
            </nav>
        </div>


    );
};

export default Header;