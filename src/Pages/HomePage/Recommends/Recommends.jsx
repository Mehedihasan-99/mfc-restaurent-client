import React, { useEffect, useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Recommends = () => {
    const [item, setItem ] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/menus/popular")
        .then(res => res.json())
        .then(data => setItem(data))
    }, []);

    return (
        <div className='mb-4 md:mb-20'>
            <SectionTitle
                heading="chef recommends"
                subHeading="Should Try"
            />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    item.slice(0, 3).map(popular => <FoodCard
                        key={popular._id}
                        item={popular}
                    />)
                }
            </div>
        </div>
    );
};

export default Recommends;