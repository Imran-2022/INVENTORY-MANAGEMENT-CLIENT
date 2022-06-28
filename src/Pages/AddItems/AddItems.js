import React from 'react';
import "./AddItems.css"
import axios from 'axios'
import { useForm } from "react-hook-form";
const AddItems = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:8080/api/products', data)
            .then(res => {
                if (res.data) {
                    alert("data added successfully !!!");
                    reset()
                }
            })
    }
    const handleDelete = () => {
        axios.delete('http://localhost:8080/api/products')
        .then(res => {
            if (res.data) {
                alert("data added successfully !!!");
                reset()
            }
        })
    }

    return (
        <div className=" w-75 m-auto mb-5 ">
            <p className='text-center py-5 fs-1' >Add Inventory</p>
            <button onClick={handleDelete}>delete all </button>
            <form className="p-5 mb-5 rounded w-50 m-auto admin-form-adds admin-form-add d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Product Name" {...register("title", { required: true })} />
                {errors.title && <small className="text-end">This field is required</small>}

                <div className='d-flex gap-4'>
                    <input type="number" placeholder="Price"   {...register("price", { required: true })} autoComplete="off" />
                    {errors.price && <small className="text-end">This field is required</small>}
                    <input type="number" placeholder="Quantity" {...register("quantity", { required: true })} />
                    {errors.quantity && <small className="text-end">This field is required</small>}
                </div>

                <input placeholder="Image url"   {...register("img", { required: true })} autoComplete="off" />
                {errors.img && <small className="text-end">This field is required</small>}

                <input placeholder="Supplier Name" {...register("supplierName", { required: true })} />
                {errors.supplierName && <small className="text-end">This field is required</small>}

                <input type="email" placeholder="Supplier Email" {...register("supplierEmail", { required: true })} />
                {errors.supplierEmail && <small className="text-end">This field is required</small>}

                <textarea placeholder="Description"  {...register("description", { required: true })} rows="3" />
                {errors.description && <small className="text-end">This field is required</small>}

                <input type="submit" value="Upload NEW one" className="fs-5 p-3 rounded fw-bold" />
            </form>
        </div>
    );
};

export default AddItems;
