import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateIteams from '../../Components/UpdateIteams';
import "./UpdateItems.css"
const UpdateItems = () => {
    const { abc } = useParams()
    const [singleProudct, setSingleProduct] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/products/${abc}`)
        .then(dt => {
            setSingleProduct(dt?.data);
        })
    },[abc])  
    

    return (
        <div>
            <p className='text-center py-5'>Product Details {abc}</p>
            {
                singleProudct && singleProudct.map(dt=><UpdateIteams dt={dt}/>)
            }
        </div>
    );
};

export default UpdateItems;