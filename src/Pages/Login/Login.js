import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const navigate = useNavigate();

    const { logIn,setUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch(err => {
                console.log(err)
            
        })
        
    }
    return (
        <div className='flex mb-48 mt-32'>
            <div className='ml-32 w-1/2'>
                <img src={login} alt="" />
            </div>

            <div className="hero w-1/2 mr-32 ">
                <form className='w-3/4' onSubmit={handleSubmit}>
                        <div className="hero-content flex-col"> 
                            <div className="text-center pb-4">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-inter">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-inter">Password</span>
                                        </label>
                                        <input type="text" name='password' placeholder="password" className="input input-bordered" />

                                    <div className="label">
                                        <Link to="/signup" className="label-text-alt font-inter link link-hover text-sm text-default">New to Genius Car? Create Account</Link>  
                                    </div>
                                    <div>
                                        <Link to="/" className='label-text-alt link link-hover text-sm font-inter text-default' ><p>Rest Password</p></Link>
                                    </div>
                                    
                                        {/* {success && <p className='text-green-700'>Congratulations Successfully logged in.</p>} */}


                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn bg-default border-none hover:bg-default">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Login;