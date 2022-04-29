import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServicesDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div className='text-center'>
            <h2>You are about the book : </h2>
            <div>
                <img src={service.img} alt="" />
                <h3>Name : {service.name}</h3>
            </div>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;