import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/Section/SectionTitle';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const Recommends = () => {
    const [menu] = useMenu()
    const populars = menu.filter(item => item.category === "popular")
    return (
        <div className='mb-4 md:mb-20'>
            <SectionTitle heading="chef recommends" subHeading="Should Try" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    populars.slice(0, 3).map(popular => <FoodCard
                        key={popular._id}
                        item={popular}
                    />)
                }
            </div>
        </div>
    );
};

export default Recommends;