
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center mb-8 w-1/2 md:w-1/3  mx-auto'>
            <p className='text-[10px] lg:text-sm mb-2 italic text-yellow-500'>---{subHeading}---</p>
            <h2 className='border-0 border-y-4 uppercase md:text-xl lg:text-2xl py-2 md:py-3'>{heading}</h2>
            
        </div>
    );
};

export default SectionTitle;