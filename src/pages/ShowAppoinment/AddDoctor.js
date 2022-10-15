import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loading, setLoding] = useState(false);


    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()),);

    const imagestorageKey = '3582de6481b734f98ff58713b1465520';


    if (isLoading || loading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagestorageKey}`;
        setLoding(true)
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // sent to database of doctor information 
                fetch('http://localhost:5000/doctor',{
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    setLoding(false)
                    if(inserted.insertedId){
                        toast.success("Doctor added successfully");
                        reset();
                    }
                    else{
                        toast.error("Failed to add the doctor");
                    }
                    console.log('doctor', inserted);
                })
            }
            console.log('imgbb: ' , result);
        })
        console.log("Data:", data);
    };
    return (
        <div>
            <h1 className='text-2xl'>Add a new doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control max-w-xs">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered mb-1 "
                    placeholder='Full Name'
                    {...register("name",
                        {
                            required: "Full Name is required",
                        }
                    )}
                />
                {errors.name?.type === 'required' && <p role="alert">{errors.name?.message}</p>}
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
                    <span className="label-text">Specialization</span>
                </label>
                <select {...register("specialty")} className="select input input-bordered mb-1">
                    {
                        services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)
                    }
                    
                </select>

                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input
                    type="file"
                    className="input input-bordered mb-1  py-2"
                    {...register("image",
                        {
                            required: "Image is required",
                        }
                    )}
                />
                {errors.image?.type === 'required' && <p role="alert">{errors.image?.message}</p>}

                <input type="submit" className='btn mt-6' value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;