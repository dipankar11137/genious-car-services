import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    // if (!user.emailVerified) {
    //     return <div>
    //         <h3 className='text-danger'>Your Email not Verified</h3>
    //         <h5 className='text-success'>Please Verify your email Address</h5>
    //         <button
    //             className='btn btn-primary'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 alert('Sent email');
    //                 toast('Sent email by tost');
    //             }}
    //         >
    //             Send Verification email Again
    //         </button>
    //         <ToastContainer></ToastContainer>
    //     </div>
    // }
    return children;
};

export default RequiredAuth;