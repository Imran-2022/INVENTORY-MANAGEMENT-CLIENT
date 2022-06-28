import React, { useEffect, useState } from 'react';
import "./ManageItems.css"
import { Link } from "react-router-dom";
import axios from 'axios';

const ManageItems = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(dt => {
                setProducts(dt.data);
            })
    }, [])
    return (
        <div className='manageItems'>
            <p>Manage Inventory</p>
            <div className='d-flex gap-4 align-items-center'>
                <p>Inventories: 3</p>
                <Link to='/add-items' className='btn btn-primary'>add New</Link>
            </div>
            <div className='py-5'>
                <table>
                    <thead>
                        <tr >
                            <th className="text-center p-2">#no</th>
                            <th className="text-center p-2">Image</th>
                            <th className="text-center p-2">name</th>
                            <th className="text-center p-2">Quantity</th>
                            <th className="text-center p-2">Supplier</th>
                            <th className="text-center p-2">Operations</th>
                        </tr>
                    </thead>
                    {
                        products.map((data, i) => {
                            const { _id, title, img,quantity,supplierName } = data
                            // console.log(img)
                            return (
                                <tbody key={_id}>
                                    <tr>
                                        <td className="text-center">{i + 1}</td>
                                        <td className="text-center">
                                            <img width="60px" height="40px" src={img} alt="no images" />
                                        </td>
                                        <td className="text-start ps-5">{title}</td>
                                        <td className="text-center">{quantity}</td>
                                        <td className="text-center">{supplierName}</td>
                                        <td className="text-center">update,delete</td>
                                        
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageItems;