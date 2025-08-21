import React from "react";
import Header from "../components/Header";
import HeroSection from "@/components/HeroSection";
import InformationForm from "@/components/InformationForm";
import { MdOutlineWhatsapp } from "react-icons/md";
import CourseComparison from "@/components/CourseComparison";
import VideoSection from "@/components/VideoSection";
import MeetCoach from "@/components/MeetCoach";
import Webinar from "@/components/Webinar";

const Home = () => {
  return (
    <div>
      <div className="w-[65px] h-[65px] bg-[#25D366] flex items-center justify-center rounded-[10px] fixed bottom-10 right-10 z-40">
        <MdOutlineWhatsapp size={36} color="white" />
      </div>
      <Header />
      <HeroSection />
      <InformationForm />
      <CourseComparison />
      <VideoSection />
      <MeetCoach />
      <Webinar />
    </div>
  );
};

export default Home;
