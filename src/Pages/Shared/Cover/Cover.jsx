import bgImg from '../../../assets/home/chef-service.jpg'

const Cover = ({ title, description, bgColor }) => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto p-10 bg-cover bg-fixed mb-4 md:mb-20'
        style={{ backgroundImage: `url(${bgImg})`}}>
            <div className={`md:m-20 ${bgColor ? "bg-white" : "bg-black" } p-5 md:p-10  flex flex-col items-center gap-2`}
            >
                <h2 className='text-xl md:text-2xl'>{title}</h2>
                <p className='text-xs'>{description}</p>
            </div>
        </div>

    );
};

export default Cover;