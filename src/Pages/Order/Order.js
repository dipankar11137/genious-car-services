import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://immense-basin-31945.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();

        /*  fetch('https://immense-basin-31945.herokuapp.com/order')
             .then(res => res.json())
             .then(data => setOrders(data)) */
    }, [user]);

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Your order : {orders.length}</h2>
            <div className='shadow-lg p-3 mt-3'>
                {
                    orders.map(order => <div key={order._id}>
                        <p>{order.email} : {order.service}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Order;