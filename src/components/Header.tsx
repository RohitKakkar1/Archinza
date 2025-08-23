import React, { useState } from 'react';
import { Sun, Moon, Menu, X, LogIn } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="relative lg:fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 px-4 sm:px-2 lg:px-8 py-2 lg:py-4 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-between">
        
        {/* MOBILE HEADER */}
        <div className="w-full flex items-center justify-between lg:hidden">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
{menuOpen ? (
  <X className="w-6 h-6 text-gray-800 dark:text-white" />
) : (
  <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
)}

          </button>

          {/* Logo */}
          <Link to="/" className="flex-1 text-center">
            <img
              src="/Archinza-Logo-light.png"
              alt="Archinza Logo Light"
              className="h-8 mx-auto dark:hidden"
            />
            <img
              src="/Archinza-Logo-dark.png"
              alt="Archinza Logo Dark"
              className="h-8 mx-auto hidden dark:block"
            />
          </Link>

          {/* Login Icon */}
          <Link
            to="http://174.138.123.146:9028/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogIn className="w-6 h-6 ml-auto text-gray-800 dark:text-white" />
          </Link>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-full h-[100vh] left-0 w-full bg-white/95 dark:bg-gray-900/95 shadow-md py-4 flex flex-col items-start pl-8 space-y-4 lg:hidden z-50">
            <NavLink
              to="/business"
              onClick={() => setMenuOpen(false)}
className="text-gray-800 dark:text-white hover:text-blue-600 text-lg"
            >
              For Businesses
            </NavLink>
            <NavLink
              to="/personal"
              onClick={() => setMenuOpen(false)}
className="text-gray-800 dark:text-white hover:text-blue-600 text-lg"
            >
              For Individuals
            </NavLink>
            <div>
              <p className="text-gray-800 dark:text-white">About</p>
              <div className="flex flex-col items-center mt-2 space-y-1 text-lg text-gray-600 dark:text-gray-300">
                <a href="#">Team</a>
                <a href="#">Vision</a>
              </div>
            </div>
            <a href="#" className="text-gray-800 dark:text-white hover:text-blue-600 text-lg">
              Blogs
            </a>
            <Link to="http://174.138.123.146:9028/register" target="_blank">
              <button className="px-4 py-2 mt-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Sign Up
              </button>
            </Link>
            <Link to="/businessview" target="_blank">
              <button className="px-4 py-2 mt-2 bg-white text-blue-700 rounded-full hover:bg-blue-700">
                Login
              </button>
            </Link>
            <NavLink
              to="/businessview"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? 'text-blue-600 font-semibold dark:text-blue-500' : ''
                }`
              }
            >
              View page
            </NavLink>
            
             {/* Dark mode toggle */}
            <div className="flex items-center justify-start pt-3">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 text-gray-800 dark:text-white"
              >
                {isDark ? <Moon size={18} /> : <Sun size={18} />}
                <span className="text-sm">
                  {isDark ? "Dark Mode" : "Light Mode"}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* DESKTOP HEADER */}
        <div className="hidden lg:flex w-full items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/Archinza-Logo-light.png"
              alt="Archinza Logo Light"
              className="h-8 w-auto dark:hidden"
            />
            <img
              src="/Archinza-Logo-dark.png"
              alt="Archinza Logo Dark"
              className="h-8 w-auto hidden dark:block"
            />
          </Link>

          <div className="flex space-x-8 text-base text-gray-600 dark:text-gray-100">
            <NavLink
              to="/business"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? 'text-blue-600 font-semibold dark:text-blue-500' : ''
                }`
              }
            >
              For Businesses
            </NavLink>

            <NavLink
              to="/personal"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? 'text-blue-600 font-semibold dark:text-blue-500' : ''
                }`
              }
            >
              For Individuals
            </NavLink>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                About
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="hidden absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md py-2 group-hover:block z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Team</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Vision</a>
              </div>
            </div>

            <button className="hover:text-blue-600 transition">Blogs</button>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <Link to="http://174.138.123.146:9028/login" target="_blank" rel="noopener noreferrer">
              <button className="hover:text-blue-600 dark:text-white">Log-In</button>
            </Link>
            <Link to="/businessview" target="_blank" rel="noopener noreferrer">
              <button className="group inline-flex items-center justify-center px-6 py-3 border border-blue-600 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:border-blue-700">
                Sign Up
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
              <NavLink
              to="/businessview"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive ? 'text-blue-600 font-semibold dark:text-blue-500' : ''
                }`
              }
            >
              View page
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
