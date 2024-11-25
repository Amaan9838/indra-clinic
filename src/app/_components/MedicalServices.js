// import React from "react";
import { FiHeart } from "react-icons/fi";




const MedicalServices = () => {
  const services = [
    {
      id: 1,
      icon: <img src="/pharynx.png"  className="w-12 h-12 text-blue-500" />,
      title: "ENT Care",
      description:
        "Expert diagnosis and treatment for ear, nose, and throat conditions",
    },
    {
      id: 2,
      icon: <img src="/bones.png" className="w-12 h-12 text-blue-500" />,
      title: "Orthopedic Care",
      description:
        "Comprehensive solutions for bone, joint, and muscle health.",
    },
    {
      id: 3,
      icon: <img src="/dermatology.png" className="w-12 h-12 text-blue-500" />,
      title: "Dermatology Services",
      description:
        "Advanced care for all your skin-related concerns and needs.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <div className="mb-10">
          <h4 className="text-blue-500 font-semibold flex justify-center items-center gap-2 text-sm">
            <FiHeart className="w-5 h-5" />
            WHAT WE OFFER
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
            Get The Best Medical Services
          </h2>
        </div>
        {/* Services */}
        <div className="mx-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className=" px-12 py-8"
            >
              <div className="flex justify-center items-center mb-4 relative">
                {service.icon}
                <span className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                  {service.id}
                </span>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 text-sm font-medium hover:underline"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition">
            Make a Appointment
          </button>
          <p className="text-gray-600">
            Let's make something great health together.{" "}
            <a href="#" className="text-blue-500 font-medium hover:underline">
              See More Services
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
