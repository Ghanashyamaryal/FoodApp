import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Offer", to: "/offer" },
  { name: "Service", to: "/service" },
  { name: "Menu", to: "/product-listing" },
  { name: "About Us", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { cart } = useContext(AppContext);
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <header className="w-full bg-[#fff4ee] shadow-sm">
      <nav className="max-w-[1360px] mx-auto flex items-center justify-between px-4 py-3 w-full">
        {/* Brand */}
        <div className="font-bold text-2xl text-gray-800">Foodle</div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center flex-1 justify-center w-full">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`text-gray-600 font-medium hover:text-gray-900 transition relative cursor-pointer ${location.pathname === link.to ? 'text-gray-900 font-bold' : ''}`}
              >
                {link.name}
                {location.pathname === link.to && (
                  <span className="block h-0.5 w-6 bg-red-300 rounded mx-auto mt-1"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {/* Auth Buttons & Cart */}
        <div className="flex gap-2 items-center">
          <Link to="/login" className="text-red-400 font-medium px-4 py-1 cursor-pointer">Login</Link>
          <Link to="/signup" className="border border-red-300 text-red-400 font-medium px-4 py-1 rounded-full hover:bg-red-50 transition cursor-pointer">Sign Up</Link>
          {/* Cart Icon */}
          <Link to="/cart" className="relative ml-2 text-gray-700 cursor-pointer flex items-center">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
              {cartCount}
            </span>
          </Link>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden ml-2 text-gray-700 cursor-pointer" onClick={() => setOpen(!open)}>
          <FaBars size={22} />
        </button>
      </nav>
      {/* Mobile Nav */}
      {open && (
        <ul className="md:hidden bg-[#fff4ee] px-4 pb-4 space-y-2 w-full">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`block py-2 text-gray-600 font-medium hover:text-gray-900 transition cursor-pointer ${location.pathname === link.to ? 'text-gray-900 font-bold' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login" className="block py-2 text-red-400 font-medium cursor-pointer" onClick={() => setOpen(false)}>Login</Link>
          </li>
          <li>
            <Link to="/signup" className="block py-2 border border-red-300 text-red-400 font-medium rounded-full text-center hover:bg-red-50 transition cursor-pointer" onClick={() => setOpen(false)}>Sign Up</Link>
          </li>
          {/* Cart Icon Mobile */}
          <li>
            <Link to="/cart" className="relative flex items-center py-2 text-gray-700 cursor-pointer" onClick={() => setOpen(false)}>
              <FaShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {cartCount}
              </span>
              <span className="ml-2">Cart</span>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar; 