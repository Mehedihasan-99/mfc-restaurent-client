import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "react-rating-stars-component";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-4 md:mb-20'>
            <SectionTitle
                subHeading="What Our clients Say"
                heading="testimonials" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}>
                        <div className='flex flex-col items-center gap-4 md:mt-10'>
                        <Rating
                            value={review.rating}
                            size={40} />
                        <FaQuoteLeft className='size-12 md:size-24' />
                        <p className='text-xs md:text-sm text-gray-500 w-10/12'>{review.details}</p>
                        <h3 className='text-2xl font-semibold text-yellow-600'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;