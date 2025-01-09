import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className='flex flex-col md:flex-row gap-2'>
            <div className='flex justify-between items-center'>
                <img
                    src={image}
                    alt=""
                    className='w-24 rounded rounded-r-full rounded-bl-full'
                />
                <p className='md:hidden text-yellow-600'>${price}</p>
            </div>
            <div className=' flex-1'>
                <h2 className='text-gray-600 text-lg'>{name}--------</h2>
                <p className='text-gray-400 text-xs'>{recipe.slice(0, 90)}{recipe.length >= 90 && "......"}</p>
            </div>
            <p className='hidden md:block text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;