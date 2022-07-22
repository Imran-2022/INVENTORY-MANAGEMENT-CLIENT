import React, { useContext } from 'react';
import "./AddItems.css"
import axios from 'axios'
import { useForm } from "react-hook-form";
import { userContext } from '../../Context/Context';
const AddItems = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('https://machinary.herokuapp.com/api/products', data)
            .then(res => {
                if (res.data) {
                    alert("data added successfully !!!");
                    reset()
                }
            })
    }


    return (
        <div className=" additem m-auto mb-5 ">
            <p className='text-center py-5 fs-1' >Add Inventory</p>

            <form className="p-5 mb-5 rounded add-form m-auto admin-form-adds admin-form-add d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>

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

                <input defaultValue={loggedInUser.displayName || JSON.parse(localStorage.getItem('authUser'))?.displayName} {...register("supplierName", { required: true })} readOnly />
                {errors.supplierName && <small className="text-end">This field is required</small>}

                <input type="email" defaultValue={loggedInUser.email || JSON.parse(localStorage.getItem('authUser'))?.email} {...register("supplierEmail", { required: true })} readOnly />
                {errors.supplierEmail && <small className="text-end">This field is required</small>}

                <textarea placeholder="Description"  {...register("description", { required: true })} rows="3" />
                {errors.description && <small className="text-end">This field is required</small>}

                <input type="submit" value="Upload NEW ONE" className=" p-3 addbtn rounded fw-bold" />
            </form>
        </div>
    );
};

export default AddItems;
