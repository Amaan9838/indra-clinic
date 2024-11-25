import { FaPlusCircle } from "react-icons/fa";

export default function FeatureStrip() {
  const features = [
    { text: "Fitness Check", bold: false },
    { text: "Better Health", bold: true },
    { text: "Doctor Monitoring", bold: false },
    { text: "Body Checkup", bold: true },
    { text: "Wellness Care", bold: false },
  ];

  return (
    <div className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-center gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-center"
          >
            {/* Icon */}
            <FaPlusCircle size={20} className="text-white" />
            
            {/* Text */}
            <span
              className={`text-base sm:text-lg ${
                feature.bold
                  ? "font-bold"
                  : "font-light text-transparent bg-clip-text bg-white/50"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
