import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCampaign = () => {
    const campaign = useLoaderData()
    const { _id, title, image, type, description, minDonation, deadline, name, email } = campaign

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

        const updatedCampaign = { title, image, type, description, minDonation, deadline, name, email }

        // send data to the server
        fetch(`http://localhost:5000/campaign/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCampaign)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Campaign updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    };
    return (
        <div className=''>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center py-20">
                <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                        Update Campaign
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Image/Thumbnail URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                defaultValue={image}
                                className="input input-bordered w-full"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>

                        {/* Campaign Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Campaign Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={title}
                                className="input input-bordered w-full"
                                placeholder="Enter campaign title"
                                required
                            />
                        </div>

                        {/* Campaign Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Campaign Type
                            </label>
                            <select
                                name="type"
                                className="select select-bordered w-full"
                                required
                                defaultValue={type}
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
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                defaultValue={description}
                                name="description"
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter a description"
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        {/* Minimum Donation Amount */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Minimum Donation Amount ($)
                            </label>
                            <input
                                type="number"
                                name="minDonation"
                                defaultValue={minDonation}
                                className="input input-bordered w-full"
                                placeholder="Enter minimum donation amount"
                                required
                            />
                        </div>

                        {/* Deadline */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Deadline
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                defaultValue={deadline}
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* User Email (Read Only) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                User Email
                            </label>
                            <input
                                type="email"
                                defaultValue={email}
                                name='email'
                                readOnly
                                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        {/* User Name (Read Only) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                User Name
                            </label>
                            <input
                                type="text"
                                defaultValue={name}
                                name='name'
                                readOnly
                                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary w-full flex items-center justify-center"
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

export default UpdateCampaign;