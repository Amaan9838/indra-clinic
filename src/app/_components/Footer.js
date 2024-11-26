import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">Indra Clinic</h2>
          <p className="text-gray-400 mt-4">
          At Indra Clinic, we strive to provide
exceptional healthcare service to our valued
patients. 
          </p>
          <button className="mt-6 bg-lime-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Make an Appointment
          </button>
          <div className="flex space-x-4 mt-6 text-gray-400">
            <FaFacebook className="hover:text-blue-500" size={24} />
            <FaInstagram className="hover:text-pink-500" size={24} />
            <FaLinkedin className="hover:text-blue-700" size={24} />
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold">Our Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            {/* <li className="hover:text-white">About Us</li> */}
            <li className="hover:text-white"><a href="/services">Our Services</a></li>
            <li className="hover:text-white"><a href="/expert_doctors">Expert Doctors</a></li>
            <li className="hover:text-white">Ask A Question</li>
            <li className="hover:text-white"><a href="/ContactUs">Contact Us</a></li>
          </ul>
        </div>

        {/* Opening Times Section */}
        <div>
          <h3 className="text-xl font-semibold">Opening Time</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Mon - 9:00am To 10:00pm</li>
            <li>Tue - 9:00am To 10:00pm</li>
            <li>Wed - 9:00am To 10:00pm</li>
            <li>Thu - 9:00am To 10:00pm</li>
            <li>Sat - 9:00am To 5:00pm</li>
            <li>Sun - 9:00am To 1:00pm</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <ul className="mt-4 space-y-4 text-gray-400">
            <li className="flex items-start space-x-2">
              <HiOutlineLocationMarker size={56} className="text-blue-500" />
              <span>Indra Clinic, Jawaharlal Nehru Rd, near Sangam Petrol Pump, Tagore Town, Prayagraj, Uttar Pradesh 211002</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlinePhone size={24} className="text-blue-500" />
              <span>+91 (737) 622-3388</span>
            </li>
            <li className="flex items-center space-x-2">
              <HiOutlineMail size={24} className="text-blue-500" />
              <span>
                contact@indraclinic.in <br />
                vipinsinghald009@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400">
        <p>
          Copyright © 2024 <span className="text-blue-500">Indra Clinic</span>. All Rights Reserved.
        </p>
        {/* <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms Of Service
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
