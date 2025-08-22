"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineRight,
  AiOutlineClose,
  AiOutlineBarChart,
  AiOutlineVideoCamera,
  AiOutlineTeam,
} from "react-icons/ai";
import MenuSvg from "@/public/svgs/MenuSvg";

const menuItems = [
  { icon: AiOutlineHome, label: "Home", href: "/" },
  { icon: AiOutlineBarChart, label: "Course Comparison", href: "/" },
  { icon: AiOutlineUser, label: "Instructor", href: "/" },
  { icon: AiOutlineVideoCamera, label: "Webinar", href: "/" },
  { icon: AiOutlineTeam, label: "Happy Students", href: "/" },
];

export default function AnimatedSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const sidebarVariants = {
    open: {
      width: "320px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      width: "80px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <button
        className="lg:hidden flex items-center justify-center bg-theme rounded-[10px] w-[45px] h-[45px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuSvg />
      </button>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={sidebarVariants}
              className="fixed right-0 top-0 h-full w-80 bg-sidebar z-40 shadow-lg bg-white"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 border-b border-sidebar-border flex items-center justify-end"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="custom-next  cursor-pointer border border-theme bg-theme text-white rounded-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-white hover:text-theme transition">
                    <AiOutlineClose size={30} />
                  </div>
                </motion.button>

                {/* Menu Items */}
                <motion.nav
                  variants={containerVariants}
                  className="flex-1 p-4 space-y-2"
                >
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      onHoverStart={() => setHoveredItem(item.label)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <motion.a
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg  relative overflow-hidden group hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Background animation */}
                        <motion.div
                          className="absolute inset-0 bg-sidebar-primary/10 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: hoveredItem === item.label ? 1 : 0,
                            opacity: hoveredItem === item.label ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        />

                        <motion.div
                          animate={{
                            rotate: hoveredItem === item.label ? 360 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <item.icon className="h-5 w-5 relative z-10" />
                        </motion.div>

                        <span className="font-medium text-[20px] relative z-10">
                          {item.label}
                        </span>

                        <motion.div
                          className="ml-auto relative z-10"
                          animate={{
                            x: hoveredItem === item.label ? 4 : 0,
                            opacity: hoveredItem === item.label ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <AiOutlineRight className="h-4 w-4" />
                        </motion.div>
                      </motion.a>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
