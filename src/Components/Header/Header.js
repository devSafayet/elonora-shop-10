import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='d-flex justify-content-around'>
            <h3 className=''>Elonora Shop</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/review">Review</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>


    );
};

export default Header;