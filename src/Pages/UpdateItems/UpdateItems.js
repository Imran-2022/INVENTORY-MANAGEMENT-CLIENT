import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingButton from '../../Components/LoadingButton';
import UpdateIteams from '../../Components/UpdateIteams';
import "./UpdateItems.css"
const UpdateItems = () => {
    const { abc } = useParams()
    const [singleProudct, setSingleProduct] = useState(null)

    useEffect(() => {
        axios.get(`https://machinary.herokuapp.com/api/products/${abc}`)
            .then(dt => {
                setSingleProduct(dt?.data);
            })
    }, [abc])


    return (
        <div>
            <p className='text-center py-5'>Product Details of id {abc}</p>
            {
                singleProudct ? singleProudct.map((dt,idx )=> <UpdateIteams key={idx} dt={dt} />) : <LoadingButton/>
            }
        </div>
    );
};

export default UpdateItems;