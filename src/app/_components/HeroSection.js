// import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="min-h-screen bg-slate-50">
  <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left Column */}
    <div className="space-y-6 text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-500">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className="font-semibold">HEALTH COMES FIRST</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
        Transforming Lives Through{" "}
        <span className="text-blue-500 relative">
          Expert Care
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
        </span>
      </h1>
      <p className="text-gray-600 text-base sm:text-lg">
        At <strong>Indra Clinic</strong>, we specialize in providing
        exceptional healthcare services with a patient-centered approach,
        ensuring comprehensive care for all your health needs.
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
          Explore Services
        </button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-600">Call Us Now</div>
            <div className="font-semibold">+1 (123) 456-7890</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 pt-6 text-center lg:text-left">
        <div>
          <div className="text-4xl font-bold text-blue-500">50+</div>
          <div className="text-gray-600">Specialized Doctors</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-blue-500">24/7</div>
          <div className="text-gray-600">Emergency Care</div>
        </div>
      </div>
    </div>
    {/* Right Column */}
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/10 -skew-x-6 transform"></div>
      <img
        src="/dc2.png"
        alt="Healthcare Professional"
        className="relative z-10 w-full h-auto rounded-lg"
      />
    </div>
  </div>
</div>

      {/* Service Cards */}
      {/* <div className="container mx-auto px-6 sm:px-12 lg:px-16 py-12">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
  
    {[
      { title: "Respiratory Diseases", icon: <img src="/respiratory.png" alt="" srcset="" /> },
      { title: "Skin Diseases", icon: <img src="/dermatology.png" alt="" srcset="" /> },
      { title: "Bone Diseases", icon: <img src="/bones.png"/> },
      { title: "ENT Diseases", icon: <img src="/pharynx.png" />},
      { title: "Gynecological & Obstetric Diseases", icon: <img src="/gynecology.png" /> },
    ].map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
      >
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <span className="text-xl">{service.icon}</span>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-2">{service.title}</h3>
        <p className="text-gray-600">
          Comprehensive care for {service.title.toLowerCase()}.
        </p>
      </div>
    ))}
  </div>
</div> */}

    </div>
  );
};

export default HeroSection;
