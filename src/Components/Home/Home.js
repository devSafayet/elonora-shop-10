import React from 'react';
import image from '../../images/images.png';

import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className='container d-flex mt-5 align-content-center justify-content-center align-items-center mb-5'>
                <div className="let-side  col-md-6">
                    <h2 className='text-center text-success'>Elonora</h2>
                    <p>This shop is very different. Here you can buy goods at very low prices and it is of very good quality. I hope I can do you a lot of good. You will be with us. Go with our support.</p>
                    <button className='bg-primary border px-3 py-1 text-white rounded text-decoration-none'>See More</button>
                </div>
                <div className="right-side col-md-6 ps-5">
                    <img src={image} alt="" />
                </div>
            </section>

            {/* <div className="mt-5">
                <Review></Review>
            </div>
            <div className=' see-btn'>
                <Link className='bg-primary  px-5 py-2 text-white rounded text-decoration-none ' to="/review">See Review All</Link>
            </div> */}
        </div>



    );
};

export default Home;