// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaRegClock } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { BiMailSend } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
// Map container styles
// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// // Default center of the map (latitude and longitude of the address)
// const center = {
//   lat: 37.7749, // Example: Latitude of San Francisco
//   lng: -122.4194, // Example: Longitude of San Francisco
// };

const Map = () => {
  return (
    // <LoadScript googleMapsApiKey="AIzaSyA_L9u5iC8sP7Qy5GnRgLHexCjctL-Updw">
    //   <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
    //     {/* Marker for the specified address */}
    //     <Marker position={center} />
    //   </GoogleMap>
    // </LoadScript>
    <div className="bg-slate-100 min-h-screen flex justify-center items-center px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg gap-10 overflow-hidden w-full max-w-5xl">
          {/* Left Section */}
          <div className="">
          <div className="flex justify-start items-center text-blue-400 font-bold gap-0.5"><CiStethoscope className="w-6 h-6"/> <h2>APPOINTMENT</h2></div>

            <h2 className="text-[40px] font-bold text-gray-900 mb-4">Request Your Appointment Today!</h2>
            <div className="space-y-6">
              <a href="tel:+917376223388" className="flex items-start gap-4">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <LuPhoneCall className="text-blue-400 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 underline">Request A Call:</h3>
                  <p className="text-gray-600 text-sm">
                  +91 (737) 622-3388
                  </p>
                </div>
              </a>
              <a href="mailto:contact@indraclinic.in" className="flex items-start gap-4">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <BiMailSend className="text-blue-400 h-8 w-8"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 underline">Send Us A Email</h3>
                  <p className="text-gray-600 text-sm">
                    contact@indraclinic.in
                  </p>
                </div>
              </a>
              <a href="https://www.google.com/maps/dir/25.4410168,81.8437354/Indra+Clinic,+Jawaharlal+Nehru+Rd,+near+Sangam+Petrol+Pump,+Tagore+Town,+Prayagraj,+Uttar+Pradesh+211002/@25.446115,81.8351039,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x399acb980b0c1761:0x484ce72950907f5e!2m2!1d81.8636305!2d25.4498135?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex items-start gap-4">
                <div className="flex items-center justify-center w-28 h-16 bg-blue-100 rounded-full">
                <HiOutlineLocationMarker  className="text-blue-400 h-8 w-8"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 underline">Visit Us Now</h3>
                  <p className="text-gray-600 text-sm">
                  Indra Clinic, Jawaharlal Nehru Rd, near Sangam Petrol Pump, Tagore Town, Prayagraj, Uttar Pradesh 211002</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                <FaRegClock className="text-blue-400 h-8 w-8"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Mon - Sat:</h3>
                  <p className="text-gray-600 text-sm">
                 11AM to 2PM, 7PM to 8PM  </p>
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
};

export default Map;
