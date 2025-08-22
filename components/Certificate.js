
import CertificateImg from "@/public/assets/certificate.png";
import Image from "next/image";

const Certificate = () => {
    return (
        <section className="px-5 py-10 container mx-auto">
            <div className="bg-white rounded-[15px] shadow-infoBoxShadow  grid xl:grid-cols-2 overflow-hidden">
                <div className="p-8">
                    <h2 className="sm:text-[45px] text-2xl  text-darkBlack font-bold mb-6">
                        Earn a Course <span className="text-theme">Certificate</span>
                    </h2>
                    <p className="text-lightGray sm:text-[20px] text-[16px] leading-7 ">
                        Upon successfully completing our SAT preparation program, you'll receive an official Certificate of Achievement that recognizes your dedication, progress, and mastery of core SAT concepts. This certificate is more than just a piece of paper it's a valuable credential you can showcase on your college applications, scholarship submissions, resumes, and even professional platforms like LinkedIn. It demonstrates your commitment to academic excellence and helps you stand out among other applicants. Whether you're aiming for admission to a top university or building your academic portfolio, our certificate adds a mark of distinction that reflects your hard work and growth throughout the course.
                    </p>
                </div>
                <div className="relative flex items-center justify-center xl:block ">
                    <div className="bg-[#FFF5E1] absolute h-[55%] xl:h-full w-full xl:w-[68%] xl:top-0 bottom-0 right-0 z-0  ">  </div>
                {/* <div className="bg-gradient-to-r from-transparent from-30% to-[#FFF5E1] to-90% "> */}
                    <div className="p-8 relative z-10">
                        <Image src={CertificateImg} alt="Certificate" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificate;

