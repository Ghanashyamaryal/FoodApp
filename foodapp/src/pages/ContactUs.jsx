import React from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <form className="flex-1 bg-white p-6 rounded-lg shadow space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400" rows={4}></textarea>
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">Send Message</button>
        </form>
        {/* Contact Info & Map */}
        <div className="flex-1 space-y-6">
          <div className="bg-orange-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p><FaPhone className="inline mr-2 text-orange-500" />Phone: <a href="tel:+1234567890" className="text-orange-500">+1 234 567 890</a></p>
            <p><FaEnvelope className="inline mr-2 text-orange-500" />Email: <a href="mailto:info@foodapp.com" className="text-orange-500">info@foodapp.com</a></p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1"><FaInstagram /> Instagram</a>
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1"><FaFacebook /> Facebook</a>
              <a href="#" className="text-orange-500 hover:underline flex items-center gap-1"><FaTwitter /> Twitter</a>
            </div>
          </div>
          {/* Map Placeholder */}
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <FaMapMarkerAlt className="text-4xl text-orange-500 mr-2" />
            <span className="text-gray-500">[Interactive Map Here]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 