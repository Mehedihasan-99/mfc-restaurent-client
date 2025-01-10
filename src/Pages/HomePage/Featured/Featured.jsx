import Button from '../../../Components/Button/Button';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div
            className='mb-4 md:mb-20 md:mt-10 text-white bg-cover bg-fixed'
            style={{ backgroundImage: `url(${featuredImg})` }}>
            <div className='py-4 md:py-20 bg-black bg-opacity-60'> 
                <SectionTitle
                    subHeading="Click it Out"
                    heading="form our menu"
                />
                <div className='flex flex-col md:flex-row gap-10 items-center w-11/12 md:w-10/12 mx-auto'>
                    <img
                        src={featuredImg}
                        alt=""
                        className='w-11/12 md:w-1/2' />
                    <div className='w-11/12 md:w-1/2'>
                        <p className='text-lg'>March 20, 2024</p>
                        <h4 className='text-2xl'>where can i get some?</h4>
                        <p className='text-xs mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officiis ipsam rem ea, distinctio inventore quae impedit quos nesciunt neque nulla quasi similique eius consectetur, voluptas maxime quia sit pariatur.</p>
                        <Button text="read more" color="white"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;