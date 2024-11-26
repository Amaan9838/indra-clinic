import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { CgEditBlackPoint } from "react-icons/cg";
import { LuPhoneCall } from "react-icons/lu";
import { BiMailSend } from "react-icons/bi";
import { TbZodiacCancer } from "react-icons/tb";

const ProfilePage = () => {
  return (
    <div className="sm:p-8 p-4 bg-slate-50">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-slate-50 sm:p-6 p-4 rounded-lg max-w-6xl mx-auto">
        <img
          src="https://img.freepik.com/free-photo/young-man-doctor-wearing-white-coat-stethoscope-looking-confident-with-crossed-arms-1_141793-12597.jpg?t=st=1732603634~exp=1732607234~hmac=59ea94ec92c8e1f63285fc68bd854408e6dcfa9ef3bec3a2cc5f271277e87ce1&w=996"
          alt="Profile"
          className="w-full sm:w-[300px] lg:w-[350px] lg:h-[320px] sm:h-[280px] h-auto rounded-2xl object-cover"
        />
        <div className="lg:ml-8 mt-6 lg:mt-0 text-center lg:text-left">
          <div className="flex sm:justify-center lg:justify-start items-center text-blue-500 text-xl font-semibold gap-1 pb-6 uppercase">
            <CiStethoscope className="w-6 h-6" />
            <h2>ENT Surgeon</h2>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">Dr. S.K Singh</h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
            Medical assistants play a crucial role in enhancing the efficiency of healthcare
            practices. Trust our skilled medical assistants to provide professional and
            compassionate service, helping your practice thrive.
          </p>
          <hr className="mt-4"/>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-6">
            <a href="tel:+917376223388" className="flex items-center space-x-3">
              <LuPhoneCall className="text-blue-600 h-8 w-8" />
              <p className="text-gray-800 text-sm sm:text-lg font-semibold">+91 (737) 622-3388</p>
            </a>
            <a href="mailto:vipinsinghald009@gmail.com" className="flex items-center space-x-3">
              <BiMailSend className="text-blue-600 h-8 w-8" />
              <p className="text-gray-800 text-sm sm:text-lg font-semibold">vipinsinghald009@gmail.com</p>
            </a>
          </div>
          <div className="flex sm:flex-row flex-col mt-6 justify-center gap-8 items-center lg:justify-start">
            <div className="flex space-x-4 justify-center lg:justify-start">
            <FaFacebook className="text-gray-600 hover:text-blue-600" size={24} />
            <FaInstagram className="text-gray-600 hover:text-pink-600" size={24} />
            <FaLinkedin className="text-gray-600 hover:text-blue-800" size={24} />
            </div>
            <button className="px-4 py-2 bg-lime-500 text-white font-semibold rounded-2xl shadow-md hover:text-gray-900 hover:shadow-xl">Book an appointment</button>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="mt-8 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800">About Me</h3>
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet lorem et arcu
          rhoncus tempus. Vestibulum nulla mi, condimentum venenatis consequat quis.
        </p>
      </div>

      {/* Specialties */}
      <div className="mt-8 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800">My Specialties</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
            <div className="p-4 rounded-full bg-blue-50">
              <img src="/pharynx.png" alt="ENT" className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">ENT Specialist</h4>
              <p className="text-gray-600 text-sm">Breathing Easier, Hearing Clearer, Living Better.</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
            <div className="p-4 rounded-full bg-blue-50">
              <TbZodiacCancer className="text-blue-400 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">Cancer Surgeon</h4>
              <p className="text-gray-600 text-sm">Fighting Cancer with Precision, Care, and Hope.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Info */}
      <div className="mt-8 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800">Education Info</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="flex items-center">
            <CgEditBlackPoint className="text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm sm:text-base">
              Doctor of Medicine (MD) - Harvard Medical School
            </span>
          </li>
          <li className="flex items-center">
            <CgEditBlackPoint className="text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm sm:text-base">
              Doctor of Osteopathic Medicine (DO) - Michigan State University
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
