import React from "react";
import { FaShippingFast, FaLeaf, FaHeadset, FaCreditCard } from "react-icons/fa";

const services = [
  {
    icon: <FaShippingFast className="text-3xl text-orange-500 mb-2" />,
    title: "Fast Delivery",
    desc: "Get your food delivered hot and fresh in under 30 minutes, guaranteed!",
  },
  {
    icon: <FaLeaf className="text-3xl text-green-500 mb-2" />,
    title: "Fresh Ingredients",
    desc: "We use only the freshest, highest-quality ingredients in every meal.",
  },
  {
    icon: <FaHeadset className="text-3xl text-blue-500 mb-2" />,
    title: "24/7 Support",
    desc: "Our support team is available around the clock to help you with any issue.",
  },
  {
    icon: <FaCreditCard className="text-3xl text-purple-500 mb-2" />,
    title: "Easy Payment",
    desc: "Multiple secure payment options for your convenience.",
  },
];

const Service = () => (
  <div className="mx-auto max-w-[1360px] py-12 px-4">
    <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {services.map((s, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer">
          {s.icon}
          <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
          <p className="text-gray-600 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Service; 