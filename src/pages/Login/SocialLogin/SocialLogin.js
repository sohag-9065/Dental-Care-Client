import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let signInErrorMesseage;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        signInErrorMesseage = <p>Error: {error.message}</p> ;
    }

    
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            { signInErrorMesseage }
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline w-full">
                CONTINUE WITH GOOGLE
            </button>
        </div>

    );
};

export default SocialLogin;