"use client";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

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
    <div className="bg-white rounded-lg shadow-md p-2">
      {/* Video */}
      <div className="relative rounded-lg overflow-hidden group">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          controls={false}
          className="w-full h-[400px] object-cover rounded-lg"
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
        <div className="absolute bottom-4 left-0 right-0 mx-5">
          <div className="flex items-center justify-between px-4 mb-2">
            <span className="text-white text-sm">{currentTime}</span>
            <span className="text-white text-sm">{duration}</span>
          </div>
          <div className="w-full h-1.5 bg-gray-300">
            <div
              className="h-1.5 bg-yellow-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 text-gray-700 text-sm">
        Your journey to a top SAT score starts here. We combine expert-led
        instruction with collaborative learning to help you master every section
        of the exam and open the door to a bright future.
      </div>
    </div>
  );
};

export default VideoSection;
