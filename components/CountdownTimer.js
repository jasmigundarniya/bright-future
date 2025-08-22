"use client";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const CountdownTimer = ({ targetDate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures countdown only renders on client
  }, []);

  const AnimatedBox = ({ value, label }) => (
    <div className="flex flex-col items-center justify-end bg-white rounded-[10px] shadow-webinarBoxShadow w-[195px] h-[119px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <span className="text-[45px] font-semibold text-darkBlack">
            {value}
          </span>
        </motion.div>
      </AnimatePresence>

      <span className="text-[18px] font-semibold bg-theme text-white px-2 py-1 uppercase w-full text-center rounded-b-[10px]">
        {label}
      </span>
    </div>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-2xl font-bold">Webinar Started!</span>;
    }
    return (
      <div className="flex gap-3 justify-center items-center">
        <ScrollAnimationWrapper direction="left">
          <div className="flex gap-3 justify-center items-center">
            <AnimatedBox value={days} label="DAYS" />
            <span className="text-[45px] font-semibold text-darkBlack">:</span>
            <AnimatedBox value={hours} label="HOURS" />
          </div>
        </ScrollAnimationWrapper>
        <span className="text-[45px] font-semibold text-darkBlack">:</span>
        <ScrollAnimationWrapper direction="right">
          <div className="flex gap-3 justify-center items-center">
            <AnimatedBox value={minutes} label="MINUTES" />
            <span className="text-[45px] font-semibold text-darkBlack">:</span>
            <AnimatedBox value={seconds} label="SECONDS" />
          </div>
        </ScrollAnimationWrapper>
      </div>
    );
  };

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
