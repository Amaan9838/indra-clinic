import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { BiMailSend } from "react-icons/bi";

const doctors = [
  {
    name: "Dr. S.K Singh",
    specialty: "ENT Surgeon",
    description:
      "Breathing Easier, Hearing Clearer, Living Better. Expert in ear, nose, and throat care.",
    image:
      "https://img.freepik.com/free-photo/young-man-doctor-wearing-white-coat-stethoscope-looking-confident-with-crossed-arms-1_141793-12597.jpg",
    contact: {
      phone: "+91 (737) 622-3388",
      email: "vipinsinghald009@gmail.com",
    },
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    description:
      "Passionate about heart health and delivering cutting-edge cardiac care.",
    image:
      "https://img.freepik.com/free-photo/portrait-young-female-doctor-with-crossed-arms_23-2149245532.jpg",
    contact: {
      phone: "+91 (123) 456-7890",
      email: "priyasharma@example.com",
    },
  },
  {
    name: "Dr. Arjun Khanna",
    specialty: "Cancer Specialist",
    description:
      "Fighting Cancer with Precision, Care, and Hope. Providing compassionate oncology care.",
    image:
      "https://img.freepik.com/free-photo/young-handsome-doctor-man-with-beard-wearing-stethoscope_1194-374020.jpg",
    contact: {
      phone: "+91 (987) 654-3210",
      email: "arjunkhanna@example.com",
    },
  },
];

const ZigZagDoctors = () => {
  return (
    <div className="bg-slate-50 p-6 sm:p-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        Meet Our Doctors
      </h2>
      <div className="space-y-12">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.name}
            className={`flex flex-col sm:flex-row ${
              index % 2 === 1 ? "sm:flex-row-reverse" : ""
            } items-center bg-white rounded-lg shadow-lg p-6 sm:p-8`}
          >
            {/* Image Section */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full sm:w-1/2 lg:w-[45%] rounded-lg shadow-md object-cover h-60 sm:h-72"
            />
            {/* Text Section */}
            <div
              className={`sm:w-1/2 lg:w-[55%] mt-6 sm:mt-0 ${
                index % 2 === 1 ? "sm:mr-6" : "sm:ml-6"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                {doctor.name}
              </h3>
              <p className="text-blue-500 font-semibold mt-2">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {doctor.description}
              </p>
              {/* Contact Info */}
              <div className="flex items-center space-x-6 mt-6">
                <a
                  href={`tel:${doctor.contact.phone}`}
                  className="flex items-center text-gray-800 space-x-2"
                >
                  <LuPhoneCall className="text-blue-600 h-6 w-6" />
                  <span className="text-sm sm:text-base font-semibold">
                    {doctor.contact.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${doctor.contact.email}`}
                  className="flex items-center text-gray-800 space-x-2"
                >
                  <BiMailSend className="text-blue-600 h-6 w-6" />
                  <span className="text-sm sm:text-base font-semibold">
                    {doctor.contact.email}
                  </span>
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <FaFacebook className="text-gray-600 hover:text-blue-600" size={24} />
                <FaInstagram className="text-gray-600 hover:text-pink-600" size={24} />
                <FaLinkedin className="text-gray-600 hover:text-blue-800" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZigZagDoctors;
