import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaSpoon } from 'react-icons/fa6';
import { FaUtensils, FaUtensilSpoon } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data.image)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added your menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div>
            <SectionTitle heading='add an item' subHeading={`What's new? `} />
            <div className="mt-12 p-12 bg-base-300 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name  */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe name" {...register("name", { required: true })} className="input input-bordered" />
                    </div>
                    <div className='flex gap-6 my-6'>
                        {/* category  */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text"> Category*</span>
                            </label>
                            <select defaultValue='pizza'  {...register("category", { required: true })} className="input input-bordered">
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
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered" />
                        </div>
                    </div>
                    {/* Recipe Details  */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea type="text" placeholder="Recipe details" {...register("recipe", { required: true })} className="textarea textarea-bordered textarea-md w-full " />
                    </div>
                    <div className="form-control my-8">
                        <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered w-full max-w-lg" />
                    </div>
                    <div className="form-control ">
                        <button className="max-w-xs btn btn-primary rounded-none bg-yellow-600 border-none" type="submit" >
                            Add Item <FaUtensils />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;