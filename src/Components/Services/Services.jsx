import React from "react";
import './Services.css'

const servicesData = [
  {
    title: "Custom Software Development",
    description: "We build scalable and robust software solutions tailored to your business needs.",
  },
  {
    title: "UI/UX Design",
    description: "Our design team creates intuitive and engaging user experiences that enhance usability.",
  },
  {
    title: "Cloud Solutions",
    description: "Seamless cloud integration to improve efficiency and ensure data security.",
  },
  {
    title: "Digital Marketing",
    description: "We help businesses grow with data-driven marketing strategies and SEO optimization.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 text-lg mb-8">
          We offer a wide range of services to help your business thrive in the digital world.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;