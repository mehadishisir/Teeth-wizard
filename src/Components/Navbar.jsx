import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const activeClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700";
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-blue-600">TeethWizard</div>

      {/* Center: Nav Links */}
      <div className="flex gap-8">
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>

        <NavLink to="/alltreatments" className={activeClass}>
          All Treatments
        </NavLink>

        <NavLink to="/myappointment" className={activeClass}>
          My Appointment
        </NavLink>

        <NavLink to="/profile" className={activeClass}>
          Profile
        </NavLink>
      </div>

      {/* Right: Login Button */}
      <div>
        <button className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
