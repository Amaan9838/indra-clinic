'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiStethoscope } from "react-icons/ci";

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-36 py-12 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 px-4">
     <div className="flex justify-start items-center text-blue-400 font-bold gap-0.5"><CiStethoscope className="w-6 h-6"/> <h2 className="">FAQ</h2></div>
        <h2 className="text-[40px] font-bold text-black mb-6">
          Your Health Questions Answered Here
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 mb-4 cursor-pointer"
            >
              <div
                className="flex justify-between items-center py-4"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-black">
                  {faq.question}
                </h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  className="text-xl text-blue-500"
                >
                  ➕
                </motion.div>
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 px-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
        <div className="mb-6">
          <img
            src="/doctor_patient.jpg"
            alt="Doctors"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-blue-100 text-blue-600 px-6 py-4 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold mb-2">99% Success</p>
          <p>Get the best health care</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
