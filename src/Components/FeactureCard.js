import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeactureCard = ({ data }) => {
    // console.log(data);
    const { description, img, price, quantity, supplierName, title, _id } = data;
    return (
        <Card style={{ maxWidth: '25rem' }}>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description.slice(0, 70)}...
                </Card.Text>
                <Card.Img variant="top" style={{ height: '300px' }} className="img-fluid" src={img} />
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
                <Link to={`/update/${_id}`}>Update</Link>
            </Card.Body>
        </Card>
    );
};

export default FeactureCard;