import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleForm = event => {
        event.preventDefault();
        console.log("Hello");

    }
    return (
        <div className="hero  min-h-[80vh] ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
                    <div className="card-body w-96 text-center">
                        <p className=' font-semibold text-xl mb-4'>Login</p>
                        <form onSubmit={handleForm} className="form-control">
                            <input type="text" placeholder="Full Name" className="input input-bordered mb-3 " />
                            <input type="text" placeholder="Phone Number" className="input input-bordered mb-3" />
                            <input type="text" placeholder="Email" className="input input-bordered" />
                            <label className="label">
                                <Link  className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>

                            <input type="submit" value="Submit" className='btn mt-6' />
                        </form>
                        <p className='text-xs'>New to Doctors Portal? <Link className=' text-secondary cursor-pointer'>Create new account</Link></p>

                        <div className="flex flex-col w-full border-opacity-50">
                            
                            <div className="divider">OR</div> 
                        </div>

                        <button className="btn btn-outline ">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;