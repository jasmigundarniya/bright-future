import React from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";
import WebinarSvg from "@/public/svgs/WebinarSvg";
import Button from "./ui/Button";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Webinar = ({ id }) => {
  const webinarDate = new Date("2025-09-01T10:00:00");

  return (
    <section id={id} className="bg-[#FFF5E1] my-8 py-16">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center mb-6">
          <ScrollAnimationWrapper direction="left">
            <h2 className="text-[45px] text-darkBlack font-bold mb-4">
              Webinar <span className="text-theme">Start In...</span>
            </h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper direction="right">
            <div className="flex gap-5">
              <button
                type="text"
                className="relative bg-[#338FFE] cursor-pointer text-white text-[20px] px-4 py-2 rounded-[10px] font-normal flex items-center justify-center gap-3 w-fit border border-[#338FFE] overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#338FFE]">
                  <WebinarSvg className="transition-colors duration-500 group-hover:stroke-[#338FFE]" />
                  Schedule a Webinar
                </span>

                <span className="absolute left-1/2 top-1/2 w-[50px] h-[50px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[8] transition-transform duration-500 ease-out z-0"></span>
              </button>

              <Button title="Start 5 Minute Quiz" />
            </div>
          </ScrollAnimationWrapper>
        </div>

        <div className="flex justify-center mb-10">
          <CountdownTimer targetDate={webinarDate} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <ScrollAnimationWrapper direction="right">
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
        </div>
      </div>
    </section>
  );
};

export default Webinar;
