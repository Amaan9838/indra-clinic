import HeroSection from "@/app/_components/HeroSection";
import MedicalServices from "@/app/_components/MedicalServices";
import DoctorCard from "@/app/_components/DoctorCard";
import Navbar from "@/app/_components/Navbar";
import FAQ from "@/app/_components/FAQ";
import AppointmentForm from "@/app/_components/AppointmentForm";
import FeatureStrip from "@/app/_components/FeatureStrip";

export default function Home() {
  return (
  <div> 
    <Navbar/>
      <HeroSection />
      <FeatureStrip/>
      <MedicalServices/>
      <DoctorCard />
      <FAQ/>
      <AppointmentForm/>
    </div>
  );
}
