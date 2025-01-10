import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

// img 
import menuCover from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [ menu ] = useMenu()
    const offers = menu.filter(item => item.category == "offered")
    const desserts = menu.filter(item => item.category == "dessert")
    const pizzas = menu.filter(item => item.category == "pizza")
    const salads = menu.filter(item => item.category == "salad")
    const soups = menu.filter(item => item.category == "soup")

    
    const menuDescribtion = "Explore a diverse menu featuring fresh ingredients, bold flavors, and delightful dishes. From appetizers to desserts, every bite is crafted to perfection, offering something special for every taste."
    const dessertDescribtion = "Explore a diverse menu featuring fresh ingredients, bold flavors, and delightful dishes. From appetizers to desserts, every bite is crafted to perfection, offering something special for every taste."
    const pizzaDescribtion = "Explore a diverse menu featuring fresh ingredients, bold flavors, and delightful dishes. From appetizers to desserts, every bite is crafted to perfection, offering something special for every taste."
    const saladDescribtion = "Explore a diverse menu featuring fresh ingredients, bold flavors, and delightful dishes. From appetizers to desserts, every bite is crafted to perfection, offering something special for every taste."
    const soupDescribtion = "Explore a diverse menu featuring fresh ingredients, bold flavors, and delightful dishes. From appetizers to desserts, every bite is crafted to perfection, offering something special for every taste."

    return (
        <div>
            <Helmet>
                <title> MFC Restaurant | Menu</title>
            </Helmet>
            <Cover
                img={menuCover}
                title="our menu"
                description={menuDescribtion}
            ></Cover>
            <SectionTitle
                heading="today's offer"
                subHeading="Don't miss"
            >
            </SectionTitle>
            <MenuCategory items={offers} />
            {/* desserts  */}
            <MenuCategory 
            items={desserts} 
            img={dessertImg}
            title="dessert"
            description={dessertDescribtion}
            />
            {/* pizzza  */}
            <MenuCategory 
            items={pizzas} 
            img={pizzaImg}
            title="pizza"
            description={pizzaDescribtion}
            />
            {/* salads  */}
            <MenuCategory 
            items={salads} 
            img={saladImg}
            title="salad"
            description={saladDescribtion}
            />
            {/* soups  */}
            <MenuCategory 
            items={soups} 
            img={soupImg}
            title="soup"
            description={soupDescribtion}
            />
        </div>
    );
};

export default Menu;