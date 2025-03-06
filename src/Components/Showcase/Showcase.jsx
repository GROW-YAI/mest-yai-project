import React from "react";
import './Showcase.css'

const showcaseItems = [
  {
    title: "AI-Powered Analytics",
    description: "Gain valuable insights with our AI-driven analytics platform.",
    image: "/images/analytics.jpg",
  },
  {
    title: "E-Commerce Platform",
    description: "A seamless online shopping experience for businesses and customers.",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile applications for iOS and Android platforms.",
    image: "/images/mobile-app.jpg",
  },
];

const Showcase = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Product & Service Showcase</h2>
        <p className="text-gray-600 text-lg mb-8">
          Explore our cutting-edge solutions designed to enhance your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;