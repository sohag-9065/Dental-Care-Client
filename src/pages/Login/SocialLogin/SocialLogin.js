import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [
        signInWithGoogle,
        user,
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (user) {
        console.log("Boldi");
        navigate('/dashboard')
    }
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline w-full">
                CONTINUE WITH GOOGLE
            </button>
        </div>

    );
};

export default SocialLogin;