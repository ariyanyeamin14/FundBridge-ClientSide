import React, { useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { AuthContex } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter';

const AddNewCampaign = () => {
    const { user } = useContext(AuthContex)

    const handleSubmit = (event) => {
        event.preventDefault();

        // Extracting form data from the event object
        const form = event.target
        const title = event.target.title.value;
        const image = event.target.image.value;
        const type = event.target.type.value;
        const description = event.target.description.value;
        const minDonation = event.target.minDonation.value;
        const deadline = event.target.deadline.value;
        const name = event.target.name.value;
        const email = event.target.email.value;

        const newCampaign = { title, image, type, description, minDonation, deadline, name, email }

        // send data to the server
        fetch('https://fund-bridge-server.vercel.app/campaigns', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your campaign added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    };

    return (
        <div className='add-campain'>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center py-20  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div className="w-[90%] mx-auto md:w-full max-w-3xl px-5 py-10 md:p-12 bg-white rounded-lg shadow-md  dark:bg-[#0C1935] text-gray-900 dark:text-gray-100">
                    <h2 className="card-title text-3xl lg:text-5xl my-8 md:my-14">
                            <Typewriter
                                words={['Add New Campaign','Add New Campaign']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                Image/Thumbnail URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                className="input bg-gray-50 input-bordered w-full dark:text-gray-900"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>

                        {/* Campaign Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                Campaign Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                className="input bg-gray-50 input-bordered w-full dark:text-gray-900"
                                placeholder="Enter campaign title"
                                required
                            />
                        </div>

                        {/* Campaign Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                Campaign Type
                            </label>
                            <select
                                name="type"
                                className=" bg-gray-50 select select-bordered w-full dark:text-gray-900"
                                required
                            >
                                <option value="" disabled>
                                    Select type
                                </option>
                                <option value="Personal Issue">Personal Issue</option>
                                <option value="Startup">Startup</option>
                                <option value="Business">Business</option>
                                <option value="Creative Ideas">Creative Ideas</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                Description
                            </label>
                            <textarea
                                name="description"
                                className="bg-gray-50 textarea textarea-bordered w-full dark:text-gray-900"
                                placeholder="Enter a description"
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        {/* Minimum Donation Amount */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                Minimum Donation Amount ($)
                            </label>
                            <input
                                type="number"
                                name="minDonation"
                                className="bg-gray-50 input input-bordered w-full dark:text-gray-900"
                                placeholder="Enter minimum donation amount"
                                required
                            />
                        </div>

                        {/* Deadline */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                Deadline
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                className="bg-gray-50 input input-bordered w-full dark:text-gray-900"
                                required
                            />
                        </div>

                        {/* User Email (Read Only) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                User Email
                            </label>
                            <input
                                type="email"
                                defaultValue={user?.email}
                                name='email'
                                readOnly
                                className="input input-bordered w-full bg-gray-50 cursor-not-allowed dark:text-gray-900"
                            />
                        </div>

                        {/* User Name (Read Only) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                                User Name
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                name='name'
                                readOnly
                                className="input input-bordered w-full bg-gray-50 cursor-not-allowed dark:text-gray-900"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="btn bg-[#1d22b8] dark:bg-[#f0f647] dark:text-black border-none text-white  btn-primary w-full flex items-center justify-center"
                            >
                                <FaPlusCircle className="mr-2" />
                                Add Campaign
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default AddNewCampaign;
