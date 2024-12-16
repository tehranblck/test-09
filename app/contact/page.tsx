"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!message || message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setSubmitted(true);
    toast.success("Your message has been successfully sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center mt-12 bg-gradient-to-b from-gray-800 to-black text-white py-16 px-6 relative">
      <ToastContainer />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact-bg.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-20"
        />
      </div>

      {/* Main Container */}
      <div className="container max-w-5xl bg-gray-900/80 backdrop-blur-md rounded-lg shadow-2xl p-8">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-400 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300">
            Have a question or feedback? We'd love to hear from you! Drop us a
            message, and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Form or Success Message */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="p-4 rounded-lg text-black bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="p-4 h-40 rounded-lg text-black bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Thank you!</h2>
            <p className="text-gray-300">
              Your message has been successfully sent. We&apos;ll get back to
              you as soon as possible.
            </p>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-2">Email us directly at:</p>
          <a
            href="mailto:contact@mysterymice.com"
            className="text-blue-400 hover:underline"
          >
            contact@mysterymice.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
