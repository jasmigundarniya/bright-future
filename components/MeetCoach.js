import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const MeetCoach = ({ id }) => {
  return (
    <div
      id={id}
      className="px-5 container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-5 py-5 md:py-10 items-center"
    >
      <ScrollAnimationWrapper direction="left">
        <div className="relative flex justify-start w-[350px] xs:w-[424px]">
          <Image
            src="/assets/coach-profile.png"
            alt="Coach Profile"
            width={424}
            height={473}
            className="relative z-10 object-contain md:w-[424px] md:h-[473px] w-[226px] h-[252px]"
          />

          {/* Badge */}
          <div className="absolute md:bottom-20 bottom-10 right-10 xs:right-20 md:-right-48 z-20 bg-white md:min-w-[313px] shadow-yearBoxShadow rounded-[10px] px-4 py-1 md:py-3 flex items-center gap-3">
            <Image
              src="/assets/workspace-premium.png"
              alt="Experience Badge"
              width={44}
              height={58}
              className="md:w-[44px] md:h-[58px] w-[24px] h-[31px]"
            />
            <div className="flex flex-col justify-center">
              <h3 className="md:text-[30px] text-[20px] text-darkBlack font-bold leading-6 mt-2 md:mt-4">
                8+
              </h3>
              <p className="md:text-[20px] text-[13px] font-normal text-[#7E7E7E]">
                Years Of Experiences
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <div>
          <p className="text-theme font-medium text-[22px] md:text-[35px]">Meet Your Coach</p>
          <h2 className="text-[25px] md:text-[50px] font-bold text-darkBlack mb-1 md:mb-2">
            Richard Sookhai
          </h2>
          <p className="text-[#7E7E7E] text-[16px] md:text-[20px] font-normal mb-4 md:mb-6 leading-relaxed">
            Richard Sookhai, Lead SAT Instructor, brings over a decade of
            experience designing and delivering SAT programs tailored to
            Caribbean students.
          </p>

          <ul className="md:space-y-3 space-y-1">
            <li className="flex items-center gap-3 text-[#7E7E7E] text-[16px] md:text-[20px] font-normal">
              <Image
                src="/assets/check-outline.png"
                alt="tick"
                width={21}
                height={21}
              />
              <span className="mt-1"> 10+ years SAT experience</span>
            </li>
            <li className="flex items-center gap-3 text-[#7E7E7E] text-[16px] md:text-[20px] font-normal">
              <Image
                src="/assets/check-outline.png"
                alt="tick"
                width={21}
                height={21}
              />
              <span className="mt-1"> Expert in US + Caribbean SAT prep</span>
            </li>
            <li className="flex items-center gap-3 text-[#7E7E7E] text-[16px] md:text-[20px] font-normal">
              <Image
                src="/assets/check-outline.png"
                alt="tick"
                width={21}
                height={21}
              />
              <span className="mt-1"> Focuses on CSEC-to-SAT strategies</span>
            </li>
          </ul>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default MeetCoach;
