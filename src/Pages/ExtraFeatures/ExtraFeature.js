import React from 'react';
import "./ExtraFeature.css"
import { FaBeer } from 'react-icons/fa';
const ExtraFeature = () => {
    return (
        <div className='d-flex gap-5 flex-wrap extra-feature justify-content-center align-items-center'>
            <div className='p-3 d-flex flex-column align-items-center'>
                <p><FaBeer /></p>
                <p>Free Delivery</p>
                <p>Free Shipping on all order</p>
            </div>
            <div className='p-3 d-flex flex-column align-items-center'>
                <p><FaBeer /></p>
                <p>Return Policy</p>
                <p>Free Shipping on all order</p>
            </div>
            <div className='p-3 d-flex flex-column align-items-center'>
                <p><FaBeer /></p>
                <p>24/7 Support</p>
                <p>Free Shipping on all order</p>
            </div>
            <div className='p-3 d-flex flex-column align-items-center'>
                <p><FaBeer /></p>
                <p>Secure payment</p>
                <p>Free Shipping on all order</p>
            </div>
        </div>
    );
};

export default ExtraFeature;