import CertificateImg from "@/public/assets/certificate.png";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Certificate = ({ id }) => {
  return (
    <section id={id} className="px-5 py-10 container mx-auto">
      <div className="bg-white rounded-[10px] shadow-certificateShadow grid xl:grid-cols-2 items-center overflow-hidden">
        <ScrollAnimationWrapper direction="left">
          <div className="px-10 py-5">
            <h2 className="sm:text-[45px] text-2xl  text-darkBlack font-bold">
              Earn a Course <span className="text-theme">Certificate</span>
            </h2>
            <p className="text-lightGray sm:text-[20px] text-[16px] 2xl:leading-8 leading-7">
              Upon successfully completing our SAT preparation program, you'll
              receive an official Certificate of Achievement that recognizes
              your dedication, progress, and mastery of core SAT concepts. This
              certificate is more than just a piece of paper it's a valuable
              credential you can showcase on your college applications,
              scholarship submissions, resumes, and even professional platforms
              like LinkedIn. It demonstrates your commitment to academic
              excellence and helps you stand out among other applicants. Whether
              you're aiming for admission to a top university or building your
              academic portfolio, our certificate adds a mark of distinction
              that reflects your hard work and growth throughout the course.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper direction="right">
          <div className="relative flex items-center justify-center xl:block">
            <div className="bg-[#FFF5E1] absolute h-[55%] xl:h-full w-full xl:w-[68%] xl:top-0 bottom-0 right-0 z-0">
              {" "}
            </div>
            {/* <div className="bg-gradient-to-r from-transparent from-30% to-[#FFF5E1] to-90% "> */}
            <div className="p-3 relative z-10">
              <Image
                src={CertificateImg}
                alt="Certificate"
                width={623}
                height={446}
              />
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Certificate;
