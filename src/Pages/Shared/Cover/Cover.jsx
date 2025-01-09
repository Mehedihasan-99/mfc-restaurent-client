import { Parallax } from 'react-parallax';
const Cover = ({ img, title, description, bgColor }) => {
    return (
        <div className='mb-4 md:mb-20'>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='w-11/12 md:w-10/12 mx-auto p-10 max-h-[700px'>
                    <div className={`md:m-20 ${bgColor ? "bg-white" : "bg-black"} p-5 md:p-10  flex flex-col items-center gap-2`}
                    >
                        <h2 className='text-xl md:text-2xl'>{title}</h2>
                        <p className='text-xs'>{description}</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;