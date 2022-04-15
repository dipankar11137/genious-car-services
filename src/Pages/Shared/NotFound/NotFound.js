import React from 'react';
import cat from '../../../Images/cat.png'

const NotFound = () => {
    return (
        <div className=''>
            <h2 className='text-center text-primary fw-bold'>Mechanic is sleeping</h2>
            <img className='text-center' src={cat} alt="" />
        </div>
    );
};

export default NotFound;