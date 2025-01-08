import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/Section/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [ menu, setMenu ] = useState([]);
    useEffect( ()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category == "salad")
            setMenu(popularItem)
        })
    }, [])

    console.log(menu)
    
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-20'>
            <SectionHeader subHeading='Check it Out' heading="from our menu" />
            <div className='grid lg:grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;