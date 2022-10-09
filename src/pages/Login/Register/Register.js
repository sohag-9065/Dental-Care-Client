import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    if (user ) {
        navigate('/login')
    }

    const handleForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password);
        console.log("email: ", email);
        console.log("password: ", password);
    }
    return (
        <div className="hero  min-h-[80vh] ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
                    <div className="card-body w-96 text-center">
                        <p className=' font-semibold text-xl mb-4'>Sign Up</p>
                        <form onSubmit={handleForm} className="form-control">
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered mb-3 " required/>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered mb-3 " required/>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required/>
                            
                            <input type="submit" value="Submit" className='btn mt-6' />
                        </form>
                        <p className='text-xs'>Are you member of Doctors Portal? <Link to="../login" className=' text-secondary cursor-pointer'>Please Login</Link></p>

                        <SocialLogin></SocialLogin>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;