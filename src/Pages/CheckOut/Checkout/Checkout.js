import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServicesDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // if (user) {
    //     console.log(user);
    // }

    /* const [user, setUser] = useState({
        name: 'Akbor Ali Kha',
        email: 'akbor@momo.com',
        address: 'Taj Mohol Rode Md. Pur',
        phone: '01976256868'
    });

    const handleAddressChange = event => {
        console.log(event.target.value);
        const { address, ...rest } = user;
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        setUser(newUser);
    } */

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order is Booked !!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='Name' required readonly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='Email' required readonly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service?.name} name="service" placeholder='Service' required readonly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={user?.address} name="address" placeholder='Address' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user?.phone} name="phone" placeholder='Phone Number' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2 btn btn-primary' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Checkout;