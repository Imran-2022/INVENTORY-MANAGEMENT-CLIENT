import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FeactureCard = ({ data }) => {
    console.log(data);
    const { description, img, price, quantity, supplierEmail, supplierName, title } = data;
    return (
        <Card style={{ width: '25rem' }}>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description.slice(0, 70)}...
                </Card.Text>
                <Card.Img variant="top" src={img} />
                <div className='py-3 d-flex gap-3 flex-wrap justify-content-around align-items-center'>
                    <div>
                        <p>Quantity</p>
                        <p>{quantity}</p>
                    </div>
                    <div>
                        <p>Price</p>
                        <p>{price}</p>
                    </div>
                    <div>
                        <p>Supplier</p>
                        <p>{supplierName}</p>
                    </div>
                </div>
                <Button variant="primary mt-1 w-100">MANAGE INVENTORY</Button>
            </Card.Body>
        </Card>
    );
};

export default FeactureCard;