import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Call from '../Call/Call';
import Cover from '../../Shared/Cover/Cover';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    const [bgColor, setBgColor] = useState(true)

    const description = "MFC Restaurant offers a delightful dining experience with diverse dishes, fresh ingredients, and exceptional service. Enjoy a cozy ambiance perfect for family gatherings, romantic dinners, or casual outings. Savor the flavors!"

    return (
        <div>
            <Banner />
            <Category />
            <Cover
                title={"MFC Restaurant"}
                description={description}
                bgColor={bgColor} />
            <PopularMenu />
            <Call />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;