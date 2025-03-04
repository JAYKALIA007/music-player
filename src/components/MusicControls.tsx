import { MusicPlayerContext } from "@/context/musicContext";
import { useContext } from "react";
import { MusicSlider } from "./MusicSlider";
import Image from "next/image";
import { PauseIcon, PlayIcon, SkipBackwardIcon } from "@/icons";
import { ActionButton } from "./ActionButton";

export const MusicControls = () => {
  const { currentSong, skipToPrevious, togglePlayback, skipToNext, isPlaying } =
    useContext(MusicPlayerContext);

  return (
    <>
      <MusicSlider />
      <div className="h-[75px] flex justify-between items-center pr-7">
        <div className="flex items-center gap-4">
          <Image
            src={currentSong.coverUrl}
            height={100}
            width={100}
            alt={currentSong.title}
            className="w-[72px] h-[72px] object-cover"
          />
          <div className="flex flex-col">
            <p className=" text-lg">{currentSong.title}</p>
            <p
              className="text-[#A5C0FFB2] text-[10px]"
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              {currentSong.artist}
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <ActionButton icon={<SkipBackwardIcon />} onClick={skipToPrevious} />
          <ActionButton
            icon={
              isPlaying ? (
                <PauseIcon className="h-6 w-6" />
              ) : (
                <PlayIcon className="h-6 w-6" />
              )
            }
            onClick={togglePlayback}
          />
          <ActionButton
            icon={<SkipBackwardIcon className="rotate-180" />}
            onClick={skipToNext}
          />
        </div>
      </div>
    </>
  );
};
