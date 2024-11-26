import HeroSection from "@/app/_components/HeroSection";
import MedicalServices from "@/app/_components/MedicalServices";
import DoctorCard from "@/app/_components/DoctorCard";
import FAQ from "@/app/_components/FAQ";
import AppointmentForm from "@/app/_components/AppointmentForm";
import FeatureStrip from "@/app/_components/FeatureStrip";
// import Map from "@/app/_components/ContactUs";

export default function Home() {
  return (
  <div> 
      <HeroSection />
      <FeatureStrip/>
      <MedicalServices/>
      <DoctorCard />
      <FAQ/>
      <AppointmentForm/>
      {/* <Map/> */}
    </div>
  );
}
