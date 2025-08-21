"use client";
import React from "react";
import Countdown from "react-countdown";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
  const AnimatedBox = ({ value, label }) => (
    <div className="flex flex-col items-center px-4 py-2 bg-white rounded-md shadow-md w-[80px]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value} // force re-animation when value changes
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl font-bold text-black"
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <span className="mt-1 text-sm font-semibold bg-theme text-white px-2 py-0.5 rounded">
        {label}
      </span>
    </div>
  );

  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-2xl font-bold">Webinar Started!</span>;
    }
    return (
      <div className="flex gap-4 justify-center">
        <AnimatedBox value={days} label="DAYS" />
        <AnimatedBox value={hours} label="HOURS" />
        <AnimatedBox value={minutes} label="MINUTES" />
        <AnimatedBox value={seconds} label="SECONDS" />
      </div>
    );
  };

  return (
    <div>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
