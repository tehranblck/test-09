import React, { useState } from "react";

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate sign-up
        if (email && password) {
            localStorage.setItem("userEmail", email); // Save email in localStorage
            alert("Account created and signed in successfully!");
            window.location.reload(); // Refresh the page to update the navbar state
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
