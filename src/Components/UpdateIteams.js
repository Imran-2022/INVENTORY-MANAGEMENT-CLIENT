import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Components.css"
const UpdateIteams = ({ dt }) => {
    const { description, img, price, quantity, supplierEmail, supplierName, title, _id } = dt;


    // handleRestock

    const handleRestock = (e) => {
        e.preventDefault();
        let restockValue = e.target.stock.value;
        const newQuantity = parseInt(restockValue) + parseInt(quantity);
        axios.put(`http://localhost:8080/api/products/${_id}`, {
            newQuantity,
          })
          .then((res) => alert(res.data));
        e.target.reset();
        console.log(newQuantity);
    };

    // handle Delevered 

    const handleDelivered = (id) => {
        const newQuantity = parseInt(quantity) - 1;
        axios
          .put(`http://localhost:8080/api/products/${id}`, {
            newQuantity,
          })
          .then((res) => alert('updated'));
      };
    

    return (
        <div>
            <div className='d-flex w-75 m-auto gap-5 p-5'>
                <div>
                    <img style={{height:'300px'}} src={img} alt="" />
                </div>
                <div className='productDetails'>
                    <div className='d-flex justify-content-between align-items-center gap-4'>
                        <p>Product</p>
                        <p>{title}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-4'>
                        <p>ID</p>
                        <p>{_id}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-4'>
                        <p>Quantity</p>
                        <p>{quantity}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-4'>
                        <p>Price</p>
                        <p>{price}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-4'>
                        <p>Supplier</p>
                        <p>{supplierName}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-4'>
                        <p>Supplier Mail</p>
                        <p>{supplierEmail}</p>
                    </div>
                    <div>
                        {description}
                    </div>
                    <div className='d-flex justify-content-between align-items-center gap-4'>
                        <form action="" onSubmit={handleRestock}><input type="number"
                            name="stock"
                            min={0} id="" />
                            <button className='btn btn-primary' type='submit'>Restock</button></form>
                    </div>
                    <div>
                        <button className='btn btn-primary' onClick={()=>handleDelivered(_id)}>delivered</button>
                    </div>
                </div>

            </div>
            <div className='text-center'>
                <Link to="/manage-items" className='btn btn-primary mb-5 '>MANAGE INVENTORY</Link>
            </div>
        </div>
    );
};

export default UpdateIteams;