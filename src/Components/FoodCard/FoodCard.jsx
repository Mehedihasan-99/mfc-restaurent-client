import React from 'react';
import Button from '../Button/Button';

const FoodCard = ({ item }) => {

    return (
        <div className="card bg-base-100 rounded-none shadow-xl">
            <figure>
                <img
                    src={item.image}
                    alt={item.name}
                    className='w-full' />
            </figure>
            <p className='bg-black text-white px-2 absolute top-4 right-5'>${item.price}</p>
            <div className="card-body items-center">
                <h2 className="card-title">{item.name}</h2>
                <p className='text-xs text-center'>{item.recipe}</p>
                <div className="card-actions justify-end">
                    <Button  text="add to cart" color="yellow" item={item}/>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;