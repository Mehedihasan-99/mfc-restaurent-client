import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Call from '../Call/Call';
import Cover from '../../Shared/Cover/Cover';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
import bgImg from "../../../assets/home/chef-service.jpg"
import Recommends from '../Recommends/Recommends';

const Home = () => {
    const [bgColor, setBgColor] = useState(true)

    const description = "MFC Restaurant offers a delightful dining experience with diverse dishes, fresh ingredients, and exceptional service. Enjoy a cozy ambiance perfect for family gatherings, romantic dinners, or casual outings. Savor the flavors!"

    return (
        <div>
            <Helmet>
                <title>MFC Restaurant | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <Cover
                img={bgImg}
                title={"MFC Restaurant"}
                description={description}
                bgColor={bgColor}
            />
            <PopularMenu />
            <Call />
            <Recommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;