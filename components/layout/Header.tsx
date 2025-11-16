import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyStay
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for properties..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex gap-4 overflow-x-auto">
          {["Rooms", "Mansion", "Countryside", "Villa", "Apartment"].map(
            (type) => (
              <span
                key={type}
                className="px-4 py-1 bg-white rounded-full shadow-sm text-gray-700 cursor-pointer hover:bg-blue-100 whitespace-nowrap"
              >
                {type}
              </span>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
