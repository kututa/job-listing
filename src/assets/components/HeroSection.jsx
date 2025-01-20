import React from 'react';
import { FaReact, FaCode, FaRocket } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <div className="bg-blue-100 rounded-xl p-8 flex justify-center items-center">
          <FaReact className="text-blue-600 text-6xl md:text-9xl" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">
          Master React & Launch Your Tech Career
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-8">
          Learn React efficiently with practical projects, build a stunning portfolio, and secure high-paying developer jobs with our comprehensive learning path.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start text-blue-600">
            <FaCode className="mr-4 text-2xl" />
            <span>Step-by-step React learning roadmap</span>
          </div>
          <div className="flex items-center justify-center md:justify-start text-blue-600">
            <FaRocket className="mr-4 text-2xl" />
            <span>Real-world project-based learning</span>
          </div>
        </div>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Start Learning Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;