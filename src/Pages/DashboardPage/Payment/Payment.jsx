import React from 'react';
import { useForm } from 'react-hook-form';

const Payment = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data.image)
    }

    return (
        <div className='flex flex-col items-center justify-center p-10'>
            <h2 className='text-3xl font-semibold mb-10'> PAYMENT </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-8 items-center'>
                <div className='flex w-full gap-6 my-6'>
                    {/* card  */}
                    <div className="form-control w-1/2">
                        <input type="number" placeholder="card number" {...register("card", { required: true })} className="input input-bordered" />
                    </div>
                    {/* date  */}
                    <div className="form-control w-1/2">
                        <input type="date" placeholder="date" {...register("date", { required: true })} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control ">
                    <button className="max-w-xs btn btn-primary bg-blue-500  border-none" type="submit" >
                        Add Item 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Payment;