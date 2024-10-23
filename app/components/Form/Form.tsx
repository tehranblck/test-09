"use client";

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    toast.success("Form submitted successfully!");
    console.log(data);
  };

  const onError = () => {
    toast.error("Please fill in all required fields.");
  };

  return (
    <section className='mt-32 bg-green'>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need
          details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className={`shadow-sm outline-none bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className={`block outline-none p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                errors.subject ? "border-red-500" : ""
              }`}
              placeholder="Let us know how we can help you"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows={6}
              className={`block outline-none p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Leave a comment..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
            )}  
          </div>

          {/* Button to submit the form */}
          <Button href='#' onClick={handleSubmit(onSubmit, onError)} buttonText="Send" />
          
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Form;
