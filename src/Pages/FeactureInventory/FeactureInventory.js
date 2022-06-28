import React from 'react';
import "./FeactureINventory.css"
import { Button, Card } from 'react-bootstrap';
const FeactureInventory = () => {
    return (
        <div className='Feacture'>
            <h2>Featured MACHINER</h2>
            <div className='py-5 d-flex flex-wrap gap-3 flex-wrap justify-content-center align-items-center'>
                <Card style={{ width: '25rem' }}>

                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/manager-man-worker-doing-stocktaking-of-product-management-in-box-on-picture-id1178358038?k=20&m=1178358038&s=612x612&w=0&h=nKkQ8MpmARQ0GhI9TAQUqqPa8YCZV4kVETQ8oLiti-U=" />
                        <div className='py-3 d-flex gap-3 flex-wrap justify-content-around align-items-center'>
                            <div>
                                <p>Quantity</p>
                                <p>23</p>
                            </div>
                            <div>
                                <p>Cost</p>
                                <p>23</p>
                            </div>
                            <div>
                                <p>Supplier</p>
                                <p>IMRAN</p>
                            </div>
                        </div>
                        <Button variant="primary mt-1 w-100">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>

                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/manager-man-worker-doing-stocktaking-of-product-management-in-box-on-picture-id1178358038?k=20&m=1178358038&s=612x612&w=0&h=nKkQ8MpmARQ0GhI9TAQUqqPa8YCZV4kVETQ8oLiti-U=" />
                        <div className='py-3 d-flex gap-3 flex-wrap justify-content-around align-items-center'>
                            <div>
                                <p>Quantity</p>
                                <p>23</p>
                            </div>
                            <div>
                                <p>Cost</p>
                                <p>23</p>
                            </div>
                            <div>
                                <p>Supplier</p>
                                <p>IMRAN</p>
                            </div>
                        </div>
                        <Button variant="primary mt-1 w-100">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem' }}>

                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Img variant="top" src="https://media.istockphoto.com/photos/manager-man-worker-doing-stocktaking-of-product-management-in-box-on-picture-id1178358038?k=20&m=1178358038&s=612x612&w=0&h=nKkQ8MpmARQ0GhI9TAQUqqPa8YCZV4kVETQ8oLiti-U=" />
                        <div className='py-3 d-flex gap-3 flex-wrap justify-content-around align-items-center'>
                            <div>
                                <p>Quantity</p>
                                <p>23</p>
                            </div>
                            <div>
                                <p>Cost</p>
                                <p>23</p>
                            </div>
                            <div>
                                <p>Supplier</p>
                                <p>IMRAN</p>
                            </div>
                        </div>
                        <Button variant="primary mt-1 w-100">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
            <button className='btn btn-primary mb-5'>Manage Inventories</button>
        </div>
    );
};

export default FeactureInventory;