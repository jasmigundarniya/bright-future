"use client";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(false);

  // Format mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(formatTime(video.currentTime));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="px-5 container mx-auto pt-3 pb-10">
      <div className="bg-[#F5F5F5] rounded-[10px]">
        {/* Video */}
        <ScrollAnimationWrapper direction="left">
          <div className="relative rounded-lg overflow-hidden group">
            <video
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              controls={false}
              className="w-full lg:h-[609px] object-cover rounded-lg"
            >
              <source src="/videos/online-class.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play / Pause Button (only on hover) */}
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {isPlaying ? (
                <FaPause className="text-white text-4xl cursor-pointer" />
              ) : (
                <FaPlay className="text-white text-4xl ml-1 cursor-pointer" />
              )}
            </button>

            {/* Custom Progress Bar */}
            <div className="absolute bottom-4 left-0 right-0 mx-3 md:mx-7">
              <div className="w-full md:h-3 h-[3px] bg-[#D9D9D963] rounded-[25px]">
                <div
                  className="md:h-3 h-[3px] bg-theme transition-all duration-200 rounded-[25px]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white text-[13px] md:text-[20px] font-normal">
                  {currentTime}
                </span>
                <span className="text-white text-[13px] md:text-[20px] font-normal">
                  {duration}
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Description */}
        <ScrollAnimationWrapper direction="right">
          <div className="md:p-4 p-2 text-[#7E7E7E] text-[13px] md:text-[20px] font-normal">
            Your journey to a top SAT score starts here. We combine expert-led
            instruction with collaborative learning to help you master every
            section of the exam and open the door to a bright future.
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default VideoSection;
