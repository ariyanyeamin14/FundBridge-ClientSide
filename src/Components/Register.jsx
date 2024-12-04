import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContex } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';



const Register = () => {
    const { createUser, updateUserProfile, signinWithGoogle } = useContext(AuthContex)
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const handleGoogleSignin = () => {
        signinWithGoogle()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (!/[A-Z]/.test(password)) {
            return( Swal.fire({
                icon: "error",
                title: "Oops...",
                text:"Must have an Uppercase letter in the password" ,
                footer: 'Please try again'
              }))
        }
        if (!/[a-z]/.test(password)) {
            return ( Swal.fire({
                icon: "error",
                title: "Oops...",
                text:"Must have a Lowercase letter in the password" ,
                footer: 'Please try again'
              })
            )
        }

        if (password.length < 6) {
            return ( Swal.fire({
                icon: "error",
                title: "Oops...",
                text:"Length must be at least 6 character " ,
                footer: 'Please try again'
              })
            )
        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateUserProfile({ displayName: name, photoURL: photo })
                Swal.fire({
                    title: 'Success!',
                    text: 'Register successfull',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}` ,
                    footer: 'Please try again'
                  })
                console.log(errorMessage)
            });
    }
    return (
        <div className='w-[90%] md:w-[85%] mx-auto my-20 '>
            <div className='text-center'>
                <div className="btn btn-ghost nav-logo text-xl lg:text-2xl font-extrabold  mb-10"> <p>FundBridge</p> </div>
                <h2 className='text-4xl font-semibold'>REGISTER</h2>
            </div>
            <div className='bg-gray-200 py-3 mx-8 my-10 text-center rounded-xl cursor-pointer text-gray-600' onClick={handleGoogleSignin}> <FcGoogle size={40} className='inline-block' /> Signin With Google</div>
            <div className="divider">OR</div>
            <div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 top-8 flex items-center pr-3 text-gray-500">
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn">Register</button>
                    </div>
                </form>
                <p className='text-center text-gray-600'>Already have an account? <Link to={'/login'} className='font-semibold ml-2'> Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;