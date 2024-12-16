'use client'
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      localStorage.setItem('cookiesAccepted', 'true');
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Background blur effect */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        aria-hidden="true"
      />

      {/* Cookie consent box */}
      <div
        className={clsx(
          'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-lg bg-white text-gray-800 p-6 rounded-xl shadow-2xl z-50 transition-all duration-500 ease-out',
          isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        )}
      >
        <h2 className="text-lg font-semibold text-center mb-4">
          🍪 We Value Your Privacy
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-center leading-relaxed">
          This website uses cookies to ensure you get the best experience. By continuing to browse, you agree to the use of cookies.
          Learn more by reading our{' '}
          <Link
            href="/privacy"
            className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
          >
            Privacy Policy
          </Link>.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 text-black font-medium py-2 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            Got it!
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
