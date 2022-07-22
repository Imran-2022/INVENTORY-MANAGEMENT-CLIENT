import React, { useEffect, useState } from 'react';
import "./ManageItems.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import LoadingButton from '../../Components/LoadingButton';

const ManageItems = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://machinary.herokuapp.com/api/products')
            .then(dt => {
                setProducts(dt.data);
            })
    }, [])
    // handle single delete -> 

    const handleSigleDelete = (dt) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("are you want to delete ?")) {
        axios.delete(`https://machinary.herokuapp.com/api/products/${dt}`)
            .then((result) => {
                if (result.data.deletedCount) {
                    alert("delected")
                    setProducts(products.filter(dtt => dtt._id != dt))
                }
            });
        }
    }

    const handleDelete = () => {
        axios.delete('https://machinary.herokuapp.com/api/products')
            .then(res => {
                if (res.data) {
                    alert("data delected !!!");
                    setProducts([])
                }
            })
    }
    return (
        <div className='manageItems'>
            <p>Manage Inventory</p>
            <div className='d-flex gap-4 align-items-center'>
                <p>Inventories: {products.length}</p>
                <Link to='/add-items' className='btn btn-primary'>add New</Link>
                <button onClick={handleDelete} className='btn btn-primary'>delete all </button>
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
                       products.length? products.map((data, i) => {
                        const { _id, title, img, quantity, supplierName } = data
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
                                    <td className="text-center">
                                        <Link to={`/update/${_id}`}>Update</Link> {" "}
                                        <span onClick={() => handleSigleDelete(_id)}>delete</span></td>

                                </tr>
                            </tbody>
                        )
                    }):<LoadingButton/>
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageItems;