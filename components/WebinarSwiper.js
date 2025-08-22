"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const WebinarSwiper = () => {
  return (
    <div className="webinar-custom-swiper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
      >
        <SwiperSlide>
          <ScrollAnimationWrapper direction="left">
            <div className="bg-white rounded-[10px] p-3 overflow-hidden shadow-webinarBoxShadow">
              <Image
                src="/assets/webinar1.png"
                alt="SAT Prep"
                width={394}
                height={259}
                className="w-full h-auto"
              />
              <div className="mt-3 font-semibold text-[18px] text-darkBlack">
                Built your Strengths - SAT Prep
              </div>
            </div>
          </ScrollAnimationWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <ScrollAnimationWrapper direction="right">
            <div className="bg-white rounded-[10px] p-3 overflow-hidden shadow-webinarBoxShadow">
              <Image
                src="/assets/webinar2.png"
                alt="Dual Tracks"
                width={394}
                height={259}
                className="w-full h-auto"
              />
              <div className="mt-3 font-semibold text-[18px] text-darkBlack">
                Dual Tracks - Our programs option
              </div>
            </div>
          </ScrollAnimationWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <ScrollAnimationWrapper direction="left">
            <div className="bg-white rounded-[10px] p-3 overflow-hidden shadow-webinarBoxShadow">
              <Image
                src="/assets/webinar1.png"
                alt="SAT Prep"
                width={394}
                height={259}
                className="w-full h-auto"
              />
              <div className="mt-3 font-semibold text-[18px] text-darkBlack">
                Built On Your Strengths
              </div>
            </div>
          </ScrollAnimationWrapper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WebinarSwiper;
