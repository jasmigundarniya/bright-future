import React from "react";
import Link from "next/link";
import Image from "next/image";
import RightArrowSvg from "@/public/svgs/RightArrowSvg";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="shadow-headerShadow sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between px-5 py-[19.5px] container mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Bright Futures"
            width={109}
            height={51}
          />
        </div>
        <nav className="hidden md:flex gap-6 text-lightGray text-[20px] font-normal">
          <a href="#home" className="text-theme underline underline-offset-8">
            Home
          </a>
          <a
            href="#course-comparison"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Course Comparison
          </a>
          <a
            href="#instructor"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Instructor
          </a>
          <a
            href="#webinar"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Webinar
          </a>
          <a
            href="#happy-students"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Happy Students
          </a>
          <a
            href="#certificate"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Certificate
          </a>
        </nav>
        <Link href="/enrollment">
          <Button title="Enrollment" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
