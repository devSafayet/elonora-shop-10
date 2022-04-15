import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerReviewCard from '../CustomerReviewCard/CustomerReviewCard';
import './CustomerReview.css';

const CustomerReview = () => {
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        fetch('CustomerReview.json')
            .then(res => res.json())
            .then(data => setCustomer(data))
    }, [])
    const cardCustomer = customer.slice(0, 3);
    return (
        <div>
            <h2 className='text-center text-success mb-3'>Customer Review(3)</h2>
            <div className='d-flex container justify-content-center'>
                {
                    cardCustomer.map(customer => <CustomerReviewCard key={customer.id} customer={customer} ></CustomerReviewCard>)
                }
            </div>
            <div className='see-btn mt-5'>
                <Link to="/review" className='see-btn bg-primary w-100 px-5 py-2 text-white text-decoration-none rounded'>See All Review</Link>
            </div>
        </div>
    );
};

export default CustomerReview;