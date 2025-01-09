import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/Section/SectionTitle';
import Button from '../../../Components/Button/Button';

const Recommends = () => {
    const [menu] = useMenu()
    const populars = menu.filter(item => item.category === "popular")
    return (
        <div className='mb-4 md:mb-20'>
            <SectionTitle heading="chef recommends" subHeading="Should Try" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    populars.slice(0, 3).map(popular => <div className="card bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                src={popular.image}
                                alt={popular.name}
                                className='w-full' />
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="card-title">{popular.name}</h2>
                            <p className='text-xs text-center'>{popular.recipe}</p>
                            <div className="card-actions justify-end">
                                <Button  text="add to cart" color="yellow"/>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recommends;