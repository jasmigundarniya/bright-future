import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <header className="shadow-headerShadow">
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
          <Link href="/" className="text-theme underline underline-offset-8">
            Home
          </Link>
          <Link
            href="/course-comparison"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Course Comparison
          </Link>
          <Link
            href="/instructor"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Instructor
          </Link>
          <Link
            href="/webinar"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Webinar
          </Link>
          <Link
            href="/happy-students"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Happy Students
          </Link>
          <Link
            href="/certificate"
            className="hover:text-theme hover:underline hover:underline-offset-8 transition duration-300"
          >
            Certificate
          </Link>
        </nav>
        <Link
          href="/enrollment"
          className="bg-theme text-white text-[20px] px-4 py-2 rounded-[10px] font-normal flex items-center gap-2"
        >
          <BsArrowRight size={20} className="text-white font-semibold" />{" "}
          Enrollment
        </Link>
      </div>
    </header>
  );
};

export default Header;
