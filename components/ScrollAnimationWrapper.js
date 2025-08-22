"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: (direction) => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -100 };
      case "right":
        return { opacity: 0, x: 100 };
      case "bottom":
        return { opacity: 0, y: 100 };
      case "top":
        return { opacity: 0, y: -100 };
      default:
        return { opacity: 0, y: 50 };
    }
  },
  visible: { opacity: 1, x: 0, y: 0 },
};

const ScrollAnimationWrapper = ({
  children,
  direction = "bottom",
  delay = 0,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      custom={direction}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
