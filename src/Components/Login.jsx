import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContex } from '../Providers/AuthProvider';

const Login = () => {
    const { signInUser, signInUserWithGoogle } = useContext(AuthContex)
    const [email, setEmail] = useState('');

    const handleGoogleSignin = () => {
        signInUserWithGoogle()
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
        <div className='w-[90%] md:w-[85%] mx-auto my-20 '>
            <div className='text-center'>
                <div className="btn btn-ghost nav-logo text-xl lg:text-2xl font-extrabold mb-10"><p>FundBridge</p> </div>
                <h2 className=' text-4xl font-semibold'>LOGIN</h2>
            </div>
            <div>
                <div className='bg-gray-200 py-3 mx-8 my-10 text-center rounded-xl cursor-pointer text-gray-600' onClick={handleGoogleSignin}> <FcGoogle size={40} className='inline-block' /> Signin With Google</div>
            </div>
            <div className="divider">OR</div>
            <div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input onChange={handleEmailChange} type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to={`/forgot-password?email=${email}`} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn">Login</button>
                    </div>
                </form>
                <p className='text-center text-gray-600'>Don't have any account? <Link to={'/register'} className='font-semibold ml-2'> Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;