import React, { useState } from 'react';
import { FaRocket, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-md relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        vinnie
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-blue-600 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Nav Links */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex 
        flex-col 
        md:flex-row 
        absolute 
        md:relative 
        top-full 
        left-0 
        w-full 
        md:w-auto 
        bg-white 
        md:bg-transparent 
        shadow-md 
        md:shadow-none 
        space-y-4 
        md:space-y-0 
        md:space-x-6 
        p-4 
        md:p-0
      `}>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 transition-colors block md:inline"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 transition-colors block md:inline"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 transition-colors block md:inline"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </a>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 transition-colors block md:inline"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>

        {/* Get Started Button for Mobile */}
        <button className="md:hidden flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Get Started
          <FaRocket className="ml-2" />
        </button>
      </div>

      {/* Get Started Button for Desktop */}
      <button className="hidden md:flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Get Started
        <FaRocket className="ml-2" />
      </button>
    </nav>
  );
}

export default Navbar;