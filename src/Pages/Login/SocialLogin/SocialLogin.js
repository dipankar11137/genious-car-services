import React from 'react';
import google from '../../../Images/Icon/google.png'
import facebook from '../../../Images/Icon/facebook.png'
import github from '../../../Images/Icon/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>

    }
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-info w-75 d-block mx-auto mb-2">
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2 fw-bold fs-5'> Google Sign In</span>
                </button>
                <button className="btn btn-info w-75 d-block mx-auto mb-2">
                    <img className='img-style' style={{ width: '50px' }} src={facebook} alt="" />
                    <span className='px-2 fw-bold fs-5'> Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-info w-75 d-block mx-auto">
                    <img className='img-style' style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2 fw-bold fs-5'> Github Sign In</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;