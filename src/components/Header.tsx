import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import { ArrowRight } from 'lucide-react';
const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 lg:px-8 py-4 rounded-b-xl">
  
    <div className="max-w-7xl mx-auto flex justify-between items-center">

      <Link to="" className="">
      <div className="text-xl font-bold">
        {/* Light Mode Logo */}
        <img
          src="/Archinza-Logo-light.png"
          alt="Archinza Logo Light"
          className="h-8 w-auto dark:hidden"
        />

        {/* Dark Mode Logo */}
        <img
          src="/Archinza-Logo-dark.png"
          alt="Archinza Logo Dark"
          className="h-8 w-auto hidden dark:block"
        />
      </div>        

      </Link>

<div className="flex space-x-8 font-sans text-gray-600  dark:text-gray-100 text-base">
                <NavLink
                to="/business"
                className={({ isActive }) =>
                  `transition hover:text-blue-600 dark:text-white ${
                    isActive ? 'text-blue-600 font-semibold dark:text-blue-500' : 'text-gray-600 '
                  }`
                }
              >
                For Businesses
              </NavLink>

            <NavLink
                to="/personal"
                className={({ isActive }) =>
                  `transition hover:text-blue-600 dark:text-white ${
                    isActive ? 'text-blue-600 font-semibold dark:text-blue-500' : 'text-gray-600'
                  }`
                }
              >
                For Individuals
              </NavLink>


            
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                About
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown if needed */}
              <div className="hidden absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 group-hover:block z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Vision</a>
              </div>
            </div>

            <button className="hover:text-blue-600 transition">Blogs</button>
          </div>


 

                    
                    
        <div className="space-x-8 justify-center items-center">        
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg  hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>  
            <Link to="http://174.138.123.146:9028/login"   target="_blank" rel="noopener noreferrer" >
              <button className="hover:text-blue-600 transition dark:text-white">Log-In</button>
            </Link>
                  <Link to="http://174.138.123.146:9028/register" target="_blank" rel="noopener noreferrer">
                    <button className="group inline-flex items-center justify-center px-6 py-3 border border-blue-600 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105">
                      Sign Up
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 " />
                    </button>
                  </Link>
        </div> 

      </div>
    </header>
  );
};

export default Header;