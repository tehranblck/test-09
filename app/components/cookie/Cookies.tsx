'use client'
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check for "cookiesAccepted" in localStorage
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Trigger exit animation
    setIsAnimatingOut(true);
    setTimeout(() => {
      localStorage.setItem('cookiesAccepted', 'true');
      setIsVisible(false);
    }, 500); // Duration should match animation time
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Background blur effect */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />

      {/* Cookie consent box */}
      <div
        className={clsx(
          'fixed top-1/2 bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-1/2 lg:w-1/3 bg-gray-800 text-white p-6 rounded-lg shadow-lg z-50 transition-all duration-500 ease-out',
          isAnimatingOut ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        )}
      >
        <p className="text-sm text-black md:text-base mb-4 text-center">
          We use cookies to enhance your user experience. By using our site, you accept the use of cookies.
          <Link className="text-blue-300 underline hover:text-blue-500 ml-1" href="/privacy">
              Read our Privacy Policy
          </Link>.
        </p>
        <div className="text-center">
          <button
            onClick={handleAccept}
            className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
