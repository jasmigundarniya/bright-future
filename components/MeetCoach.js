import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const MeetCoach = ({ id }) => {
  return (
    <div
      id={id}
      className="px-5 container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-5 py-10 items-center"
    >
      <ScrollAnimationWrapper direction="left">
        <div className="relative flex justify-center md:justify-start w-[424px]">
          <Image
            src="/assets/coach-profile.png"
            alt="Coach Profile"
            width={424}
            height={473}
            className="relative z-10 object-contain"
          />

          {/* Badge */}
          <div className="absolute bottom-20 -right-48 z-20 bg-white min-w-[313px] shadow-yearBoxShadow rounded-[10px] px-4 py-3 flex items-center gap-3">
            <Image
              src="/assets/workspace-premium.png"
              alt="Experience Badge"
              width={44}
              height={58}
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-[30px] text-darkBlack font-bold leading-6 mt-4">
                8+
              </h3>
              <p className="text-[20px] font-normal text-[#7E7E7E]">
                Years Of Experiences
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <div>
          <p className="text-theme font-medium text-[35px]">Meet Your Coach</p>
          <h2 className="text-[50px] font-bold text-darkBlack mb-2">
            Richard Sookhai
          </h2>
          <p className="text-[#7E7E7E] text-[20px] font-normal mb-6 leading-relaxed">
            Richard Sookhai, Lead SAT Instructor, brings over a decade of
            experience designing and delivering SAT programs tailored to
            Caribbean students.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-[#7E7E7E] text-[20px] font-normal">
              <Image
                src="/assets/check-outline.png"
                alt="tick"
                width={21}
                height={21}
              />
              <span className="mt-1"> 10+ years SAT experience</span>
            </li>
            <li className="flex items-center gap-3 text-[#7E7E7E] text-[20px] font-normal">
              <Image
                src="/assets/check-outline.png"
                alt="tick"
                width={21}
                height={21}
              />
              <span className="mt-1"> Expert in US + Caribbean SAT prep</span>
            </li>
            <li className="flex items-center gap-3 text-[#7E7E7E] text-[20px] font-normal">
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
