import React from 'react';

const SectionHeader = ({subHeading, heading}) => {
    return (
        <div className='text-center mb-8 w-1/4  mx-auto'>
            <p className='text-xl italic text-yellow-500'>---{subHeading}---</p>
            <h2 className='border-0 border-y-4 uppercase text-4xl py-3'>{heading}</h2>
            
        </div>
    );
};

export default SectionHeader;