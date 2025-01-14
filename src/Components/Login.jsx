import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContex } from '../Providers/AuthProvider';

const Login = () => {
    const { signInUser, signInUserWithGoogle } = useContext(AuthContex)
    const [email, setEmail] = useState('');

    const handleGoogleSignin = () => {
        signInUserWithGoogle()
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Swal.fire({
                title: 'Success!',
                text: 'Login successfull',
                icon: 'success',
                confirmButtonText: 'Done'
            })
        })
        .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${errorMessage}`,
                footer: 'Please try again'
            });
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfull',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,
                    footer: 'Please try again'
                });
            });
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-20  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className='w-[90%] min-h-screen  className="w-[90%] mx-auto md:w-full max-w-3xl px-5 py-10 md:p-12 bg-white rounded-lg shadow-md  dark:bg-[#0c121c] text-gray-900 dark:text-gray-100'>
                <div className='text-center'>
                    <div className="btn btn-ghost nav-logo text-xl lg:text-2xl font-extrabold mb-10"><p className='dark:text-gray-100 '>FundBridge</p> </div>
                    <h2 className='dark:text-gray-100 text-4xl font-semibold'>LOGIN</h2>
                </div>
                <div>
                    <div className='bg-gray-200 py-1 md:py-3 mx-1 md:mx-8 my-10 text-center rounded-xl cursor-pointer text-gray-600' onClick={handleGoogleSignin}> <FcGoogle size={40} className='inline-block' /> Signin With Google</div>
                </div>
                <div className="divider">OR</div>
                <div>
                    <form className="card-body dark:text-gray-100 px-1 md:px-6" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Email</span>
                            </label>
                            <input onChange={handleEmailChange} type="email" name='email' placeholder="email" className="input input-bordered bg-gray-50 dark:text-gray-900" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-gray-50 dark:text-gray-900" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-[#ff2c64] border-none text-white ">Login</button>
                        </div>
                    </form>
                    <p className='text-center text-gray-600 dark:text-gray-400'>Don't have any account? <Link to={'/register'} className='font-semibold ml-2 dark:text-gray-400'> Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;