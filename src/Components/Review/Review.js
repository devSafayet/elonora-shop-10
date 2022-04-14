import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Review = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center text-primary pb-4'>Customer Reviews(3)</h2>
            <div>
                <CardGroup className='mb-5'>
                    <Card className='me-3'>

                        <Card.Body>
                            <Card.Title>Jhon Haris</Card.Title>
                            <Card.Text>
                                <small className='text-success fs-5'>Description: </small> This shop is designed to let you work and create in ways you never imagined. This is Good.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted text-center">Review : 5.00 star</small>
                        </Card.Footer>
                    </Card>
                    <Card className='me-3'>
                        <Card.Body>
                            <Card.Title>Mr. Alex</Card.Title>
                            <Card.Text>
                                <small className='text-success fs-5'>Description: </small> This is a better shop of other Online Shop. It's Very Helpfully Shop. That's Great.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Review: 5.00 start</small>
                        </Card.Footer>
                    </Card>
                    <Card className='me-3'>

                        <Card.Body>
                            <Card.Title>Miss. Kaniz</Card.Title>
                            <Card.Text>
                                <small className='text-success fs-5'>Description: </small> I have been able to buy products from here for much less money. They have given many good quality products. Many thanks to them.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Review: 5.00 Star</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Review;