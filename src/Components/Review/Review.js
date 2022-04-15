import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';


const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('customerReview.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            {
                review.map((review) => <AllReview key={review.id} review={review}></AllReview>)
            }
        </div>
    );
};

export default Review;