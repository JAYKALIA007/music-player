"use client";
import React, { useState, useEffect, useContext } from "react";
import { MusicPlayerContext } from "@/context/musicContext";

const SONG_DURATION = 3 * 60; // 3 minutes

export const MusicSlider = () => {
  const { currentSong, isPlaying, skipToNext } = useContext(MusicPlayerContext);
  const [progress, setProgress] = useState(0);
  const startTimeRef = React.useRef<number | null>(null);
  const animationFrameRef = React.useRef<number | null>(null);

  const resetProgress = () => {
    setProgress(0);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  useEffect(() => {
    resetProgress();
    if (!isPlaying) return;

    startTimeRef.current = performance.now();

    const updateProgress = (timestamp: number) => {
      if (!startTimeRef.current) return;

      const currentElapsedTime = (timestamp - startTimeRef.current) / 1000;
      const newProgress = Math.min(currentElapsedTime / SONG_DURATION, 1);
      setProgress(newProgress);

      if (currentElapsedTime >= SONG_DURATION) {
        skipToNext();
        return;
      }

      if (isPlaying) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentSong, isPlaying, skipToNext]);

  return (
    <div className="relative w-full flex flex-col gap-2">
      <div className="relative w-full flex items-center">
        <div className="w-full h-1 bg-gray-500 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-1 bg-white transition-all duration-200 ease-linear"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>

        <div
          className="absolute w-4 h-4 bg-white rounded-full shadow-md transform -translate-x-1/2 transition-all duration-200 ease-linear"
          style={{ left: `${progress * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
