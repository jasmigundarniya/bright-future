"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import left_double_quotation from "@/public/svgs/left_double_quotation.svg";
import Image from "next/image";
import H1 from "@/public/assets/hs1.png";
import H2 from "@/public/assets/hs2.png";
import H3 from "@/public/assets/hs3.png";
import H4 from "@/public/assets/hs4.png";
import H5 from "@/public/assets/hs5.png";
import H6 from "@/public/assets/hs6.png";
import kid_star from "@/public/svgs/kid_star.svg";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const review = [
  {
    head: "Score Jump + Clear Plan",
    review:
      "ABF gave us a diagnostic on day one and a weekly plan we could actually follow. My daughter moved from 980 to 1230 in 10 weeks and finally felt confident with Reading & Writing.",
    profileImg: H1,
    name: "Andrea R.",
    collage: "Parent, Chaguanas, Trinidad & Tobago",
    rating: "4.0",
  },
  {
    head: "8-Week Sprint worked",
    review:
      "I joined late and did the 8-week sprint. The drills felt exactly like the digital SAT and the math review pushed me from 540→620; total 1050→1270.",
    profileImg: H2,
    name: "Malik T.",
    collage: "Student, San Fernando, T&T",
    rating: "5.0",
  },
  {
    head: "Hybrid Weekends = Focus",
    review:
      "The weekend hub was quiet, safe, and structured—huge difference from studying at home. My son went from 900 to 1180 and we always knew what to work on next.",
    profileImg: H3,
    name: "Sheryl P.",
    collage: "Parent, Port of Spain, T&T",
    rating: "4.0",
  },
  {
    head: "Balanced School + Sport",
    review:
      "Coach built my study blocks around football practice. I ended on 1210 and already started applying to online programs with my counselor’s help.",
    profileImg: H4,
    name: "D’Andre C.",
    collage: "Student, Scarborough, Tobago",
    rating: "5.0",
  },
  {
    head: "Opened UK options",
    review:
      "CAPE wasn’t fitting our timeline. ABF showed how the SAT could unlock UK foundation programs—my daughter scored 1200 and we have three shortlists now.",
    profileImg: H5,
    name: "R. Singh",
    collage: "Parent, Bridgetown, Barbados",
    rating: "5.0",
  },

  {
    head: "Math Finally Clicked",
    review:
      "Math used to scare me. The tutor’s step-by-step approach and targeted homework raised my math from 560→640; overall 1280.",
    profileImg: H6,
    name: "Shanice J.",
    collage: "Student, Castries, St. Lucia",
    rating: "5.0",
  },
  {
    head: "Opened UK options",
    review:
      "CAPE wasn’t fitting our timeline. ABF showed how the SAT could unlock UK foundation programs—my daughter scored 1200 and we have three shortlists now.",
    profileImg: H5,
    name: "R. Singh",
    collage: "Parent, Bridgetown, Barbados",
    rating: "5.0",
  },

  {
    head: "Math Finally Clicked",
    review:
      "Math used to scare me. The tutor’s step-by-step approach and targeted homework raised my math from 560→640; overall 1280.",
    profileImg: H6,
    name: "Shanice J.",
    collage: "Student, Castries, St. Lucia",
    rating: "5.0",
  },
];

const StudentReview = () => {
  return (
    <section className="px-5 md:py-8 container mx-auto">
      <div className="flex items-center justify-between mb-[20px] ">
        <ScrollAnimationWrapper direction="left">
          <h2 className="md:text-[45px] text-[25px] text-darkBlack font-bold">
            Happy <span className="text-theme">Students</span>
          </h2>
        </ScrollAnimationWrapper>
        {/* Custom arrows */}
        <div className="flex items-center gap-4">
          <div className="custom-prev cursor-pointer border border-theme bg-theme text-white rounded-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-white hover:text-theme transition">
            <MdKeyboardArrowLeft size={38} />
          </div>
          <div className="custom-next cursor-pointer border border-theme bg-theme text-white rounded-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-white hover:text-theme transition">
            <MdKeyboardArrowRight size={35} />
          </div>
        </div>
      </div>

      <ScrollAnimationWrapper direction="right">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1, grid: { rows: 2 } },
            640: { slidesPerView: 1, grid: { rows: 2 } },
            1024: { slidesPerView: 2, grid: { rows: 2 } },
            1280: { slidesPerView: 3, grid: { rows: 2 } },
          }}
          modules={[Grid, Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
        >
          {review.map((item, i) => (
            <SwiperSlide key={i} className="p-2 !h-auto">
              <div className="rounded-[15px] bg-[#FFF] shadow-reviewBoxShadow text-[#1E1E1E] p-[22px] h-full flex flex-col justify-between gap-2">
                <div>
                  <div className="flex items-center gap-4 justify-between mb-5">
                    <Image src={left_double_quotation} alt="" />
                    <p className="leading-[22px] text-[16px]">{item.head}</p>
                  </div>

                  <p className="leading-[27px] text-[18px] mb-3">
                    {item.review}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.profileImg}
                      alt=""
                      width={60}
                      height={60}
                      className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
                    />
                    <div>
                      <h3 className="text-[20px] font-semibold mt-1">
                        {item.name}
                      </h3>
                      <p className="text-[14px] leading-[17px] font-normal">
                        {item.collage}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#EDEDED] flex items-center gap-[5px] px-1 pe-2 md:pe-[10px] md:px-[8px] rounded-[5px]">
                    <Image src={kid_star} alt="img" />
                    <span className="pt-1 md:leading-[28px] text-[12px] md:text-[18px]">
                      {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default StudentReview;
