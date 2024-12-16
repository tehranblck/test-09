import React from "react";

const SignUpForm: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
