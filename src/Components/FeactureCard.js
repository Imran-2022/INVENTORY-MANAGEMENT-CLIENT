import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeactureCard = ({ data }) => {
    // console.log(data);
    const { description, img, price, quantity, supplierName, title, _id } = data;
    return (
        <Card style={{ maxWidth: '25rem' }}>

            <Card.Body className='py-3'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description.slice(0, 70)}...
                </Card.Text>
                <Card.Img variant="top" style={{ height: '300px' }} className="img-fluid" src={img} />
                <div className=' d-flex gap-3 flex-wrap justify-content-around align-items-center'>
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
                <div className='text-center'><Link to={`/update/${_id}`} className="btn btn-warning w-100">Update</Link></div>
            </Card.Body>
        </Card>
    );
};

export default FeactureCard;