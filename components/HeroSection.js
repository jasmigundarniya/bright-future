"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const HeroSection = ({ id }) => {
  return (
    <section
      id={id}
      className="px-5 lg:py-12 py-8 flex flex-col lg:flex-row gap-10 items-center justify-between container mx-auto"
    >
      {/* Left Side Content */}
      <motion.div
        className="md:max-w-[642px] md:space-y-7 space-y-4"
        initial={{ scale: 0, opacity: 0, x: -100, y: -100 }}
        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="xl:text-[65px] text-[36px] font-bold text-darkBlack leading-[52px] xl:leading-tight">
          Turn CSEC Strengths Into{" "}
          <span className="bg-[#FFF5E1] rounded-[10px] text-theme px-4 py-3 text-nowrap">
            Study Abroad
          </span>{" "}
          Opportunities
        </h1>
        <p className="text-lightGray text-[16px] md:text-[20px] font-normal">
          Live small-group coaching + official SAT prep. Trusted by Caribbean
          parents.
        </p>
        <Button title="Get Started" />
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image
              src="/assets/avtar1.png"
              alt="students"
              width={36}
              height={36}
            />
            <Image
              src="/assets/avtar2.png"
              alt="students"
              width={36}
              height={36}
              className="-ms-4"
            />
            <Image
              src="/assets/avtar3.png"
              alt="students"
              width={36}
              height={36}
              className="-ms-4"
            />
          </div>
          <p className="text-[16px] font-medium text-theme">
            1000+ Trusted Students
          </p>
        </div>
      </motion.div>

      {/* Right Side Images */}
      <motion.div
        className="flex items-center gap-5 xl:gap-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{
          x: [200, -400, 0], // comes from right → moves slightly left → settles
          y: [0, 0, 0], // moves up a bit, then back
          opacity: 1,
        }}
        transition={{
          duration: 0.9, // faster than before
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <Image
            src="/assets/star1.png"
            alt="student"
            width={94}
            height={107}
            className="w-[50px] h-[50px] md:w-[84px] md:h-[76px]"
          />
          <Image
            src="/assets/student1.png"
            alt="student"
            width={306}
            height={444}
          />
        </div>
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <Image
            src="/assets/student2.png"
            alt="student"
            width={306}
            height={444}
          />
          <Image
            src="/assets/star2.png"
            alt="student"
            width={38}
            height={43}
            className="w-[20px] h-[20px] md:w-[38px] md:h-[35px]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
