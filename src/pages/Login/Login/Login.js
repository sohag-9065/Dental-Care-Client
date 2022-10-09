import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (user) {
        navigate('/dashboard')
    }

    const handleForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password)
        console.log("email: ", email);
        console.log("password: ", password);
    }
    return (
        <div className="hero  min-h-[80vh] ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
                    <div className="card-body w-96 text-center">
                        <p className=' font-semibold text-xl mb-4'>Login</p>
                        <form onSubmit={handleForm} className="form-control">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered mb-3 " required />
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>

                            <input type="submit" value="Submit" className='btn mt-6' />
                        </form>
                        <p className='text-xs'>New to Doctors Portal? <Link to="../register" className=' text-secondary cursor-pointer'>Create new account</Link></p>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;