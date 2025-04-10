import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="text-white">
      {/* Navbar Container */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo/Brand */}
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-shadow-amber-100">
            Home
          </a>
        </div>

        {/* Dropdown Icon */}
        <button
          onClick={toggleDropdown}
          className="rounded-md p-2 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
        >
          {/* Toggle between hamburger menu and close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isDropdownOpen ? (
              // Close icon (X)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger menu
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Full-Screen Dropdown */}
      {isDropdownOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center"
          onClick={toggleDropdown} // Close dropdown when clicking outside
        >
          <div
            className="w-full max-w-md rounded-lg bg-white p-8 text-gray-800 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Links */}
            <ul className="space-y-4 text-center">
              <li>
                <a href="#" className="text-lg hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>

            {/* Button */}
            <div className="mt-8">
              <button className="w-full rounded-md bg-blue-600 py-2 text-white transition duration-300 hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
