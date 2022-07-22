import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateIteams from '../../Components/UpdateIteams';
import "./UpdateItems.css"
const UpdateItems = () => {
    const { abc } = useParams()
    const [singleProudct, setSingleProduct] = useState()

    useEffect(() => {
        axios.get(`https://machinary.herokuapp.com/api/products/${abc}`)
            .then(dt => {
                setSingleProduct(dt?.data);
            })
    }, [abc])


    return (
        <div>
            <p className='text-center py-5'>Product Details {abc}</p>
            {
                singleProudct && singleProudct.map((dt,idx )=> <UpdateIteams key={idx} dt={dt} />)
            }
        </div>
    );
};

export default UpdateItems;