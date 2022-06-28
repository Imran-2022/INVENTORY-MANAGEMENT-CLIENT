import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyItems.css'
const MyItems = () => {
    const email = 'devil@gmail.com';
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/?email=${email}`)
            .then(data => {
                setMyItems(data.data)
            })
    }, [])
    // handle Delete 

    // handle single delete -> 

    const handleSigleDelete = (dt) => {
        axios.delete(`http://localhost:8080/api/products/${dt}`)
            .then((result) => {
                if (result.data.deletedCount) {
                    alert("delected")
                    setMyItems(myItems.filter(dtt => dtt._id != dt))
                }
            });
    }

    return (
        <div>
            <p className='text-center fs-1 py-5'>my items</p>
            {
                myItems.length ? <div className='py-5'>
                    <Link to='/add-items' className='btn btn-primary'>add New</Link>
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
                            myItems.map((data, i) => {
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
                            })
                        }
                    </table>
                </div> :
                    <div className='py-5 m-5'>
                        <p>You Haven't Added Any Items Yet</p>
                        <Link to='/add-items' className='btn btn-primary'>add New</Link>

                    </div>
            }


        </div>
    );
};

export default MyItems;