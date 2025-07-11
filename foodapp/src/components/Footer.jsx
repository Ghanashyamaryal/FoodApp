import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#fff4ee] border-t mt-12">
    <div className="max-w-[1360px] mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Brand & Copyright */}
      <div className="flex flex-col items-center md:items-start">
        <span className="text-3xl font-extrabold text-orange-500 mb-2">Foodle</span>
        <span className="text-gray-500 text-lg">&copy; {new Date().getFullYear()} Foodle. All rights reserved.</span>
      </div>
      {/* Quick Links */}
      <div className="flex gap-8 text-xl font-semibold">
        <Link to="/" className="hover:text-orange-500 transition">Home</Link>
        <Link to="/menu" className="hover:text-orange-500 transition">Menu</Link>
        <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
      </div>
      {/* Social Icons */}
      <div className="flex gap-6 text-3xl text-orange-400">
        <a href="#" aria-label="Facebook" className="hover:text-orange-600 transition"><FaFacebook /></a>
        <a href="#" aria-label="Twitter" className="hover:text-orange-600 transition"><FaTwitter /></a>
        <a href="#" aria-label="Instagram" className="hover:text-orange-600 transition"><FaInstagram /></a>
      </div>
    </div>
  </footer>
);

export default Footer; 