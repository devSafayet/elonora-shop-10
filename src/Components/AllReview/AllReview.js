import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllReview = ({ review }) => {
    console.log(review)
    return (
        <div>
            <Col className='shadow '>
                <Card className=''>
                    <Card.Body className=''>
                        <Card.Title className='text-success'>{review.Name}</Card.Title>
                        <Card.Text>
                            <strong className='text-primary'>Description:  </strong> {review.Description}
                        </Card.Text>
                        <p><strong className='text-danger'>Review: </strong><span className='text-warning'>{review.Review} Star</span></p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllReview;