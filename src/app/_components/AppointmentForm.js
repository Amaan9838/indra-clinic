import { FaRegCalendarAlt } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { CiStethoscope } from "react-icons/ci";

export default function AppointmentForm() {
    return (
      <div className="bg-slate-100 min-h-screen flex justify-center items-center px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg gap-10 overflow-hidden w-full max-w-5xl">
          {/* Left Section */}
          <div className="">
          <div className="flex justify-start items-center text-blue-400 font-bold gap-0.5"><CiStethoscope className="w-6 h-6"/> <h2>Book Now</h2></div>

            <h2 className="text-[40px] font-bold text-gray-900 mb-4">Schedule Your Health Appointment Today!</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-[70px] h-12 bg-white rounded-full">
                  <img src="/contact-mail.png" className="w-[28px] h-[28px]" alt="" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Contact Details</h3>
                  <p className="text-gray-600 text-sm">
                    Enter your full name, email, and phone number to confirm your appointment and receive updates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-20 h-12 bg-white rounded-full">
                <FaRegCalendarAlt color="#3B82FB"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Appointment Info</h3>
                  <p className="text-gray-600 text-sm">
                    Select your preferred doctor and appointment time. This helps us schedule your visit accurately and
                    efficiently.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-16 h-12 bg-white rounded-full">
                <SlNote color="#3B82FB" className="w-[20px] h-[20px]"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Additional Notes</h3>
                  <p className="text-gray-600 text-sm">
                    Share any concerns or medical history in the message. This helps the doctor prepare for your visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="p-12 bg-white rounded-xl shadow-xl">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-800 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-800 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="w-full border border-gray-800 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message..."
                rows="4"
                className="w-full border border-gray-800 rounded-2xl resize-none px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-200"
              >
                MAKE APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  