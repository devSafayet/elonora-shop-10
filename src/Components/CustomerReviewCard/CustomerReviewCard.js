import React from 'react';
import { Card } from 'react-bootstrap';


const CustomerReviewCard = ({ customer }) => {

    return (
        <div className='w-25 shadow '>
            <Card>
                <Card.Body className=''>
                    <Card.Title className='text-success'>{customer.Name}</Card.Title>
                    <Card.Text>
                        <strong className='text-primary'>Description:  </strong> {customer.Description}
                    </Card.Text>
                    <p><strong className='text-danger'>Review: </strong><span className='text-warning'>{customer.Review} Star</span></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CustomerReviewCard;