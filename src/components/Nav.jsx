import React from "react";
import { Link } from "react-router-dom";

function Nav({ darkMode, toggleTheme }) {
  return (
    <nav className={`w-full h-[100px] p-10 flex justify-between items-center text-white ${darkMode ? "bg-gray-900" : "bg-blue-500"}`}>
      <h1 className="text-[30px]">Logo</h1>
      <div className="text-[20px]">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/Notes">Notes</Link>
      </div>
      <button onClick={toggleTheme} className="bg-white text-blue-400 px-4 py-2 rounded-md">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Nav;
