import React from "react";
import { FaUtensils, FaSmile, FaRocket, FaUsers } from "react-icons/fa";

const team = [
  { name: "Anjan Sharma", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Priya Karki", role: "Head of Operations", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Ravi Singh", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "Sneha Joshi", role: "Customer Success", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const About = () => (
  <div className="max-w-[1360px] mx-auto px-4 py-12 space-y-16">
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center gap-8 bg-[#fff4ee] rounded-2xl shadow p-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-500">About Foodle</h1>
        <p className="text-lg text-gray-700 mb-4">Foodle is your go-to platform for discovering and ordering delicious meals from the best local restaurants. We believe food should be fast, fresh, and fun!</p>
        <ul className="space-y-2 text-gray-600 text-base">
          <li className="flex items-center gap-2"><FaUtensils className="text-orange-400" /> 1000+ curated recipes & dishes</li>
          <li className="flex items-center gap-2"><FaSmile className="text-yellow-400" /> 24/7 customer support</li>
          <li className="flex items-center gap-2"><FaRocket className="text-pink-400" /> Lightning-fast delivery</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="About Foodle" className="rounded-2xl shadow-lg w-full max-w-xs object-cover" />
      </div>
    </section>
    {/* Mission Statement */}
    <section className="text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">To connect food lovers with the best local restaurants, making every meal an experience to remember. We are passionate about quality, convenience, and community.</p>
    </section>
    {/* Team Section */}
    <section>
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
        {team.map(member => (
          <div key={member.name} className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <img src={member.img} alt={member.name} className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-orange-200" />
            <span className="text-lg font-bold mb-1">{member.name}</span>
            <span className="text-orange-500 font-semibold text-sm mb-1">{member.role}</span>
          </div>
        ))}
      </div>
    </section>
    {/* Call to Action */}
    <section className="text-center mt-12">
      <h2 className="text-2xl font-bold mb-2">Ready to taste something amazing?</h2>
      <p className="text-gray-600 mb-4">Browse our menu and order your favorite meal now!</p>
      <a href="/product-listing" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition">Explore Menu</a>
    </section>
  </div>
);

export default About; 