import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import './MyItems.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyItems = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const email = loggedInUser.email || JSON.parse(localStorage.getItem('authUser'))?.email;
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        axios.get(`https://machinary.herokuapp.com/api/products/?email=${email}`)
            .then(data => {
                setMyItems(data.data)
            })
    }, [])
    // handle Delete 

    // handle single delete -> 

    const handleSigleDelete = (dt) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("are you want to delete ?")) {
            axios.delete(`https://machinary.herokuapp.com/api/products/${dt}`)
                .then((result) => {
                    if (result.data.deletedCount) {
                        toast("delected")
                        setMyItems(myItems.filter(dtt => dtt._id != dt))
                    }
                });
        }

    }
    return (
        <div>
            <p className='text-center fs-1 py-5'>my items</p>
            <div className='text-center'>
            <Link to='/add-items' className='btn btn-primary w-25'>add New</Link>
            </div>
            <div>
                {
                    myItems.length ? <div className='py-5'>
                        
                        <div style={{ minHeight: "30vh" }} className='py-5 d-flex justify-content-center align-items-center'>                           
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
                                                        <Link className=' mx-3' to={`/update/${_id}`}>Update</Link> {" "}
                                                        <span onClick={() => handleSigleDelete(_id)}>delete</span></td>
                                                </tr>
                                                <ToastContainer
                                                    position="top-right"
                                                    autoClose={2000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                />
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div> :
                        <div className='py-5 m-5'>
                            <p>You Haven't Added Any Items Yet</p>
                            <Link to='/add-items' className='btn btn-primary'>add New</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyItems;