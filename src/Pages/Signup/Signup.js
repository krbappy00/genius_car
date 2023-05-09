import React from 'react';
import login from '../../assets/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';


const Signup = () => {
    const { createUser } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const phone = form.phone_number.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = first_name;
                user.phoneNumber = phone;
                console.log(user);

                    
            })
        .catch(err => {
            console.log(err);
            })


    }
    return (
        <div className='flex mb-48 items-center mt-12'>
            <div className='ml-32 w-1/2'>
                <img src={login} alt="" />
            </div>
            <div className="hero w-1/2 mr-32  ">
                <form className='w-full' onSubmit={handleSubmit}>
                        <div className="hero-content flex-col"> 
                            <div className="text-center pb-4">
                                <h1 className="text-5xl font-bold">SignUp</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-inter">First Name</span>
                                        </label>
                                        <input type="text" placeholder="First Name" name='first_name' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-inter">Last Name</span>
                                        </label>
                                        <input type="text" name='last_name' placeholder="Last Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-inter">Phone Number</span>
                                        </label>
                                        <input type="number" name='phone_number' placeholder="Phone Number" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-inter">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-inter">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn bg-default border-none hover:bg-default">SignUp</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Signup;