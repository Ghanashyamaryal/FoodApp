import React from "react";
import { FaShoppingBag, FaMotorcycle, FaWallet, FaMoneyBillWave, FaMobileAlt, FaSearch, FaTag, FaPercent } from "react-icons/fa";

const features = [
  {
    icon: <FaShoppingBag size={48} className="text-orange-500 mx-auto" />,
    label: "No minimum order",
  },
  {
    icon: <FaMotorcycle size={48} className="text-orange-500 mx-auto" />,
    label: "Free Delivery for orders more than Rs.1000",
  },
  {
    icon: <FaWallet size={48} className="text-orange-500 mx-auto" />,
    label: "Cash back with every order",
  },
  {
    icon: <FaMoneyBillWave size={48} className="text-orange-500 mx-auto" />,
    label: "Pay online or cash on delivery",
  },
];

const deals = [
  {
    icon: <FaMobileAlt size={48} className="text-orange-500 mx-auto" />,
    label: "Install the FoodApp on your phone",
  },
  {
    icon: <FaSearch size={48} className="text-orange-500 mx-auto" />,
    label: "Search for Restaurants. Filter using cuisine or location",
  },
  {
    icon: <FaTag size={48} className="text-orange-500 mx-auto" />,
    label: "Grab your Free Deal",
  },
  {
    icon: <FaPercent size={48} className="text-orange-500 mx-auto" />,
    label: "Show Deal to the Restaurant and get discounts",
  },
];

const Features = () => (
  <>
    {/* GET FOOD DELIVERED Section */}
    <section className="bg-[#181b1b] py-12 text-white relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none">
      <div className="max-w-[1360px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-3xl font-bold">GET FOOD </span>
          <span className="bg-orange-400 text-black px-4 py-1 rounded text-3xl font-bold align-middle">DELIVERED</span>
        </div>
        <div className="flex flex-wrap justify-center gap-0">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center w-56 border-r border-gray-700 last:border-none py-4">
              {f.icon}
              <span className="mt-4 text-lg text-center font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* GRAB FREE RESTAURANT DEALS Section */}
    <section className="bg-[#232323] text-white relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none">
      <div className="max-w-[1360px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-3xl font-bold">GRAB FREE RESTAURANT </span>
          <span className="bg-orange-400 text-black px-4 py-1 rounded text-3xl font-bold align-middle">DEALS</span>
        </div>
        <div className="flex flex-wrap justify-center gap-0">
          {deals.map((d, i) => (
            <div key={i} className="flex flex-col items-center w-56 border-r border-gray-700 last:border-none py-4">
              <div className="bg-white rounded-full p-4 mb-4">
                {d.icon}
              </div>
              <span className="mt-2 text-lg text-center font-medium text-white">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Features; 