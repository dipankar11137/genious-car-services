import React from 'react';
import { toast } from 'react-toastify';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?');
        if (proceed) {
            const url = `https://immense-basin-31945.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const remainning = services.filter(service => service._id !== id)
                    setServices(remainning);
                    toast('Delete this services');
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Manages Your Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button
                        onClick={() => handleDelete(service._id)}
                        className='btn btn-primary'
                    >X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;