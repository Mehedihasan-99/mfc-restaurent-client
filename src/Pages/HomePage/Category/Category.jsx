import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <SectionTitle
                subHeading="From 11:00am to 10:00pm" 
                heading="order online"
            />
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-5 md:mb-20"
            >
                <SwiperSlide>
                    <img
                        src={slide1}
                        alt="" />
                    <h2 className="uppercase text-white text-center -mt-16 font-medium md:text-lg">salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className="uppercase text-white text-center -mt-16 font-medium md:text-lg">pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className="uppercase text-white text-center -mt-16 font-medium md:text-lg">soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className="uppercase text-white text-center -mt-16 font-medium md:text-lg">desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className="uppercase text-white text-center -mt-16 font-medium md:text-lg">salad</h2>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Category;