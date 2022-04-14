import React from 'react';
import { Card } from 'react-bootstrap';

const CustomerReviewCard = ({ customer }) => {
    return (
        <div className='w-25 shadow review'>
            <Card className=''>
                <Card.Body className=''>
                    <Card.Title className='text-success'>Name</Card.Title>
                    <Card.Text>
                        <strong className='text-primary'>Description:  </strong>
                    </Card.Text>
                    <p><strong className='text-danger'>Review:</strong><span className='text-warning'>star</span></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CustomerReviewCard;