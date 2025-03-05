"use client";
import React, { useState, useEffect, useContext } from "react";
import { MusicPlayerContext } from "@/context/musicContext";

const SONG_DURATION = 3 * 60; // 3 minutes

export const MusicSlider = () => {
  const { currentSong, isPlaying, skipToNext } = useContext(MusicPlayerContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    if (!isPlaying) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - start) / 1000;

      const newProgress = Math.min(elapsedTime / SONG_DURATION, 1);
      setProgress(newProgress);

      if (elapsedTime >= SONG_DURATION) {
        clearInterval(timer);
        skipToNext();
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentSong, isPlaying, skipToNext]);

  return (
    <div className="relative w-full flex flex-col gap-2">
      <div className="relative w-full flex items-center">
        <div
          className="w-full h-1 bg-gray-500 relative overflow-hidden"
          role="progressbar"
        >
          <div
            className="absolute top-0 left-0 h-1 bg-white transition-all duration-200 ease-linear"
            style={{
              width: `${progress * 100}%`,
            }}
          ></div>
        </div>

        <div
          className="absolute w-4 h-4 bg-white rounded-full shadow-md transform -translate-x-1/2 transition-all duration-200 ease-linear"
          style={{
            left: `${progress * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
