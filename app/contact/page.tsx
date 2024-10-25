"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form Validation
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

    // If validation passes
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

    // Clear form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div className="relative min-h-screen flex mt-32 flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-12 px-4">
      
      {/* React Toastify Container */}
      <ToastContainer />

      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src="/images/contact-bg.jpg" // Arka plan görselinizi buraya ekleyin
          alt="Contact Us Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="container mx-auto max-w-4xl bg-gray-900/80 shadow-xl rounded-lg p-8 backdrop-blur-lg">
        
        {/* Başlık ve Açıklama */}
        <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-8">
          Get in Touch
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Whether you have questions, feedback, or just want to say hello, we&apos;re here to help! Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>

        {/* İletişim Formu */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Girdisi */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-lg font-semibold text-gray-300">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                className="p-3 rounded-lg bg-gray-800 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Mesaj Girdisi */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-lg font-semibold text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                className="p-3 h-40 rounded-lg bg-gray-800 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Butonu */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white text-black hover:bg-blue hover:text-white hover:from-blue-600 hover:to-purple-700 font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Thank you!</h2>
            <p className="text-gray-300">Your message has been successfully sent. We&apos;ll get back to you soon!</p>
          </div>
        )}

        {/* Alt Bilgi */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-lg font-semibold text-gray-300">Email:</p>
          <a href="mailto:contact@yourdomain.com" className="text-blue-400 hover:underline">
            contact@slotpanfi.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
