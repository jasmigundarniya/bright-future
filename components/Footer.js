import Image from "next/image";
import logo from "@/public/svgs/logo.svg";
import FacebookSvg from "@/public/svgs/FacebookSvg";
import InstaSvg from "@/public/svgs/InstaSvg";
import LinkedInSvg from "@/public/svgs/LinkedInSvg";
import TwitterSvg from "@/public/svgs/TwitterSvg";
import Call2Svg from "@/public/svgs/Call2Svg";
import EmailSvg from "@/public/svgs/EmailSvg";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#000000] ">
      <div className="flex items-center justify-center py-5">
        <Image src={logo} alt="bright futures logo" />
      </div>
      <div className="space-y-4 py-5">
        <p className="text-darkBlack text-[20px] md:text-[25px] font-medium text-center ">
          Find Us On Social Media
        </p>
        <div className="flex items-center justify-center gap-4 ">
          <FacebookSvg />
          <InstaSvg />
          <LinkedInSvg />
          <TwitterSvg />
        </div>
      </div>
      <div className="space-y-4 text-lightGray py-5 ">
        <p className="text-darkBlack text-[20px] lg:text-[25px] font-medium text-center ">
          We're Always Happy to Help
        </p>
        <div className="flex items-center justify-center">
          <div className="flex flex-col  gap-4 ">
            <a
              href="mailto:support@abfprep.com"
              className="flex gap-2 items-center hover:text-darkBlack transition"
            >
              <EmailSvg />
              <span className="text-sm md:text-base">support@abfprep.com</span>
            </a>
            <a
              href="tel:+18680000000"
              className="flex gap-2 items-center hover:text-darkBlack transition"
            >
              <Call2Svg />
              <span className="text-sm md:text-base">+1 (868) 000-0000</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
