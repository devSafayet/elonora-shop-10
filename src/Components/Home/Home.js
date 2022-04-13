import React from 'react';
import image from '../../images/images.png';
const Home = () => {
    return (
        <div className='container d-flex mt-5 align-content-center justify-content-center align-items-center'>
            <div className="let-side  col-md-6">
                <h2 className='text-center'>Elonora</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit totam reprehenderit tenetur fugit error deserunt earum repellendus, aut libero dolores corporis. Ea at cum, molestiae harum possimus adipisci illo.</p>
                <button className='px-3 text-success align-items-center'>See More</button>
            </div>
            <div className="right-side col-md-6 ps-5">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;