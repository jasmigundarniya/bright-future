import React from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";

const Webinar = () => {
  const webinarDate = new Date("2025-09-01T10:00:00");

  return (
    <div className="min-h-screen bg-[#FEF6E4] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Webinar <span className="text-yellow-500">Start In...</span>
        </h1>
        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">
            Schedule a Webinar
          </button>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow">
            Start 5 Minute Quiz
          </button>
        </div>
      </div>

      {/* Countdown */}
      <div className="flex justify-center mb-10">
        <CountdownTimer targetDate={webinarDate} />
      </div>

      {/* Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/sat-strengths.png"
            alt="SAT Prep"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <div className="p-4 font-semibold">
            Built your Strengths - SAT Prep
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/dual-tracks.png"
            alt="Dual Tracks"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <div className="p-4 font-semibold">
            Dual Tracks - Our programs option
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/sat-strengths.png"
            alt="SAT Prep"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <div className="p-4 font-semibold">Built On Your Strengths</div>
        </div>
      </div> */}
    </div>
  );
};

export default Webinar;
