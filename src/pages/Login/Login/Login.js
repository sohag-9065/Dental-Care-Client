import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    let signInErrorMesseage;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        signInErrorMesseage = <p>Error: {error.message}</p> ;
    }

    if (user) {
        navigate('/dashboard')
    }

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        console.log(data);
    };


    return (
        <div className="hero  min-h-[80vh] ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl ">
                    <div className="card-body w-96 text-center">
                        <p className=' font-semibold text-xl mb-4'>Login</p>
                         
                        {/* React hook form  */}
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered mb-1 "
                                placeholder='Email'
                                {...register("email",
                                    {
                                        required: "Email Address is required",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    }
                                )}
                                aria-invalid={
                                    errors.email ? "true" : "false"
                                }
                            />

                            {errors.email?.type === 'required' && <p role="alert">{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">{errors.email?.message}</p>}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered mb-1"
                                placeholder='Password'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 charecters or longer",
                                    }
                                }
                                )}


                            />
                            {errors.password?.type === 'required' && <p role="alert">{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p role="alert">{errors.password?.message}</p>}
                            { signInErrorMesseage }
                            <input type="submit" className='btn mt-6' value="Login" />
                        </form>
                        {/* <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                            <input {...register("firstName", { required: true, maxLength: 20 })} className="input input-bordered mb-3 " />
                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} className="input input-bordered mb-3" />
                            <input type="number" {...register("age", { min: 18, max: 99 })} className="input input-bordered mb-3" />
                            <input type="submit" />
                        </form> */}



                        {/* Normal form  */}
                        {/* <form onSubmit={handleForm} className="form-control">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered mb-3 " required />
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>

                            <input type="submit" value="Submit" className='btn mt-6' />
                        </form> */}
                        <p className='text-xs'>New to Doctors Portal? <Link to="../register" className=' text-secondary cursor-pointer'>Create new account</Link></p>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;