import React from 'react';
import { CiStethoscope } from "react-icons/ci";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const DoctorCard = () => {
  const team = [
    {
      name: 'Dr. S.K Singh',
      degree: 'MBBS, DLO, DNB',
      role: 'ENT Specialist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      social: [
        { icon: <FaFacebook size={20} />, link: '#' },
        { icon: <FaInstagram size={20} />, link: '#' },
        { icon: <FaLinkedinIn size={20} />, link: '#' },
      ],
    },
    {
      name: 'Dr. Pramod Singh',
      degree: 'MBBS, D.Ortho',
      role: 'Trauma & Joint Surgeon',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      social: [
        { icon: <FaFacebook size={20} />, link: '#' },
        { icon: <FaInstagram size={20} />, link: '#' },
        { icon: <FaLinkedinIn size={20} />, link: '#' },
      ],
    },
    {
      name: 'Dr. Sushil Kumar',
      degree: 'MBBS, MD',
      role: 'Skin & Venereal Specialist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      social: [
        { icon: <FaFacebook size={20} />, link: '#' },
        { icon: <FaInstagram size={20} />, link: '#' },
        { icon: <FaLinkedinIn size={20} />, link: '#' },
      ],
    },
  ];

  return (
    <section className="bg-slate-100 py-12">
      <div className="text-center mb-8 px-4">
        <div className="flex justify-center items-center gap-2 text-blue-500 text-lg">
          <CiStethoscope />
          <h3 className="font-bold uppercase">Expert Doctors</h3>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
          Meet Our Expert Medical Team
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((doctor, index) => (
          <div key={index} className="relative flex justify-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[280px] sm:h-[300px] lg:h-[350px] shadow-2xl object-cover rounded-2xl mb-4"
            />
            <div className="absolute inset-x-12 bottom-[10%] px-4 py-4 bg-white shadow-lg rounded-xl">
              {doctor.social && (
                <div className="flex justify-center gap-3 mb-3">
                  {doctor.social.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className="text-blue-600 hover:text-blue-800 bg-gray-200 p-2 rounded-full"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">{doctor.role}</p>
                <p className="text-xs text-gray-500">{doctor.degree}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorCard;
