'use client'
import { useState } from "react";
import {FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { CiStethoscope } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const faqs = [
  {
    question: "Am I eligible for the check of my body?",
    answer:
      "Eligibility depends on various factors such as age, health history, and symptoms. Contact our team for more details.",
  },
  {
    question: "What are the age limits for the medical care?",
    answer:
      "Our medical care services cater to individuals of all ages, from children to seniors.",
  },
  {
    question: "What type of diseases does the doctor solve with health care?",
    answer:
      "Our doctors handle a wide range of diseases, including chronic illnesses, infections, and more.",
  },
  {
    question: "How do I appeal for the best care for a lifetime?",
    answer:
      "You can enroll in our lifetime health plans or schedule a consultation to get started.",
  },
];


export default function FAQ() {
 
const [openIndex, setOpenIndex] = useState(0);

const toggleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  return (
    <section className="bg-[#0d1128] text-white py-10 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center sm:w-1/2 w-full gap-4">
          <div className="relative">
            <img
              src="/doctor_consult.png"
              alt="Doctor consulting patient"
              className="rounded-lg shadow-lg w-[550px]"
            />
            
          </div>
          <ul className="space-y-2 mt-4 ml-4">
            <li className="flex items-center space-x-1">
              <span className="text-blue-500"><MdKeyboardDoubleArrowRight size={25}/></span>
              <span className="text-slate-200">Appointment Scheduling and Cancellations</span>
            </li>
            <li className="flex items-center space-x-1">
            <span className="text-blue-500"><MdKeyboardDoubleArrowRight size={25}/></span>
            <span className="text-slate-200">Insurance and Payment Information</span>
            </li>
            <li className="flex items-center space-x-1">
              <span className="text-blue-500"><MdKeyboardDoubleArrowRight size={25}/></span>
              <span className="text-slate-200">Patient Privacy and Data Security</span>
            </li>
          </ul>
          <div className="flex sm:flex-row flex-col gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full sm:px-6 sm:py-1 px-3 py-2 ">
              Get in Touch Now &#x2022;
            </button>
            <div className="flex items-center space-x-3">
              <div className="bg-white text-blue-500 rounded-full p-3 border-2 border-blue-500">
                <LuPhoneCall size={25}/>
              </div>
              <div>
                <p>Call Us Now!</p>
                <p className="font-bold">+91 (737) 622-3388</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center sm:w-1/2 w-full gap-4">

        <div className="flex justify-start items-center text-blue-400 font-bold gap-0.5"><CiStethoscope className="w-6 h-6"/> <h2 className="">FAQ</h2></div>
        <h2 className="sm:text-[40px] text-3xl font-bold text-white mb-6">
          Your Health Questions Answered Here
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" mb-4 cursor-pointer bg-white rounded-t-3xl rounded-b-2xl"
            >
              <div
                className={`flex justify-start gap-4 items-center py-4   ${openIndex === index ? 'bg-blue-500' :'bg-white'  } px-8 rounded-2xl`}
                onClick={() => toggleAccordion(index)}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className={`text-xl ${openIndex === index ? 'text-white' : 'text-blue-500' }`}
                >
                 {openIndex === index ?  <FaMinusCircle/> : <FaPlusCircle/> } 
                </motion.div>
                <h3 className={`text-lg font-medium ${openIndex === index ? 'text-white' :'text-blue-950'  }`}>
                  {faq.question}
                </h3>
                
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 p-6 bg-white rounded-b-2xl ">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
