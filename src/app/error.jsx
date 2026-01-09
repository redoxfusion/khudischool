'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFDF9]">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-[#264A4A] mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-[#428180] text-white px-6 py-3 rounded-xl hover:bg-[#264A4A] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
