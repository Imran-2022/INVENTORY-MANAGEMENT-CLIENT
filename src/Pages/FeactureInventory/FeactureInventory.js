import React, { useEffect, useState } from 'react';
import "./FeactureINventory.css"
import axios from 'axios'
import FeactureCard from '../../Components/FeactureCard';
import { Link } from 'react-router-dom';

const FeactureInventory = () => {
    // url http://localhost:8080/api/products
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(dt => {
                setProducts(dt.data);
            })
    }, [])

    return (
        <div className='Feacture py-4 pt-5'>
            <h2>Featured MACHINER</h2>
            <div className='py-5 d-flex flex-wrap gap-3 flex-wrap justify-content-center align-items-center'>
                {
                    products && products.map(dt=><FeactureCard data={dt}/>)
                }
            </div>
            <Link to="/manage-items"  className='btn btn-primary mb-5'>MANAGE INVENTORY</Link>
        </div>
    );
};

export default FeactureInventory;