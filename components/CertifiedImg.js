import Secure from "@/public/assets/secure.png";
import NortonSecure from "@/public/assets/norton.png";
import Trustwave from "@/public/assets/trustwave.png";
import Telesign from "@/public/assets/telesign.png";
import Image from "next/image";

const Certified = () => {
  return (
    <section className="container mx-auto px-5 md:mt-10 md:mb-16 mb-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 items-center justify-center bg-[#F8F8F8] py-4 rounded-[30px] px-4 md:px-8">
        <div className="flex items-center justify-center w-full px-4 border-r-2 border-[#D2D2D2] border-b-2 lg:border-b-0 h-[120px]">
          <Image src={Secure} alt="" />
        </div>
        <div className="flex items-center justify-center w-full px-4 border-r-0 lg:border-r-2 border-[#D2D2D2] border-b-2 lg:border-b-0 h-[120px]">
          <Image src={NortonSecure} alt="" />
        </div>
        <div className="flex items-center justify-center w-full px-4 border-r-2 border-[#D2D2D2] h-[120px]">
          <Image src={Trustwave} alt="" />
        </div>
        <div className="flex items-center justify-center px-4 h-[120px]">
          <Image src={Telesign} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Certified;
