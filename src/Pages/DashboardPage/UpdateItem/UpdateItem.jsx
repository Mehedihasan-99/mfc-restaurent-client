import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const item = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()


    const onSubmit = async (data) => {
        // console.log(data)
        const menuItem = {
            name: data.name,
            category: data.category,
            price: data.price,
            recipe: data.recipe,
            image: item.image
        }
        console.log(menuItem)
        const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem)
        console.log(menuRes.data)
        if (menuRes.data.modifiedCount
            == 1) {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is update to your menu`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/dashboard/manage-items")
        }
    }



    return (
        <div>
            <SectionTitle heading='update item' subHeading=' Refresh it ' />
            <div className="mt-12 p-12 bg-base-300 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name  */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input type="text" defaultValue={item.name} {...register("name")} className="input input-bordered" />
                    </div>
                    <div className='flex gap-6 my-6'>
                        {/* category  */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text"> Category</span>
                            </label>
                            <select defaultValue={item.price} {...register("category")} className="input input-bordered">
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* Price  */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" defaultValue={item.price} {...register("price")} className="input input-bordered" />
                        </div>
                    </div>
                    {/* Recipe Details  */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea type="text" defaultValue={item.recipe} {...register("recipe")} className="textarea textarea-bordered textarea-md w-full " />
                    </div>
                    <div className="form-control ">
                        <button className="max-w-xs btn btn-primary rounded-none bg-yellow-600 border-none" type="submit" >
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;