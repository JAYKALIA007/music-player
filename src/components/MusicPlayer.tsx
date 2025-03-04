"use client";
import { ArrowLeftIcon } from "@/icons";
import { SongCard } from "./SongCard";
import { MusicControls } from "./MusicControls";
import { useContext, useMemo } from "react";
import { MusicPlayerContext } from "@/context/musicContext";
import { BackToHomeIndicator } from "./BakcToHomeIndicator";
import { ActionButton } from "./ActionButton";

export const MusicPlayer = () => {
  const { songs } = useContext(MusicPlayerContext);

  const renderedSongs = useMemo(
    () => songs.map((song) => <SongCard song={song} key={song.id} />),
    [songs]
  );

  const handleGoBack = () => {};

  return (
    <div className="w-full max-w-[375px] h-[800px] bg-[#091227] pt-8 mx-auto relative">
      <div className="flex flex-col gap-3 px-7">
        <ActionButton icon={<ArrowLeftIcon />} onClick={handleGoBack} />

        <section className="flex flex-col pt-4">
          <h1 className="text-2xl">Liked Songs</h1>

          {songs.length === 0 ? (
            <div className="text-gray-400 mt-5 text-center">
              No liked songs yet
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 h-[560px] overflow-y-auto no-scrollbar mt-5 pb-5">
              {renderedSongs}
            </div>
          )}
        </section>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <MusicControls />
        <BackToHomeIndicator />
      </div>
    </div>
  );
};
