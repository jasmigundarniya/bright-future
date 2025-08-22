import React from "react";
import Header from "../components/Header";
import HeroSection from "@/components/HeroSection";
import InformationForm from "@/components/InformationForm";
import { MdOutlineWhatsapp } from "react-icons/md";
import CourseComparison from "@/components/CourseComparison";
import VideoSection from "@/components/VideoSection";
import MeetCoach from "@/components/MeetCoach";
import Webinar from "@/components/Webinar";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import Certified from "@/components/CertifiedImg";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";
import StudentReview from "@/components/StudentReview";

const Home = () => {
  return (
    <div>
      <div className="md:w-[65px] md:h-[65px] w-[56px] h-[56px] bg-[#25D366] flex items-center justify-center rounded-[10px] fixed bottom-10 right-10 z-40">
        <MdOutlineWhatsapp size={36} color="white" />
      </div>
      <Header />
      <HeroSection id="home" />
      <ScrollAnimationWrapper direction="bottom">
        <InformationForm />
      </ScrollAnimationWrapper>
      <CourseComparison id="course-comparison" />
      <VideoSection />
      <MeetCoach id="instructor" />
      <Webinar id="webinar" />
      <StudentReview />
      <Certificate id="certificate" />
      <ScrollAnimationWrapper direction="bottom">
        <Certified />
      </ScrollAnimationWrapper>
      <Footer />
    </div>
  );
};

export default Home;
