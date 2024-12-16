import React from "react";

const SignInForm: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form>
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
                        placeholder="Enter your password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignInForm;
