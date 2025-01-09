import React, { useEffect, useState } from 'react';
import SectionHeader from '../../../Components/Section/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Button from '../../../Components/Button/Button';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [ menu ]  = useMenu()
    const popular = menu.filter(item => item.category == "salad")
    
    // const [ menu, setMenu ] = useState([]);
    // useEffect( ()=> {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category == "salad")
    //         setMenu(popularItem)
    //     })
    // }, [])
    
    
    return (
        <div className='w-11/12 md:w-10/12 mx-auto flex flex-col items-center  mb-4 md:mb-20'>
            <SectionHeader subHeading='Check it Out' heading="from our menu" />
            <div className='grid lg:grid-cols-2 gap-4 mb-4 md:mb-10'>
                {
                    popular.slice(0, 6).map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    />)
                }
            </div>
            <Button text="view full menu"/>
        </div>
    );
};

export default PopularMenu;