"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledWrapper } from '../Button/Button';

interface FormData {
  email: string;
  textarea: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    toast.success("Form submitted successfully!");
    console.log(data);
  };

  const onError = () => {
    toast.error("Please fill in all required fields.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-6 px-6">
      <div className='layer -z-10'></div>
      
      <ToastContainer />
      <div className="mt-24  backdrop-blur-2xl p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-semibold text-gray-300">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full border-none p-3 rounded bg-gray-700  outline-none border-gray-600 text-black"
              placeholder="Enter your  email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.type === 'pattern' ? "Invalid email address" : "Email is required"}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="textarea" className="text-sm font-semibold text-gray-300">
              How Can We Help You?
            </label>
            <textarea
              id="textarea"
              className="w-full border-none p-3 rounded bg-gray-700 outline-none border border-gray-600 text-black resize-none"
              rows={4}
              placeholder="Your message..."
              {...register("textarea", { required: true, minLength: 10 })}
            ></textarea>
            {errors.textarea && (
              <p className="text-sm text-red-500">
                {errors.textarea.type === 'minLength' ? "Minimum 10 characters required" : "This field is required"}
              </p>
            )}
          </div>
          <StyledWrapper>
          <button
            
           className='button'
          >
            Submit
          </button>
          </StyledWrapper>
        </form>
      </div>
    </div>
  );
};

export default Form;
