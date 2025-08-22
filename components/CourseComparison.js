"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CheckCircleSvg from "@/public/svgs/CheckCircleSvg";
import Button from "./ui/Button";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const slides = [
  {
    id: 1,
    type: "plan",
    title: "Your SAT Game Plan",
    subtitle: "Boost your skills. Maximize your SAT score.",
    sections: {
      English: [
        "Expert strategies for reading complex passages.",
        "Targeted instruction in grammar and writing.",
        "Official mock tests and personalized feedback.",
      ],
      Math: [
        "Coaching in algebra word problems, ratios and logic.",
        "Small-group focus and structured learning.",
        "Official mock tests and personalized feedback.",
      ],
    },
    image: "/assets/slide1.png",
    lastMsg: "Our proven approach will help you succeed.",
  },
  {
    id: 2,
    type: "course",
    title: "Blitz Course",
    image: "/assets/slide2.png",
    course: true,
  },
  {
    id: 3,
    type: "course",
    title: "Sprint Course",
    image: "/assets/slide3.png",
    course: true,
  },
  {
    id: 4,
    type: "course",
    title: "Masterclass Course",
    image: "/assets/slide4.png",
    course: true,
  },
  {
    id: 5,
    type: "recommend",
    title: "Our SAT Track Recommendations",
    subtitle: "Which track is right for you?",
    sections: {
      "Masterclass Track": ["CSEC Grades 2-4", "CSEC Grades 2-4"],
      "Sprint Track": ["CSEC Grade 1", "CSEC Grade 1"],
    },
    image: "/assets/slide5.png",
  },
];

const highlights = [
  {
    icon: "/assets/duration.png",
    title: "Duration",
    value: "6 Weeks",
    width: 30,
    height: 30,
  },
  {
    icon: "/assets/time-clock.png",
    title: "Start Time",
    value: "Start with cohort",
    width: 22,
    height: 22,
  },
  {
    icon: "/assets/brain.png",
    title: "SAT Prep Value",
    value: "Final Push",
    width: 33,
    height: 26,
  },
  {
    icon: "/assets/high-student.png",
    title: "Student Type",
    value: "High scorers, retakers, test-ready",
    width: 36,
    height: 36,
  },
  {
    icon: "/assets/focus.png",
    title: "Focus",
    value: "Speed, accuracy, strategy under pressure",
    width: 20,
    height: 28,
  },
];

const CourseComparison = ({ id }) => {
  return (
    <section id={id} className="container mx-auto px-5 py-8 md:py-10 relative">
      <ScrollAnimationWrapper direction="left">
        <h2 className="md:text-[45px] text-[25px] text-center md:text-start text-darkBlack font-bold mb-4">
          Course <span className="text-theme">Comparison</span>
        </h2>
      </ScrollAnimationWrapper>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-[15px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#FFF6E8] p-7 rounded-[15px] grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
              {/* Left Content */}
              <ScrollAnimationWrapper direction="left">
                <div className="flex-1 space-y-4">
                  <h3
                    className={`md:text-[45px] text-[25px] font-bold text-darkBlack mb-0 ${
                      slide?.id === 5 && "max-w-[377px] leading-tight mb-2"
                    }`}
                  >
                    {slide.title}
                  </h3>
                  {slide.subtitle && (
                    <p
                      className={`text-[20px] mb-0 ${
                        slide?.id === 5 ? "font-normal" : "font-medium"
                      } text-darkBlack`}
                    >
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Sections */}
                  {slide.sections && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {Object.entries(slide.sections).map(
                        ([section, items]) => (
                          <div key={section}>
                            <h4
                              className={`${
                                slide?.id === 5
                                  ? "font-semibold text-[24px]"
                                  : "font-medium text-[20px]"
                              } text-darkBlack`}
                            >
                              {section}
                            </h4>
                            {slide?.id === 5 && (
                              <p className="text-[20px] font-normal text-darkBlack">
                                Recommended for:
                              </p>
                            )}
                            <ul className="md:space-y-4 space-y-3 mt-2">
                              {items.map((item, i) => (
                                <li
                                  key={i}
                                  className="bg-white px-3 py-2 rounded-[10px] shadow-courseBoxShadow flex gap-2 text-[13px] text-[#7E7E7E] font-normal"
                                >
                                  <CheckCircleSvg />
                                  <span className="mt-1 leading-3.5">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {slide?.course && (
                    <div className="md:space-y-6 space-y-4 mt-3">
                      <div className="grid md:grid-cols-3 md:gap-6 gap-4">
                        {highlights.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-4 bg-white rounded-[15px] shadow-courseBoxShadow p-4 `}
                          >
                            {/* Icon */}
                            <div className="w-12 h-12 min-w-12 flex items-center justify-center rounded-[10px] bg-theme">
                              <Image
                                src={item.icon}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                                className="object-contain"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <p className="text-[13px] font-normal text-[#7E7E7E]">
                                {item.title}
                              </p>
                              <p className="text-sm font-medium text-darkBlack leading-3.5">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6 gap-4">
                        {highlights.slice(3).map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-4 bg-white rounded-[15px] shadow-courseBoxShadow p-4 `}
                          >
                            {/* Icon */}
                            <div className="w-12 h-12 min-w-12 flex items-center justify-center rounded-[10px] bg-theme">
                              <Image
                                src={item.icon}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                                className="object-contain"
                              />
                            </div>

                            {/* Text */}
                            <div>
                              <p className="text-[13px] font-normal text-[#7E7E7E]">
                                {item.title}
                              </p>
                              <p className="text-sm font-medium text-darkBlack leading-3.5">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {slide?.lastMsg && (
                    <p className="text-[20px] font-medium text-darkBlack mt-4">
                      {slide?.lastMsg}
                    </p>
                  )}

                  <div className={`${slide?.id === 1 ? "mt-5" : "mt-8"}`}>
                    <Button title="Tap To Book" />
                  </div>
                </div>
              </ScrollAnimationWrapper>

              {/* Right Image */}
              <ScrollAnimationWrapper direction="right">
                <div className="flex-1">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={617}
                    height={393}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </ScrollAnimationWrapper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows */}
      <div className="hidden 4xl:block">
        <div className="custom-prev absolute top-1/2 -left-12 z-10 cursor-pointer border border-theme bg-theme text-white rounded-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-white hover:text-theme transition">
          <MdKeyboardArrowLeft size={38} />
        </div>
        <div className="custom-next absolute top-1/2 -right-12 z-10 cursor-pointer border border-theme bg-theme text-white rounded-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-white hover:text-theme transition">
          <MdKeyboardArrowRight size={35} />
        </div>
      </div>
    </section>
  );
};

export default CourseComparison;
